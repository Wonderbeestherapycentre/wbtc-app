import { mobileRoute } from "@/lib/mobile/http";
import { getGoalFormOptions } from "@/lib/mobile/goals";

/** GET /api/mobile/goals/form — options for the therapist's New / Edit Goal form. */
export async function GET(request: Request) {
    return mobileRoute(request, (user) => getGoalFormOptions(user), { roles: ["THERAPIST"] });
}
