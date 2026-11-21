import { mobileRoute } from "@/lib/mobile/http";
import { listGoalChildGroups } from "@/lib/mobile/records";

/** GET /api/mobile/goals/children — children with active/total goal counts. */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => ({ groups: await listGoalChildGroups(user) }));
}
