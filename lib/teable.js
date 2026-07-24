const TEABLE_API_URL = process.env.TEABLE_API_URL || 'https://app.teable.ai';
const TEABLE_TOKEN = process.env.TEABLE_TOKEN;
const TEABLE_BASE_ID = process.env.TEABLE_BASE_ID;
const TEABLE_TABLE_MAP_RAW = process.env.TEABLE_TABLE_MAP;

let teableDb = null;

if (TEABLE_TOKEN && TEABLE_BASE_ID && TEABLE_TABLE_MAP_RAW) {
  try {
    const tableMap = JSON.parse(TEABLE_TABLE_MAP_RAW);
    
    // Core HTTP request helper with 429 rate limit retry
    async function request(urlPath, options = {}, retries = 5) {
      const headers = {
        'Authorization': `Bearer ${TEABLE_TOKEN}`,
        'Content-Type': 'application/json',
        ...(options.headers || {})
      };
      
      const res = await fetch(`${TEABLE_API_URL}${urlPath}`, {
        ...options,
        headers
      });
      
      if (res.status === 429 && retries > 0) {
        const retryAfterHeader = res.headers.get('Retry-After');
        let waitMs = 1000;
        if (retryAfterHeader) {
          const seconds = parseFloat(retryAfterHeader);
          if (!isNaN(seconds)) {
            waitMs = (seconds * 1000) + 100;
          }
        } else {
          try {
            const clone = res.clone();
            const body = await clone.json();
            if (body && (body.retryAfter || body.retryafter)) {
              waitMs = (parseFloat(body.retryAfter || body.retryafter) * 1000) + 100;
            }
          } catch (e) {}
        }
        console.warn(`Teable API rate limit (429). Retrying after ${waitMs}ms... (Retries left: ${retries})`);
        await new Promise(resolve => setTimeout(resolve, waitMs));
        return await request(urlPath, options, retries - 1);
      }
      
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Teable API error (${res.status}) on ${urlPath}: ${errorText}`);
      }
      
      if (res.status === 204) return null;
      return await res.json();
    }

    // Paginated fetch for a table
    async function getTableRecords(tableId) {
      let records = [];
      let skip = 0;
      const take = 1000;
      let total = 0;
      
      do {
        const data = await request(`/api/table/${tableId}/record?take=${take}&skip=${skip}`);
        if (data && data.records) {
          records = records.concat(data.records.map(r => r.fields));
          total = data.total || 0;
          skip += data.records.length;
        } else {
          break;
        }
      } while (skip < total);
      
      return records;
    }

    // Find Teable internal record ID by integer id column
    async function findRecordId(tableId, intId) {
      const query = {
        conjunction: 'and',
        filterSet: [
          {
            fieldId: 'id',
            operator: 'is',
            value: Number(intId)
          }
        ]
      };
      
      const res = await request(`/api/table/${tableId}/record?take=1&filter=${encodeURIComponent(JSON.stringify(query))}`);
      if (res && res.records && res.records.length > 0) {
        return res.records[0].id;
      }
      return null;
    }

    // Adapter implementation
    teableDb = {
      // 1. Fetch all data
      async getAllData() {
        const data = {};
        for (const tableName of Object.keys(tableMap)) {
          const tableId = tableMap[tableName];
          data[tableName] = await getTableRecords(tableId);
        }
        return data;
      },

      // 2. Insert single record
      async insert(tableName, rowData) {
        const tableId = tableMap[tableName];
        if (!tableId) throw new Error(`Table ${tableName} not found in map`);
        
        // Sanitize rowData for JSON types: serialize customTimetable and items
        const sanitized = { ...rowData };
        if (sanitized.customTimetable && typeof sanitized.customTimetable !== 'string') {
          sanitized.customTimetable = JSON.stringify(sanitized.customTimetable);
        }
        if (sanitized.items && typeof sanitized.items !== 'string') {
          sanitized.items = JSON.stringify(sanitized.items);
        }

        const res = await request(`/api/table/${tableId}/record`, {
          method: 'POST',
          body: JSON.stringify({
            records: [{ fields: sanitized }]
          })
        });
        
        return res && res.records && res.records[0] ? res.records[0].fields : sanitized;
      },

      // 3. Update single record
      async update(tableName, intId, patchData) {
        const tableId = tableMap[tableName];
        if (!tableId) throw new Error(`Table ${tableName} not found in map`);
        
        const recordId = await findRecordId(tableId, intId);
        if (!recordId) {
          console.warn(`Record not found in ${tableName} for id ${intId}. Attempting insert.`);
          return await this.insert(tableName, { id: intId, ...patchData });
        }

        const sanitized = { ...patchData };
        if (sanitized.customTimetable && typeof sanitized.customTimetable !== 'string') {
          sanitized.customTimetable = JSON.stringify(sanitized.customTimetable);
        }
        if (sanitized.items && typeof sanitized.items !== 'string') {
          sanitized.items = JSON.stringify(sanitized.items);
        }

        await request(`/api/table/${tableId}/record/${recordId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            fields: sanitized
          })
        });
      },

      // 4. Remove single record
      async remove(tableName, intId) {
        const tableId = tableMap[tableName];
        if (!tableId) throw new Error(`Table ${tableName} not found in map`);
        
        const recordId = await findRecordId(tableId, intId);
        if (!recordId) {
          console.warn(`Record not found in ${tableName} for delete with id ${intId}`);
          return;
        }

        await request(`/api/table/${tableId}/record?recordIds[]=${recordId}`, {
          method: 'DELETE'
        });
      },

      // 5. Bulk restore / save all
      async saveAll(allData) {
        for (const tableName of Object.keys(tableMap)) {
          const tableId = tableMap[tableName];
          if (!tableId) continue;
          
          // A. Fetch and delete existing records in chunks of 100
          let done = false;
          while (!done) {
            const res = await request(`/api/table/${tableId}/record?take=100`);
            if (res && res.records && res.records.length > 0) {
              const recordIds = res.records.map(r => r.id);
              const queryStr = recordIds.map(id => `recordIds[]=${id}`).join('&');
              await request(`/api/table/${tableId}/record?${queryStr}`, {
                method: 'DELETE'
              });
            } else {
              done = true;
            }
          }

          // B. Bulk insert new rows in chunks of 100
          const rows = allData[tableName] || [];
          for (let i = 0; i < rows.length; i += 100) {
            const chunk = rows.slice(i, i + 100).map(row => {
              const sanitized = { ...row };
              if (sanitized.customTimetable && typeof sanitized.customTimetable !== 'string') {
                sanitized.customTimetable = JSON.stringify(sanitized.customTimetable);
              }
              if (sanitized.items && typeof sanitized.items !== 'string') {
                sanitized.items = JSON.stringify(sanitized.items);
              }
              return { fields: sanitized };
            });

            await request(`/api/table/${tableId}/record`, {
              method: 'POST',
              body: JSON.stringify({ records: chunk })
            });
          }
        }
      }
    };
    
    console.log('Teable database adapter configured successfully!');
  } catch (err) {
    console.error('Failed to parse TEABLE_TABLE_MAP environment variable:', err);
  }
} else {
  console.warn('Teable environment variables not fully set. Teable operations disabled.');
}

export { teableDb };
