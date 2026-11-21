import { mobileRoute } from "@/lib/mobile/http";
import { getSessionNoteFormOptions } from "@/lib/mobile/records";

/** GET /api/mobile/session-notes/form — children, therapy, goals and prompts for the note form. */
export async function GET(request: Request) {
    return mobileRoute(request, (user) => getSessionNoteFormOptions(user), { roles: ["THERAPIST"] });
}
