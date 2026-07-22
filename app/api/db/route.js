import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

const tables = [
  'users',
  'programs',
  'phases',
  'operatingDates',
  'groups',
  'children',
  'parents',
  'childParent',
  'staff',
  'groupStaff',
  'childGroup',
  'timetableTemplates',
  'childAttendance',
  'staffAttendance',
  'queries',
  'queryResponses',
  'issues',
  'meta'
];

export async function GET() {
  if (!sql) {
    return NextResponse.json({ fallback: true, msg: 'Database URL not configured' });
  }

  try {
    const data = {};
    const _seq = {};

    for (const t of tables) {
      const rows = await sql`SELECT * FROM ${sql(t)}`;
      data[t] = rows;
      
      let maxId = 0;
      for (const r of rows) {
        if (typeof r.id === 'number' && r.id > maxId) {
          maxId = r.id;
        }
      }
      _seq[t] = maxId;
    }

    return NextResponse.json({ fallback: false, data, _seq });
  } catch (error) {
    console.error('Error fetching database:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  if (!sql) {
    return NextResponse.json({ error: 'Database URL not configured' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { action, table, id, data } = body;

    // Handle full database sync/restore in a single transaction
    if (action === 'save_all') {
      await sql.begin(async (tx) => {
        // Truncate all tables
        for (const t of tables) {
          await tx`TRUNCATE TABLE ${tx(t)} RESTART IDENTITY CASCADE`;
        }

        // Insert all rows table by table
        for (const t of tables) {
          const rows = data[t] || [];
          for (const row of rows) {
            const sanitized = {};
            for (const key of Object.keys(row)) {
              if (row[key] !== undefined && row[key] !== null) {
                sanitized[key] = row[key];
              }
            }
            if (Object.keys(sanitized).length > 0) {
              await tx`INSERT INTO ${tx(t)} ${tx(sanitized)}`;
            }
          }

          // Reset serial sequences
          try {
            const seqName = `'"${t}"'`;
            await tx`SELECT setval(pg_get_serial_sequence(${seqName}, 'id'), COALESCE(MAX("id"), 1)) FROM ${tx(t)}`;
          } catch (seqError) {
            // Some tables might not have serial sequences, ignore
          }
        }
      });

      return NextResponse.json({ success: true });
    }

    if (action === 'wipe') {
      for (const t of tables) {
        await sql`TRUNCATE TABLE ${sql(t)} RESTART IDENTITY CASCADE`;
      }
      return NextResponse.json({ success: true });
    }

    if (!tables.includes(table)) {
      return NextResponse.json({ error: 'Invalid table name' }, { status: 400 });
    }

    if (action === 'insert') {
      const sanitized = {};
      for (const key of Object.keys(data)) {
        if (data[key] !== undefined && data[key] !== null) {
          sanitized[key] = data[key];
        }
      }

      await sql`INSERT INTO ${sql(table)} ${sql(sanitized)}`;

      if (sanitized.id) {
        try {
          const seqName = `'"${table}"'`;
          await sql`SELECT setval(pg_get_serial_sequence(${seqName}, 'id'), COALESCE(MAX("id"), 1)) FROM ${sql(table)}`;
        } catch (seqError) {
          // ignore
        }
      }

      return NextResponse.json({ success: true });
    } 
    
    if (action === 'update') {
      const { id: _, ...patch } = data;
      const sanitized = {};
      for (const key of Object.keys(patch)) {
        if (patch[key] !== undefined && patch[key] !== null) {
          sanitized[key] = patch[key];
        }
      }

      if (Object.keys(sanitized).length > 0) {
        await sql`UPDATE ${sql(table)} SET ${sql(sanitized)} WHERE "id" = ${id}`;
      }

      return NextResponse.json({ success: true });
    } 
    
    if (action === 'remove') {
      await sql`DELETE FROM ${sql(table)} WHERE "id" = ${id}`;
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid database action' }, { status: 400 });
  } catch (error) {
    console.error('Error executing database command:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
