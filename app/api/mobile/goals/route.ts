import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { listGoals } from "@/lib/mobile/records";

/** GET /api/mobile/goals[?childId=] */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const childId = new URL(request.url).searchParams.get("childId") ?? undefined;
        if (childId && !isUuid(childId)) throw new HttpError(400, "Invalid child.");
        return { goals: await listGoals(user, childId) };
    });
}
