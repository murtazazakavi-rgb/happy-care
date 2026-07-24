const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Schema definitions for all 19 tables in Happy Care
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('=== Teable Base Initializer ===');
  console.log('This script will create all 19 required tables in your Teable Base.');

  const defaultUrl = process.env.TEABLE_API_URL || 'https://app.teable.ai';
  const apiUrlInput = await ask(`Teable API Base URL [${defaultUrl}]: `);
  const TEABLE_API_URL = apiUrlInput.trim() || defaultUrl;

  const defaultToken = process.env.TEABLE_TOKEN || '';
  const tokenInput = await ask(`Teable Personal Access Token [${defaultToken ? '***' : 'required'}]: `);
  const TEABLE_TOKEN = tokenInput.trim() || defaultToken;

  if (!TEABLE_TOKEN) {
    console.error('API Token is required.');
    process.exit(1);
  }

  const defaultBaseId = process.env.TEABLE_BASE_ID || '';
  const baseIdInput = await ask(`Teable Base ID (starts with bas...) [${defaultBaseId}]: `);
  const TEABLE_BASE_ID = baseIdInput.trim() || defaultBaseId;

  if (!TEABLE_BASE_ID) {
    console.error('Base ID is required.');
    process.exit(1);
  }

  rl.close();

  console.log('\nConnecting to Teable...');

  // 1. Fetch current tables in the base to avoid duplicates
  let existingTables = [];
  try {
    const res = await fetch(`${TEABLE_API_URL}/api/base/${TEABLE_BASE_ID}/table`, {
      headers: {
        'Authorization': `Bearer ${TEABLE_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`HTTP ${res.status}: ${errTxt}`);
    }

    existingTables = await res.json();
    console.log(`Connected successfully! Found ${existingTables.length} existing tables in Base.`);
  } catch (error) {
    console.error('Failed to connect to Teable:', error.message);
    process.exit(1);
  }

  const tableMap = {};
  existingTables.forEach(t => {
    tableMap[t.name] = t.id;
  });

  // 2. Loop through and create missing tables
  for (const tableName of Object.keys(SCHEMAS)) {
    if (tableMap[tableName]) {
      console.log(`- Table "${tableName}" already exists (ID: ${tableMap[tableName]})`);
      continue;
    }

    console.log(`- Creating Table "${tableName}"...`);
    const fields = SCHEMAS[tableName];

    try {
      const res = await fetch(`${TEABLE_API_URL}/api/base/${TEABLE_BASE_ID}/table`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${TEABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: tableName,
          fields: fields
        })
      });

      if (!res.ok) {
        const errTxt = await res.text();
        throw new Error(`HTTP ${res.status}: ${errTxt}`);
      }

      const newTable = await res.json();
      tableMap[tableName] = newTable.id;
      console.log(`  Created Table "${tableName}" with ID: ${newTable.id}`);
    } catch (e) {
      console.error(`  Error creating table "${tableName}":`, e.message);
      process.exit(1);
    }
  }

  // 3. Write configuration to .env file
  const envContent = `TEABLE_API_URL="${TEABLE_API_URL}"
TEABLE_TOKEN="${TEABLE_TOKEN}"
TEABLE_BASE_ID="${TEABLE_BASE_ID}"
TEABLE_TABLE_MAP='${JSON.stringify(tableMap)}'
`;

  const envPath = path.join(__dirname, '..', '.env');
  fs.writeFileSync(envPath, envContent, 'utf8');

  console.log(`\n=== Setup Complete! ===`);
  console.log(`All 19 tables created/mapped successfully.`);
  console.log(`Configuration saved to: ${envPath}`);
  console.log(`You can now run "npm run dev" to launch the application backed by Teable!`);
}

main().catch(err => {
  console.error('Unhandled script error:', err);
});
