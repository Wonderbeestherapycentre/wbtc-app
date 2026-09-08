/**
 * Provision the schema into a freshly-created (empty) database.
 *
 * This project syncs schema with `drizzle-kit push` (the generated SQL in
 * ./drizzle is stale — lib/db/schema.ts is the source of truth), so migrating
 * to a new database means: point push at the new URL, then seed a first admin.
 *
 * Usage:
 *   # uses DATABASE_URL from .env (set this to the new database first):
 *   npm run db:migrate:new
 *   # or target a database explicitly without touching .env:
 *   npm run db:migrate:new -- --url "postgresql://user:pass@host/new_db?sslmode=require"
 *
 * Flags:
 *   --url <conn>   Target connection string (else .env DATABASE_URL).
 *   --no-seed      Only create tables; don't insert the default admin user.
 *   --yes          Skip the confirmation prompt.
 */

import { execSync } from "child_process";
import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
import * as readline from "readline";

dotenv.config();

function getArg(name: string): string | undefined {
    const eq = process.argv.find((a) => a.startsWith(`--${name}=`));
    if (eq) return eq.split("=").slice(1).join("=");
    const idx = process.argv.indexOf(`--${name}`);
    if (idx !== -1 && process.argv[idx + 1] && !process.argv[idx + 1].startsWith("--")) {
        return process.argv[idx + 1];
    }
    return undefined;
}

const hasFlag = (name: string) => process.argv.includes(`--${name}`);

const explicitUrl = getArg("url");
const targetUrl = explicitUrl || process.env.DATABASE_URL;
const skipSeed = hasFlag("no-seed");
const autoYes = hasFlag("yes");

function redact(url: string) {
    return url.replace(/(:\/\/[^:]+:)[^@]+@/, "$1****@");
}

function dbName(url: string) {
    try {
        return new URL(url).pathname.replace(/^\//, "") || "(unknown)";
    } catch {
        return "(unparseable)";
    }
}

function ask(question: string): Promise<string> {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => rl.question(question, (a) => { rl.close(); resolve(a); }));
}

// Neon's HTTP driver occasionally throws transient "fetch failed" errors.
async function withRetry<T>(label: string, fn: () => Promise<T>, attempts = 3): Promise<T> {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === attempts) throw err;
            console.warn(`   ${label} failed (attempt ${i}/${attempts}), retrying...`);
            await new Promise((r) => setTimeout(r, 2000 * i));
        }
    }
    throw new Error("unreachable");
}

async function main() {
    if (!targetUrl) {
        console.error("❌ No target database URL.\n   Set DATABASE_URL in .env or pass --url \"postgresql://...\".");
        process.exit(1);
    }

    const source = explicitUrl ? "--url flag" : ".env DATABASE_URL";
    console.log(`\n🎯 Target database : ${dbName(targetUrl)}  (from ${source})`);
    console.log(`   Connection      : ${redact(targetUrl)}\n`);

    if (!autoYes) {
        const a = await ask(`Push schema + seed into "${dbName(targetUrl)}"? (yes/no) `);
        if (a.trim().toLowerCase() !== "yes") {
            console.log("Aborted.");
            process.exit(0);
        }
    }

    // 1. Create the tables from lib/db/schema.ts
    // drizzle.config.ts supplies schema/dialect/out and reads DATABASE_URL,
    // which we override here so push targets the new database.
    console.log("📦 Pushing schema (drizzle-kit push)...\n");
    execSync(`npx drizzle-kit push --force`, {
        stdio: "inherit",
        env: { ...process.env, DATABASE_URL: targetUrl },
    });

    const sql = neon(targetUrl);

    // 2. Verify
    const tables = await withRetry("verify", () => sql`
        SELECT table_name FROM information_schema.tables
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
        ORDER BY table_name
    `);
    console.log(`\n✅ ${tables.length} tables in target:`);
    console.log("   " + tables.map((t: any) => t.table_name).join(", ") + "\n");

    // 3. Seed a first admin so you can log in
    if (skipSeed) {
        console.log("↩️  --no-seed given, skipping admin creation.\n");
    } else {
        const rows = await withRetry("user count", () => sql`SELECT COUNT(*)::int AS count FROM users`) as any[];
        const count = rows[0].count;
        if (count > 0) {
            console.log(`ℹ️  users table already has ${count} row(s). Skipping admin seed.\n`);
        } else {
            const email = process.env.SEED_ADMIN_EMAIL || "wonderbeestherapycentre@gmail.com";
            const password = process.env.SEED_ADMIN_PASSWORD || "Admin@2025";
            const hash = await bcrypt.hash(password, 10);
            await withRetry("admin insert", () => sql`
                INSERT INTO users (id, name, email, password_hash, role, created_at)
                VALUES (gen_random_uuid(), 'Admin', ${email}, ${hash}, 'ADMIN', NOW())
            `);
            console.log("👤 Default admin created:");
            console.log(`   📧 ${email}`);
            console.log(`   🔑 ${password}\n`);
        }
    }

    console.log("🎉 New database is ready.");
    if (explicitUrl) console.log("   Update DATABASE_URL in .env to point the app at it.");
    console.log("");
}

main().catch((err) => {
    console.error("❌ Migration failed:", err);
    process.exit(1);
});
