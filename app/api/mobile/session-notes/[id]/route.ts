import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import {
    deleteSessionNoteForTherapist,
    getSessionNote,
    updateSessionNoteForTherapist,
} from "@/lib/mobile/records";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Ctx) {
    const { id } = await params;
    return mobileRoute(request, async (user) => (isUuid(id) ? getSessionNote(user, id) : null));
}

/** PUT /api/mobile/session-notes/:id — therapist edits their own note (today only, like the website). */
export async function PUT(request: Request, { params }: Ctx) {
    const { id } = await params;
    return mobileRoute(
        request,
        async (user) => {
            if (!isUuid(id)) return null;
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return updateSessionNoteForTherapist(user, id, body);
        },
        { roles: ["THERAPIST"] },
    );
}

/** DELETE /api/mobile/session-notes/:id — therapist deletes their own note (today only). */
export async function DELETE(request: Request, { params }: Ctx) {
    const { id } = await params;
    return mobileRoute(
        request,
        async (user) => (isUuid(id) ? deleteSessionNoteForTherapist(user, id) : null),
        { roles: ["THERAPIST"] },
    );
}
