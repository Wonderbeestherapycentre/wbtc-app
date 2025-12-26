
import 'dotenv/config';
import { db } from "@/lib/db";
import { homePrograms } from "@/lib/db/schema";
import { count, desc } from "drizzle-orm";

async function main() {
    try {
        console.log("Attempting to run the problematic query...");

        const data = await db.query.homePrograms.findMany({
            // limit: 10,
            orderBy: [desc(homePrograms.createdAt)],
            with: {
                child: true,
                therapy: true,
                therapist: true,
                tasks: true,
                submissions: {
                    orderBy: (submissions, { desc }) => [desc(submissions.date)],
                    with: {
                        submissionTasks: true,
                    },
                },
            }
        });

        console.log("Query successful. Rows:", data.length);
        console.log(JSON.stringify(data.slice(0, 1), null, 2));

    } catch (error) {
        console.error("Query failed!");
        console.error(error);
    }
}

main();
