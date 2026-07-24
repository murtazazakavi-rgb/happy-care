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

const firsts = ['Yusuf','Fatema','Mustafa','Zainab','Husain','Sakina','Taher','Zahra','Burhanuddin','Amatullah','Ali','Ruqaiya','Abdeali','Arwa','Murtaza','Idris','Khadija','Shabbir','Rashida','Mohammed','Mariam','Khozema','Tasneem','Hatimi','Nafisa','Kutbuddin','Zoya','Safia','Taha','Khadijah'];
const lasts = ['Contractor','Zakavi','Kapadia','Chunawala','Bharmal','Fakhri','Rampura','Vasanwala','Tambawala','Merchant','Jiwanji','Godiwala','Sodawala','Lokhandwala','Halwadwala','Badri','Saifee','Kanchwala','Mithaiwala','Kagdi','Bhanpurawala','Poonawala','Dahodwala'];
const categories = ['Toddlers (2-3)','Preschool (3-4)','Kindergarten (4-5)','Prep (5-6)'];

const randEl = arr => arr[Math.floor(Math.random() * arr.length)];
const randName = () => `${randEl(firsts)} ${randEl(lasts)}`;
const randPhone = () => `+91 ${9000000000 + Math.floor(Math.random() * 1000000000)}`;

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
  const { TEABLE_API_URL, TEABLE_TOKEN, TEABLE_BASE_ID, TEABLE_TABLE_MAP: tableMapRaw } = process.env;
  
  if (!TEABLE_TOKEN || !TEABLE_BASE_ID || !tableMapRaw) {
    console.error('Error: Teable credentials not set in .env.');
    process.exit(1);
  }
  
  const tableMap = JSON.parse(tableMapRaw);
  console.log('Generating dummy data for 640 students, parents, and staff...');

  const data = {
    meta: [],
    programs: [],
    phases: [],
    operatingDates: [],
    venues: [],
    groups: [],
    timetableTemplates: [],
    staff: [],
    users: [],
    children: [],
    parents: [],
    childParent: [],
    groupStaff: [],
    childGroup: [],
    childAttendance: [],
    staffAttendance: [],
    queries: [],
    queryResponses: [],
    issues: []
  };

  // 1. Meta
  data.meta.push({ id: 1, k: 'seeded', v: 'true' });

  // 2. Programs
  data.programs.push({ id: 1, name: 'Happy Care · Istefada Ilmiyah', year: '1448' });

  // 3. Phases (Phases 1 and 3)
  data.phases.push({
    id: 1,
    programId: 1,
    name: 'Phase 1',
    startDate: '2026-07-01',
    endDate: '2026-07-10',
    startTime: '08:00',
    endTime: '13:30',
    groupCount: 10,
    maxPerGroup: 35
  });
  data.phases.push({
    id: 3,
    programId: 1,
    name: 'Phase 3',
    startDate: '2026-08-01',
    endDate: '2026-08-10',
    startTime: '08:00',
    endTime: '13:30',
    groupCount: 10,
    maxPerGroup: 35
  });

  // 4. Operating Dates
  const genDates = (sd, ed, pid) => {
    let curr = new Date(sd);
    const last = new Date(ed);
    let id = data.operatingDates.length + 1;
    while (curr <= last) {
      data.operatingDates.push({
        id: id++,
        phaseId: pid,
        date: curr.toISOString().slice(0, 10)
      });
      curr.setDate(curr.getDate() + 1);
    }
  };
  genDates('2026-07-01', '2026-07-10', 1);
  genDates('2026-08-01', '2026-08-10', 3);

  // 5. Venues
  const venuesList = [
    { id: 1, phaseId: 1, name: 'Al-Vazarat Hall' },
    { id: 2, phaseId: 1, name: 'Saifee Masjid Ground' },
    { id: 3, phaseId: 1, name: 'Maimoon School Room A' },
    { id: 4, phaseId: 1, name: 'Maimoon School Room B' },
    { id: 5, phaseId: 3, name: 'Burhani Hall' },
    { id: 6, phaseId: 3, name: 'Najmi Ground' },
    { id: 7, phaseId: 3, name: 'Ezzi School Room A' },
    { id: 8, phaseId: 3, name: 'Ezzi School Room B' }
  ];
  data.venues = venuesList;

  // 6. Timetable Templates
  data.timetableTemplates.push(
    {
      id: 1,
      name: 'Toddlers Template',
      ageCategory: 'Toddlers (2-3)',
      items: JSON.stringify([
        { start: '08:00', end: '08:30', activity: 'Arrival & Welcoming' },
        { start: '08:30', end: '09:15', activity: 'Sensory & Motor Skills Play' },
        { start: '09:15', end: '09:45', activity: 'Breakfast & Toilet Training' },
        { start: '09:45', end: '11:00', activity: 'Interactive Storytelling & Rhymes' },
        { start: '11:00', end: '12:00', activity: 'Nap Time / Quiet Rest' },
        { start: '12:00', end: '12:45', activity: 'Creative Crafting' },
        { start: '12:45', end: '13:30', activity: 'Free Play & Pickup' }
      ])
    },
    {
      id: 2,
      name: 'Preschool Template',
      ageCategory: 'Preschool (3-4)',
      items: JSON.stringify([
        { start: '08:00', end: '08:30', activity: 'Welcoming & Assemblies' },
        { start: '08:30', end: '09:30', activity: 'Basic Alphabet & Numeric Concepts' },
        { start: '09:30', end: '10:00', activity: 'Snack Break' },
        { start: '10:00', end: '11:15', activity: 'Outdoor Physical Activities' },
        { start: '11:15', end: '12:15', activity: 'Art & Building Blocks' },
        { start: '12:15', end: '13:00', activity: 'Interactive Games' },
        { start: '13:00', end: '13:30', activity: 'Closing Reflection & Pickup' }
      ])
    },
    {
      id: 3,
      name: 'Kindergarten & Prep Template',
      ageCategory: 'Kindergarten (4-5)',
      items: JSON.stringify([
        { start: '08:00', end: '08:30', activity: 'Assembly & Morning Drills' },
        { start: '08:30', end: '10:00', activity: 'Logic, Science & Math Foundation' },
        { start: '10:00', end: '10:30', activity: 'Recess & Healthy Snack' },
        { start: '10:30', end: '11:45', activity: 'Advanced Craft & Drawing' },
        { start: '11:45', end: '12:45', activity: 'Group Tasks & Presentation' },
        { start: '12:45', end: '13:30', activity: 'Tidy Up, Feedback & Departure' }
      ])
    }
  );

  // 7. Groups (10 per phase)
  const p1Names = [
    { name: 'Pistachios (2-3)', cat: 'Toddlers (2-3)', code: 'P1-T1', ttId: 1 },
    { name: 'Almonds (2-3)', cat: 'Toddlers (2-3)', code: 'P1-T2', ttId: 1 },
    { name: 'Cherries (3-4)', cat: 'Preschool (3-4)', code: 'P1-P1', ttId: 2 },
    { name: 'Peaches (3-4)', cat: 'Preschool (3-4)', code: 'P1-P2', ttId: 2 },
    { name: 'Apples (4-5)', cat: 'Kindergarten (4-5)', code: 'P1-K1', ttId: 3 },
    { name: 'Grapes (4-5)', cat: 'Kindergarten (4-5)', code: 'P1-K2', ttId: 3 },
    { name: 'Figs (5-6)', cat: 'Prep (5-6)', code: 'P1-PR1', ttId: 3 },
    { name: 'Olives (5-6)', cat: 'Prep (5-6)', code: 'P1-PR2', ttId: 3 },
    { name: 'Dates (5-6)', cat: 'Prep (5-6)', code: 'P1-PR3', ttId: 3 },
    { name: 'Raisins (5-6)', cat: 'Prep (5-6)', code: 'P1-PR4', ttId: 3 }
  ];
  const p3Names = [
    { name: 'Sprouts (2-3)', cat: 'Toddlers (2-3)', code: 'P3-T1', ttId: 1 },
    { name: 'Seedlings (2-3)', cat: 'Toddlers (2-3)', code: 'P3-T2', ttId: 1 },
    { name: 'Buds (3-4)', cat: 'Preschool (3-4)', code: 'P3-P1', ttId: 2 },
    { name: 'Blossoms (3-4)', cat: 'Preschool (3-4)', code: 'P3-P2', ttId: 2 },
    { name: 'Leaves (4-5)', cat: 'Kindergarten (4-5)', code: 'P3-K1', ttId: 3 },
    { name: 'Branches (4-5)', cat: 'Kindergarten (4-5)', code: 'P3-K2', ttId: 3 },
    { name: 'Trunks (5-6)', cat: 'Prep (5-6)', code: 'P3-PR1', ttId: 3 },
    { name: 'Roots (5-6)', cat: 'Prep (5-6)', code: 'P3-PR2', ttId: 3 },
    { name: 'Forest (5-6)', cat: 'Prep (5-6)', code: 'P3-PR3', ttId: 3 },
    { name: 'Rainforest (5-6)', cat: 'Prep (5-6)', code: 'P3-PR4', ttId: 3 }
  ];

  let gid = 1;
  p1Names.forEach((g, idx) => {
    data.groups.push({
      id: gid,
      phaseId: 1,
      name: g.name,
      code: g.code,
      ageCategory: g.cat,
      capacity: 35,
      room: `Building A, Room ${101 + idx}`,
      status: 'active',
      timetableTemplateId: g.ttId,
      venueId: (idx % 4) + 1
    });
    gid++;
  });
  p3Names.forEach((g, idx) => {
    data.groups.push({
      id: gid,
      phaseId: 3,
      name: g.name,
      code: g.code,
      ageCategory: g.cat,
      capacity: 35,
      room: `Building C, Room ${201 + idx}`,
      status: 'active',
      timetableTemplateId: g.ttId,
      venueId: (idx % 4) + 5
    });
    gid++;
  });

  // 8. Staff Pool (40 staff members)
  const staffRoles = ['teacher', 'teacher', 'supervisor', 'checkin'];
  for (let sId = 1; sId <= 40; sId++) {
    const sName = randName();
    const role = randEl(staffRoles);
    data.staff.push({
      id: sId,
      itsId: String(10000000 + sId),
      name: sName,
      role: role === 'teacher' ? 'Group Teacher' : (role === 'supervisor' ? 'Phase Supervisor' : 'Check-in Desk'),
      mobile: randPhone(),
      altMobile: randPhone(),
      phaseId: sId <= 20 ? 1 : 3,
      visibleToParents: true
    });

    // Create staff logins
    data.users.push({
      id: sId,
      itsId: String(10000000 + sId),
      name: sName,
      role: role,
      salt: 'demo',
      hash: hashPw('staff123', 'demo'),
      active: true,
      staffId: sId,
      needsPasswordChange: false
    });
  }

  // Add 1 default Admin login
  data.users.push({
    id: 1000,
    itsId: '99999999',
    name: 'Head Administrator',
    role: 'admin',
    salt: 'demo',
    hash: hashPw('admin', 'demo'),
    active: true,
    needsPasswordChange: false
  });

  // Link staff to groups (Assigning teachers & supervisors to slots)
  let gsId = 1;
  data.groups.forEach(g => {
    const phaseStaff = data.staff.filter(s => s.phaseId === g.phaseId);
    
    // Assign 1 Teacher
    const teacher = phaseStaff.find(s => s.role === 'Group Teacher' && !data.groupStaff.some(gs => gs.staffId === s.id));
    if (teacher) {
      data.groupStaff.push({
        id: gsId++,
        groupId: g.id,
        slot: 'Teacher',
        staffId: teacher.id
      });
    }

    // Assign 1 Assistant (another teacher or staff)
    const assistant = phaseStaff.find(s => (s.role === 'Group Teacher' || s.role === 'Check-in Desk') && !data.groupStaff.some(gs => gs.staffId === s.id));
    if (assistant) {
      data.groupStaff.push({
        id: gsId++,
        groupId: g.id,
        slot: 'Assistant',
        staffId: assistant.id
      });
    }
  });

  // 9. Parents (generate ~450 parents to link to 640 children)
  console.log('Generating parents and children relations...');
  const parentCount = 450;
  for (let pId = 1; pId <= parentCount; pId++) {
    const pName = randName();
    const its = String(60000000 + pId);
    data.parents.push({
      id: pId,
      itsId: its,
      name: pName,
      relationship: randEl(['Father', 'Mother']),
      mobile: randPhone(),
      altMobile: randPhone(),
      email: `${pName.toLowerCase().replace(' ', '.')}@example.com`,
      authorisedPickup: true
    });

    // Parent User Login
    data.users.push({
      id: 40 + pId, // user ID space after staff
      itsId: its,
      name: pName,
      role: 'parent',
      salt: 'demo',
      hash: hashPw('parent123', 'demo'),
      active: true,
      parentId: pId,
      needsPasswordChange: false
    });
  }

  // 10. Children (640 children split between Phase 1 and Phase 3)
  console.log('Distributing 640 children into phases and groups...');
  let childId = 1;
  let cpLinkId = 1;
  let cgLinkId = 1;

  const childAges = [
    { dob: '2023-05-15', cat: 'Toddlers (2-3)' },
    { dob: '2022-04-10', cat: 'Preschool (3-4)' },
    { dob: '2021-08-20', cat: 'Kindergarten (4-5)' },
    { dob: '2020-03-05', cat: 'Prep (5-6)' }
  ];

  // Distribute children: 320 in Phase 1, 320 in Phase 3
  const phasesToPopulate = [1, 3];
  
  phasesToPopulate.forEach(pid => {
    const phaseGroups = data.groups.filter(g => g.phaseId === pid);
    
    for (let c = 0; c < 320; c++) {
      const selectedAge = randEl(childAges);
      const cName = `${randEl(firsts)} ${randEl(lasts)}`;
      const its = String(70000000 + childId);
      
      // Select group that matches age category
      const matchedGroup = phaseGroups.find(g => g.ageCategory === selectedAge.cat) || phaseGroups[0];
      
      data.children.push({
        id: childId,
        itsId: its,
        name: cName,
        dob: selectedAge.dob,
        phaseId: pid,
        active: true,
        medicalAlert: Math.random() < 0.05 ? randEl(['Lactose intolerant', 'Asthma - carry inhaler', 'Nut allergy', 'Favism']) : '',
        assistNote: Math.random() < 0.08 ? 'Needs helper to go to toilet' : '',
        photo: ''
      });

      // Link to Parent (Each child has 1 parent from our list)
      // We cycle parents sequentially to distribute them
      const parentId = ((childId - 1) % parentCount) + 1;
      data.childParent.push({
        id: cpLinkId++,
        childId: childId,
        parentId: parentId,
        relationship: randEl(['Son', 'Daughter'])
      });

      // Link child to group
      data.childGroup.push({
        id: cgLinkId++,
        childId: childId,
        groupId: matchedGroup.id,
        phaseId: pid,
        active: true,
        assignedAt: '2026-06-25T10:00'
      });

      childId++;
    }
  });

  // Upload to Teable base
  console.log('\nResetting and saving all generated records into Teable Base...');
  
  for (const tableName of Object.keys(tableMap)) {
    const tableId = tableMap[tableName];
    if (!tableId) continue;
    
    // A. Wipe table in Teable
    console.log(` Wiping table "${tableName}"...`);
    let done = false;
    while (!done) {
      const res = await teableRequest(`/api/table/${tableId}/record?take=100`);
      if (res && res.records && res.records.length > 0) {
        const recordIds = res.records.map(r => r.id);
        const queryStr = recordIds.map(id => `recordIds[]=${id}`).join('&');
        await teableRequest(`/api/table/${tableId}/record?${queryStr}`, {
          method: 'DELETE'
        });
      } else {
        done = true;
      }
    }

    // B. Bulk insert new rows in chunks of 100
    const rows = data[tableName] || [];
    if (rows.length === 0) continue;
    
    console.log(` Uploading ${rows.length} records to "${tableName}"...`);
    for (let i = 0; i < rows.length; i += 100) {
      const chunk = rows.slice(i, i + 100).map(row => {
        const sanitized = {};
        for (const key of Object.keys(row)) {
          if (row[key] !== undefined && row[key] !== null) {
            sanitized[key] = row[key];
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
  }

  console.log('\n=== Database Generation Success! ===');
  console.log('640 students, 450 parents, and 40 staff members successfully shifted to Teable.');
}

main().catch(err => {
  console.error('Database generation error:', err);
});
