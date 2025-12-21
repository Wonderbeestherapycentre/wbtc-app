
import * as dotenv from "dotenv";
dotenv.config();

import { db } from "./lib/db/index";
import { categories } from "./lib/db/schema";
import { eq } from "drizzle-orm";

const DEFAULT_CATEGORIES = ["Food", "Transport", "Utilities", "Entertainment", "Health", "Shopping", "Housing", "Education"];

async function main() {
    console.log("Seeding Categories...");

    // Categories are now global.
    // We will treat these as System Default Categories.

    for (const name of DEFAULT_CATEGORIES) {
        // Check if exists
        const existing = await db.query.categories.findFirst({
            where: (categories, { eq }) => eq(categories.name, name)
        });

        if (!existing) {
            console.log(`Creating category: ${name}`);
            await db.insert(categories).values({
                name
            });
        } else {
            console.log(`Skipping ${name} (already exists)`);
        }
    }

    console.log("Done.");
    process.exit(0);
}

main();
