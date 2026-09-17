import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// The Neon HTTP driver issues each query as a fetch() call; transient network
// blips surface as a hard "fetch failed" error with no retry. Wrap fetch so
// those blips are retried transparently instead of crashing every query path.
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 300;

neonConfig.fetchFunction = async (input: RequestInfo | URL, init?: RequestInit) => {
    for (let attempt = 0; ; attempt++) {
        try {
            return await fetch(input, init);
        } catch (error) {
            if (attempt >= MAX_RETRIES) throw error;
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS * (attempt + 1)));
        }
    }
};

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
