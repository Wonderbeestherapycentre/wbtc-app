import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);

async function seedDatabase() {
    console.log("🌱 Starting database seeding...\n");

    try {
        // Check if users table is empty
        const users = await sql`SELECT COUNT(*) as count FROM users`;
        const userCount = parseInt(users[0].count);

        if (userCount > 0) {
            console.log(`ℹ️  Database already has ${userCount} user(s). Skipping seed.\n`);
            return;
        }

        console.log("👤 Creating default admin user...");

        // Hash the password
        const hashedPassword = await bcrypt.hash("Admin@2025", 10);

        // Create admin user
        await sql`
            INSERT INTO users (id, name, email, password_hash, role, created_at)
            VALUES (
                gen_random_uuid(),
                'Admin',
                'wonderbeestherapycentre@gmail.com',
                ${hashedPassword},
                'ADMIN',
                NOW()
            )
        `;

        console.log("✅ Default admin user created successfully!");
        console.log("\n📧 Email: wonderbeestherapycentre@gmail.com");
        console.log("🔑 Password: Admin@2025\n");
        console.log("✨ Database seeding completed!\n");

    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
}

seedDatabase();
