const fs = require('fs');
const path = require('path');
const postgres = require('postgres');

// Schema definitions for all 19 tables
const SCHEMAS = {
  meta: [
    { name: 'id', type: 'number' },
    { name: 'k', type: 'singleLineText' },
    { name: 'v', type: 'longText' }
  ],
  users: [
    { name: 'id', type: 'number' },
    { name: 'itsId', type: 'singleLineText' },
    { name: 'name', type: 'singleLineText' },
    { name: 'role', type: 'singleLineText' },
    { name: 'salt', type: 'singleLineText' },
    { name: 'hash', type: 'singleLineText' },
    { name: 'active', type: 'checkbox' },
    { name: 'parentId', type: 'number' },
    { name: 'staffId', type: 'number' },
    { name: 'groupId', type: 'number' },
    { name: 'needsPasswordChange', type: 'checkbox' }
  ],
  programs: [
    { name: 'id', type: 'number' },
    { name: 'name', type: 'singleLineText' },
    { name: 'year', type: 'singleLineText' }
  ],
  phases: [
    { name: 'id', type: 'number' },
    { name: 'programId', type: 'number' },
    { name: 'name', type: 'singleLineText' },
    { name: 'startDate', type: 'singleLineText' },
    { name: 'endDate', type: 'singleLineText' },
    { name: 'startTime', type: 'singleLineText' },
    { name: 'endTime', type: 'singleLineText' },
    { name: 'groupCount', type: 'number' },
    { name: 'maxPerGroup', type: 'number' }
  ],
  operatingDates: [
    { name: 'id', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'date', type: 'singleLineText' }
  ],
  venues: [
    { name: 'id', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'name', type: 'singleLineText' }
  ],
  groups: [
    { name: 'id', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'name', type: 'singleLineText' },
    { name: 'code', type: 'singleLineText' },
    { name: 'ageCategory', type: 'singleLineText' },
    { name: 'capacity', type: 'number' },
    { name: 'room', type: 'singleLineText' },
    { name: 'status', type: 'singleLineText' },
    { name: 'timetableTemplateId', type: 'number' },
    { name: 'customTimetable', type: 'longText' },
    { name: 'venueId', type: 'number' }
  ],
  children: [
    { name: 'id', type: 'number' },
    { name: 'itsId', type: 'singleLineText' },
    { name: 'name', type: 'singleLineText' },
    { name: 'dob', type: 'singleLineText' },
    { name: 'phaseId', type: 'number' },
    { name: 'active', type: 'checkbox' },
    { name: 'medicalAlert', type: 'longText' },
    { name: 'assistNote', type: 'longText' },
    { name: 'photo', type: 'longText' }
  ],
  parents: [
    { name: 'id', type: 'number' },
    { name: 'itsId', type: 'singleLineText' },
    { name: 'name', type: 'singleLineText' },
    { name: 'relationship', type: 'singleLineText' },
    { name: 'mobile', type: 'singleLineText' },
    { name: 'altMobile', type: 'singleLineText' },
    { name: 'email', type: 'singleLineText' },
    { name: 'authorisedPickup', type: 'checkbox' }
  ],
  childParent: [
    { name: 'id', type: 'number' },
    { name: 'childId', type: 'number' },
    { name: 'parentId', type: 'number' },
    { name: 'relationship', type: 'singleLineText' }
  ],
  staff: [
    { name: 'id', type: 'number' },
    { name: 'itsId', type: 'singleLineText' },
    { name: 'name', type: 'singleLineText' },
    { name: 'role', type: 'singleLineText' },
    { name: 'mobile', type: 'singleLineText' },
    { name: 'altMobile', type: 'singleLineText' },
    { name: 'phaseId', type: 'number' },
    { name: 'visibleToParents', type: 'checkbox' },
    { name: 'bankName', type: 'singleLineText' },
    { name: 'bankAccount', type: 'singleLineText' },
    { name: 'bankIfsc', type: 'singleLineText' },
    { name: 'panNumber', type: 'singleLineText' },
    { name: 'panImage', type: 'longText' },
    { name: 'chequeImage', type: 'longText' }
  ],
  groupStaff: [
    { name: 'id', type: 'number' },
    { name: 'groupId', type: 'number' },
    { name: 'slot', type: 'singleLineText' },
    { name: 'staffId', type: 'number' }
  ],
  childGroup: [
    { name: 'id', type: 'number' },
    { name: 'childId', type: 'number' },
    { name: 'groupId', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'active', type: 'checkbox' },
    { name: 'assignedAt', type: 'singleLineText' }
  ],
  timetableTemplates: [
    { name: 'id', type: 'number' },
    { name: 'name', type: 'singleLineText' },
    { name: 'ageCategory', type: 'singleLineText' },
    { name: 'items', type: 'longText' }
  ],
  childAttendance: [
    { name: 'id', type: 'number' },
    { name: 'childId', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'date', type: 'singleLineText' },
    { name: 'groupId', type: 'number' },
    { name: 'present', type: 'checkbox' },
    { name: 'checkIn', type: 'singleLineText' },
    { name: 'checkOut', type: 'singleLineText' },
    { name: 'recordedBy', type: 'singleLineText' }
  ],
  staffAttendance: [
    { name: 'id', type: 'number' },
    { name: 'staffId', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'date', type: 'singleLineText' },
    { name: 'groupId', type: 'number' },
    { name: 'role', type: 'singleLineText' },
    { name: 'status', type: 'singleLineText' },
    { name: 'replacementStaffId', type: 'singleLineText' }
  ],
  queries: [
    { name: 'id', type: 'number' },
    { name: 'parentId', type: 'number' },
    { name: 'childId', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'groupId', type: 'number' },
    { name: 'category', type: 'singleLineText' },
    { name: 'subject', type: 'singleLineText' },
    { name: 'message', type: 'longText' },
    { name: 'status', type: 'singleLineText' },
    { name: 'createdAt', type: 'singleLineText' },
    { name: 'assignedStaffId', type: 'number' }
  ],
  queryResponses: [
    { name: 'id', type: 'number' },
    { name: 'queryId', type: 'number' },
    { name: 'byName', type: 'singleLineText' },
    { name: 'message', type: 'longText' },
    { name: 'createdAt', type: 'singleLineText' }
  ],
  issues: [
    { name: 'id', type: 'number' },
    { name: 'phaseId', type: 'number' },
    { name: 'type', type: 'singleLineText' },
    { name: 'status', type: 'singleLineText' },
    { name: 'note', type: 'longText' },
    { name: 'createdAt', type: 'singleLineText' }
  ]
};

// Simple local .env parser
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.\-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let value = match[2] || '';
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[match[1]] = value;
    }
  });
}

async function teableRequest(urlPath, options = {}) {
  const headers = {
    'Authorization': `Bearer ${process.env.TEABLE_TOKEN}`,
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  const res = await fetch(`${process.env.TEABLE_API_URL}${urlPath}`, {
    ...options,
    headers
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Teable API HTTP ${res.status}: ${errText}`);
  }
  return res.status === 204 ? null : await res.json();
}

async function main() {
  loadEnv();
  
  const { DATABASE_URL, TEABLE_API_URL, TEABLE_TOKEN, TEABLE_BASE_ID } = process.env;
  
  if (!DATABASE_URL) {
    console.error('Error: DATABASE_URL is not set in your .env file.');
    process.exit(1);
  }
  if (!TEABLE_TOKEN || !TEABLE_BASE_ID) {
    console.error('Error: TEABLE_TOKEN or TEABLE_BASE_ID is not set in your .env file.');
    process.exit(1);
  }
  
  const apiBaseUrl = TEABLE_API_URL || 'https://app.teable.ai';
  process.env.TEABLE_API_URL = apiBaseUrl;

  console.log('Connecting to PostgreSQL (Neon DB)...');
  const sql = postgres(DATABASE_URL, { ssl: 'require' });
  
  // 1. Read all tables from Neon PostgreSQL
  const dbData = {};
  try {
    for (const tableName of Object.keys(SCHEMAS)) {
      console.log(`- Fetching data for table "${tableName}"...`);
      const rows = await sql`SELECT * FROM ${sql(tableName)}`;
      dbData[tableName] = rows;
      console.log(`  Fetched ${rows.length} rows.`);
    }
  } catch (error) {
    console.error('Failed to read from PostgreSQL:', error.message);
    await sql.end();
    process.exit(1);
  }
  await sql.end();
  
  console.log('\nConnecting to Teable...');
  
  // 2. Fetch current tables in Teable Base
  let existingTables = [];
  try {
    existingTables = await teableRequest(`/api/base/${TEABLE_BASE_ID}/table`);
    console.log(`Found ${existingTables.length} existing tables in Teable Base.`);
  } catch (error) {
    console.error('Failed to connect to Teable:', error.message);
    process.exit(1);
  }
  
  const tableMap = {};
  existingTables.forEach(t => {
    tableMap[t.name] = t.id;
  });

  // 3. Create missing tables and columns in Teable
  for (const tableName of Object.keys(SCHEMAS)) {
    if (tableMap[tableName]) {
      console.log(`- Table "${tableName}" already exists (ID: ${tableMap[tableName]})`);
      continue;
    }

    console.log(`- Creating Table "${tableName}"...`);
    const fields = SCHEMAS[tableName];

    try {
      const newTable = await teableRequest(`/api/base/${TEABLE_BASE_ID}/table`, {
        method: 'POST',
        body: JSON.stringify({
          name: tableName,
          fields: fields
        })
      });
      tableMap[tableName] = newTable.id;
      console.log(`  Created Table "${tableName}" with ID: ${newTable.id}`);
    } catch (e) {
      console.error(`  Error creating table "${tableName}":`, e.message);
      process.exit(1);
    }
  }

  // 4. Upload Neon DB data into Teable
  console.log('\nUploading data to Teable...');
  for (const tableName of Object.keys(SCHEMAS)) {
    const tableId = tableMap[tableName];
    const rows = dbData[tableName] || [];
    
    if (rows.length === 0) {
      console.log(`- Table "${tableName}" has no records to migrate.`);
      continue;
    }

    console.log(`- Uploading ${rows.length} records to "${tableName}"...`);
    
    // Upload in chunks of 100
    for (let i = 0; i < rows.length; i += 100) {
      const chunk = rows.slice(i, i + 100).map(row => {
        const sanitized = {};
        // Map types and convert customTimetable/items JSON back to strings
        for (const key of Object.keys(row)) {
          if (row[key] !== undefined && row[key] !== null) {
            if ((key === 'customTimetable' || key === 'items') && typeof row[key] !== 'string') {
              sanitized[key] = JSON.stringify(row[key]);
            } else {
              sanitized[key] = row[key];
            }
          }
        }
        return { fields: sanitized };
      });

      try {
        await teableRequest(`/api/table/${tableId}/record`, {
          method: 'POST',
          body: JSON.stringify({ records: chunk })
        });
      } catch (err) {
        console.error(`  Failed to upload chunk to table "${tableName}":`, err.message);
        process.exit(1);
      }
    }
    console.log(`  Uploaded all records successfully.`);
  }

  // 5. Update .env file to save table mappings
  const envContent = `DATABASE_URL="${DATABASE_URL}"
TEABLE_API_URL="${apiBaseUrl}"
TEABLE_TOKEN="${TEABLE_TOKEN}"
TEABLE_BASE_ID="${TEABLE_BASE_ID}"
TEABLE_TABLE_MAP='${JSON.stringify(tableMap)}'
`;

  const envPath = path.join(__dirname, '..', '.env');
  fs.writeFileSync(envPath, envContent, 'utf8');

  console.log('\n=== Migration Completed Successfully! ===');
  console.log('All Neon DB data has been successfully shifted to Teable!');
  console.log('Your local .env configuration has been updated.');
}

main().catch(err => {
  console.error('Unhandled migration error:', err);
});
