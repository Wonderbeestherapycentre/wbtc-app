import { HttpError, mobileRoute } from "@/lib/mobile/http";
import { getParentFees, isMonth } from "@/lib/mobile/fees";

/** GET /api/mobile/fees[?month=YYYY-MM] — parents only (website PARENT_NAV "Fee Reports"). */
export async function GET(request: Request) {
    return mobileRoute(
        request,
        async (user) => {
            const month = new URL(request.url).searchParams.get("month") ?? undefined;
            if (month && !isMonth(month)) throw new HttpError(400, "Invalid month (use YYYY-MM).");
            return getParentFees(user, month);
        },
        { roles: ["PARENT"] },
    );
}
