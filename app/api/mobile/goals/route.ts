import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { listGoals } from "@/lib/mobile/records";
import { createGoalsForTherapist } from "@/lib/mobile/goals";

/** GET /api/mobile/goals[?childId=] */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const childId = new URL(request.url).searchParams.get("childId") ?? undefined;
        if (childId && !isUuid(childId)) throw new HttpError(400, "Invalid child.");
        return { goals: await listGoals(user, childId) };
    });
}

/**
 * POST /api/mobile/goals — therapist creates goals (website: /goals/new).
 * Body: { childId, therapyId, startDate, endDate, objectives: string[], status }.
 * Like the website, each objective becomes its own goal.
 */
export async function POST(request: Request) {
    return mobileRoute(
        request,
        async (user) => {
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return createGoalsForTherapist(user, body);
        },
        { roles: ["THERAPIST"] },
    );
}
