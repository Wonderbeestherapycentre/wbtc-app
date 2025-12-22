import { execSync } from "child_process";

console.log("🔄 Starting database reset...\n");

try {
    // Use drizzle-kit push to sync schema with database
    console.log("🗑️  Dropping all tables and syncing schema...");
    execSync("npm run db:push", { stdio: "inherit" });
    console.log("\n✨ Database schema synced successfully!\n");

    // Run seed script
    console.log("🌱 Running seed script...\n");
    execSync("npx tsx scripts/seed.ts", { stdio: "inherit" });

    console.log("\n🎉 Database reset and seeding completed!\n");
} catch (error) {
    console.error("❌ Error resetting database:", error);
    process.exit(1);
}
