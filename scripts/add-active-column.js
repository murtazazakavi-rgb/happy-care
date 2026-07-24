const fs = require('fs');
const path = require('path');

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
  const { TEABLE_BASE_ID, TEABLE_TABLE_MAP: tableMapRaw } = process.env;
  if (!tableMapRaw) {
    console.error('Error: Table map not loaded.');
    process.exit(1);
  }
  const tableMap = JSON.parse(tableMapRaw);
  const phasesTableId = tableMap['phases'];
  if (!phasesTableId) {
    console.error('Error: Phases table ID not found.');
    process.exit(1);
  }
  
  console.log('Checking phases table fields...');
  const fields = await teableRequest(`/api/table/${phasesTableId}/field`);
  const activeField = fields.find(f => f.name === 'active');
  
  if (activeField) {
    console.log('The "active" field already exists in the phases table.');
  } else {
    console.log('Adding "active" checkbox column to the phases table...');
    await teableRequest(`/api/table/${phasesTableId}/field`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'active',
        type: 'checkbox'
      })
    });
    console.log('Successfully added "active" column to Teable phases table!');
  }
}

main().catch(err => console.error(err));
