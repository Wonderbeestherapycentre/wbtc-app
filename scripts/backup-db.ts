import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    console.error("Error: DATABASE_URL is not set in .env");
    process.exit(1);
}

const sql = neon(DATABASE_URL);

async function backup() {
    const BACKUP_DIR = path.join(process.cwd(), "backups");
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(BACKUP_DIR, `backup_${timestamp}.sql`);

    console.log(`Starting database backup to ${backupPath}...`);

    try {
        // 1. Get all tables
        const tables: any[] = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
    `;

        const stream = fs.createWriteStream(backupPath);
        stream.write(`-- Database Backup Created at ${new Date().toISOString()}\n\n`);

        for (const { table_name } of tables) {
            console.log(`- Backing up table: ${table_name}`);
            stream.write(`-- Table: ${table_name}\n`);

            // 2. Clear table first (optional, but good for restore scripts)
            stream.write(`TRUNCATE TABLE "${table_name}" RESTART IDENTITY CASCADE;\n`);

            // 3. Get data
            const rows: any[] = await (sql as any).query(`SELECT * FROM "${table_name}"`);

            if (rows.length > 0) {
                const columns = Object.keys(rows[0]);
                const columnNames = columns.map(c => `"${c}"`).join(", ");

                for (const row of rows) {
                    const values = columns.map(col => {
                        const val = row[col];
                        if (val === null) return "NULL";
                        if (typeof val === "string") return `'${val.replace(/'/g, "''")}'`;
                        if (val instanceof Date) return `'${val.toISOString()}'`;
                        if (typeof val === "object") return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
                        return val;
                    }).join(", ");

                    stream.write(`INSERT INTO "${table_name}" (${columnNames}) VALUES (${values});\n`);
                }
            }
            stream.write("\n");
        }

        stream.end();
        console.log("Backup completed successfully!");

        // Clean up old backups (older than 7 days)
        const files = fs.readdirSync(BACKUP_DIR);
        const now = Date.now();
        const expiry = 7 * 24 * 60 * 60 * 1000;

        for (const file of files) {
            const filePath = path.join(BACKUP_DIR, file);
            const stats = fs.statSync(filePath);
            if (now - stats.mtimeMs > expiry) {
                fs.unlinkSync(filePath);
                console.log(`Deleted old backup: ${file}`);
            }
        }

    } catch (error) {
        console.error("Backup failed:", error);
        process.exit(1);
    }
}

backup();
