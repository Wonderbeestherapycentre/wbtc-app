import { HttpError, mobileRoute } from "@/lib/mobile/http";
import { addDaysIST, getSessions, todayIST } from "@/lib/mobile/data";

const DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_RANGE_DAYS = 120; // website schedule loads -30..+90 days

/**
 * GET /api/mobile/schedule?from=YYYY-MM-DD&to=YYYY-MM-DD   (IST dates, inclusive)
 * Defaults to today .. today+30. Parents get their children's sessions,
 * therapists get their own.
 */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const params = new URL(request.url).searchParams;
        const from = params.get("from") ?? todayIST();
        const to = params.get("to") ?? addDaysIST(from, 30);

        if (!DAY.test(from) || !DAY.test(to) || from > to || to > addDaysIST(from, MAX_RANGE_DAYS)) {
            throw new HttpError(400, `Invalid date range (use YYYY-MM-DD, up to ${MAX_RANGE_DAYS} days).`);
        }
        return { from, to, sessions: await getSessions(user, from, to) };
    });
}
