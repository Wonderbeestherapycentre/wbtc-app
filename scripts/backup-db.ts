import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import { generateBackupSql } from "../lib/backup";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    console.error("Error: DATABASE_URL is not set in .env");
    process.exit(1);
}

const sql = neon(DATABASE_URL);

/**
 * Gets the backup directory path, handling Vercel's ephemeral storage if needed.
 */
export function getBackupDir() {
    // On Vercel, the only writable directory is /tmp
    if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
        return path.join('/tmp', 'backups');
    }
    return path.join(process.cwd(), "backups");
}

export async function runBackup() {
    const BACKUP_DIR = getBackupDir();
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `backup_${timestamp}.sql`;
    const backupPath = path.join(BACKUP_DIR, filename);

    console.log(`Starting database backup to ${backupPath}...`);

    try {
        const dump = await generateBackupSql((text: string) => (sql as any).query(text));
        fs.writeFileSync(backupPath, dump, "utf8");
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

        return { success: true, filename, path: backupPath };
    } catch (error) {
        console.error("Backup failed:", error);
        throw error;
    }
}

// Allow running via CLI
if (require.main === module) {
    runBackup();
}
