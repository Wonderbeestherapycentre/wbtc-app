import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { listHomePrograms } from "@/lib/mobile/records";
import { createHomeProgramForTherapist } from "@/lib/mobile/home-programs";

/** GET /api/mobile/home-programs[?childId=] */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const childId = new URL(request.url).searchParams.get("childId") ?? undefined;
        if (childId && !isUuid(childId)) throw new HttpError(400, "Invalid child.");
        return { programs: await listHomePrograms(user, childId) };
    });
}

/**
 * POST /api/mobile/home-programs — therapist creates a program (website: /home-programs/new).
 * Body: { childId, therapyId, title, status, tasks: [{ description, status? }] }. Returns { id }.
 */
export async function POST(request: Request) {
    return mobileRoute(
        request,
        async (user) => {
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return createHomeProgramForTherapist(user, body);
        },
        { roles: ["THERAPIST"] },
    );
}
