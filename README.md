# Happy Care · Istefada Ilmiyah

A self-contained web app to manage children, parents, staff, groups, timetables,
daily attendance, check-in/out and parent queries during Happy Care.

## How to run
No server or install needed. Two options:

**A) One file (easiest — best for phones)**
- Open `Happy-Care-standalone.html` in any modern browser.

**B) Split files (for developers / editing)**
- Keep `index.html`, `styles.css`, `app.js` together in one folder.
- Open `index.html` in a browser.

Data is saved automatically in that browser (offline). Use the ☰ menu →
**Backup** to download a JSON copy, and **Restore** to load it on another
device — this is how you move or share data without a server.

## Demo logins (shown on the sign-in screen)
- Admin — ITS `10000001` / `admin123`
- Phase Supervisor — ITS `10000002` / `super123`
- Group Teacher — (Main Teacher of Group 1) / `teach123`
- Check-in / Pickup — ITS `10000004` / `desk123`
- Parent — ITS `6000001` / `parent123`

Admin → menu → **Reset demo data** restores the sample data at any time.

## Roles
- **Admin** — program & phases, import, groups, assignments, staff, timetables, queries, reports.
- **Supervisor** — all groups, attendance, queries, closing.
- **Teacher** — own group, attendance, queries.
- **Check-in / Pickup** — search, check children in/out.
- **Parent** — own children only: group, approved staff, timetable, attendance, queries.

## What's inside
Setup (auto-generates operating dates) · Children directory (add / CSV import /
parent linking) · Grouping (capacity, filters, bulk assign, auto-suggest) ·
Groups + readiness · Staff assignment · Timetable templates + assignment ·
Daily child & staff attendance · Check-in / Check-out (with siblings) ·
Parent queries (ticket style) · Reports (CSV export) · Daily & Phase closing.

## Notes & limits (v1, no server)
- Data lives in the browser it's used on. Use Backup/Restore to move it.
- Access rules are enforced in-app (no server); passwords are lightly hashed.
- To make this true multi-user with live sync, add a backend later — the data
  model (see the tables in app.js) is designed to map directly to SQL.
