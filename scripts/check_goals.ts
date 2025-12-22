
import "dotenv/config";
import { db } from "../lib/db";
import { goals } from "../lib/db/schema";

async function check() {
    try {
        console.log("Checking goals table...");
        const result = await db.select().from(goals).limit(1);
        console.log("SUCCESS: Goals table exists.");
    } catch (e: any) {
        console.error("FAILURE: Goals table MISSING. " + e.message);
    }
    process.exit(0);
}

check();
