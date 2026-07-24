const fs = require('fs');
const path = require('path');

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

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.\-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
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
  
  const { TEABLE_API_URL, TEABLE_TOKEN, TEABLE_BASE_ID } = process.env;
  
  if (!TEABLE_TOKEN || !TEABLE_BASE_ID) {
    console.error('Error: TEABLE_TOKEN or TEABLE_BASE_ID is not set in environment or .env');
    process.exit(1);
  }
  
  const apiBaseUrl = TEABLE_API_URL || 'https://app.teable.ai';
  process.env.TEABLE_API_URL = apiBaseUrl;

  console.log('Connecting to Teable...');
  
  let existingTables = [];
  try {
    existingTables = await teableRequest(`/api/base/${TEABLE_BASE_ID}/table`);
    console.log(`Connected! Found ${existingTables.length} existing tables in Base.`);
  } catch (error) {
    console.error('Failed to connect to Teable:', error.message);
    process.exit(1);
  }
  
  const tableMap = {};
  existingTables.forEach(t => {
    tableMap[t.name] = t.id;
  });

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

  // Update .env file
  const envContent = `TEABLE_API_URL="${apiBaseUrl}"
TEABLE_TOKEN="${TEABLE_TOKEN}"
TEABLE_BASE_ID="${TEABLE_BASE_ID}"
TEABLE_TABLE_MAP='${JSON.stringify(tableMap)}'
`;

  const envPath = path.join(__dirname, '..', '.env');
  fs.writeFileSync(envPath, envContent, 'utf8');

  console.log('\n=== Initialization Completed Successfully! ===');
  console.log('All schemas generated in Teable Base.');
}

main().catch(err => {
  console.error('Unhandled initialization error:', err);
});
