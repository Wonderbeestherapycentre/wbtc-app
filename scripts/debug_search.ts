
import 'dotenv/config';
import { db } from "@/lib/db";
import { homePrograms, children } from "@/lib/db/schema";
import { count, desc, or, ilike, sql, and, eq, aliasedTable } from "drizzle-orm";

async function main() {
    try {
        console.log("Attempting to run the query with search...");

        const search = "test";
        const limit = 10;
        const offset = 0;
        const conditions = [];

        // Alias the children table for the subquery
        const c = aliasedTable(children, "c");

        if (search) {
            conditions.push(
                or(
                    ilike(homePrograms.title, `%${search}%`),
                    sql`EXISTS (
                        SELECT 1 FROM "children"
                        WHERE "children"."id" = ${homePrograms.childId}
                        AND "children"."name" ILIKE ${`%${search}%`}
                    )`
                )
            );
        }

        const [data] = await Promise.all([
            db.query.homePrograms.findMany({
                where: conditions.length > 0 ? and(...conditions) : undefined,
                limit,
                offset,
                orderBy: [desc(homePrograms.createdAt)],
                with: {
                    child: true,
                    therapy: true,
                    therapist: true,
                }
            })
        ]);

        console.log("Query successful. Rows:", data.length);

    } catch (error) {
        console.error("Query failed!");
        console.error(error);
    }
}

main();
