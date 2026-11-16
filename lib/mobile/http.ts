import { NextResponse } from "next/server";
import { getMobileUser, type MobileRole, type MobileUser } from "./auth";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: string | null | undefined): value is string {
    return !!value && UUID.test(value);
}

export class HttpError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}

/**
 * Shared wrapper for mobile API routes:
 *   401 if the bearer token is missing/invalid, 403 if the role isn't allowed,
 *   404 if the handler returns null, 500 (logged) on unexpected errors.
 */
export async function mobileRoute(
    request: Request,
    handler: (user: MobileUser) => Promise<unknown>,
    options: { roles?: MobileRole[] } = {},
) {
    try {
        const user = await getMobileUser(request);
        if (!user) {
            return NextResponse.json({ error: "Session expired. Please sign in again." }, { status: 401 });
        }
        if (options.roles && !options.roles.includes(user.role)) {
            return NextResponse.json({ error: "This section isn't available for your account." }, { status: 403 });
        }
        const data = await handler(user);
        if (data === null || data === undefined) {
            return NextResponse.json({ error: "Not found." }, { status: 404 });
        }
        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof HttpError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
        }
        console.error(`mobile API ${new URL(request.url).pathname} failed`, error);
        return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }
}
