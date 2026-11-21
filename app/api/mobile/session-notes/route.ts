import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { createSessionNoteForTherapist, listSessionNotes } from "@/lib/mobile/records";

/** GET /api/mobile/session-notes[?childId=] */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const childId = new URL(request.url).searchParams.get("childId") ?? undefined;
        if (childId && !isUuid(childId)) throw new HttpError(400, "Invalid child.");
        return { notes: await listSessionNotes(user, childId) };
    });
}

/**
 * POST /api/mobile/session-notes — therapist creates a note (website: /session-notes/new).
 * Body: { childId, date, goalsAddressed: { goalId: string[] }, activities: [{ description, prompt }], littleWins }
 */
export async function POST(request: Request) {
    return mobileRoute(
        request,
        async (user) => {
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return createSessionNoteForTherapist(user, body);
        },
        { roles: ["THERAPIST"] },
    );
}
