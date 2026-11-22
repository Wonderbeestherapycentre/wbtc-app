import { HttpError, mobileRoute } from "@/lib/mobile/http";
import { updateGoalForTherapist } from "@/lib/mobile/goals";

/**
 * PUT /api/mobile/goals/:id — therapist edits one of their goals (website: /goals/[id]/edit).
 * Body: { startDate, endDate, objectives: string[], status }. Returns the updated goal.
 */
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(
        request,
        async (user) => {
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return updateGoalForTherapist(user, id, body);
        },
        { roles: ["THERAPIST"] },
    );
}
