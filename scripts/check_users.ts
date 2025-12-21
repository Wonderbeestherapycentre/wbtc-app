
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

async function checkAdmin() {
    console.log("Checking DB Users...");
    const allUsers = await db.select().from(users);
    console.log("Total Users:", allUsers.length);
    allUsers.forEach(u => {
        console.log(`User: ${u.email}, Role: ${u.role}, ID: ${u.id}`);
    });
}

checkAdmin().catch(console.error);
