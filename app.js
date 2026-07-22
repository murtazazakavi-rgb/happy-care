/* ICONS */
const I={
leaf:'',home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
setup:'<path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.4"/>',
group:'<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>',
child:'<circle cx="12" cy="7" r="3.4"/><path d="M6 21c0-3.6 2.7-6.4 6-6.4s6 2.8 6 6.4"/>',
report:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
people:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.6c2 .7 3.5 2.5 3.5 5"/>',
clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
cal:'<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
check:'<path d="M4 12.5 9.5 18 20 6.5"/>',checkc:'<circle cx="12" cy="12" r="9"/><path d="M8 12.3 11 15.3 16.2 9"/>',
alert:'<path d="M12 3 2.5 20h19z"/><path d="M12 10v4m0 3h.01"/>',
pin:'<path d="M12 21c4.5-4.4 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 2.5 6.6 7 11z"/><circle cx="12" cy="10" r="2.4"/>',
chev:'<path d="m9 6 6 6-6 6"/>',back:'<path d="m14 6-6 6 6 6"/>',plus:'<path d="M12 5v14M5 12h14"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>',
door:'<path d="M15 21V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v17"/><path d="M4 21h14M12 12h.01"/>',
in:'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',
out:'<path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M16 17l5-5-5-5M21 12H9"/>',
msg:'<path d="M4 5h16v11H8l-4 4z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>',
edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',trash:'<path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/>',
upload:'<path d="M12 15V4M8 8l4-4 4 4M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
download:'<path d="M12 4v11M8 11l4 4 4-4M4 19h16"/>',logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
shield:'<path d="M12 3 5 6v6c0 4.2 3 7.5 7 9 4-1.5 7-4.8 7-9V6z"/><path d="M9 12l2 2 4-4"/>',
grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
clip:'<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9zM9 11h6M9 15h4"/>',
activity:'<path d="M3 12h4l2.5 7 5-15L17 12h4"/>',lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
swap:'<path d="M4 8h13l-3-3M20 16H7l3 3"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 6-2.5 8-2.5 8h17S18 14 18 8"/><path d="M10.5 21a2 2 0 0 0 3 0"/>',
key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8 2 2-2 2 2 2-3 3-2-2"/>',phone:'<path d="M7 4h4l1 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 1v4a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 2-2z"/>',
};
function svg(n,cls){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${cls?`class="${cls}"`:''}>${I[n]||''}</svg>`}
const HC_PETALS=Array.from({length:8},(_,k)=>`<ellipse cx="60" cy="44.5" rx="3.1" ry="6" fill="#E7A6BF" transform="rotate(${k*45} 60 52)"/>`).join('');

/* ============================================================
   DATA LAYER — in-memory store persisted to localStorage
   (falls back to memory-only if storage is blocked)
   ============================================================ */
const DB={
  key:'happycare_v1', data:null, mem:false,
  tables:['users','programs','phases','operatingDates','groups','children','parents','childParent','staff','groupStaff','childGroup','timetableTemplates','childAttendance','staffAttendance','queries','queryResponses','issues','meta'],
  load(){ try{const raw=localStorage.getItem(this.key); this.data=raw?JSON.parse(raw):null;}catch(e){this.mem=true;this.data=null;}
    if(!this.data){this.data={_seq:{}}; this.tables.forEach(t=>this.data[t]=[]);} if(!this.data._seq)this.data._seq={}; },
  save(){ if(this.mem)return; try{localStorage.setItem(this.key,JSON.stringify(this.data));}catch(e){this.mem=true;toast('Storage blocked — running in memory only','err');} },
  next(t){ this.data._seq[t]=(this.data._seq[t]||0)+1; return this.data._seq[t]; },
  all(t){ return this.data[t]||[]; },
  insert(t,o){ o.id=o.id||this.next(t); this.data[t].push(o); this.save(); return o; },
  update(t,id,p){ const r=this.data[t].find(x=>x.id===id); if(r){Object.assign(r,p);this.save();} return r; },
  remove(t,id){ this.data[t]=this.data[t].filter(x=>x.id!==id); this.save(); },
  byId(t,id){ return this.data[t].find(x=>x.id===id); },
  find(t,fn){ return this.data[t].find(fn); },
  filter(t,fn){ return this.data[t].filter(fn); },
  exportJSON(){ return JSON.stringify(this.data,null,1); },
  importJSON(txt){ const d=JSON.parse(txt); if(!d._seq)throw new Error('Not a Happy Care backup'); this.data=d; this.save(); },
  wipe(){ localStorage.removeItem(this.key); this.data=null; this.load(); }
};

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function hashPw(pw,salt){let h=2166136261>>>0; const s=salt+'|'+pw+'|hc'; for(let r=0;r<3;r++){for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}} return h.toString(16).padStart(8,'0');}
function rndSalt(){return Math.floor(Math.random()*1e9).toString(36);}
function initials(n){return (n||'?').split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();}
function ageFrom(dob){ if(!dob)return ''; const d=new Date(dob),n=new Date(); let a=n.getFullYear()-d.getFullYear(); const m=n.getMonth()-d.getMonth(); if(m<0||(m===0&&n.getDate()<d.getDate()))a--; return a; }
const DOW=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(iso){ if(!iso)return '—'; const d=new Date(iso+'T00:00'); return `${DOW[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()}`; }
function fmtDateShort(iso){ const d=new Date(iso+'T00:00'); return `${d.getDate()} ${MON[d.getMonth()]}`; }
function genDates(s,e){ const out=[]; let d=new Date(s+'T00:00'), end=new Date(e+'T00:00'); while(d<=end){ out.push(d.toISOString().slice(0,10)); d.setDate(d.getDate()+1);} return out; }
function to12(t){ if(!t)return ''; let[h,m]=t.split(':').map(Number); const ap=h>=12?'PM':'AM'; h=h%12||12; return `${h}:${String(m).padStart(2,'0')} ${ap}`; }
function nowHM(){ const d=new Date(); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function toast(msg,type){ const t=$('#toast'); if(!t)return; t.className=type==='err'?'err':''; t.innerHTML=svg(type==='err'?'alert':'checkc')+esc(msg); t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; clearTimeout(window._tt); window._tt=setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)';},2100); }
function downloadFile(name,content,type){ const b=new Blob([content],{type:type||'text/plain'}); const u=URL.createObjectURL(b); const a=document.createElement('a'); a.href=u; a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(u),1500); }
function csvEscape(v){ v=v==null?'':String(v); return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; }
function toCSV(rows){ return rows.map(r=>r.map(csvEscape).join(',')).join('\r\n'); }
function exportCSV(name,header,rows){ downloadFile(name, toCSV([header,...rows]), 'text/csv'); toast('Exported '+name); }

/* ---------- roles / nav ---------- */
const ROLE_LABEL={admin:'Admin',supervisor:'Phase Supervisor',teacher:'Group Teacher',checkin:'Check-in / Pickup',parent:'Parent'};
const STAFF_NAV=[['today','Today','home'],['setup','Setup','setup'],['grouping','Grouping','group'],['children','Children','child'],['reports','Reports','report']];
const PARENT_NAV=[['p-children','My Children','child'],['p-timetable','Timetable','cal'],['p-queries','Queries','msg'],['p-account','Profile','user']];
const NAV_MAP={setup:'setup',phase:'setup',grouping:'grouping',groups:'grouping',group:'grouping',groupedit:'grouping',groupstaff:'grouping',timetables:'grouping',children:'children',child:'children','import-students':'children',reports:'reports','attendance-child':'today','attendance-staff':'today',checkin:'today',checkout:'today',queries:'today',closing:'today',phaseclosing:'today',today:'today',
  'p-children':'p-children','p-profile':'p-children','p-raise':'p-queries','p-timetable':'p-timetable','p-queries':'p-queries','p-account':'p-account'};

/* ---------- app state ---------- */
const state={route:'today',params:{},userId:null,phaseId:null,dateISO:null};
function currentUser(){ return DB.byId('users',state.userId); }
function currentPhase(){ return DB.byId('phases',state.phaseId)||DB.all('phases')[0]; }
function phaseDates(pid){ return DB.filter('operatingDates',d=>d.phaseId===pid).map(d=>d.date).sort(); }
function go(route,params){ state.route=route; state.params=params||{}; window.scrollTo(0,0); render(); }
function setPhase(pid){ state.phaseId=pid; const ds=phaseDates(pid); state.dateISO=ds.includes(todayISO())?todayISO():(ds[0]||todayISO()); render(); }
function setDate(iso){ state.dateISO=iso; render(); }

/* ---------- auth ---------- */
function login(itsId,pw){ const u=DB.find('users',x=>x.itsId===itsId.trim()); if(!u)return{ok:false,msg:'No account with that ITS ID'}; if(u.hash!==hashPw(pw,u.salt))return{ok:false,msg:'Incorrect password'}; if(u.active===false)return{ok:false,msg:'Account is inactive'}; state.userId=u.id; localStorage.setItem('hc_session',u.id); const p=DB.all('phases')[0]; if(p)setPhaseSilent(p.id); return{ok:true,user:u}; }
function setPhaseSilent(pid){ state.phaseId=pid; const ds=phaseDates(pid); state.dateISO=ds.includes(todayISO())?todayISO():(ds[0]||todayISO()); }
function logout(){ state.userId=null; try{localStorage.removeItem('hc_session');}catch(e){} state.route='today'; render(); }
function restoreSession(){ try{const id=Number(localStorage.getItem('hc_session')); if(id&&DB.byId('users',id)){state.userId=id;}}catch(e){} }

/* ---------- linked data helpers ---------- */
function childParents(childId){ return DB.filter('childParent',l=>l.childId===childId).map(l=>({link:l,parent:DB.byId('parents',l.parentId)})).filter(x=>x.parent); }
function parentChildren(parentId){ return DB.filter('childParent',l=>l.parentId===parentId).map(l=>DB.byId('children',l.childId)).filter(Boolean); }
function childGroupId(childId,phaseId){ const a=DB.find('childGroup',x=>x.childId===childId&&x.phaseId===phaseId&&x.active); return a?a.groupId:null; }
function groupChildren(groupId){ return DB.filter('childGroup',x=>x.groupId===groupId&&x.active).map(x=>DB.byId('children',x.childId)).filter(Boolean); }
function groupStaffList(groupId){ return DB.filter('groupStaff',x=>x.groupId===groupId); }
function attRec(childId,dateISO){ return DB.find('childAttendance',a=>a.childId===childId&&a.date===dateISO); }
function phaseChildren(phaseId){ return DB.filter('children',c=>c.phaseId===phaseId); }
function phaseGroups(phaseId){ return DB.filter('groups',g=>g.phaseId===phaseId); }
const STAFF_SLOTS=['Main Teacher','Assistant Teacher 1','Assistant Teacher 2','Assistant Teacher 3','Talebaat 1','Talebaat 2','Maid 1','Maid 2'];
const REQUIRED_SLOTS=['Main Teacher','Assistant Teacher 1','Assistant Teacher 2','Assistant Teacher 3','Talebaat 1','Talebaat 2','Maid 1','Maid 2'];

function groupReadiness(g){
  const miss=[];
  if(!g.name) miss.push('Group name');
  if(!g.capacity) miss.push('Capacity');
  if(groupChildren(g.id).length===0) miss.push('Students assigned');
  const gs=groupStaffList(g.id); const filled=r=>gs.some(x=>x.slot===r&&x.staffId);
  if(!filled('Main Teacher')) miss.push('Main Teacher');
  REQUIRED_SLOTS.forEach(r=>{ if(r!=='Main Teacher'&&!filled(r)) miss.push(r); });
  if(!g.timetableTemplateId&&!(g.customTimetable&&g.customTimetable.length)) miss.push('Timetable');
  if(!g.room) miss.push('Room / area');
  return {ready:miss.length===0, miss};
}
function groupTimetable(g){ if(g.customTimetable&&g.customTimetable.length)return g.customTimetable; const t=DB.byId('timetableTemplates',g.timetableTemplateId); return t?t.items:[]; }

/* ============================================================
   SEED
   ============================================================ */
function seed(){
  if(DB.all('meta').length) return;
  DB.insert('meta',{k:'seeded',v:true});
  const acc=(itsId,name,role,pw,extra)=>{const salt=rndSalt();return DB.insert('users',Object.assign({itsId,name,role,salt,hash:hashPw(pw,salt),active:true,needsPasswordChange:true},extra||{}));};
  acc('30456117','Program Admin','admin','happycare123');
  acc('30456117','Super Admin','admin','happycare123');
  acc('10000002','Zainab Kanchwala','supervisor','happycare123');
  const prog=DB.insert('programs',{name:'Happy Care · Istefada Ilmiyah',year:'1448'});
  const ph=DB.insert('phases',{programId:prog.id,name:'Phase 1',startDate:'2026-08-01',endDate:'2026-08-05',startTime:'08:00',endTime:'13:30',groupCount:10,maxPerGroup:35});
  genDates(ph.startDate,ph.endDate).forEach(d=>DB.insert('operatingDates',{phaseId:ph.id,date:d}));
  // timetable templates
  const tt36=DB.insert('timetableTemplates',{name:'Age 3–6 Timetable',ageCategory:'3–6',items:[
    {start:'08:00',end:'08:30',activity:'Arrival and Settling',location:'Group Room'},{start:'08:30',end:'09:00',activity:'Breakfast',location:'Dining Hall'},
    {start:'09:00',end:'09:45',activity:'Play and Learning',location:'Activity Room'},{start:'09:45',end:'10:15',activity:'Washroom and Snack'},
    {start:'10:15',end:'11:00',activity:'Creative Activity',location:'Activity Room'},{start:'11:00',end:'11:45',activity:'Story and Quiet Time'},
    {start:'11:45',end:'12:30',activity:'Lunch',location:'Dining Hall'},{start:'12:30',end:'13:15',activity:'Group Activity'},{start:'13:15',end:'13:30',activity:'Pickup Preparation'}]});
  const tt710=DB.insert('timetableTemplates',{name:'Age 7–10 Timetable',ageCategory:'7–10',items:[
    {start:'08:00',end:'08:20',activity:'Arrival'},{start:'08:20',end:'09:00',activity:'Breakfast',location:'Dining Hall'},
    {start:'09:00',end:'10:00',activity:'Learning Session',location:'Classroom'},{start:'10:00',end:'10:30',activity:'Break'},
    {start:'10:30',end:'11:30',activity:'Activity Session',location:'Activity Room'},{start:'11:30',end:'12:15',activity:'Group Challenge'},
    {start:'12:15',end:'12:50',activity:'Lunch',location:'Dining Hall'},{start:'12:50',end:'13:20',activity:'Reflection or Recreation'},{start:'13:20',end:'13:30',activity:'Pickup Preparation'}]});
  // staff pool
  const firstF=['Fatema','Sakina','Zainab','Mariya','Alefiya','Tasneem','Batul','Husaina','Rukaiya','Nafisa','Sugra','Kulsum','Shirin','Amena','Rashida','Insiya'];
  const last=['Saify','Kanchwala','Rangwala','Lokhandwala','Poonawala','Bandukwala','Shakir','Moiz','Najmi','Contractor'];
  const staffRoles=['Main Teacher','Assistant Teacher','Assistant Teacher','Assistant Teacher','Talebaat','Talebaat','Maid','Maid'];
  let staffPool=[];
  for(let i=0;i<26;i++){ const nm=firstF[i%firstF.length]+' '+last[i%last.length]; const s=DB.insert('staff',{itsId:'3000'+String(1001+i),name:nm,role:staffRoles[i%staffRoles.length],mobile:'98'+String(70000000+i*137).slice(0,8),phaseId:ph.id,visibleToParents:true}); staffPool.push(s);}
  // one teacher login linked to first Main Teacher of group 1 (set later)
  // groups
  const names=['Little Stars','Bloom Group','Crescent Group','Sunflowers','Meadow Group','Group F','Group G','Group H','Group I','Group J'];
  const groups=[];
  for(let i=0;i<10;i++){ const cat=i<5?'3–6':'7–10'; const g=DB.insert('groups',{phaseId:ph.id,name:names[i],code:'G'+String(i+1).padStart(2,'0'),ageCategory:cat,capacity:35,room:i<7?['Prayer Hall','Garden Lawn','Room 3','Activity Room','Dining Hall','Room 6','Play Area'][i]:'',status:'draft',timetableTemplateId:i<8?(cat==='3–6'?tt36.id:tt710.id):null}); groups.push(g); }
  // children
  const cF=['Aamena','Fatema','Zahra','Sakina','Batul','Maryam','Ruqaiya','Insiyah','Alefiya','Husaina','Tasneem','Nafisa'];
  const cM=['Yusuf','Murtaza','Taha','Hussain','Ali','Idris','Abbas','Ammar','Qaid','Burhanuddin','Shabbir','Moiz'];
  const cLast=['Tahera','Zainuddin','Husain','Abbas','Shakir','Moiz','Qaid','Ammar','Najmi','Saify','Contractor','Rangwala'];
  let kids=[]; let itsc=5000001;
  for(let i=0;i<44;i++){ const boy=i%2===0; const nm=(boy?cM:cF)[i%12]+' '+cLast[i%cLast.length]; const yrs=3+(i%8); const dob=(2026-yrs)+'-0'+(1+i%9)+'-1'+(i%9);
    const c=DB.insert('children',{itsId:String(itsc++),name:nm,dob,phaseId:ph.id,active:true, medicalAlert:i%13===0?'Nut allergy':(i%17===0?'Inhaler required':''), assistNote:i%19===0?'Needs calm space':''}); kids.push(c); }
  // parents + links (create ~24 parents, some with siblings)
  let pits=6000001; let parents=[];
  for(let i=0;i<kids.length;i++){ const k=kids[i];
    if(i%2===0){ const p=DB.insert('parents',{itsId:String(pits++),name:'Parent of '+k.name.split(' ')[0],relationship:'Father',mobile:'97'+String(60000000+i*211).slice(0,8),authorisedPickup:true}); parents.push(p); DB.insert('childParent',{childId:k.id,parentId:p.id,relationship:'Father'});
      if(i+1<kids.length){ DB.insert('childParent',{childId:kids[i+1].id,parentId:p.id,relationship:'Father'}); } // sibling link
    }
  }
  // assign first ~32 children to first 4 groups (age-appropriate-ish)
  kids.forEach((k,idx)=>{ if(idx<32){ const g=groups[Math.floor(idx/8)]; DB.insert('childGroup',{childId:k.id,groupId:g.id,phaseId:ph.id,active:true,assignedAt:'2026-07-28'}); } });
  // staff-assign groups 1-3 fully, group 4 partial
  function assignGroupStaff(g,pool,full){ STAFF_SLOTS.forEach((slot,si)=>{ if(!full&&si>=6)return; const s=pool.shift(); if(s)DB.insert('groupStaff',{groupId:g.id,slot,staffId:s.id}); }); }
  let pool=[...staffPool];
  assignGroupStaff(groups[0],pool,true); assignGroupStaff(groups[1],pool,true); assignGroupStaff(groups[2],pool,true); assignGroupStaff(groups[3],pool,false);
  groups.forEach(g=>{ const r=groupReadiness(g); DB.update('groups',g.id,{status:r.ready?'ready':'draft'}); });
  // teacher account = main teacher of group 1
  const g1main=DB.find('groupStaff',x=>x.groupId===groups[0].id&&x.slot==='Main Teacher'); const mstaff=g1main&&DB.byId('staff',g1main.staffId);
  if(mstaff){ acc(mstaff.itsId,mstaff.name,'teacher','happycare123',{staffId:mstaff.id,groupId:groups[0].id}); }
  acc('10000004','Check-in Desk','checkin','happycare123');
  // demo parent account: link to a parent with 2 children in a group + attendance + query
  const demoLink=DB.find('childParent',l=>{ const sibs=DB.filter('childParent',x=>x.parentId===l.parentId); return sibs.length>=2 && sibs.every(s=>childGroupId(s.childId,ph.id)); });
  let demoParent;
  if(demoLink){ demoParent=DB.byId('parents',demoLink.parentId); }
  else { demoParent=parents.find(p=>parentChildren(p.id).some(c=>childGroupId(c.id,ph.id))) || parents[0]; }
  DB.update('parents',demoParent.id,{name:'Sakina Ali',mobile:'9820011234'});
  acc(demoParent.itsId,'Sakina Ali','parent','happycare123',{parentId:demoParent.id});
  window.__demoParentITS=demoParent.itsId;
  // seed attendance for demo parent's children on first date + a query
  const d0=phaseDates(ph.id)[0];
  parentChildren(demoParent.id).forEach((c,i)=>{ const gid=childGroupId(c.id,ph.id); if(gid){ DB.insert('childAttendance',{childId:c.id,phaseId:ph.id,date:d0,groupId:gid,present:true,checkIn:'08:12',checkOut:i===0?'13:20':'',recordedBy:'Check-in Desk'}); } });
  const dc=parentChildren(demoParent.id)[0];
  if(dc){ const q=DB.insert('queries',{parentId:demoParent.id,childId:dc.id,phaseId:ph.id,groupId:childGroupId(dc.id,ph.id),category:'Timetable',subject:'Snack timing question',message:'Is there a nut-free snack option during the morning break?',status:'Responded',createdAt:'2026-08-01T09:15'});
    DB.insert('queryResponses',{queryId:q.id,byName:'Program Admin',message:'Yes — all snacks in the 3–6 groups are nut-free. Your child’s allergy note is with the Main Teacher.',createdAt:'2026-08-01T10:02'}); }
}

/* ============================================================
   SHELL / ROUTER / MODAL
   ============================================================ */
const SCREENS={};
function render(){
  const u=currentUser();
  if(u && u.needsPasswordChange){
    $('#app').innerHTML = renderChangePasswordScreen(u);
    return;
  }
  if(!u){ $('#app').innerHTML=SCREENS.login(); wireLogin(); return; }
  const isParent=u.role==='parent';
  const nav=isParent?PARENT_NAV:STAFF_NAV;
  const activeNav=NAV_MAP[state.route]||(isParent?'p-children':'today');
  let route=state.route;
  if(!SCREENS[route]) route=isParent?'p-children':'today';
  // guard: parents only on p-* ; staff not on p-*
  if(isParent&&!route.startsWith('p-')) route='p-children';
  if(!isParent&&route.startsWith('p-')) route='today';
  const scr=SCREENS[route]?SCREENS[route](state.params):{html:'<div class="empty">Not found</div>'};
  const showCtx=!isParent&&['today','grouping','children','groups','attendance-child','attendance-staff','checkin','checkout','closing'].includes(route);
  $('#app').innerHTML=`
    <header class="appbar">
      <div class="tt"><div class="ey">Happy Care · Istefada Ilmiyah</div><h1>${esc(scr.title||'Happy Care')}</h1></div>
      <div class="who"><button class="iconbtn" onclick="openMenu()" title="Menu">${svg('list')}</button>
        <button class="av" onclick="go(isParent?'p-account':'staff-profile')">${initials(u.name)}</button></div>
    </header>
    <div class="wrap">
      ${showCtx?ctxbar(['today','attendance-child','checkin','checkout','closing'].includes(route)):''}
      ${scr.html}
    </div>
    <nav class="bottomnav">${nav.map(n=>`<button class="${activeNav===n[0]?'on':''}" onclick="go('${n[0]}')"><span class="ic">${svg(n[2])}</span>${n[1]}</button>`).join('')}</nav>`;
  if(scr.after)scr.after();
}
function ctxbar(showDate){
  const phs=DB.all('phases'); const ph=currentPhase();
  const ds=ph?phaseDates(ph.id):[];
  return `<div class="ctxbar">
    <span class="pill">${svg('cal')}<select onchange="setPhase(Number(this.value))">${phs.map(p=>`<option value="${p.id}" ${p.id===(ph&&ph.id)?'selected':''}>${esc(p.name)}</option>`).join('')}</select></span>
    ${showDate&&ds.length?`<span class="pill">${svg('clock')}<select onchange="setDate(this.value)">${ds.map(d=>`<option value="${d}" ${d===state.dateISO?'selected':''}>${fmtDateShort(d)}</option>`).join('')}</select></span>`:''}
    ${ph?`<span class="pill" style="color:var(--ink-faint)">${to12(ph.startTime)}–${to12(ph.endTime)}</span>`:''}
    ${showDate?`<span class="pill"><span class="live"></span>${state.dateISO===todayISO()?'Today':'Selected'}</span>`:''}
  </div>`;
}
function openMenu(){
  const u=currentUser();
  openModal('Menu',`
    <div class="row" style="margin-bottom:12px"><div class="av" style="background:var(--gold-100);color:var(--gold)">${initials(u.name)}</div>
      <div class="meta"><div class="nm">${esc(u.name)}</div><div class="sm">${ROLE_LABEL[u.role]} · ITS ${esc(u.itsId)}</div></div></div>
    <div class="stack">
      ${u.role==='admin'?`
      <button class="btn ghost block" onclick="closeModal();backupData()">${svg('download')} Backup all data (JSON)</button>
      <button class="btn ghost block" onclick="closeModal();restoreData()">${svg('upload')} Restore from backup</button>
      <button class="btn ghost block" onclick="resetDemo()">${svg('swap')} Reset demo data</button>
      `:''}
      <button class="btn dark block" onclick="closeModal();logout()">${svg('logout')} Sign out</button>
    </div>
    ${DB.mem?'<div class="banner warn" style="margin-top:12px"><div class="bi">'+svg('alert')+'</div><div><b>Running in memory only</b><p>Browser storage is blocked here. Open the downloaded file directly in a browser to save data, and use Backup to keep a copy.</p></div></div>':''}`);
}
function backupData(){ downloadFile('happy-care-backup-'+todayISO()+'.json',DB.exportJSON(),'application/json'); toast('Backup downloaded'); }
function restoreData(){ const inp=document.createElement('input'); inp.type='file'; inp.accept='.json,application/json'; inp.onchange=e=>{ const f=e.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=()=>{ try{DB.importJSON(r.result); toast('Data restored'); const p=DB.all('phases')[0]; if(p)setPhaseSilent(p.id); render();}catch(err){toast('Invalid backup file','err');} }; r.readAsText(f); }; inp.click(); }
function resetDemo(){ if(!confirm('Reset all data back to the demo seed? This cannot be undone.'))return; DB.wipe(); seed(); toast('Demo data reset'); const p=DB.all('phases')[0]; setPhaseSilent(p.id); closeModal(); render(); }

/* modal */
function openModal(title,body,footer){ $('#modal-root').innerHTML=`<div class="overlay" onclick="if(event.target===this)closeModal()"><div class="modal"><div class="modal-h"><h3>${esc(title)}</h3><button class="xbtn" onclick="closeModal()">${svg('x')}</button></div><div class="modal-b">${body}</div>${footer?`<div class="modal-f">${footer}</div>`:''}</div></div>`; }
function closeModal(){ $('#modal-root').innerHTML=''; }

/* ============================================================
   LOGIN
   ============================================================ */
let loginMode='staff';
SCREENS.login=function(){
  return `<div class="login"><div class="login-card">
    <div class="eyebrow" style="text-align:center;letter-spacing:0.18em;margin-bottom:4px;color:var(--gold);font-weight:700">ISTEFADA ILMIYAH</div>
    <h1 style="font-size:38px;font-weight:700;color:var(--wine);text-align:center;line-height:1;margin-bottom:2px;letter-spacing:-0.02em">Happy Care</h1>
    <div style="text-align:center;font-size:12.5px;color:var(--ink-soft);margin:4px 0 20px;font-style:italic">An initiative by Daeratul Aqeeq</div>
    <div class="seg"><button id="lm-staff" class="${loginMode==='staff'?'on':''}" onclick="setLoginMode('staff')">Staff</button><button id="lm-parent" class="${loginMode==='parent'?'on':''}" onclick="setLoginMode('parent')">Parent</button></div>
    <div class="field"><label>${loginMode==='parent'?'Parent ITS ID':'ITS ID'}</label><input class="control" id="li-its" inputmode="numeric" placeholder="e.g. ${loginMode==='parent'?(window.__demoParentITS||'6000001'):'30456117'}" style="transition:transform 0.15s ease"></div>
    <div class="field"><label>Password</label><input class="control" id="li-pw" type="password" placeholder="Enter password" style="transition:transform 0.15s ease"></div>
    <button class="btn block lg" id="li-go" style="margin-top:6px">${svg('key')} Sign in</button>
    <div style="text-align:center;margin-top:14px"><button class="linkbtn" style="font-size:12.5px;color:var(--ink-soft);font-weight:600;display:inline-flex;align-items:center;gap:5px" onclick="openForgotPassword()">${svg('lock')} Forgot password?</button></div>
    
    <div class="demo-accounts-grid">
      <div style="font-size:10px;font-weight:800;color:var(--ink-faint);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:9px;text-align:center">Quick Sandbox Logins</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <button class="demo-badge-btn" onclick="fillQuickLogin('30456117','happycare123')">🔑 Admin</button>
        <button class="demo-badge-btn" onclick="fillQuickLogin('10000002','happycare123')">🛡️ Supervisor</button>
        <button class="demo-badge-btn" onclick="fillQuickLogin('${window.__demoParentITS||'6000001'}','happycare123')">👨‍👩‍👦 Parent</button>
        <button class="demo-badge-btn" onclick="fillQuickLogin('10000004','happycare123')">🎟️ Check-In</button>
      </div>
    </div>
  </div></div>`;
};
function setLoginMode(m){ loginMode=m; render(); }
function wireLogin(){
  const doLogin=()=>{ const its=$('#li-its').value, pw=$('#li-pw').value; if(!its||!pw){toast('Enter ITS ID and password','err');return;} const r=login(its,pw); if(!r.ok){toast(r.msg,'err');return;} if(r.user.role==='parent')state.route='p-children'; else state.route='today'; render(); };
  $('#li-go').onclick=doLogin;
  $('#li-pw').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  $('#li-its').addEventListener('keydown',e=>{if(e.key==='Enter')$('#li-pw').focus();});
}

/* ============================================================
   TODAY DASHBOARD
   ============================================================ */
SCREENS.today=function(){
  const u=currentUser(); const ph=currentPhase();
  if(!ph) return {title:'Today',html:emptyState('setup','No phase yet','Create a program and phase in Setup to begin.',`<button class="btn" onclick="go('setup')">${svg('plus')} Go to Setup</button>`)};
  const date=state.dateISO; const groups=phaseGroups(ph.id);
  const kids=phaseChildren(ph.id);
  const assigned=kids.filter(c=>childGroupId(c.id,ph.id));
  const unassigned=kids.length-assigned.length;
  const att=DB.filter('childAttendance',a=>a.phaseId===ph.id&&a.date===date);
  const present=att.filter(a=>a.present).length;
  const inside=att.filter(a=>a.present&&!a.checkOut).length;
  const ready=groups.filter(g=>groupReadiness(g).ready).length;
  const staffAssigned=DB.filter('groupStaff',x=>groups.some(g=>g.id===x.groupId)&&x.staffId).length;
  const satt=DB.filter('staffAttendance',a=>a.phaseId===ph.id&&a.date===date&&a.status==='present').length;
  const staffPresent=satt||staffAssigned;
  const issues=DB.filter('issues',i=>i.phaseId===ph.id&&i.status!=='closed').length;
  const oQ=DB.filter('queries',q=>q.phaseId===ph.id&&q.status!=='Closed').length;
  const canTeacher=u.role==='teacher';
  const gShown=canTeacher?groups.filter(g=>g.id===u.groupId):groups;
  const quick=[['checkin','Check-in','in'],['checkout','Check-out','out'],['attendance-child','Attendance','clip'],['queries','Queries','msg'],['attendance-staff','Staff','people'],['closing','Daily Closing','door']];
  return {title:'Today', after:()=>{}, html:`
    <div class="banner ${issues||unassigned?'warn':'ok'}"><div class="bi">${svg('shield')}</div>
      <div><b>${fmtDate(date)}</b><p>${ph.name} · ${to12(ph.startTime)}–${to12(ph.endTime)} · ${present} present · ${inside} still inside</p></div></div>
    <div class="tiles t5" style="margin-top:14px">
      <div class="tile g"><span class="strip"></span><div class="tl">${svg('child')}Children present</div><div class="num tnum">${present}<small>/${assigned.length}</small></div><div class="sub">${inside} still inside</div></div>
      <div class="tile b"><span class="strip"></span><div class="tl">${svg('people')}Staff present</div><div class="num tnum">${staffPresent}</div><div class="sub">${staffAssigned} assigned</div></div>
      <div class="tile"><span class="strip"></span><div class="tl">${svg('checkc')}Groups ready</div><div class="num tnum">${ready}<small>/${groups.length}</small></div><div class="sub">tap a group</div></div>
      <div class="tile ${unassigned?'w':'g'}"><span class="strip"></span><div class="tl">${svg('alert')}Unassigned</div><div class="num tnum">${unassigned}</div><div class="sub">children</div></div>
      <div class="tile gold"><span class="strip"></span><div class="tl">${svg('msg')}Open queries</div><div class="num tnum">${oQ}</div><div class="sub">${issues} issues</div></div>
    </div>
    <div class="sec-h"><h3>Quick actions</h3></div>
    <div class="grid g3" style="grid-template-columns:repeat(3,1fr)">
      ${quick.map(q=>`<button class="card" style="display:flex;flex-direction:column;align-items:center;gap:7px;text-align:center;padding:14px 8px" onclick="go('${q[0]}')"><span style="width:40px;height:40px;border-radius:12px;background:var(--wine-100);color:var(--wine);display:grid;place-items:center">${svg(q[2])}</span><span style="font-size:12px;font-weight:700">${q[1]}</span></button>`).join('')}
    </div>
    <div class="sec-h"><h3>${canTeacher?'My group':'All groups'}</h3><span class="hint">${ready}/${groups.length} ready</span></div>
    <div class="grid g2">${gShown.map(g=>todayGroupCard(g,date)).join('')||emptyState('group','No groups yet','Create groups in Grouping.','')}</div>`};
};
function todayGroupCard(g,date){
  const r=groupReadiness(g); const kids=groupChildren(g.id);
  const pres=DB.filter('childAttendance',a=>a.groupId===g.id&&a.date===date&&a.present).length;
  const gs=groupStaffList(g.id).filter(x=>x.staffId).length;
  const tt=g.timetableTemplateId?DB.byId('timetableTemplates',g.timetableTemplateId):null;
  return `<button class="gcard s-${r.ready?'ok':'warn'}" onclick="go('group',{id:${g.id}})">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><div><h4>${esc(g.name)}</h4><div class="gm">${esc(g.code)} · Age ${esc(g.ageCategory)} · ${esc(g.room||'No room')}</div></div>${r.ready?'<span class="chip ok">'+svg('check')+'Ready</span>':'<span class="chip warn">'+svg('alert')+'Incomplete</span>'}</div>
    <div class="gstats">
      <div class="gs"><div class="k">Students</div><div class="v tnum">${kids.length}<small>/${g.capacity}</small></div></div>
      <div class="gs"><div class="k">Present</div><div class="v tnum">${pres}</div></div>
      <div class="gs"><div class="k">Staff</div><div class="v tnum">${gs}<small>/8</small></div></div>
      <div class="gs"><div class="k">Timetable</div><div class="v" style="font-size:12px">${tt?esc(tt.ageCategory):(g.customTimetable&&g.customTimetable.length?'Custom':'—')}</div></div>
    </div></button>`;
}
function emptyState(icon,title,text,action){ return `<div class="empty"><div class="ei">${svg(icon)}</div><b>${esc(title)}</b><p>${esc(text)}</p>${action?'<div style="margin-top:14px">'+action+'</div>':''}</div>`; }


/* ---------- next module ---------- */


/* ============================================================
   FORM HELPERS
   ============================================================ */
function val(id){const e=$('#'+id);return e?String(e.value).trim():'';}
function rawval(id){const e=$('#'+id);return e?e.value:'';}
function checked(id){const e=$('#'+id);return e?e.checked:false;}
function subhead(title,sub,backRoute,backParams){return `<div class="page-h" style="display:flex;align-items:center;gap:11px">${backRoute?`<button class="iconbtn" onclick="go('${backRoute}',${backParams?JSON.stringify(backParams):'{}'})">${svg('back')}</button>`:''}<div><h2>${esc(title)}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div></div>`;}
function requireAdmin(){const u=currentUser();return u.role==='admin';}

/* ============================================================
   SETUP  (Program + Phases)
   ============================================================ */
SCREENS.setup=function(){
  const u=currentUser(); const prog=DB.all('programs')[0]; const phs=DB.all('phases');
  const ph=currentPhase();
  const staff=ph ? DB.filter('staff', s=>s.phaseId===ph.id).sort((a,b)=>a.name.localeCompare(b.name)) : [];
  return {title:'Setup', html:`
    ${u.role!=='admin'?'<div class="banner info"><div class="bi">'+svg('shield')+'</div><div><b>View only</b><p>Only Admin can change program setup.</p></div></div>':''}
    <div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><div class="eyebrow">Program</div><div class="serif" style="font-size:22px;font-weight:700;color:var(--wine)">${esc(prog?prog.name:'—')}</div><div class="muted" style="font-size:12px">Hijri year ${esc(prog?prog.year:'—')}</div></div>${u.role==='admin'?`<button class="btn ghost sm" onclick="editProgram()">${svg('edit')} Edit</button>`:''}</div></div>
    <div class="sec-h"><h3>Phases</h3>${u.role==='admin'?`<button class="btn sm" onclick="editPhase(0)">${svg('plus')} Add phase</button>`:''}</div>
    <div class="stack">${phs.map(p=>phaseCard(p,u)).join('')||emptyState('cal','No phases yet','Add a phase to generate operating dates.','')}</div>
    
    <div class="sec-h" style="margin-top:28px"><h3>Staff Members Pool</h3>${u.role==='admin'?`<button class="btn sm" onclick="openStaffForm(0)">${svg('plus')} Add staff</button>`:''}</div>
    <div class="card" style="padding:15px">
      <div class="rows">${staff.length?staff.map(s=>`
        <div class="row" style="padding:8px 12px;box-shadow:none;border-color:var(--line-soft)">
          <div class="av" style="width:34px;height:34px">${initials(s.name)}</div>
          <div class="meta"><div class="nm" style="font-size:13.5px">${esc(s.name)} <span class="tag" style="margin-left:6px">${esc(s.role)}</span></div>
            <div class="sm">ITS ${esc(s.itsId||'—')} · Mobile ${esc(s.mobile||'—')} · ${s.visibleToParents?'Visible to parents':'Private'}</div></div>
          ${u.role==='admin'?`<div class="end">
            <button class="btn ghost sm" style="min-height:30px;padding:4px 8px;min-width:auto;color:var(--warn)" title="Reset password to default" onclick="adminResetUserPassword(${s.id},'${s.name.replace("'","\\'")}')">${svg('key')}</button>
            <button class="btn ghost sm" style="min-height:30px;padding:4px 8px;min-width:auto" onclick="openStaffForm(${s.id})">${svg('edit')}</button>
            <button class="xbtn" style="width:30px;height:30px" onclick="deleteStaff(${s.id})">${svg('trash')}</button>
          </div>`:''}
        </div>`).join(''):'<div class="muted" style="font-size:12.5px;text-align:center;padding:12px">No staff in this phase. Click Add staff to populate.</div>'}
      </div>
    </div>`};
};
function phaseCard(p,u){
  const dates=phaseDates(p.id); const gs=phaseGroups(p.id); const ready=gs.filter(g=>groupReadiness(g).ready).length;
  const kids=phaseChildren(p.id).length; const assigned=phaseChildren(p.id).filter(c=>childGroupId(c.id,p.id)).length;
  return `<div class="card">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
      <div><div class="serif" style="font-size:20px;font-weight:700;color:var(--wine)">${esc(p.name)}</div>
        <div class="muted" style="font-size:12.5px;margin-top:2px">${fmtDate(p.startDate)} → ${fmtDate(p.endDate)}</div>
        <div class="muted" style="font-size:12.5px">${to12(p.startTime)}–${to12(p.endTime)} daily · ${dates.length} operating days</div></div>
      ${u.role==='admin'?`<button class="btn ghost sm" onclick="editPhase(${p.id})">${svg('edit')} Edit</button>`:''}
    </div>
    <div class="tiles" style="margin-top:12px;grid-template-columns:repeat(4,1fr)">
      <div class="tile"><span class="strip"></span><div class="tl">Groups</div><div class="num tnum" style="font-size:20px">${gs.length}<small>/${p.groupCount}</small></div></div>
      <div class="tile g"><span class="strip"></span><div class="tl">Ready</div><div class="num tnum" style="font-size:20px">${ready}<small>/${gs.length}</small></div></div>
      <div class="tile b"><span class="strip"></span><div class="tl">Children</div><div class="num tnum" style="font-size:20px">${kids}</div></div>
      <div class="tile ${assigned<kids?'w':'g'}"><span class="strip"></span><div class="tl">Assigned</div><div class="num tnum" style="font-size:20px">${assigned}<small>/${kids}</small></div></div>
    </div>
    <div class="btnrow" style="margin-top:12px"><button class="btn ghost sm" onclick="go('grouping')">${svg('group')} Grouping</button><button class="btn ghost sm" onclick="go('children')">${svg('child')} Children</button><button class="btn ghost sm" onclick="go('timetables')">${svg('clock')} Timetables</button></div>`;
}
function editProgram(){ const p=DB.all('programs')[0]||{}; openModal('Edit program',`
  <div class="field"><label>Program name</label><input class="control" id="pg-name" value="${esc(p.name||'')}"></div>
  <div class="field"><label>Hijri year</label><input class="control" id="pg-year" value="${esc(p.year||'')}"></div>`,
  `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="saveProgram(${p.id||0})">Save</button>`); }
function saveProgram(id){ const name=val('pg-name'); if(!name){toast('Enter a name','err');return;} if(id)DB.update('programs',id,{name,year:val('pg-year')}); else DB.insert('programs',{name,year:val('pg-year')}); closeModal(); toast('Program saved'); render(); }
function editPhase(id){ const p=id?DB.byId('phases',id):{name:'',startDate:'',endDate:'',startTime:'08:00',endTime:'13:30',groupCount:10,maxPerGroup:35};
  openModal(id?'Edit phase':'Add phase',`
    <div class="field"><label>Phase name <span class="req">*</span></label><input class="control" id="ph-name" value="${esc(p.name)}" placeholder="e.g. Phase 1"></div>
    <div class="formrow two"><div class="field"><label>Start date <span class="req">*</span></label><input class="control" type="date" id="ph-sd" value="${esc(p.startDate)}"></div>
      <div class="field"><label>End date <span class="req">*</span></label><input class="control" type="date" id="ph-ed" value="${esc(p.endDate)}"></div></div>
    <div class="formrow two"><div class="field"><label>Daily start</label><input class="control" type="time" id="ph-st" value="${esc(p.startTime)}"></div>
      <div class="field"><label>Daily end</label><input class="control" type="time" id="ph-et" value="${esc(p.endTime)}"></div></div>
    <div class="formrow two"><div class="field"><label>Number of groups</label><input class="control" type="number" id="ph-gc" value="${p.groupCount}" min="1"></div>
      <div class="field"><label>Max children / group</label><input class="control" type="number" id="ph-mx" value="${p.maxPerGroup}" min="1"></div></div>
    ${!id?`<label style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;cursor:pointer"><input type="checkbox" id="ph-mkgroups" checked> Create empty groups automatically</label>`:''}
    <div class="field hint" style="margin-top:8px">Operating dates are generated automatically for every day in the range.</div>`,
    `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="savePhase(${id||0})">Save phase</button>`); }
function savePhase(id){
  const name=val('ph-name'),sd=val('ph-sd'),ed=val('ph-ed'); if(!name||!sd||!ed){toast('Name, start and end date are required','err');return;}
  if(ed<sd){toast('End date must be after start date','err');return;}
  const rec={name,startDate:sd,endDate:ed,startTime:val('ph-st')||'08:00',endTime:val('ph-et')||'13:30',groupCount:Number(val('ph-gc'))||10,maxPerGroup:Number(val('ph-mx'))||35};
  let ph;
  if(id){ ph=DB.update('phases',id,rec); DB.filter('operatingDates',d=>d.phaseId===id).forEach(d=>DB.remove('operatingDates',d.id)); }
  else { rec.programId=(DB.all('programs')[0]||DB.insert('programs',{name:'Happy Care · Istefada Ilmiyah',year:'1448'})).id; ph=DB.insert('phases',rec); }
  genDates(sd,ed).forEach(d=>DB.insert('operatingDates',{phaseId:ph.id,date:d}));
  if(!id&&checked('ph-mkgroups')){ for(let i=0;i<rec.groupCount;i++){ DB.insert('groups',{phaseId:ph.id,name:'Group '+(i+1),code:'G'+String(i+1).padStart(2,'0'),ageCategory:'Mixed',capacity:rec.maxPerGroup,room:'',status:'draft',timetableTemplateId:null}); } }
  closeModal(); setPhaseSilent(ph.id); toast('Phase saved · '+genDates(sd,ed).length+' dates generated'); go('setup');
}

/* ============================================================
   CHILDREN DIRECTORY
   ============================================================ */
let childSearch='',childFilter='all';
SCREENS.children=function(){
  const u=currentUser();
  return {title:'Children', html:`
    ${subhead('Children directory','Registered children in '+(currentPhase()?currentPhase().name:'—'))}
    <div class="btnrow" style="margin-bottom:12px">
      <button class="btn sm" onclick="openChildForm(0)">${svg('plus')} Add child</button>
      <button class="btn ghost sm" onclick="openImport()">${svg('upload')} Import CSV/Excel</button>
      <button class="btn ghost sm" onclick="exportChildren()">${svg('download')} Export</button>
    </div>
    <div class="search" style="margin-bottom:10px">${svg('search')}<input id="ch-search" placeholder="Search by name or Student ITS ID" value="${esc(childSearch)}" oninput="childSearch=this.value;refreshChildList()"></div>
    <div class="filters" style="margin-bottom:12px" id="ch-filters">
      ${['all','unassigned','assigned','medical'].map(f=>`<button class="fchip ${childFilter===f?'on':''}" onclick="childFilter='${f}';syncChildFilters();refreshChildList()">${({all:'All',unassigned:'Unassigned',assigned:'Assigned',medical:'Medical alert'})[f]}</button>`).join('')}
    </div>
    <div id="ch-list"></div>`, after:refreshChildList};
};
function syncChildFilters(){ document.querySelectorAll('#ch-filters .fchip').forEach((b,i)=>b.classList.toggle('on',['all','unassigned','assigned','medical'][i]===childFilter)); }
function childMatches(c){
  const ph=currentPhase(); if(ph&&c.phaseId!==ph.id)return false;
  const q=childSearch.toLowerCase(); if(q&&!(c.name.toLowerCase().includes(q)||c.itsId.includes(q)))return false;
  const gid=childGroupId(c.id,c.phaseId);
  if(childFilter==='unassigned'&&gid)return false;
  if(childFilter==='assigned'&&!gid)return false;
  if(childFilter==='medical'&&!c.medicalAlert)return false;
  return true;
}
function refreshChildList(){
  const el=$('#ch-list'); if(!el)return;
  const list=DB.all('children').filter(childMatches).sort((a,b)=>a.name.localeCompare(b.name));
  if(!list.length){ el.innerHTML=emptyState('child','No children found','Adjust the search or add a child.',''); return; }
  el.innerHTML=`<div class="muted" style="font-size:12px;margin-bottom:8px">${list.length} children</div><div class="rows">`+list.map(c=>{
    const gid=childGroupId(c.id,c.phaseId); const g=gid&&DB.byId('groups',gid); const par=childParents(c.id);
    return `<button class="row" onclick="openChild(${c.id})">
      <div class="av">${c.photo?`<img src="${c.photo}" class="av" style="border:none">`:initials(c.name)}</div>
      <div class="meta"><div class="nm">${esc(c.name)} ${c.medicalAlert?'<span class="tag med">'+svg('alert')+esc(c.medicalAlert)+'</span>':''}</div>
        <div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span> · Age ${ageFrom(c.dob)} · ${par.length} parent${par.length!==1?'s':''}</div></div>
      <div class="end">${g?`<span class="chip wine">${esc(g.name)}</span>`:'<span class="chip idle">Unassigned</span>'}</div></button>`;
  }).join('')+`</div>`;
}
function exportChildren(){ const ph=currentPhase(); const rows=DB.all('children').filter(c=>!ph||c.phaseId===ph.id).map(c=>{const gid=childGroupId(c.id,c.phaseId);const g=gid&&DB.byId('groups',gid);return [c.itsId,c.name,c.dob,ageFrom(c.dob),g?g.name:'Unassigned',c.medicalAlert||'',c.assistNote||''];}); exportCSV('children.csv',['Student ITS ID','Name','DOB','Age','Group','Medical alert','Assistance note'],rows); }

function openChild(id){
  const c=DB.byId('children',id); if(!c)return; const gid=childGroupId(c.id,c.phaseId); const g=gid&&DB.byId('groups',gid); const par=childParents(c.id);
  openModal(c.name,`
    <div class="row" style="margin-bottom:12px"><div class="av" style="width:52px;height:52px">${c.photo?`<img src="${c.photo}" class="av" style="width:52px;height:52px;border:none">`:initials(c.name)}</div>
      <div class="meta"><div class="nm">${esc(c.name)}</div><div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span> · Age ${ageFrom(c.dob)} · ${esc(c.dob)}</div></div></div>
    ${c.medicalAlert?'<div class="banner warn" style="margin-bottom:10px"><div class="bi">'+svg('alert')+'</div><div><b>Medical alert</b><p>'+esc(c.medicalAlert)+'</p></div></div>':''}
    ${c.assistNote?'<div class="banner info" style="margin-bottom:10px"><div class="bi">'+svg('shield')+'</div><div><b>Special assistance</b><p>'+esc(c.assistNote)+'</p></div></div>':''}
    <div class="kvlist"><div class="c"><div class="k">Group</div><div class="v">${g?esc(g.name):'Unassigned'}</div></div><div class="c"><div class="k">Status</div><div class="v">${c.active===false?'Inactive':'Active'}</div></div></div>
    <div class="sec-h" style="margin-top:16px"><h3>Linked parents / guardians</h3><button class="btn ghost sm" onclick="openLinkParent(${c.id})">${svg('plus')} Link</button></div>
    <div class="rows">${par.length?par.map(p=>`<div class="row"><div class="av">${initials(p.parent.name)}</div><div class="meta"><div class="nm">${esc(p.parent.name)}</div><div class="sm">${esc(p.link.relationship||p.parent.relationship||'Parent')} · <span class="mono">ITS ${esc(p.parent.itsId)}</span> · ${esc(p.parent.mobile||'')} ${p.parent.authorisedPickup?'<span class="tag">Pickup ✓</span>':''}</div></div><div class="end"><button class="xbtn" onclick="unlinkParent(${c.id},${p.parent.id})">${svg('trash')}</button></div></div>`).join(''):'<div class="muted" style="font-size:12.5px">No parents linked yet.</div>'}</div>`,
    `<button class="btn ghost block" onclick="openChildForm(${c.id})">${svg('edit')} Edit child</button><button class="btn block" onclick="closeModal();go('grouping')">${svg('group')} Assign group</button>`);
}
function openChildForm(id){
  const c=id?DB.byId('children',id):{itsId:'',name:'',dob:'',medicalAlert:'',assistNote:'',active:true,photo:''}; const ph=currentPhase();
  openModal(id?'Edit child':'Add child',`
    <div class="field"><label>Student ITS ID <span class="req">*</span></label><input class="control" id="cf-its" inputmode="numeric" value="${esc(c.itsId)}" ${id?'disabled':''}></div>
    <div class="field"><label>Full name <span class="req">*</span></label><input class="control" id="cf-name" value="${esc(c.name)}"></div>
    <div class="formrow two"><div class="field"><label>Date of birth</label><input class="control" type="date" id="cf-dob" value="${esc(c.dob)}"></div>
      <div class="field"><label>Phase</label><select class="control" id="cf-phase">${DB.all('phases').map(p=>`<option value="${p.id}" ${(id?c.phaseId:ph&&ph.id)===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div></div>
    <div class="field"><label>Medical alert <span class="muted">(optional)</span></label><input class="control" id="cf-med" value="${esc(c.medicalAlert||'')}" placeholder="e.g. Nut allergy"></div>
    <div class="field"><label>Special assistance note <span class="muted">(optional)</span></label><input class="control" id="cf-assist" value="${esc(c.assistNote||'')}"></div>
    <div class="field"><label>Photograph <span class="muted">(optional)</span></label><input class="control" type="file" accept="image/*" id="cf-photo"></div>
    <label style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;cursor:pointer"><input type="checkbox" id="cf-active" ${c.active!==false?'checked':''}> Active</label>`,
    `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="saveChild(${id||0})">Save child</button>`);
}
function saveChild(id){
  const its=val('cf-its'),name=val('cf-name'); if(!its||!name){toast('ITS ID and name are required','err');return;}
  if(!id&&DB.find('children',c=>c.itsId===its)){toast('A child with that ITS ID already exists','err');return;}
  const rec={name,dob:val('cf-dob'),phaseId:Number(val('cf-phase')),medicalAlert:val('cf-med'),assistNote:val('cf-assist'),active:checked('cf-active')};
  const fileEl=$('#cf-photo'); const finish=(photo)=>{ if(photo!==undefined)rec.photo=photo; if(id)DB.update('children',id,rec); else DB.insert('children',Object.assign({itsId:its},rec)); closeModal(); toast('Child saved'); render(); };
  if(fileEl&&fileEl.files&&fileEl.files[0]){ const r=new FileReader(); r.onload=()=>finish(r.result); r.readAsDataURL(fileEl.files[0]); }
  else finish(id?undefined:'');
}
function openLinkParent(childId){
  openModal('Link parent / guardian',`
    <div class="tabbar"><button id="lp-t0" class="on" onclick="lpTab(0)">Existing parent</button><button id="lp-t1" onclick="lpTab(1)">New parent</button></div>
    <div id="lp-existing"><div class="field"><label>Search Parent ITS ID or name</label><input class="control" id="lp-search" oninput="lpSearch()" placeholder="Type to search"></div><div id="lp-results" class="rows"></div></div>
    <div id="lp-new" class="hide">
      <div class="field"><label>Parent ITS ID <span class="req">*</span></label><input class="control" id="lp-its" inputmode="numeric"></div>
      <div class="field"><label>Parent name <span class="req">*</span></label><input class="control" id="lp-name"></div>
      <div class="formrow two"><div class="field"><label>Relationship</label><select class="control" id="lp-rel"><option>Father</option><option>Mother</option><option>Guardian</option><option>Grandparent</option><option>Other</option></select></div>
        <div class="field"><label>Mobile</label><input class="control" id="lp-mob" inputmode="tel"></div></div>
      <div class="field"><label>Alternate mobile <span class="muted">(optional)</span></label><input class="control" id="lp-alt"></div>
      <div class="field"><label>Email <span class="muted">(optional)</span></label><input class="control" id="lp-email"></div>
      <label style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;cursor:pointer"><input type="checkbox" id="lp-pickup" checked> Authorised for pickup</label>
      <button class="btn block" style="margin-top:14px" onclick="saveNewParent(${childId})">${svg('plus')} Add & link parent</button>
    </div>`);
  window.__linkChild=childId;
}
function lpTab(i){ $('#lp-existing').classList.toggle('hide',i!==0); $('#lp-new').classList.toggle('hide',i!==1); $('#lp-t0').classList.toggle('on',i===0); $('#lp-t1').classList.toggle('on',i===1); }
function lpSearch(){ const q=val('lp-search').toLowerCase(); const el=$('#lp-results'); const cid=window.__linkChild; const linked=new Set(DB.filter('childParent',l=>l.childId===cid).map(l=>l.parentId));
  const list=q?DB.all('parents').filter(p=>(p.name.toLowerCase().includes(q)||p.itsId.includes(q))&&!linked.has(p.id)).slice(0,8):[];
  el.innerHTML=list.map(p=>`<button class="row" onclick="linkExisting(${cid},${p.id})"><div class="av">${initials(p.name)}</div><div class="meta"><div class="nm">${esc(p.name)}</div><div class="sm"><span class="mono">ITS ${esc(p.itsId)}</span> · ${esc(p.mobile||'')}</div></div><div class="end">${svg('plus')}</div></button>`).join('')||(q?'<div class="muted" style="font-size:12.5px">No match. Add as new parent.</div>':'');
}
function linkExisting(childId,parentId){ DB.insert('childParent',{childId,parentId,relationship:DB.byId('parents',parentId).relationship||'Parent'}); closeModal(); openChild(childId); toast('Parent linked'); }
function saveNewParent(childId){ const its=val('lp-its'),name=val('lp-name'); if(!its||!name){toast('ITS ID and name required','err');return;}
  let p=DB.find('parents',x=>x.itsId===its); if(!p)p=DB.insert('parents',{itsId:its,name,relationship:val('lp-rel'),mobile:val('lp-mob'),altMobile:val('lp-alt'),email:val('lp-email'),authorisedPickup:checked('lp-pickup')});
  if(DB.find('childParent',l=>l.childId===childId&&l.parentId===p.id)){toast('Already linked','err');return;}
  DB.insert('childParent',{childId,parentId:p.id,relationship:val('lp-rel')}); closeModal(); openChild(childId); toast('Parent added & linked'); }
function unlinkParent(childId,parentId){ const l=DB.find('childParent',x=>x.childId===childId&&x.parentId===parentId); if(l)DB.remove('childParent',l.id); openChild(childId); toast('Parent unlinked'); }

/* ---------- Import ---------- */
function openImport(){
  openModal('Import children',`
    <div class="banner info" style="margin-bottom:12px"><div class="bi">${svg('upload')}</div><div><b>CSV / Excel columns</b><p>ITS, Name, DOB (YYYY-MM-DD), Medical, Assistance, ParentITS, ParentName, ParentMobile, Relationship. First row = headers.</p></div></div>
    <div class="field"><label>Upload .csv file</label><input class="control" type="file" id="imp-file" accept=".csv,text/csv" onchange="impFromFile()"></div>
    <div class="field"><label>…or paste rows here</label><textarea class="control" id="imp-text" rows="7" placeholder="ITS,Name,DOB,Medical
5009001,Ali Akbar,2020-05-10,Nut allergy"></textarea></div>
    <div id="imp-preview"></div>`,
    `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="runImport()">${svg('upload')} Import</button>`);
}
function impFromFile(){ const f=$('#imp-file').files[0]; if(!f)return; const r=new FileReader(); r.onload=()=>{ $('#imp-text').value=r.result; parseImportPreview(); }; r.readAsText(f); }
function parseCSV(text){ const lines=text.split(/\r?\n/).filter(l=>l.trim()); return lines.map(l=>{ const out=[]; let cur='',q=false; for(let i=0;i<l.length;i++){ const ch=l[i]; if(q){ if(ch==='"'){ if(l[i+1]==='"'){cur+='"';i++;} else q=false; } else cur+=ch; } else { if(ch==='"')q=true; else if(ch===','){out.push(cur);cur='';} else cur+=ch; } } out.push(cur); return out.map(s=>s.trim()); }); }
function mapHeaders(h){ const idx={}; h.forEach((c,i)=>{ const k=c.toLowerCase().replace(/[^a-z]/g,''); if(/its$|studentits|itsid/.test(k)&&idx.its==null&&!k.includes('parent'))idx.its=i; if((k==='name'||k==='fullname'||k==='childname')&&idx.name==null)idx.name=i; if(k.includes('dob')||k.includes('dateofbirth')||k.includes('birth'))idx.dob=i; if(k.includes('medical'))idx.med=i; if(k.includes('assist')||k.includes('note'))idx.assist=i; if(k.includes('parentits'))idx.pits=i; if(k.includes('parentname'))idx.pname=i; if(k.includes('parentmobile')||k.includes('parentmob'))idx.pmob=i; if(k.includes('relationship')||k==='relation')idx.rel=i; }); return idx; }
function parseImportRows(){ const rows=parseCSV(rawval('imp-text')); if(rows.length<1)return[]; const idx=mapHeaders(rows[0]); const start=(idx.its!=null||idx.name!=null)?1:0; const out=[];
  for(let i=start;i<rows.length;i++){ const r=rows[i]; const its=(idx.its!=null?r[idx.its]:r[0]||'').trim(); const name=(idx.name!=null?r[idx.name]:r[1]||'').trim(); if(!its||!name)continue;
    out.push({its,name,dob:(idx.dob!=null?r[idx.dob]:'').trim(),med:(idx.med!=null?r[idx.med]:'').trim(),assist:(idx.assist!=null?r[idx.assist]:'').trim(),pits:(idx.pits!=null?r[idx.pits]:'').trim(),pname:(idx.pname!=null?r[idx.pname]:'').trim(),pmob:(idx.pmob!=null?r[idx.pmob]:'').trim(),rel:(idx.rel!=null?r[idx.rel]:'').trim()}); }
  return out; }
function parseImportPreview(){ const rows=parseImportRows(); const el=$('#imp-preview'); if(!el)return; el.innerHTML=rows.length?`<div class="banner ok"><div class="bi">${svg('check')}</div><div><b>${rows.length} children ready to import</b><p>${rows.filter(r=>r.pits||r.pname).length} with a parent to link</p></div></div>`:'<div class="muted" style="font-size:12.5px">No valid rows detected yet.</div>'; }
function runImport(){ const rows=parseImportRows(); if(!rows.length){toast('Nothing to import','err');return;} const ph=currentPhase(); let added=0,skipped=0,linked=0;
  rows.forEach(r=>{ if(DB.find('children',c=>c.itsId===r.its)){skipped++;return;} const c=DB.insert('children',{itsId:r.its,name:r.name,dob:r.dob,phaseId:ph?ph.id:null,medicalAlert:r.med,assistNote:r.assist,active:true}); added++;
    if(r.pits&&r.pname){ let p=DB.find('parents',x=>x.itsId===r.pits); if(!p)p=DB.insert('parents',{itsId:r.pits,name:r.pname,relationship:r.rel||'Parent',mobile:r.pmob,authorisedPickup:true}); DB.insert('childParent',{childId:c.id,parentId:p.id,relationship:r.rel||'Parent'}); linked++; } });
  closeModal(); toast(`Imported ${added} · linked ${linked} parents · ${skipped} skipped`); render(); }


/* ---------- next module ---------- */


/* ============================================================
   GROUPING  (two-panel assignment)
   ============================================================ */
let groupingSel=new Set(), gFilter='unassigned', gSearch='';
SCREENS.grouping=function(){
  const ph=currentPhase();
  if(!ph)return{title:'Grouping',html:emptyState('group','No phase','Create a phase in Setup first.',`<button class="btn" onclick="go('setup')">Go to Setup</button>`)};
  return {title:'Grouping', html:`
    ${subhead('Grouping',ph.name+' · assign children to groups')}
    <div class="btnrow" style="margin-bottom:12px"><button class="btn ghost sm" onclick="go('groups')">${svg('grid')} Manage groups</button><button class="btn ghost sm" onclick="autoSuggest()">${svg('shield')} Auto-suggest</button></div>
    <div id="grp-selbar"></div>
    <div class="twopane">
      <div><div class="eyebrow" style="margin-bottom:8px">Children</div>
        <div class="search" style="margin-bottom:9px">${svg('search')}<input id="grp-search" placeholder="Search name / ITS / Parent ITS" value="${esc(gSearch)}" oninput="gSearch=this.value;refreshGroupingLeft()"></div>
        <div class="filters" style="margin-bottom:10px" id="grp-filters">${['unassigned','all','3–6','7–10'].map(f=>`<button class="fchip ${gFilter===f?'on':''}" onclick="gFilter='${f}';refreshGroupingFilters();refreshGroupingLeft()">${f==='all'?'All':f==='unassigned'?'Unassigned':'Age '+f}</button>`).join('')}</div>
        <div id="grp-left"></div></div>
      <div><div class="eyebrow" style="margin-bottom:8px">Groups</div><div id="grp-right"></div></div>
    </div>`, after:()=>{refreshSelbar();refreshGroupingLeft();refreshGroupingRight();}};
};
function refreshGroupingFilters(){ document.querySelectorAll('#grp-filters .fchip').forEach((b,i)=>b.classList.toggle('on',['unassigned','all','3–6','7–10'][i]===gFilter)); }
function grpMatches(c){ const ph=currentPhase(); if(c.phaseId!==ph.id)return false; const gid=childGroupId(c.id,ph.id);
  if(gFilter==='unassigned'&&gid)return false;
  if(gFilter==='3–6'&&!(ageFrom(c.dob)>=3&&ageFrom(c.dob)<=6))return false;
  if(gFilter==='7–10'&&!(ageFrom(c.dob)>=7&&ageFrom(c.dob)<=10))return false;
  const q=gSearch.toLowerCase(); if(q){ const pmatch=childParents(c.id).some(p=>p.parent.itsId.includes(q)); if(!(c.name.toLowerCase().includes(q)||c.itsId.includes(q)||pmatch))return false; }
  return true; }
function refreshGroupingLeft(){ const el=$('#grp-left'); if(!el)return; const ph=currentPhase();
  const list=DB.all('children').filter(grpMatches).sort((a,b)=>a.name.localeCompare(b.name));
  if(!list.length){el.innerHTML=emptyState('child','No children','Adjust filters.','');return;}
  el.innerHTML=`<div class="rows">`+list.map(c=>{ const gid=childGroupId(c.id,ph.id); const g=gid&&DB.byId('groups',gid); const on=groupingSel.has(c.id);
    return `<div class="row" onclick="toggleGroupingSel(${c.id})" style="cursor:pointer">
      <div class="ck ${on?'on':''}">${svg('check')}</div>
      <div class="meta"><div class="nm">${esc(c.name)} ${c.medicalAlert?'<span class="tag med">'+svg('alert')+'</span>':''}</div><div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span> · Age ${ageFrom(c.dob)}</div></div>
      <div class="end">${g?`<span class="chip wine">${esc(g.code)}</span>`:'<span class="chip idle">—</span>'}</div></div>`;
  }).join('')+`</div>`; }
function toggleGroupingSel(id){ if(groupingSel.has(id))groupingSel.delete(id); else groupingSel.add(id); refreshGroupingLeft(); refreshSelbar(); refreshGroupingRight(); }
function refreshSelbar(){ const el=$('#grp-selbar'); if(!el)return; el.innerHTML=groupingSel.size?`<div class="banner wine" style="margin-bottom:12px"><div class="bi">${svg('check')}</div><div style="flex:1"><b>${groupingSel.size} selected</b><p>Choose a group on the right to assign</p></div><button class="btn ghost sm" onclick="groupingSel.clear();refreshGroupingLeft();refreshSelbar();refreshGroupingRight()">Clear</button></div>`:''; }
function refreshGroupingRight(){ const el=$('#grp-right'); if(!el)return; const gs=phaseGroups(currentPhase().id);
  if(!gs.length){el.innerHTML=emptyState('grid','No groups','Create groups first.',`<button class="btn sm" onclick="go('groupedit',{id:0})">${svg('plus')} New group</button>`);return;}
  el.innerHTML=`<div class="stack">`+gs.map(g=>{ const n=groupChildren(g.id).length; const pct=Math.min(100,n/g.capacity*100); const full=n>=g.capacity;
    return `<div class="card" style="padding:13px">
      <div style="display:flex;justify-content:space-between;align-items:center"><button onclick="go('group',{id:${g.id}})" style="text-align:left"><div style="font-weight:800;font-size:14.5px">${esc(g.name)}</div><div class="muted" style="font-size:11.5px">${esc(g.code)} · Age ${esc(g.ageCategory)} · ${esc(g.room||'No room')}</div></button>
        <button class="btn sm ${groupingSel.size?'':'ghost'}" ${groupingSel.size?'':'disabled'} onclick="assignSelectedTo(${g.id})">${svg('plus')} Assign ${groupingSel.size||''}</button></div>
      <div class="progline" style="margin-top:10px"><span>${n}/${g.capacity} assigned</span><span class="muted">${Math.max(0,g.capacity-n)} spaces ${full?'· full':''}</span></div>
      <div class="prog ${full?'u':(pct>85?'w':'g')}"><i style="width:${pct}%"></i></div></div>`;
  }).join('')+`</div>`; }
function assignSelectedTo(groupId){ const g=DB.byId('groups',groupId); const sel=[...groupingSel]; if(!sel.length){toast('Select children first','err');return;}
  const current=groupChildren(groupId).length; const incoming=sel.filter(cid=>childGroupId(cid,g.phaseId)!==groupId).length;
  if(current+incoming>g.capacity){ if(currentUser().role!=='admin'){toast(`Over capacity (${g.capacity}). Admin override required.`,'err');return;} const reason=prompt('This exceeds capacity. Enter a short override reason:'); if(!reason){return;} DB.insert('issues',{phaseId:g.phaseId,type:'capacity-override',status:'open',note:`${g.name}: ${reason}`,createdAt:new Date().toISOString()}); }
  sel.forEach(cid=>{ const cur=DB.find('childGroup',x=>x.childId===cid&&x.phaseId===g.phaseId&&x.active); if(cur&&cur.groupId===groupId)return; if(cur)DB.update('childGroup',cur.id,{active:false}); DB.insert('childGroup',{childId:cid,groupId,phaseId:g.phaseId,active:true,assignedAt:todayISO()}); });
  DB.update('groups',groupId,{status:groupReadiness(g).ready?'ready':'draft'});
  groupingSel.clear(); refreshGroupingLeft(); refreshSelbar(); refreshGroupingRight(); toast(`${sel.length} assigned to ${g.name}`); }
function autoSuggest(){ const ph=currentPhase(); const un=phaseChildren(ph.id).filter(c=>!childGroupId(c.id,ph.id)); if(!un.length){toast('No unassigned children');return;}
  if(!confirm(`Auto-suggest groups for ${un.length} unassigned children by age & capacity? You can change any assignment after.`))return;
  const gs=phaseGroups(ph.id); let placed=0;
  un.forEach(c=>{ const a=ageFrom(c.dob); const fit=gs.filter(g=>groupChildren(g.id).length<g.capacity).sort((x,y)=>{ const xa=x.ageCategory==='3–6'?(a<=6?0:2):x.ageCategory==='7–10'?(a>=7?0:2):1; const ya=y.ageCategory==='3–6'?(a<=6?0:2):y.ageCategory==='7–10'?(a>=7?0:2):1; return xa-ya||groupChildren(x.id).length-groupChildren(y.id).length; })[0]; if(fit){ DB.insert('childGroup',{childId:c.id,groupId:fit.id,phaseId:ph.id,active:true,assignedAt:todayISO()}); placed++; } });
  gs.forEach(g=>DB.update('groups',g.id,{status:groupReadiness(g).ready?'ready':'draft'})); toast(`Suggested placement for ${placed} children`); render(); }

/* ============================================================
   GROUPS  (list / details / edit / staff)
   ============================================================ */
SCREENS.groups=function(){ const ph=currentPhase(); const gs=phaseGroups(ph.id);
  return {title:'Groups', html:`${subhead('Groups',ph.name)}
    <div class="btnrow" style="margin-bottom:12px"><button class="btn sm" onclick="go('groupedit',{id:0})">${svg('plus')} New group</button></div>
    <div class="grid g2">${gs.map(g=>{ const r=groupReadiness(g); const n=groupChildren(g.id).length; const st=groupStaffList(g.id).filter(x=>x.staffId).length;
      return `<button class="gcard s-${r.ready?'ok':'warn'}" onclick="go('group',{id:${g.id}})"><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h4>${esc(g.name)}</h4><div class="gm">${esc(g.code)} · Age ${esc(g.ageCategory)} · ${esc(g.room||'No room')}</div></div>${r.ready?'<span class="chip ok">'+svg('check')+'Ready</span>':'<span class="chip warn">'+svg('alert')+(r.miss.length)+' left</span>'}</div>
      <div class="gstats"><div class="gs"><div class="k">Students</div><div class="v tnum">${n}<small>/${g.capacity}</small></div></div><div class="gs"><div class="k">Staff</div><div class="v tnum">${st}<small>/8</small></div></div></div></button>`;
    }).join('')||emptyState('grid','No groups','Create your first group.','')}</div>`};
};
SCREENS.group=function(p){ const g=DB.byId('groups',p.id); if(!g)return{title:'Group',html:emptyState('grid','Group not found','','')};
  const r=groupReadiness(g); const kids=groupChildren(g.id).sort((a,b)=>a.name.localeCompare(b.name)); const staff=groupStaffList(g.id); const tt=groupTimetable(g);
  const u=currentUser(); const canEdit=u.role==='admin'||u.role==='supervisor';
  return {title:g.name, html:`${subhead(g.name,g.code+' · '+g.ageCategory,'groups')}
    <div class="banner ${r.ready?'ok':'warn'}"><div class="bi">${svg(r.ready?'check':'alert')}</div><div style="flex:1"><b>Group status: ${r.ready?'Ready':'Incomplete'}</b>${r.miss.length?`<div class="miss">${r.miss.map(m=>`<div class="m">${svg('x')}${esc(m)}</div>`).join('')}</div>`:'<p>All requirements met.</p>'}</div></div>
    <div class="kvlist" style="margin-top:12px"><div class="c"><div class="k">Room / area</div><div class="v">${esc(g.room||'—')}</div></div><div class="c"><div class="k">Capacity</div><div class="v">${groupChildren(g.id).length} / ${g.capacity}</div></div><div class="c"><div class="k">Age category</div><div class="v">${esc(g.ageCategory)}</div></div><div class="c"><div class="k">Timetable</div><div class="v" style="font-size:13px">${g.timetableTemplateId?esc((DB.byId('timetableTemplates',g.timetableTemplateId)||{}).name||'—'):(g.customTimetable&&g.customTimetable.length?'Custom':'—')}</div></div></div>
    ${canEdit?`<div class="btnrow" style="margin-top:12px"><button class="btn ghost sm" onclick="go('groupedit',{id:${g.id}})">${svg('edit')} Edit</button><button class="btn ghost sm" onclick="go('groupstaff',{id:${g.id}})">${svg('people')} Staff</button><button class="btn ghost sm" onclick="go('grouping')">${svg('group')} Assign</button><button class="btn ghost sm" onclick="go('attendance-child',{group:${g.id}})">${svg('clip')} Attendance</button></div>`:''}
    <div class="sec-h"><h3>Assigned staff</h3><span class="hint">${staff.filter(x=>x.staffId).length}/8</span></div>
    <div class="card">${STAFF_SLOTS.map(slot=>{ const gsr=staff.find(x=>x.slot===slot); const s=gsr&&DB.byId('staff',gsr.staffId); return `<div class="staffslot"><div style="flex:1"><div class="role">${slot}</div><div class="nm">${s?esc(s.name):'<span class="muted">Not assigned</span>'}</div></div>${s?`<div class="mob">${esc(s.mobile||'')}</div>`:''}</div>`; }).join('')}</div>
    <div class="sec-h"><h3>Children</h3><span class="hint">${kids.length} assigned</span></div>
    <div class="rows">${kids.length?kids.map(c=>`<div class="row"><div class="av">${initials(c.name)}</div><div class="meta"><div class="nm">${esc(c.name)} ${c.medicalAlert?'<span class="tag med">'+svg('alert')+esc(c.medicalAlert)+'</span>':''}</div><div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span> · Age ${ageFrom(c.dob)}</div></div>${canEdit?`<div class="end"><button class="xbtn" title="Remove from group" onclick="removeFromGroup(${c.id},${g.id})">${svg('x')}</button></div>`:''}</div>`).join(''):'<div class="muted" style="font-size:12.5px">No children assigned yet.</div>'}</div>
    <div class="sec-h"><h3>Timetable</h3></div>
    <div class="card">${tt.length?tt.map(it=>`<div class="tt-row"><div class="t">${to12(it.start)}<br>${to12(it.end)}</div><div><div class="a">${esc(it.activity)}</div>${it.location?`<div class="l">${svg('pin')} ${esc(it.location)}</div>`:''}</div></div>`).join(''):'<div class="muted" style="font-size:12.5px">No timetable assigned. Assign one from Timetables.</div>'}</div>`};
};
function removeFromGroup(childId,groupId){ const cur=DB.find('childGroup',x=>x.childId===childId&&x.groupId===groupId&&x.active); if(cur)DB.update('childGroup',cur.id,{active:false}); const g=DB.byId('groups',groupId); DB.update('groups',groupId,{status:groupReadiness(g).ready?'ready':'draft'}); toast('Removed from group'); render(); }
SCREENS.groupedit=function(p){ const ph=currentPhase(); const g=p.id?DB.byId('groups',p.id):{name:'',code:'',ageCategory:'3–6',capacity:(ph?ph.maxPerGroup:35),room:'',timetableTemplateId:null,status:'draft'};
  const templates=DB.all('timetableTemplates'); const preset=['3–6','7–10','Mixed'].includes(g.ageCategory);
  return {title:p.id?'Edit group':'New group', html:`${subhead(p.id?'Edit group':'New group','','groups')}
    <div class="card">
      <div class="formrow two"><div class="field"><label>Group name <span class="req">*</span></label><input class="control" id="gf-name" value="${esc(g.name)}" placeholder="e.g. Little Stars"></div>
        <div class="field"><label>Group code</label><input class="control" id="gf-code" value="${esc(g.code)}" placeholder="G01"></div></div>
      <div class="formrow two"><div class="field"><label>Age category</label><select class="control" id="gf-age" onchange="toggleCustomAge()"><option ${g.ageCategory==='3–6'?'selected':''}>3–6</option><option ${g.ageCategory==='7–10'?'selected':''}>7–10</option><option ${g.ageCategory==='Mixed'?'selected':''}>Mixed</option><option value="Custom" ${!preset?'selected':''}>Custom</option></select></div>
        <div class="field"><label>Max capacity</label><input class="control" type="number" id="gf-cap" value="${g.capacity}" min="1"></div></div>
      <div class="formrow two" id="gf-customrow" style="${preset?'display:none':''}"><div class="field"><label>Custom age from</label><input class="control" type="number" id="gf-amin" value="${!preset?(g.ageCategory.split('–')[0]||''):''}"></div><div class="field"><label>to</label><input class="control" type="number" id="gf-amax" value="${!preset?(g.ageCategory.split('–')[1]||''):''}"></div></div>
      <div class="formrow two"><div class="field"><label>Room / area</label><input class="control" id="gf-room" value="${esc(g.room||'')}"></div>
        <div class="field"><label>Timetable template</label><select class="control" id="gf-tt"><option value="">— None —</option>${templates.map(t=>`<option value="${t.id}" ${g.timetableTemplateId===t.id?'selected':''}>${esc(t.name)}</option>`).join('')}</select></div></div>
      <button class="btn block" onclick="saveGroup(${p.id||0})">${svg('check')} Save group</button>
    </div>`};
};
function toggleCustomAge(){ const v=$('#gf-age').value; $('#gf-customrow').style.display=v==='Custom'?'':'none'; }
function saveGroup(id){ const ph=currentPhase(); const name=val('gf-name'); if(!name){toast('Group name required','err');return;}
  let age=$('#gf-age').value; if(age==='Custom'){ const a=val('gf-amin'),b=val('gf-amax'); age=(a&&b)?`${a}–${b}`:'Mixed'; }
  const tt=val('gf-tt'); const rec={name,code:val('gf-code')||('G'+String((phaseGroups(ph.id).length+1)).padStart(2,'0')),ageCategory:age,capacity:Number(val('gf-cap'))||35,room:val('gf-room'),timetableTemplateId:tt?Number(tt):null};
  let g; if(id){g=DB.update('groups',id,rec);} else {rec.phaseId=ph.id;rec.status='draft';g=DB.insert('groups',rec);}
  DB.update('groups',g.id,{status:groupReadiness(g).ready?'ready':'draft'}); toast('Group saved'); go('group',{id:g.id}); }

SCREENS.groupstaff=function(p){ const g=DB.byId('groups',p.id); if(!g)return{title:'Staff',html:emptyState('people','Group not found','','')};
  const slots=[...STAFF_SLOTS,'Group Coordinator','Medical Support Contact']; const gs=groupStaffList(g.id); const filled=gs.filter(x=>x.staffId&&STAFF_SLOTS.includes(x.slot)).length;
  const status=filled>=8?'Complete':filled===0?'Incomplete':'Replacement Needed';
  return {title:g.name+' · Staff', html:`${subhead(g.name+' — staff','Assign staff to each role','group',{id:g.id})}
    <div class="banner ${filled>=8?'ok':'warn'}"><div class="bi">${svg(filled>=8?'check':'alert')}</div><div><b>Staffing: ${status}</b><p>${filled}/8 required roles assigned</p></div></div>
    <div class="btnrow" style="margin:12px 0"><button class="btn ghost sm" onclick="openStaffForm(0)">${svg('plus')} Add staff member</button></div>
    <div class="card">${slots.map(slot=>{ const gsr=gs.find(x=>x.slot===slot); const s=gsr&&DB.byId('staff',gsr.staffId); const opt=slot==='Group Coordinator'||slot==='Medical Support Contact';
      return `<div class="staffslot"><div style="flex:1"><div class="role">${slot} ${opt?'<span class="muted">(optional)</span>':''}</div><div class="nm">${s?esc(s.name)+' <span class="muted" style="font-weight:500">· '+esc(s.mobile||'')+'</span>':'<span class="muted">Not assigned</span>'}</div></div><button class="btn ghost sm" onclick="openStaffPicker(${g.id},'${slot.replace(/'/g,"")}')">${s?'Change':'Assign'}</button></div>`;
    }).join('')}</div>`};
};
function openStaffPicker(groupId,slot){ const g=DB.byId('groups',groupId); window.__pick={groupId,slot};
  openModal('Assign · '+slot,`<div class="field"><label>Search staff (name or ITS)</label><input class="control" id="sp-search" oninput="spSearch()" placeholder="Type to search"></div>
    <button class="btn ghost block" style="margin-bottom:10px" onclick="openStaffForm(0)">${svg('plus')} Add new staff member</button>
    <div id="sp-results" class="rows"></div>`); spSearch(); }
function spSearch(){ const q=val('sp-search').toLowerCase(); const ph=currentPhase(); const assignedIds=new Set(DB.filter('groupStaff',x=>x.staffId).map(x=>x.staffId));
  const list=DB.all('staff').filter(s=>(!ph||s.phaseId===ph.id)).filter(s=>!q||s.name.toLowerCase().includes(q)||(s.itsId||'').includes(q)).slice(0,12);
  $('#sp-results').innerHTML=list.map(s=>`<button class="row" onclick="assignStaffSlot(${s.id})"><div class="av">${initials(s.name)}</div><div class="meta"><div class="nm">${esc(s.name)}</div><div class="sm">${esc(s.role)} · ${esc(s.mobile||'')} ${assignedIds.has(s.id)?'<span class="tag">already assigned</span>':''}</div></div><div class="end">${svg('plus')}</div></button>`).join('')||'<div class="muted" style="font-size:12.5px">No staff. Add a new member above.</div>'; }
function assignStaffSlot(staffId){ const {groupId,slot}=window.__pick; const ex=DB.find('groupStaff',x=>x.groupId===groupId&&x.slot===slot); if(ex)DB.update('groupStaff',ex.id,{staffId}); else DB.insert('groupStaff',{groupId,slot,staffId}); const g=DB.byId('groups',groupId); DB.update('groups',groupId,{status:groupReadiness(g).ready?'ready':'draft'}); closeModal(); toast('Staff assigned'); render(); }
function openStaffForm(id){ const s=id?DB.byId('staff',id):{itsId:'',name:'',role:'Assistant Teacher',mobile:'',altMobile:'',visibleToParents:true,bankName:'',bankAccount:'',bankIfsc:'',panNumber:'',panImage:'',chequeImage:''}; const ph=currentPhase();
  openModal(id?'Edit staff':'Add staff',`
    <div class="formrow two"><div class="field"><label>Staff ITS ID</label><input class="control" id="sf-its" value="${esc(s.itsId||'')}"></div>
      <div class="field"><label>Role</label><select class="control" id="sf-role">${['Main Teacher','Assistant Teacher','Talebaat','Maid','Coordinator','Medical Support','Supervisor'].map(r=>`<option ${s.role===r?'selected':''}>${r}</option>`).join('')}</select></div></div>
    <div class="field"><label>Full name <span class="req">*</span></label><input class="control" id="sf-name" value="${esc(s.name)}"></div>
    <div class="formrow two"><div class="field"><label>Mobile</label><input class="control" id="sf-mob" value="${esc(s.mobile||'')}"></div><div class="field"><label>Alternate</label><input class="control" id="sf-alt" value="${esc(s.altMobile||'')}"></div></div>
    
    <!-- Bank & Document Section -->
    <div style="margin-top:16px;border-top:1px solid var(--line);padding-top:16px">
      <h4 style="font-family:var(--serif);font-size:15px;color:var(--wine);margin-bottom:12px;font-weight:700">Bank & Verification Details</h4>
      <div class="formrow two">
        <div class="field"><label>Bank Name</label><input class="control" id="sf-bank-name" value="${esc(s.bankName||'')}"></div>
        <div class="field"><label>Account Number</label><input class="control" id="sf-bank-acc" value="${esc(s.bankAccount||'')}"></div>
      </div>
      <div class="formrow two">
        <div class="field"><label>IFSC Code</label><input class="control" id="sf-bank-ifsc" value="${esc(s.bankIfsc||'')}"></div>
        <div class="field"><label>PAN Card Number</label><input class="control" id="sf-pan-num" value="${esc(s.panNumber||'')}"></div>
      </div>
      <div class="formrow two" style="margin-top:10px">
        <div class="field"><label>PAN Card Image</label>
          <input type="file" accept="image/*" id="sf-pan-img-file" onchange="uploadStaffDocument(this, 'panImage', 'sf-pan-img', 'sf-pan-preview')" style="font-size:12px">
          <input type="hidden" id="sf-pan-img" value="${s.panImage||''}">
          <div id="sf-pan-preview" style="margin-top:8px">${s.panImage ? `<img src="${s.panImage}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${s.panImage.replace("'","\\'")}', 'PAN Card')">` : '<span class="muted" style="font-size:12px">No upload</span>'}</div>
        </div>
        <div class="field"><label>Cancelled Cheque Image</label>
          <input type="file" accept="image/*" id="sf-cheque-img-file" onchange="uploadStaffDocument(this, 'chequeImage', 'sf-cheque-img', 'sf-cheque-preview')" style="font-size:12px">
          <input type="hidden" id="sf-cheque-img" value="${s.chequeImage||''}">
          <div id="sf-cheque-preview" style="margin-top:8px">${s.chequeImage ? `<img src="${s.chequeImage}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${s.chequeImage.replace("'","\\'")}', 'Cancelled Cheque')">` : '<span class="muted" style="font-size:12px">No upload</span>'}</div>
        </div>
      </div>
    </div>
    
    <label style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px"><input type="checkbox" id="sf-vis" ${s.visibleToParents!==false?'checked':''}> Visible to parents (name & contact shown on child profile)</label>`,
    `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="saveStaff(${id||0})">Save</button>`); }
function saveStaff(id){ const name=val('sf-name'); if(!name){toast('Name required','err');return;} const ph=currentPhase(); const itsId=val('sf-its').trim(); const role=$('#sf-role').value;
  const rec={itsId,name,role,mobile:val('sf-mob'),altMobile:val('sf-alt'),visibleToParents:checked('sf-vis'),phaseId:ph?ph.id:null,
    bankName:val('sf-bank-name'),bankAccount:val('sf-bank-acc'),bankIfsc:val('sf-bank-ifsc'),panNumber:val('sf-pan-num'),panImage:val('sf-pan-img'),chequeImage:val('sf-cheque-img')};
  let savedStaff = null;
  if(id) savedStaff = DB.update('staff',id,rec); else savedStaff = DB.insert('staff',rec);
  
  if (savedStaff && itsId) {
    let u = DB.find('users', x => x.staffId === savedStaff.id);
    if (!u) u = DB.find('users', x => x.itsId === itsId);
    const userRole = (role === 'Supervisor' || role === 'Coordinator') ? 'supervisor' : 'teacher';
    if (u) {
      DB.update('users', u.id, { itsId: itsId, name: name, role: userRole, staffId: savedStaff.id });
    } else {
      const salt = rndSalt();
      DB.insert('users', { itsId: itsId, name: name, role: userRole, salt: salt, hash: hashPw('happycare123', salt), active: true, needsPasswordChange: true, staffId: savedStaff.id });
    }
  }
  closeModal(); toast('Staff saved'); render(); }
function deleteStaff(id){ if(!confirm('Are you sure you want to remove this staff member?'))return; const u = DB.find('users', x => x.staffId === id); if(u) DB.remove('users', u.id); DB.filter('groupStaff',x=>x.staffId===id).forEach(x=>DB.remove('groupStaff',x.id)); DB.remove('staff',id); toast('Staff member removed'); render(); }

/* ============================================================
   TIMETABLES
   ============================================================ */
let ttDraft=[];
SCREENS.timetables=function(){ const tpl=DB.all('timetableTemplates'); const ph=currentPhase();
  return {title:'Timetables', html:`${subhead('Timetable templates','Reusable daily schedules')}
    <div class="btnrow" style="margin-bottom:12px"><button class="btn sm" onclick="openTemplate(0)">${svg('plus')} New template</button></div>
    <div class="stack">${tpl.map(t=>{ const used=phaseGroups(ph?ph.id:0).filter(g=>g.timetableTemplateId===t.id).length;
      return `<div class="card"><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="font-weight:800;font-size:15px">${esc(t.name)}</div><div class="muted" style="font-size:12px">Age ${esc(t.ageCategory)} · ${t.items.length} activities · used by ${used} group${used!==1?'s':''}</div></div><div class="btnrow"><button class="btn ghost sm" onclick="openTemplate(${t.id})">${svg('edit')}</button><button class="btn ghost sm" onclick="assignTemplate(${t.id})">Assign</button></div></div>
      <div style="margin-top:8px">${t.items.slice(0,3).map(it=>`<div class="tt-row" style="padding:6px 0"><div class="t">${to12(it.start)}</div><div class="a" style="font-size:13px">${esc(it.activity)}</div></div>`).join('')}${t.items.length>3?`<div class="muted" style="font-size:11.5px;padding-top:4px">+${t.items.length-3} more</div>`:''}</div></div>`;
    }).join('')||emptyState('clock','No templates','Create a reusable timetable.','')}</div>`};
};
function openTemplate(id){ const t=id?DB.byId('timetableTemplates',id):{name:'',ageCategory:'3–6',items:[]}; ttDraft=t.items.map(x=>Object.assign({},x));
  openModal(id?'Edit timetable':'New timetable',`
    <div class="formrow two"><div class="field"><label>Template name <span class="req">*</span></label><input class="control" id="tt-name" value="${esc(t.name)}"></div>
      <div class="field"><label>Age category</label><input class="control" id="tt-age" value="${esc(t.ageCategory)}"></div></div>
    <div class="sec-h" style="margin-top:6px"><h3>Activities</h3><button class="btn ghost sm" onclick="ttAddItem()">${svg('plus')} Add</button></div>
    <div id="tt-items"></div>`,
    `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="saveTemplate(${id||0})">Save template</button>`);
  ttRenderItems(); }
function ttRenderItems(){ const el=$('#tt-items'); if(!el)return; el.innerHTML=ttDraft.length?ttDraft.map((it,i)=>`
  <div class="card" style="padding:11px;margin-bottom:8px"><div class="formrow two"><div class="field" style="margin:0"><label>Start</label><input class="control" type="time" value="${esc(it.start||'')}" onchange="ttDraft[${i}].start=this.value"></div><div class="field" style="margin:0"><label>End</label><input class="control" type="time" value="${esc(it.end||'')}" onchange="ttDraft[${i}].end=this.value"></div></div>
    <div class="field" style="margin:8px 0 0"><label>Activity</label><input class="control" value="${esc(it.activity||'')}" onchange="ttDraft[${i}].activity=this.value"></div>
    <div class="formrow two" style="margin-top:8px"><div class="field" style="margin:0"><label>Location</label><input class="control" value="${esc(it.location||'')}" onchange="ttDraft[${i}].location=this.value"></div><div class="field" style="margin:0"><label>Notes</label><input class="control" value="${esc(it.notes||'')}" onchange="ttDraft[${i}].notes=this.value"></div></div>
    <button class="btn ghost sm" style="margin-top:8px" onclick="ttDraft.splice(${i},1);ttRenderItems()">${svg('trash')} Remove</button></div>`).join(''):'<div class="muted" style="font-size:12.5px;margin-bottom:8px">No activities yet. Add rows to build the day.</div>'; }
function ttAddItem(){ const last=ttDraft[ttDraft.length-1]; ttDraft.push({start:last?last.end:'08:00',end:'',activity:'',location:'',notes:''}); ttRenderItems(); }
function saveTemplate(id){ const name=val('tt-name'); if(!name){toast('Name required','err');return;} const items=ttDraft.filter(it=>it.activity&&it.start); const rec={name,ageCategory:val('tt-age')||'Mixed',items};
  if(id)DB.update('timetableTemplates',id,rec); else DB.insert('timetableTemplates',rec); closeModal(); toast('Template saved'); render(); }
function assignTemplate(id){ const t=DB.byId('timetableTemplates',id); const gs=phaseGroups(currentPhase().id);
  openModal('Assign “'+t.name+'”',`<p class="muted" style="font-size:12.5px;margin-bottom:12px">Select groups to use this timetable. This replaces any custom timetable on those groups.</p>
    <div class="rows">${gs.map(g=>`<label class="row" style="cursor:pointer"><div class="ck ${g.timetableTemplateId===id?'on':''}" id="at-${g.id}"></div><input type="checkbox" class="hide" id="atc-${g.id}" ${g.timetableTemplateId===id?'checked':''} onchange="document.getElementById('at-${g.id}').classList.toggle('on',this.checked)"><div class="meta"><div class="nm">${esc(g.name)}</div><div class="sm">Age ${esc(g.ageCategory)} · ${esc(g.code)}</div></div></label>`).join('')}</div>`,
    `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="applyTemplate(${id})">Apply</button>`); }
function applyTemplate(id){ const gs=phaseGroups(currentPhase().id); let n=0; gs.forEach(g=>{ if(checked('atc-'+g.id)){ DB.update('groups',g.id,{timetableTemplateId:id,customTimetable:null}); DB.update('groups',g.id,{status:groupReadiness(g).ready?'ready':'draft'}); n++; } }); closeModal(); toast(`Timetable assigned to ${n} groups`); render(); }


/* ---------- next module ---------- */


/* ============================================================
   DAILY CHILD ATTENDANCE
   ============================================================ */
let attGroup=0;
SCREENS['attendance-child']=function(p){ const ph=currentPhase(); const date=state.dateISO; const gs=phaseGroups(ph.id);
  const u=currentUser(); if(u.role==='teacher')attGroup=u.groupId;
  if(p&&p.group)attGroup=p.group; if(!attGroup&&gs[0])attGroup=gs[0].id;
  const g=DB.byId('groups',attGroup);
  const kids=g?groupChildren(g.id).sort((a,b)=>a.name.localeCompare(b.name)):[];
  return {title:'Child Attendance', html:`${subhead('Child attendance',fmtDate(date))}
    ${u.role!=='teacher'?`<div class="field"><label>Group</label><select class="control" onchange="attGroup=Number(this.value);render()">${gs.map(x=>`<option value="${x.id}" ${x.id===attGroup?'selected':''}>${esc(x.name)} (${groupChildren(x.id).length})</option>`).join('')}</select></div>`:''}
    <div class="btnrow" style="margin:6px 0 12px"><button class="btn ghost sm" onclick="markAllPresent(${attGroup})">${svg('check')} Mark all present</button><button class="btn ghost sm" onclick="exportAttendanceDay()">${svg('download')} Export day</button></div>
    <div class="rows">${kids.length?kids.map(c=>{ const a=attRec(c.id,date); const pres=a&&a.present;
      return `<div class="card" style="padding:11px 12px"><div style="display:flex;align-items:center;gap:11px"><button class="ck ok ${pres?'on':''}" onclick="togglePresent(${c.id})">${svg('check')}</button>
        <div class="meta" style="flex:1"><div class="nm">${esc(c.name)} ${c.medicalAlert?'<span class="tag med">'+svg('alert')+'</span>':''}</div><div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span> · ${pres?'Present':(a?'Absent':'Not marked')}</div></div></div>
        ${pres?`<div class="formrow two" style="margin-top:10px"><div class="field" style="margin:0"><label>Check-in</label><input class="control" type="time" value="${esc(a.checkIn||'')}" onchange="setAtt(${c.id},'checkIn',this.value)"></div><div class="field" style="margin:0"><label>Check-out</label><input class="control" type="time" value="${esc(a.checkOut||'')}" onchange="setAtt(${c.id},'checkOut',this.value)"></div></div>`:''}</div>`;
    }).join(''):'<div class="muted" style="font-size:12.5px">No children assigned to this group.</div>'}</div>`};
};
function ensureAtt(childId){ const date=state.dateISO; const ph=currentPhase(); let a=attRec(childId,date); if(!a){ const gid=childGroupId(childId,ph.id); a=DB.insert('childAttendance',{childId,phaseId:ph.id,date,groupId:gid,present:false,checkIn:'',checkOut:'',recordedBy:currentUser().name}); } return a; }
function togglePresent(childId){ const a=ensureAtt(childId); DB.update('childAttendance',a.id,{present:!a.present,checkIn:!a.present?(a.checkIn||nowHM()):a.checkIn,recordedBy:currentUser().name}); render(); }
function setAtt(childId,field,v){ const a=ensureAtt(childId); DB.update('childAttendance',a.id,{[field]:v}); }
function markAllPresent(groupId){ const date=state.dateISO; groupChildren(groupId).forEach(c=>{ const a=ensureAtt(c.id); if(!a.present)DB.update('childAttendance',a.id,{present:true,checkIn:a.checkIn||nowHM(),recordedBy:currentUser().name}); }); toast('All marked present'); render(); }
function exportAttendanceDay(){ const date=state.dateISO; const g=DB.byId('groups',attGroup); const rows=groupChildren(attGroup).map(c=>{const a=attRec(c.id,date);return [date,g.name,c.itsId,c.name,a&&a.present?'Present':'Absent',a?a.checkIn||'':'',a?a.checkOut||'':''];}); exportCSV('attendance-'+date+'.csv',['Date','Group','ITS','Name','Status','Check-in','Check-out'],rows); }

/* ============================================================
   DAILY STAFF ATTENDANCE
   ============================================================ */
SCREENS['attendance-staff']=function(){ const ph=currentPhase(); const date=state.dateISO; const gs=phaseGroups(ph.id);
  const assigns=DB.filter('groupStaff',x=>x.staffId&&gs.some(g=>g.id===x.groupId));
  return {title:'Staff Attendance', html:`${subhead('Staff attendance',fmtDate(date))}
    <div class="rows">${assigns.length?assigns.map(a=>{ const s=DB.byId('staff',a.staffId); const g=DB.byId('groups',a.groupId); const rec=DB.find('staffAttendance',r=>r.staffId===a.staffId&&r.date===date&&r.groupId===a.groupId); const st=rec?rec.status:'';
      return `<div class="row"><div class="av">${initials(s.name)}</div><div class="meta"><div class="nm">${esc(s.name)}</div><div class="sm">${esc(a.slot)} · ${esc(g.name)}</div></div>
        <div class="end">${['present','absent','replacement'].map(x=>`<button class="fchip ${st===x?'on':''}" style="padding:5px 9px" onclick="setStaffAtt(${a.staffId},${a.groupId},'${a.slot.replace(/'/g,'')}','${x}')">${x[0].toUpperCase()+x.slice(1)}</button>`).join('')}</div></div>`;
    }).join(''):'<div class="muted" style="font-size:12.5px">No staff assigned yet.</div>'}</div>`};
};
function setStaffAtt(staffId,groupId,slot,status){ const date=state.dateISO; const ph=currentPhase(); const ex=DB.find('staffAttendance',r=>r.staffId===staffId&&r.date===date&&r.groupId===groupId); if(ex)DB.update('staffAttendance',ex.id,{status}); else DB.insert('staffAttendance',{staffId,groupId,phaseId:ph.id,date,role:slot,status}); render(); }

/* ============================================================
   CHECK-IN / CHECK-OUT
   ============================================================ */
function searchPeople(q){ q=q.toLowerCase().trim(); if(!q)return[]; const ph=currentPhase(); const set=new Map();
  DB.all('children').filter(c=>c.phaseId===ph.id).forEach(c=>{ if(c.name.toLowerCase().includes(q)||c.itsId.includes(q))set.set(c.id,c); });
  DB.all('parents').filter(p=>p.itsId.includes(q)||(p.mobile||'').includes(q)||p.name.toLowerCase().includes(q)).forEach(p=>{ parentChildren(p.id).forEach(c=>{ if(c.phaseId===ph.id)set.set(c.id,c); }); });
  return [...set.values()]; }
let ciQuery='';
SCREENS.checkin=function(){ return {title:'Child Check-in', html:`${subhead('Child check-in',fmtDate(state.dateISO))}
  <div class="search" style="margin-bottom:12px">${svg('search')}<input id="ci-q" placeholder="Student ITS, child name, Parent ITS or mobile" value="${esc(ciQuery)}" oninput="ciQuery=this.value;refreshCheckin('in')"></div>
  <div id="ci-res"></div>`, after:()=>refreshCheckin('in')};
};
SCREENS.checkout=function(){ return {title:'Child Check-out', html:`${subhead('Child check-out',fmtDate(state.dateISO))}
  <div class="search" style="margin-bottom:12px">${svg('search')}<input id="ci-q" placeholder="Student ITS, child name, Parent ITS or mobile" value="${esc(ciQuery)}" oninput="ciQuery=this.value;refreshCheckin('out')"></div>
  <div id="ci-res"></div>`, after:()=>refreshCheckin('out')};
};
function ciActionHtml(c,a,mode){
  const inDone=a&&a.present&&a.checkIn, outDone=a&&a.checkOut, first=esc(c.name.split(' ')[0]);
  if(mode==='in') return inDone?`<div class="banner ok"><div class="bi">${svg('check')}</div><div><b>Checked in at ${to12(a.checkIn)}</b></div></div>`:`<button class="btn block" onclick="doCheckIn(${c.id})">${svg('in')} Check in ${first}</button>`;
  if(!inDone) return `<div class="banner warn"><div class="bi">${svg('alert')}</div><div><b>Not checked in today</b></div></div>`;
  if(outDone) return `<div class="banner ok"><div class="bi">${svg('check')}</div><div><b>Checked out at ${to12(a.checkOut)}</b></div></div>`;
  return `<button class="btn block" onclick="doCheckOut(${c.id})">${svg('out')} Check out ${first}</button>`;
}
function ciSiblingRow(s,mode,date){
  const sa=attRec(s.id,date), sg=childGroupId(s.id,currentPhase().id), sgg=sg&&DB.byId('groups',sg);
  const done=mode==='in'?(sa&&sa.checkIn):(sa&&sa.checkOut);
  const end=done?`<span class="chip ok">${svg('check')}${mode==='in'?'In':'Out'}</span>`:`<button class="btn sm" onclick="${mode==='in'?'doCheckIn':'doCheckOut'}(${s.id})">${mode==='in'?'Check in':'Check out'}</button>`;
  return `<div class="row"><div class="av">${initials(s.name)}</div><div class="meta"><div class="nm">${esc(s.name)}</div><div class="sm">${sgg?esc(sgg.name):'Unassigned'}</div></div><div class="end">${end}</div></div>`;
}
function ciCard(c,mode,date){
  const gid=childGroupId(c.id,currentPhase().id), g=gid&&DB.byId('groups',gid), a=attRec(c.id,date);
  const mt=g&&DB.find('groupStaff',x=>x.groupId===g.id&&x.slot==='Main Teacher'), mteacher=mt&&DB.byId('staff',mt.staffId);
  const sibs=childParents(c.id).flatMap(p=>parentChildren(p.parent.id)).filter((x,i,arr)=>x.id!==c.id&&arr.findIndex(y=>y.id===x.id)===i);
  const av=c.photo?`<img src="${c.photo}" class="av" style="width:48px;height:48px;border:none">`:initials(c.name);
  const med=c.medicalAlert?`<span class="tag med">${svg('alert')}${esc(c.medicalAlert)}</span>`:'';
  const sibsHtml=sibs.length?`<div class="sec-h" style="margin:14px 2px 8px"><h3 style="font-size:13px">Siblings</h3></div>${sibs.map(s=>ciSiblingRow(s,mode,date)).join('')}`:'';
  return `<div class="card" style="margin-bottom:12px"><div class="row" style="border:none;box-shadow:none;padding:0"><div class="av" style="width:48px;height:48px">${av}</div><div class="meta"><div class="nm">${esc(c.name)} ${med}</div><div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span> · ${g?esc(g.name):'Unassigned'}</div></div></div>
    <div class="kvlist" style="margin-top:10px"><div class="c"><div class="k">Group room</div><div class="v" style="font-size:13px">${g?esc(g.room||'—'):'—'}</div></div><div class="c"><div class="k">Main Teacher</div><div class="v" style="font-size:13px">${mteacher?esc(mteacher.name):'—'}</div></div></div>
    <div style="margin-top:10px">${ciActionHtml(c,a,mode)}</div>${sibsHtml}</div>`;
}
function refreshCheckin(mode){ const el=$('#ci-res'); if(!el)return; const list=searchPeople(ciQuery); const date=state.dateISO;
  if(!ciQuery){ el.innerHTML=emptyState('search','Search to begin','Find a child by ITS ID, name, or their parent’s ITS / mobile.',''); return; }
  if(!list.length){ el.innerHTML=emptyState('search','No match','Check the ITS ID or try the parent’s number.',''); return; }
  el.innerHTML=list.map(c=>ciCard(c,mode,date)).join(''); }
function doCheckIn(childId){ const a=ensureAtt(childId); DB.update('childAttendance',a.id,{present:true,checkIn:a.checkIn||nowHM(),recordedBy:currentUser().name}); toast('Checked in'); refreshCheckin('in'); }
function doCheckOut(childId){ const a=attRec(childId,state.dateISO); if(!a||!a.present){toast('Child is not checked in','err');return;} openModal('Confirm check-out',`
  <div class="field"><label>Collected by (parent / guardian)</label><input class="control" id="co-by" placeholder="Name of person collecting"></div>
  <div class="field"><label>Time</label><input class="control" type="time" id="co-time" value="${nowHM()}"></div>
  <div class="muted" style="font-size:12px">Completed by ${esc(currentUser().name)}</div>`,
  `<button class="btn ghost block" onclick="closeModal()">Cancel</button><button class="btn block" onclick="confirmCheckOut(${childId})">${svg('out')} Confirm</button>`); }
function confirmCheckOut(childId){ const a=attRec(childId,state.dateISO); DB.update('childAttendance',a.id,{checkOut:val('co-time')||nowHM(),collectedBy:val('co-by'),checkedOutBy:currentUser().name}); closeModal(); toast('Checked out safely'); refreshCheckin('out'); }

/* ============================================================
   QUERIES (staff management)
   ============================================================ */
let qFilter='open';
SCREENS.queries=function(){ const ph=currentPhase();
  let list=DB.filter('queries',q=>q.phaseId===ph.id);
  if(qFilter==='open')list=list.filter(q=>q.status!=='Closed'); else if(qFilter!=='all')list=list.filter(q=>q.status===qFilter);
  list.sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
  return {title:'Parent Queries', html:`${subhead('Parent queries',ph.name)}
    <div class="filters" style="margin-bottom:12px">${['open','Submitted','In Review','Responded','Closed','all'].map(f=>`<button class="fchip ${qFilter===f?'on':''}" onclick="qFilter='${f}';render()">${f==='open'?'Open':f==='all'?'All':f}</button>`).join('')}</div>
    <div class="rows">${list.length?list.map(q=>queryRow(q,true)).join(''):emptyState('msg','No queries','Parent queries will appear here.','')}</div>`};
};
function queryStatusChip(s){ const map={'Submitted':'idle','In Review':'warn','Responded':'info','Closed':'ok'}; return `<span class="chip ${map[s]||'idle'}">${esc(s)}</span>`; }
function queryRow(q,staff){ const c=DB.byId('children',q.childId); const g=q.groupId&&DB.byId('groups',q.groupId);
  return `<button class="row" onclick="openQuery(${q.id},${staff?1:0})"><div class="av">${svg('msg')}</div><div class="meta"><div class="nm">${esc(q.subject)}</div><div class="sm">${esc(q.category)} · ${c?esc(c.name):''}${g?' · '+esc(g.name):''}</div></div><div class="end">${queryStatusChip(q.status)}</div></button>`; }
function openQuery(id,staff){ const q=DB.byId('queries',id); const c=DB.byId('children',q.childId); const p=DB.byId('parents',q.parentId); const g=q.groupId&&DB.byId('groups',q.groupId); const resp=DB.filter('queryResponses',r=>r.queryId===id).sort((a,b)=>(a.createdAt||'').localeCompare(b.createdAt||''));
  openModal(q.subject,`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">${queryStatusChip(q.status)}<span class="chip idle">${esc(q.category)}</span></div>
    <div class="kvlist" style="margin-bottom:12px"><div class="c"><div class="k">Child</div><div class="v" style="font-size:13px">${c?esc(c.name):'—'}</div></div><div class="c"><div class="k">Group</div><div class="v" style="font-size:13px">${g?esc(g.name):'—'}</div></div><div class="c"><div class="k">Parent</div><div class="v" style="font-size:13px">${p?esc(p.name):'—'}</div></div><div class="c"><div class="k">Submitted</div><div class="v" style="font-size:13px">${(q.createdAt||'').replace('T',' ')}</div></div></div>
    <div class="card" style="background:var(--surface-soft)"><div class="muted" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px">Message</div><div style="font-size:13.5px">${esc(q.message)}</div></div>
    <div class="sec-h"><h3 style="font-size:13px">Responses</h3></div>
    <div class="stack">${resp.length?resp.map(r=>`<div class="card" style="padding:11px;background:var(--wine-100);border-color:var(--wine-200)"><div style="font-size:13.5px">${esc(r.message)}</div><div class="muted" style="font-size:11px;margin-top:4px">${esc(r.byName||'Staff')} · ${(r.createdAt||'').replace('T',' ')}</div></div>`).join(''):'<div class="muted" style="font-size:12.5px">No responses yet.</div>'}</div>
    ${staff?`<div class="field" style="margin-top:14px"><label>Add response</label><textarea class="control" id="qr-msg" placeholder="Type your reply to the parent"></textarea></div>
      <div class="btnrow"><button class="btn sm" onclick="respondQuery(${id})">${svg('msg')} Send response</button>
        <button class="btn ghost sm" onclick="setQueryStatus(${id},'In Review')">Mark in review</button>
        <button class="btn ghost sm" onclick="setQueryStatus(${id},'Closed')">Close</button></div>`:''}`);
}
function respondQuery(id){ const msg=val('qr-msg'); if(!msg){toast('Enter a response','err');return;} DB.insert('queryResponses',{queryId:id,byName:currentUser().name,message:msg,createdAt:new Date().toISOString().slice(0,16)}); DB.update('queries',id,{status:'Responded'}); closeModal(); toast('Response sent'); render(); }
function setQueryStatus(id,status){ DB.update('queries',id,{status,closedAt:status==='Closed'?new Date().toISOString().slice(0,16):undefined}); closeModal(); toast('Status: '+status); render(); }

/* ============================================================
   REPORTS
   ============================================================ */
SCREENS.reports=function(){ const reps=[
    ['alloc','Student group allocation','Which child is in which group'],
    ['cap','Group capacity','Spaces used and available'],
    ['staffing','Group staffing','Staff assigned per group'],
    ['tt','Timetable assignment','Which timetable each group uses'],
    ['queries','Parent queries','All queries and their status'],
    ['att','Attendance','Present / absent by group & date']];
  return {title:'Reports', html:`${subhead('Reports','View on screen or export to CSV / Excel')}
    <div class="grid g2">${reps.map(r=>`<div class="card"><div style="display:flex;gap:10px;align-items:flex-start"><span style="width:38px;height:38px;border-radius:11px;background:var(--wine-100);color:var(--wine);display:grid;place-items:center;flex:none">${svg('report')}</span><div><div style="font-weight:800;font-size:14px">${r[1]}</div><div class="muted" style="font-size:12px">${r[2]}</div></div></div><div class="btnrow" style="margin-top:11px"><button class="btn ghost sm" onclick="viewReport('${r[0]}')">${svg('list')} View</button><button class="btn sm" onclick="exportReport('${r[0]}')">${svg('download')} Export</button></div></div>`).join('')}</div>`};
};
function reportData(kind){ const ph=currentPhase();
  if(kind==='alloc'){ return {h:['ITS','Name','Age','Group','Status'], r:phaseChildren(ph.id).map(c=>{const gid=childGroupId(c.id,ph.id);const g=gid&&DB.byId('groups',gid);return [c.itsId,c.name,ageFrom(c.dob),g?g.name:'—',g?'Assigned':'Unassigned'];})}; }
  if(kind==='cap'){ return {h:['Group','Age','Capacity','Assigned','Available'], r:phaseGroups(ph.id).map(g=>{const n=groupChildren(g.id).length;return [g.name,g.ageCategory,g.capacity,n,g.capacity-n];})}; }
  if(kind==='staffing'){ return {h:['Group','Main Teacher','Assistants','Talebaat','Maids','Status'], r:phaseGroups(ph.id).map(g=>{const gs=groupStaffList(g.id);const nm=s=>{const x=gs.find(y=>y.slot===s);const st=x&&DB.byId('staff',x.staffId);return st?st.name:'—';};const asst=[1,2,3].map(i=>nm('Assistant Teacher '+i)).filter(x=>x!=='—').join('; ')||'—';const tal=[1,2].map(i=>nm('Talebaat '+i)).filter(x=>x!=='—').join('; ')||'—';const md=[1,2].map(i=>nm('Maid '+i)).filter(x=>x!=='—').join('; ')||'—';const r=groupReadiness(g);return [g.name,nm('Main Teacher'),asst,tal,md,r.ready?'Complete':'Incomplete'];})}; }
  if(kind==='tt'){ return {h:['Group','Age','Timetable','Status'], r:phaseGroups(ph.id).map(g=>{const t=g.timetableTemplateId&&DB.byId('timetableTemplates',g.timetableTemplateId);return [g.name,g.ageCategory,t?t.name:(g.customTimetable&&g.customTimetable.length?'Custom':'—'),(t||(g.customTimetable&&g.customTimetable.length))?'Assigned':'Missing'];})}; }
  if(kind==='queries'){ return {h:['Date','Parent ITS','Student ITS','Group','Category','Status','Assigned'], r:DB.filter('queries',q=>q.phaseId===ph.id).map(q=>{const c=DB.byId('children',q.childId);const p=DB.byId('parents',q.parentId);const g=q.groupId&&DB.byId('groups',q.groupId);return [(q.createdAt||'').slice(0,10),p?p.itsId:'',c?c.itsId:'',g?g.name:'',q.category,q.status,q.assignedStaffId?(DB.byId('staff',q.assignedStaffId)||{}).name||'':''];})}; }
  if(kind==='att'){ const rows=[]; phaseDates(ph.id).forEach(d=>{ phaseGroups(ph.id).forEach(g=>{ const kids=groupChildren(g.id); const att=kids.map(c=>attRec(c.id,d)); const present=att.filter(a=>a&&a.present).length; const out=att.filter(a=>a&&a.checkOut).length; rows.push([d,g.name,kids.length,present,kids.length-present,out,present-out]); }); }); return {h:['Date','Group','Registered','Present','Absent','Checked out','Still inside'], r:rows}; }
  return {h:[],r:[]};
}
function exportReport(kind){ const d=reportData(kind); exportCSV('report-'+kind+'.csv',d.h,d.r); }
function viewReport(kind){ const d=reportData(kind); openModal('Report',`<div class="tablewrap"><table class="data"><thead><tr>${d.h.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${d.r.map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,`<button class="btn ghost block" onclick="closeModal()">Close</button><button class="btn block" onclick="exportReport('${kind}')">${svg('download')} Export CSV</button>`); }

/* ============================================================
   DAILY + PHASE CLOSING
   ============================================================ */
SCREENS.closing=function(){ const ph=currentPhase(); const date=state.dateISO; const gs=phaseGroups(ph.id);
  const att=DB.filter('childAttendance',a=>a.phaseId===ph.id&&a.date===date&&a.present); const inside=att.filter(a=>!a.checkOut);
  const openIssues=DB.filter('issues',i=>i.phaseId===ph.id&&i.status!=='closed');
  const checks=[['All present children checked out',inside.length===0,`${inside.length} still inside`],['Attendance recorded',att.length>0,`${att.length} present marked`],['Issues reviewed',openIssues.length===0,`${openIssues.length} open`]];
  const canClose=checks.every(c=>c[1]); const closed=(ph.closedDates||[]).includes(date);
  return {title:'Daily Closing', html:`${subhead('Daily closing',fmtDate(date))}
    ${closed?'<div class="banner ok"><div class="bi">'+svg('check')+'</div><div><b>This day is closed</b></div></div>':`<div class="banner ${canClose?'ok':'warn'}"><div class="bi">${svg('shield')}</div><div><b>${canClose?'Ready to close the day':'Not ready to close'}</b><p>${checks.filter(c=>!c[1]).length} checks remaining</p></div></div>`}
    <div class="stack" style="margin-top:12px">${checks.map(c=>`<div class="card" style="display:flex;align-items:center;gap:11px;padding:12px 14px"><div class="ck ${c[1]?'ok on':''}">${svg(c[1]?'check':'clock')}</div><div style="flex:1"><b style="font-size:13.5px">${c[0]}</b><div class="muted" style="font-size:12px">${c[2]}</div></div>${c[1]?'<span class="chip ok">Clear</span>':'<span class="chip warn">Pending</span>'}</div>`).join('')}</div>
    ${inside.length?`<div class="sec-h"><h3>Still inside</h3></div><div class="rows">${inside.map(a=>{const c=DB.byId('children',a.childId);const g=DB.byId('groups',a.groupId);return `<div class="row"><div class="av">${initials(c.name)}</div><div class="meta"><div class="nm">${esc(c.name)}</div><div class="sm">${g?esc(g.name):''} · in ${to12(a.checkIn)}</div></div><div class="end"><button class="btn sm" onclick="doCheckOut(${c.id})">Check out</button></div></div>`;}).join('')}</div>`:''}
    <button class="btn dark block lg" style="margin-top:16px" ${canClose&&!closed?'':'disabled'} onclick="closeDay()">${svg('door')} Close ${fmtDateShort(date)}</button>`};
};
function closeDay(){ const ph=currentPhase(); const dates=new Set(ph.closedDates||[]); dates.add(state.dateISO); DB.update('phases',ph.id,{closedDates:[...dates]}); toast('Day closed'); render(); }
SCREENS.phaseclosing=function(){ const ph=currentPhase(); const gs=phaseGroups(ph.id); const dates=phaseDates(ph.id);
  const kids=phaseChildren(ph.id); const allAtt=DB.filter('childAttendance',a=>a.phaseId===ph.id&&a.present);
  const inside=allAtt.filter(a=>!a.checkOut).length; const openQ=DB.filter('queries',q=>q.phaseId===ph.id&&q.status!=='Closed').length;
  const daysClosed=(ph.closedDates||[]).length; const notReady=gs.filter(g=>!groupReadiness(g).ready).length;
  const checks=[['Every day closed',daysClosed>=dates.length,`${daysClosed}/${dates.length} days`],['No child still inside',inside===0,`${inside} inside`],['No open parent queries',openQ===0,`${openQ} open`],['All groups complete',notReady===0,`${notReady} incomplete`]];
  const canClose=checks.every(c=>c[1]);
  const summary=[['Registered children',kids.length],['Assigned',kids.filter(c=>childGroupId(c.id,ph.id)).length],['Groups',gs.length],['Groups ready',gs.filter(g=>groupReadiness(g).ready).length],['Operating days',dates.length],['Days closed',daysClosed],['Queries',DB.filter('queries',q=>q.phaseId===ph.id).length]];
  return {title:'Phase Closing', html:`${subhead('Phase closing',ph.name)}
    <div class="banner ${canClose?'ok':'warn'}"><div class="bi">${svg('shield')}</div><div><b>${ph.closed?'Phase closed':canClose?'Ready to close phase':'Phase cannot close yet'}</b><p>${checks.filter(c=>!c[1]).length} checks remaining</p></div></div>
    <div class="stack" style="margin-top:12px">${checks.map(c=>`<div class="card" style="display:flex;align-items:center;gap:11px;padding:12px 14px"><div class="ck ${c[1]?'ok on':''}">${svg(c[1]?'check':'clock')}</div><div style="flex:1"><b style="font-size:13.5px">${c[0]}</b><div class="muted" style="font-size:12px">${c[2]}</div></div>${c[1]?'<span class="chip ok">Clear</span>':'<span class="chip warn">Pending</span>'}</div>`).join('')}</div>
    <div class="sec-h"><h3>Phase summary</h3></div>
    <div class="tiles" style="grid-template-columns:repeat(2,1fr)">${summary.map(s=>`<div class="tile"><span class="strip"></span><div class="tl">${s[0]}</div><div class="num tnum" style="font-size:22px">${s[1]}</div></div>`).join('')}</div>
    <button class="btn dark block lg" style="margin-top:16px" ${canClose&&!ph.closed?'':'disabled'} onclick="closePhase()">${svg('door')} Close ${esc(ph.name)}</button>
    <div class="muted" style="font-size:11.5px;text-align:center;margin-top:8px">Closing is enabled only when every check is clear — keeping every child accounted for.</div>`};
};
function closePhase(){ const ph=currentPhase(); DB.update('phases',ph.id,{closed:true}); toast('Phase closed'); render(); }


/* ---------- next module ---------- */


/* ============================================================
   PARENT PORTAL  (visibility enforced to linked children only)
   ============================================================ */
function parentSelf(){ return DB.byId('parents',currentUser().parentId); }
function myChildren(){ const p=parentSelf(); return p?parentChildren(p.id):[]; }
function ownsChild(childId){ return myChildren().some(c=>c.id===childId); }

SCREENS['p-children']=function(){ const kids=myChildren();
  return {title:'My Children', html:`${subhead('My children','Tap a child to see their day')}
    <div class="stack">${kids.length?kids.map(c=>{ const gid=childGroupId(c.id,c.phaseId); const g=gid&&DB.byId('groups',gid); const ph=DB.byId('phases',c.phaseId);
      return `<button class="card" style="text-align:left;display:flex;align-items:center;gap:13px;width:100%" onclick="go('p-profile',{id:${c.id}})">
        <div class="av" style="width:52px;height:52px">${c.photo?`<img src="${c.photo}" class="av" style="width:52px;height:52px;border:none">`:initials(c.name)}</div>
        <div style="flex:1;min-width:0"><div style="font-weight:800;font-size:16px">${esc(c.name)}</div><div class="muted" style="font-size:12.5px"><span class="mono">ITS ${esc(c.itsId)}</span> · ${ph?esc(ph.name):''}</div><div style="margin-top:6px">${g?`<span class="chip wine">${esc(g.name)}</span>`:'<span class="chip idle">Group pending</span>'} ${c.medicalAlert?'<span class="chip warn">'+svg('alert')+'Medical</span>':''}</div></div>
        <span class="muted">${svg('chev')}</span></button>`;
    }).join(''):emptyState('child','No children linked','Your linked children will appear here.','')}</div>`};
};
SCREENS['p-profile']=function(p){ if(!ownsChild(p.id))return{title:'Profile',html:emptyState('lock','Not available','You can only view your own children.',`<button class="btn" onclick="go('p-children')">My children</button>`)};
  const c=DB.byId('children',p.id); const ph=DB.byId('phases',c.phaseId); const gid=childGroupId(c.id,c.phaseId); const g=gid&&DB.byId('groups',gid);
  const staff=g?groupStaffList(g.id).map(x=>({slot:x.slot,s:DB.byId('staff',x.staffId)})).filter(x=>x.s&&x.s.visibleToParents!==false):[];
  const tt=g?groupTimetable(g):[]; const nowT=nowHM(); const inHours=ph&&todayISO()>=ph.startDate&&todayISO()<=ph.endDate;
  const curIdx=inHours?tt.findIndex(it=>it.start<=nowT&&nowT<it.end):-1;
  const att=DB.filter('childAttendance',a=>a.childId===c.id).sort((a,b)=>b.date.localeCompare(a.date));
  const qs=DB.filter('queries',q=>q.childId===c.id&&q.parentId===currentUser().parentId).sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
  return {title:c.name, html:`${subhead(c.name,'ITS '+c.itsId,'p-children')}
    <div class="card"><div class="row" style="border:none;box-shadow:none;padding:0"><div class="av" style="width:56px;height:56px">${c.photo?`<img src="${c.photo}" class="av" style="width:56px;height:56px;border:none">`:initials(c.name)}</div><div class="meta"><div class="nm" style="font-size:17px">${esc(c.name)}</div><div class="sm">Age ${ageFrom(c.dob)} · ${ph?esc(ph.name):''}</div></div></div>
      ${c.medicalAlert?'<div class="banner warn" style="margin-top:11px"><div class="bi">'+svg('alert')+'</div><div><b>Medical alert</b><p>'+esc(c.medicalAlert)+'</p></div></div>':''}
      <div class="kvlist" style="margin-top:11px"><div class="c"><div class="k">Phase dates</div><div class="v" style="font-size:12.5px">${ph?fmtDateShort(ph.startDate)+'–'+fmtDateShort(ph.endDate):'—'}</div></div><div class="c"><div class="k">Daily timing</div><div class="v" style="font-size:12.5px">${ph?to12(ph.startTime)+'–'+to12(ph.endTime):'—'}</div></div></div></div>
    <div class="sec-h"><h3>Group</h3></div>
    ${g?`<div class="card"><div style="font-weight:800;font-size:15px">${esc(g.name)}</div><div class="muted" style="font-size:12.5px">${esc(g.code)} · Age ${esc(g.ageCategory)} · ${esc(g.room||'Room TBA')}</div><div style="margin-top:8px">${groupReadiness(g).ready?'<span class="chip ok">'+svg('check')+'Ready</span>':'<span class="chip warn">Being finalised</span>'}</div></div>`:'<div class="card muted" style="font-size:13px">Group assignment is being finalised.</div>'}
    <div class="sec-h"><h3>Group staff</h3></div>
    <div class="card">${staff.length?staff.map(x=>`<div class="staffslot"><div style="flex:1"><div class="role">${esc(x.slot)}</div><div class="nm">${esc(x.s.name)}</div></div>${x.s.mobile?`<a class="mob" href="tel:${esc(x.s.mobile)}">${svg('phone')} ${esc(x.s.mobile)}</a>`:''}</div>`).join(''):'<div class="muted" style="font-size:12.5px">Staff details will be shared once approved by administration.</div>'}</div>
    <div class="sec-h"><h3>Timetable</h3>${curIdx>=0?'<span class="chip info">Now: '+esc(tt[curIdx].activity)+'</span>':''}</div>
    <div class="card">${tt.length?tt.map((it,i)=>`<div class="tt-row ${i===curIdx?'now':''}"><div class="t">${to12(it.start)}<br>${to12(it.end)}</div><div><div class="a">${esc(it.activity)}</div>${it.location?`<div class="l">${esc(it.location)}</div>`:''}${it.notes?`<div class="l">${esc(it.notes)}</div>`:''}</div></div>`).join(''):'<div class="muted" style="font-size:12.5px">Timetable will appear once assigned.</div>'}</div>
    <div class="sec-h"><h3>Attendance</h3></div>
    <div class="card">${att.length?att.slice(0,8).map(a=>`<div class="staffslot"><div style="flex:1"><div class="nm" style="font-size:13.5px">${fmtDate(a.date)}</div><div class="muted" style="font-size:11.5px">${a.present?'In '+to12(a.checkIn||'')+(a.checkOut?' · Out '+to12(a.checkOut):' · inside'):'—'}</div></div>${a.present?'<span class="chip ok">Present</span>':'<span class="chip idle">Absent</span>'}</div>`).join(''):'<div class="muted" style="font-size:12.5px">No attendance recorded yet.</div>'}</div>
    <div class="sec-h"><h3>Queries</h3><button class="btn sm" onclick="go('p-raise',{id:${c.id}})">${svg('plus')} New</button></div>
    <div class="rows">${qs.length?qs.map(q=>queryRow(q,false)).join(''):'<div class="muted" style="font-size:12.5px">No queries for this child.</div>'}</div>`};
};
SCREENS['p-timetable']=function(){ const kids=myChildren(); if(!kids.length)return{title:'Timetable',html:emptyState('cal','No children','','')};
  let cid=state.params.child||kids[0].id; if(!ownsChild(cid))cid=kids[0].id; const c=DB.byId('children',cid); const gid=childGroupId(c.id,c.phaseId); const g=gid&&DB.byId('groups',gid); const tt=g?groupTimetable(g):[];
  const nowT=nowHM(); const ph=DB.byId('phases',c.phaseId); const inHours=ph&&todayISO()>=ph.startDate&&todayISO()<=ph.endDate; const curIdx=inHours?tt.findIndex(it=>it.start<=nowT&&nowT<it.end):-1;
  return {title:'Timetable', html:`${subhead('Timetable',g?g.name:'')}
    ${kids.length>1?`<div class="filters" style="margin-bottom:12px">${kids.map(k=>`<button class="fchip ${k.id===cid?'on':''}" onclick="go('p-timetable',{child:${k.id}})">${esc(k.name.split(' ')[0])}</button>`).join('')}</div>`:''}
    <div class="card">${tt.length?tt.map((it,i)=>`<div class="tt-row ${i===curIdx?'now':''}"><div class="t">${to12(it.start)}<br>${to12(it.end)}</div><div><div class="a">${esc(it.activity)}</div>${it.location?`<div class="l">${esc(it.location)}</div>`:''}</div></div>`).join(''):emptyState('clock','No timetable yet','It will appear once the group is set up.','')}</div>`};
};
SCREENS['p-queries']=function(){ const pid=currentUser().parentId; const kids=myChildren();
  const qs=DB.filter('queries',q=>q.parentId===pid).sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
  const open=qs.filter(q=>q.status!=='Closed'), closed=qs.filter(q=>q.status==='Closed');
  return {title:'Queries', html:`${subhead('Queries','Ask the Happy Care team')}
    <button class="btn block" style="margin-bottom:14px" onclick="go('p-raise',{id:${kids[0]?kids[0].id:0}})">${svg('plus')} Raise a new query</button>
    <div class="sec-h"><h3>Open</h3></div><div class="rows">${open.length?open.map(q=>queryRow(q,false)).join(''):'<div class="muted" style="font-size:12.5px">No open queries.</div>'}</div>
    <div class="sec-h"><h3>Resolved</h3></div><div class="rows">${closed.length?closed.map(q=>queryRow(q,false)).join(''):'<div class="muted" style="font-size:12.5px">Nothing resolved yet.</div>'}</div>`};
};
SCREENS['p-raise']=function(p){ const kids=myChildren(); let cid=p.id&&ownsChild(p.id)?p.id:(kids[0]&&kids[0].id);
  return {title:'Raise Query', html:`${subhead('Raise a query','We already know your child’s details','p-queries')}
    <div class="card">
      <div class="field"><label>About which child</label><select class="control" id="rq-child">${kids.map(k=>`<option value="${k.id}" ${k.id===cid?'selected':''}>${esc(k.name)}</option>`).join('')}</select></div>
      <div class="field"><label>Category</label><select class="control" id="rq-cat">${['Group Assignment','Staff','Timetable','Attendance','Pickup','Medical or Special Requirement','General','Other'].map(x=>`<option>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Subject <span class="req">*</span></label><input class="control" id="rq-subj" placeholder="Short summary"></div>
      <div class="field"><label>Message <span class="req">*</span></label><textarea class="control" id="rq-msg" rows="5" placeholder="How can we help?"></textarea></div>
      <div class="field"><label>Preferred contact <span class="muted">(optional)</span></label><select class="control" id="rq-contact"><option value="">No preference</option><option>Call</option><option>Message</option><option>In person at pickup</option></select></div>
      <button class="btn block" onclick="submitQuery()">${svg('msg')} Submit query</button>
    </div>`};
};
function submitQuery(){ const cid=Number($('#rq-child').value); if(!ownsChild(cid)){toast('Invalid child','err');return;} const subj=val('rq-subj'),msg=val('rq-msg'); if(!subj||!msg){toast('Subject and message required','err');return;}
  const c=DB.byId('children',cid); const q=DB.insert('queries',{parentId:currentUser().parentId,childId:cid,phaseId:c.phaseId,groupId:childGroupId(cid,c.phaseId),category:$('#rq-cat').value,subject:subj,message:msg,contactPref:$('#rq-contact').value,status:'Submitted',createdAt:new Date().toISOString().slice(0,16)});
  toast('Query submitted'); go('p-queries'); }
SCREENS['p-account']=function(){ const p=parentSelf(); const u=currentUser(); const kids=myChildren();
  return {title:'Profile', html:`${subhead('My profile','')}
    <div class="card"><div class="row" style="border:none;box-shadow:none;padding:0"><div class="av" style="width:52px;height:52px;background:var(--gold-100);color:var(--gold)">${initials(u.name)}</div><div class="meta"><div class="nm" style="font-size:16px">${esc(u.name)}</div><div class="sm">Parent · <span class="mono">ITS ${esc(u.itsId)}</span></div></div></div>
      <div class="kvlist" style="margin-top:11px"><div class="c"><div class="k">Mobile</div><div class="v" style="font-size:13px">${esc(p?p.mobile||'—':'—')}</div></div><div class="c"><div class="k">Pickup</div><div class="v" style="font-size:13px">${p&&p.authorisedPickup?'Authorised':'Not set'}</div></div></div></div>
    <div class="sec-h"><h3>Linked children</h3></div>
    <div class="rows">${kids.map(c=>`<button class="row" onclick="go('p-profile',{id:${c.id}})"><div class="av">${initials(c.name)}</div><div class="meta"><div class="nm">${esc(c.name)}</div><div class="sm"><span class="mono">ITS ${esc(c.itsId)}</span></div></div><div class="end">${svg('chev')}</div></button>`).join('')}</div>
    <button class="btn dark block lg" style="margin-top:16px" onclick="logout()">${svg('logout')} Sign out</button>`};
};


/* ---------- next module ---------- */



window.fillQuickLogin = function(its, pw) {
  const itsEl = document.getElementById('li-its');
  const pwEl = document.getElementById('li-pw');
  if (itsEl && pwEl) {
    if (its.startsWith('600')) {
      if (loginMode !== 'parent') {
        setLoginMode('parent');
        setTimeout(() => {
          document.getElementById('li-its').value = its;
          document.getElementById('li-pw').value = pw;
          document.getElementById('li-go').click();
        }, 120);
        return;
      }
    } else {
      if (loginMode !== 'staff') {
        setLoginMode('staff');
        setTimeout(() => {
          document.getElementById('li-its').value = its;
          document.getElementById('li-pw').value = pw;
          document.getElementById('li-go').click();
        }, 120);
        return;
      }
    }
    itsEl.value = its;
    pwEl.value = pw;
    itsEl.style.transform = 'scale(1.02)';
    pwEl.style.transform = 'scale(1.02)';
    setTimeout(() => {
      itsEl.style.transform = 'none';
      pwEl.style.transform = 'none';
      document.getElementById('li-go').click();
    }, 150);
  }
};

function renderChangePasswordScreen(u) {
  return `<div class="pw-change-overlay"><div class="login-card" style="max-width:420px">
    <div class="eyebrow" style="text-align:center;letter-spacing:0.18em;margin-bottom:6px;color:var(--gold);font-weight:700">SECURITY SETUP</div>
    <h2 style="font-family:var(--serif);font-size:26px;color:var(--wine);text-align:center;margin-bottom:8px">Set Custom Password</h2>
    <p class="muted" style="font-size:13px;text-align:center;margin-bottom:18px">First time logging in? Please create a secure password to access your Happy Care dashboard.</p>
    <div class="field"><label>New Password</label><input class="control" type="password" id="pwc-new" placeholder="Enter new password"></div>
    <div class="field"><label>Confirm Password</label><input class="control" type="password" id="pwc-conf" placeholder="Confirm your password"></div>
    <button class="btn block lg" onclick="saveCustomPassword(${u.id})">${svg('check')} Set Password</button>
  </div></div>`;
}

function saveCustomPassword(userId) {
  const pw = val('pwc-new'), conf = val('pwc-conf');
  if(!pw) { toast('Enter a new password','err'); return; }
  if(pw.length < 4) { toast('Password must be at least 4 characters','err'); return; }
  if(pw !== conf) { toast('Passwords do not match','err'); return; }
  
  const u = DB.byId('users', userId);
  if(u) {
    const salt = rndSalt();
    DB.update('users', userId, {
      salt: salt,
      hash: hashPw(pw, salt),
      needsPasswordChange: false
    });
    toast('Password set successfully!');
    render();
  }
}

function openForgotPassword() {
  openModal('Reset Password', `
    <p class="muted" style="font-size:12.5px;margin-bottom:12px">Enter your registered ITS ID and Mobile Number to reset your password to default.</p>
    <div class="field"><label>ITS ID</label><input class="control" id="fp-its" inputmode="numeric" placeholder="e.g. 30456117"></div>
    <div class="field"><label>Registered Mobile Number</label><input class="control" id="fp-mob" inputmode="tel" placeholder="e.g. 9820011234"></div>
  `, `
    <button class="btn ghost block" onclick="closeModal()">Cancel</button>
    <button class="btn block" onclick="submitForgotPassword()">${svg('swap')} Reset Password</button>
  `);
}

function submitForgotPassword() {
  const its = val('fp-its'), mob = val('fp-mob');
  if(!its || !mob) { toast('ITS ID and Mobile Number are required','err'); return; }
  
  const u = DB.find('users', x => x.itsId === its.trim());
  if(!u) { toast('No user account matches that ITS ID','err'); return; }
  
  let record = null;
  if(u.role === 'parent') {
    record = DB.byId('parents', u.parentId);
  } else {
    record = DB.byId('staff', u.staffId) || DB.find('staff', x => x.itsId === its.trim());
  }
  
  if(!record || !record.mobile || record.mobile.trim() !== mob.trim()) {
    toast('Mobile number does not match registered records','err');
    return;
  }
  
  const salt = rndSalt();
  DB.update('users', u.id, {
    salt: salt,
    hash: hashPw('happycare123', salt),
    needsPasswordChange: true
  });
  
  closeModal();
  openModal('Password Reset Success', `
    <div class="banner ok"><div class="bi">${svg('check')}</div>
      <div><b>Password Reset Successful</b>
        <p>Your password has been reset back to the default: <b style="font-size:13px;color:var(--wine)">happycare123</b></p>
      </div>
    </div>
    <p style="font-size:12.5px;margin-top:12px;color:var(--ink-soft)">Please sign in using the default password. You will be prompted to create your own secure custom password immediately.</p>
  `, `<button class="btn block" onclick="closeModal()">OK</button>`);
}

function adminResetUserPassword(userId, userName) {
  if(!confirm('Reset password for ' + userName + ' back to the default "happycare123"?')) return;
  const u = DB.find('users', x => x.parentId === userId || x.staffId === userId || (x.role === 'parent' && DB.byId('parents', x.parentId)?.id === userId));
  const userObj = u || DB.byId('users', userId);
  if(userObj) {
    const salt = rndSalt();
    DB.update('users', userObj.id, {
      salt: salt,
      hash: hashPw('happycare123', salt),
      needsPasswordChange: true
    });
    toast('Password reset to default for ' + userName);
  } else {
    toast('No user account linked to reset','err');
  }
}


function uploadStaffDocument(inputEl, fieldName, hiddenInputId, previewContainerId) {
  const file = inputEl.files[0];
  if(!file) return;
  
  const previewEl = document.getElementById(previewContainerId);
  if(previewEl) previewEl.innerHTML = '<span style="font-size:12px;color:var(--wine)">Uploading & compressing...</span>';
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      let w = img.width, h = img.height;
      const max = 600;
      if (w > max || h > max) {
        if (w > h) { h = Math.round(h * max / w); w = max; }
        else { w = Math.round(w * max / h); h = max; }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const base64 = canvas.toDataURL('image/jpeg', 0.65);
      
      const hiddenEl = document.getElementById(hiddenInputId);
      if(hiddenEl) hiddenEl.value = base64;
      
      if(previewEl) {
        previewEl.innerHTML = `<img src="${base64}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${base64.replace("'","\\'")}', '${fieldName === 'panImage' ? 'PAN Card' : 'Cancelled Cheque'}')">`;
      }
      toast('Document uploaded');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function previewImage(base64, title) {
  openModal(title, `
    <div style="text-align:center;padding:10px">
      <img src="${base64}" style="max-width:100%;max-height:70vh;border-radius:8px;box-shadow:var(--shadow);border:1px solid var(--line)">
      <div style="margin-top:16px"><a href="${base64}" download="${title.toLowerCase().replace(' ', '_')}.jpg" class="btn sm" style="display:inline-flex;align-items:center;gap:6px">${svg('download')} Download Image</a></div>
    </div>
  `);
}

function openStaffFinancialModal() {
  const u = currentUser();
  if(!u.staffId) return;
  const s = DB.byId('staff', u.staffId);
  if(!s) { toast('Staff profile not found','err'); return; }
  
  openModal('My Bank & PAN Details', `
    <p class="muted" style="font-size:12.5px;margin-bottom:14px">Provide your bank account details and upload verification documents for payouts.</p>
    <div class="formrow two">
      <div class="field"><label>Bank Name</label><input class="control" id="mysf-bank-name" value="${esc(s.bankName||'')}"></div>
      <div class="field"><label>Account Number</label><input class="control" id="mysf-bank-acc" value="${esc(s.bankAccount||'')}"></div>
    </div>
    <div class="formrow two">
      <div class="field"><label>IFSC Code</label><input class="control" id="mysf-bank-ifsc" value="${esc(s.bankIfsc||'')}"></div>
      <div class="field"><label>PAN Card Number</label><input class="control" id="mysf-pan-num" value="${esc(s.panNumber||'')}"></div>
    </div>
    <div class="formrow two" style="margin-top:10px">
      <div class="field"><label>PAN Card Image</label>
        <input type="file" accept="image/*" id="mysf-pan-img-file" onchange="uploadStaffDocument(this, 'panImage', 'mysf-pan-img', 'mysf-pan-preview')" style="font-size:12px">
        <input type="hidden" id="mysf-pan-img" value="${s.panImage||''}">
        <div id="mysf-pan-preview" style="margin-top:8px">${s.panImage ? `<img src="${s.panImage}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${s.panImage.replace("'","\\'")}', 'PAN Card')">` : '<span class="muted" style="font-size:12px">No upload</span>'}</div>
      </div>
      <div class="field"><label>Cancelled Cheque Image</label>
        <input type="file" accept="image/*" id="mysf-cheque-img-file" onchange="uploadStaffDocument(this, 'chequeImage', 'mysf-cheque-img', 'mysf-cheque-preview')" style="font-size:12px">
        <input type="hidden" id="mysf-cheque-img" value="${s.chequeImage||''}">
        <div id="mysf-cheque-preview" style="margin-top:8px">${s.chequeImage ? `<img src="${s.chequeImage}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${s.chequeImage.replace("'","\\'")}', 'Cancelled Cheque')">` : '<span class="muted" style="font-size:12px">No upload</span>'}</div>
      </div>
    </div>
  `, `
    <button class="btn ghost block" onclick="closeModal()">Cancel</button>
    <button class="btn block" onclick="saveStaffFinancials(${s.id})">Save Details</button>
  `);
}

function saveStaffFinancials(staffId) {
  const rec = {
    bankName: val('mysf-bank-name'),
    bankAccount: val('mysf-bank-acc'),
    bankIfsc: val('mysf-bank-ifsc'),
    panNumber: val('mysf-pan-num'),
    panImage: val('mysf-pan-img'),
    chequeImage: val('mysf-cheque-img')
  };
  DB.update('staff', staffId, rec);
  closeModal();
  toast('Financial details updated successfully!');
  render();
}


SCREENS['staff-profile']=function(){
  const u=currentUser();
  if(!u.staffId) {
    return {title:'Profile', html:emptyState('lock','Access Denied','Profile page is only for registered staff members.',`Base Admin accounts can manage settings from the Setup tab.`)};
  }
  const s=DB.byId('staff', u.staffId);
  if(!s) {
    return {title:'Profile', html:emptyState('lock','Profile Not Found','No staff record matches your account.',``)};
  }
  
  return {title:'My Profile', html:`
    <div class="card" style="margin-bottom:16px">
      <div class="row" style="border:none;box-shadow:none;padding:0">
        <div class="av" style="width:52px;height:52px;background:var(--gold-100);color:var(--gold);font-size:18px">${initials(s.name)}</div>
        <div class="meta">
          <div class="nm" style="font-size:16px;font-weight:700">${esc(s.name)}</div>
          <div class="sm">${esc(s.role)} · <span class="mono">ITS ${esc(s.itsId||'—')}</span></div>
        </div>
      </div>
    </div>
    
    <div class="card" style="margin-bottom:16px">
      <h3 style="font-family:var(--serif);font-size:18px;color:var(--wine);margin-bottom:12px;font-weight:700">Contact Details</h3>
      <div class="formrow two">
        <div class="field"><label>Mobile Number</label><input class="control" id="mysf-mob" value="${esc(s.mobile||'')}"></div>
        <div class="field"><label>Alternate Mobile</label><input class="control" id="mysf-alt" value="${esc(s.altMobile||'')}"></div>
      </div>
    </div>
    
    <div class="card" style="margin-bottom:16px">
      <h3 style="font-family:var(--serif);font-size:18px;color:var(--wine);margin-bottom:12px;font-weight:700">Bank & Verification Documents</h3>
      <div class="formrow two">
        <div class="field"><label>Bank Name</label><input class="control" id="mysf-bank-name" value="${esc(s.bankName||'')}"></div>
        <div class="field"><label>Account Number</label><input class="control" id="mysf-bank-acc" value="${esc(s.bankAccount||'')}"></div>
      </div>
      <div class="formrow two">
        <div class="field"><label>IFSC Code</label><input class="control" id="mysf-bank-ifsc" value="${esc(s.bankIfsc||'')}"></div>
        <div class="field"><label>PAN Card Number</label><input class="control" id="mysf-pan-num" value="${esc(s.panNumber||'')}"></div>
      </div>
      <div class="formrow two" style="margin-top:10px">
        <div class="field"><label>PAN Card Image</label>
          <input type="file" accept="image/*" id="mysf-pan-img-file" onchange="uploadStaffDocument(this, 'panImage', 'mysf-pan-img', 'mysf-pan-preview')" style="font-size:12px">
          <input type="hidden" id="mysf-pan-img" value="${s.panImage||''}">
          <div id="mysf-pan-preview" style="margin-top:8px">${s.panImage ? `<img src="${s.panImage}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${s.panImage.replace("'","\\'")}', 'PAN Card')">` : '<span class="muted" style="font-size:12px">No upload</span>'}</div>
        </div>
        <div class="field"><label>Cancelled Cheque Image</label>
          <input type="file" accept="image/*" id="mysf-cheque-img-file" onchange="uploadStaffDocument(this, 'chequeImage', 'mysf-cheque-img', 'mysf-cheque-preview')" style="font-size:12px">
          <input type="hidden" id="mysf-cheque-img" value="${s.chequeImage||''}">
          <div id="mysf-cheque-preview" style="margin-top:8px">${s.chequeImage ? `<img src="${s.chequeImage}" style="height:60px;border-radius:6px;border:1px solid var(--line);cursor:zoom-in" onclick="previewImage('${s.chequeImage.replace("'","\\'")}', 'Cancelled Cheque')">` : '<span class="muted" style="font-size:12px">No upload</span>'}</div>
        </div>
      </div>
    </div>
    
    <div style="display:flex;gap:12px;margin-top:20px">
      <button class="btn block lg" style="flex:1" onclick="saveStaffProfile(${s.id})">${svg('check')} Save Profile Details</button>
      <button class="btn dark block lg" style="flex:none;width:50px;padding:0" title="Sign out" onclick="logout()">${svg('logout')}</button>
    </div>
  `};
};

function saveStaffProfile(staffId) {
  const rec = {
    mobile: val('mysf-mob'),
    altMobile: val('mysf-alt'),
    bankName: val('mysf-bank-name'),
    bankAccount: val('mysf-bank-acc'),
    bankIfsc: val('mysf-bank-ifsc'),
    panNumber: val('mysf-pan-num'),
    panImage: val('mysf-pan-img'),
    chequeImage: val('mysf-cheque-img')
  };
  DB.update('staff', staffId, rec);
  toast('Profile and financial documents updated!');
  go('today');
}

/* BOOT */
function boot(){ DB.load(); seed(); restoreSession(); const u=currentUser(); if(u){ const p=DB.all('phases')[0]; if(p)setPhaseSilent(p.id); state.route=u.role==='parent'?'p-children':'today'; } render(); }
boot();