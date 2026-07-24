const fs = require('fs');
const path = require('path');

function hashPw(pw, salt) {
  let h = 2166136261 >>> 0;
  const s = salt + '|' + pw + '|hc';
  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
  }
  return h.toString(16).padStart(8, '0');
}

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
  const userTableId = tableMap['users'];
  if (!userTableId) {
    console.error('Error: Users table ID not found.');
    process.exit(1);
  }
  
  console.log('Adding Program Admin account to Teable...');
  const salt = 'demo';
  const adminUser = {
    id: 999,
    itsId: '30456117',
    name: 'Program Admin',
    role: 'admin',
    salt: salt,
    hash: hashPw('happycare123', salt),
    active: true,
    needsPasswordChange: false
  };

  // Check if user already exists
  const query = {
    conjunction: 'and',
    filterSet: [
      {
        fieldId: 'itsId',
        operator: 'is',
        value: '30456117'
      }
    ]
  };
  const searchRes = await teableRequest(`/api/table/${userTableId}/record?take=1&filter=${encodeURIComponent(JSON.stringify(query))}`);
  if (searchRes && searchRes.records && searchRes.records.length > 0) {
    console.log('Program Admin account already exists. Updating password...');
    const recordId = searchRes.records[0].id;
    await teableRequest(`/api/table/${userTableId}/record/${recordId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        record: {
          fields: adminUser
        }
      })
    });
  } else {
    console.log('Creating Program Admin account...');
    await teableRequest(`/api/table/${userTableId}/record`, {
      method: 'POST',
      body: JSON.stringify({
        records: [{ fields: adminUser }]
      })
    });
  }
  console.log('Account successfully added/updated!');
}

main().catch(err => console.error(err));
