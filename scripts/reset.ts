import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const client = neon(process.env.DATABASE_URL!);
const db = drizzle(client);

async function resetDatabase() {
    console.log("⚠️  Resetting database...");

    try {
        // Fetch actual existing tables in public schema
        // We use sql.raw or just sql for the query
        const res = await db.execute(sql`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_type = 'BASE TABLE'
        `);

        // Neon driver result handling
        const rows = (res as any).rows || res;
        const existingTableNames = new Set((rows as any[]).map((r: any) => r.table_name));

        const targetTables = [
            "home_program_submission_tasks",
            "home_program_submissions",
            "home_program_tasks",
            "home_programs",
            "session_notes",
            "goals",
            "child_therapies",
            "sessions",
            "therapies",
            "children",
            "users"
        ];

        // Filter to only existing tables
        const tablesToTruncate = targetTables.filter(t => existingTableNames.has(t));

        if (tablesToTruncate.length === 0) {
            console.log("ℹ️  No matching tables found to truncate.");
        } else {
            console.log(`🗑️  Truncating ${tablesToTruncate.length} tables: ${tablesToTruncate.join(", ")}`);

            // Construct raw query
            const truncateQuery = `TRUNCATE TABLE ${tablesToTruncate.map(t => `"${t}"`).join(", ")} CASCADE;`;

            await db.execute(sql.raw(truncateQuery));
            console.log("✅ Tables truncated.");
        }

        console.log("🌱 Seeding database...");

        // Create default admin user
        const hashedPassword = await bcrypt.hash("Admin@2025", 10);

        // Use drizzle sql templating for insert
        await db.execute(sql`
            INSERT INTO users (id, name, email, password_hash, role, created_at)
            VALUES (
                gen_random_uuid(),
                'Admin',
                'wonderbeestherapycentre@gmail.com',
                ${hashedPassword},
                'ADMIN',
                NOW()
            )
        `);

        console.log("✅ Default admin user created successfully!");
        console.log("\n📧 Email: wonderbeestherapycentre@gmail.com");
        console.log("🔑 Password: Admin@2025\n");
        console.log("✨ Database reset completed!\n");

    } catch (error) {
        console.error("❌ Error resetting database:", error);
        process.exit(1);
    }
}

resetDatabase();
