import { neon } from "@neondatabase/serverless";

type Query = (text: string) => Promise<any[]>;

function getQuery(): Query {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    const sql = neon(url);
    return (text: string) => (sql as any).query(text);
}

function toSqlValue(val: unknown): string {
    if (val === null || val === undefined) return "NULL";
    if (typeof val === "boolean") return val ? "TRUE" : "FALSE";
    if (typeof val === "number" || typeof val === "bigint") return String(val);
    if (val instanceof Date) return `'${val.toISOString()}'`;
    if (typeof val === "string") return `'${val.replace(/'/g, "''")}'`;
    return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
}

/**
 * Orders tables so that referenced (parent) tables come before tables that
 * reference them, so INSERTs restore without foreign-key violations.
 */
function sortByDependencies(tables: string[], deps: { child: string; parent: string }[]) {
    const remaining = new Set(tables);
    const ordered: string[] = [];
    while (remaining.size > 0) {
        const ready = [...remaining].filter(t =>
            !deps.some(d => d.child === t && d.parent !== t && remaining.has(d.parent))
        );
        // Circular references: fall back to remaining order rather than looping forever.
        const batch = ready.length > 0 ? ready : [...remaining];
        for (const t of batch.sort()) {
            ordered.push(t);
            remaining.delete(t);
        }
    }
    return ordered;
}

/** Builds a full SQL dump (all public tables) that can be restored with psql. */
export async function generateBackupSql(query: Query = getQuery()): Promise<string> {
    const tableRows = await query(`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    `);
    const depRows = await query(`
        SELECT tc.table_name AS child, ccu.table_name AS parent
        FROM information_schema.table_constraints tc
        JOIN information_schema.constraint_column_usage ccu
          ON tc.constraint_name = ccu.constraint_name AND tc.table_schema = ccu.table_schema
        WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_schema = 'public'
    `);

    const tables = sortByDependencies(
        tableRows.map(r => r.table_name as string),
        depRows as { child: string; parent: string }[]
    );

    const out: string[] = [];
    out.push(`-- Database Backup Created at ${new Date().toISOString()}`);
    out.push(`-- Restore with: psql "<DATABASE_URL>" -f <this file>`);
    out.push("");
    out.push("BEGIN;");
    out.push("");
    if (tables.length > 0) {
        out.push(`TRUNCATE TABLE ${tables.map(t => `"${t}"`).join(", ")} RESTART IDENTITY CASCADE;`);
        out.push("");
    }

    for (const table of tables) {
        out.push(`-- Table: ${table}`);
        const rows = await query(`SELECT * FROM "${table}"`);
        if (rows.length > 0) {
            const columns = Object.keys(rows[0]);
            const columnNames = columns.map(c => `"${c}"`).join(", ");
            for (const row of rows) {
                const values = columns.map(c => toSqlValue(row[c])).join(", ");
                out.push(`INSERT INTO "${table}" (${columnNames}) VALUES (${values});`);
            }
        }
        out.push("");
    }

    out.push("COMMIT;");
    out.push("");
    return out.join("\n");
}

export function backupFilename(date = new Date()) {
    return `wbtc_backup_${date.toISOString().replace(/[:.]/g, "-")}.sql`;
}
