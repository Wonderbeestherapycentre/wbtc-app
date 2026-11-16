import { encode, decode } from "next-auth/jwt";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

/**
 * Token auth for the wbtc-mobile-app (React Native).
 *
 * The web app uses NextAuth cookie sessions, which a native app can't use
 * cleanly, so mobile clients get a bearer token instead. Tokens are encrypted
 * JWTs produced by NextAuth's own `encode`, keyed by AUTH_SECRET with a
 * mobile-only salt so web session cookies and mobile tokens are not
 * interchangeable.
 */

const MOBILE_TOKEN_SALT = "wbtc-mobile-token";
const MOBILE_TOKEN_MAX_AGE = 30 * 24 * 60 * 60; // 30 days (seconds)

/** Roles the mobile app supports. */
export const MOBILE_ROLES = ["PARENT", "THERAPIST"] as const;
export type MobileRole = (typeof MOBILE_ROLES)[number];

export type MobileUser = {
    id: string;
    name: string;
    email: string;
    role: MobileRole;
    mobile: string | null;
};

function getSecret(): string {
    const secret = process.env.AUTH_SECRET;
    if (!secret) throw new Error("AUTH_SECRET is not set");
    return secret;
}

export function isMobileRole(role: string): role is MobileRole {
    return (MOBILE_ROLES as readonly string[]).includes(role);
}

export function toMobileUser(user: typeof users.$inferSelect): MobileUser {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role as MobileRole,
        mobile: user.mobile1 ?? null,
    };
}

export async function createMobileToken(userId: string): Promise<string> {
    return encode({
        token: { sub: userId },
        secret: getSecret(),
        salt: MOBILE_TOKEN_SALT,
        maxAge: MOBILE_TOKEN_MAX_AGE,
    });
}

/**
 * Resolves the user behind an `Authorization: Bearer <token>` header.
 * Returns null if the token is missing/invalid/expired, or the user no longer
 * exists, is INACTIVE, or has a role the mobile app doesn't support.
 */
export async function getMobileUser(request: Request): Promise<MobileUser | null> {
    const header = request.headers.get("authorization") ?? "";
    const match = header.match(/^Bearer\s+(.+)$/i);
    if (!match) return null;

    let userId: string | undefined;
    try {
        const payload = await decode({
            token: match[1],
            secret: getSecret(),
            salt: MOBILE_TOKEN_SALT,
        });
        userId = typeof payload?.sub === "string" ? payload.sub : undefined;
    } catch {
        return null;
    }
    if (!userId) return null;

    const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
    if (!user || user.status !== "ACTIVE" || !isMobileRole(user.role)) return null;

    return toMobileUser(user);
}
