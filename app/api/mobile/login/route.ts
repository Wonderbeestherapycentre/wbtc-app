import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { createMobileToken, isMobileRole, toMobileUser } from "@/lib/mobile/auth";

const credentialsSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(6),
});

const INVALID = "Invalid email or password.";

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const parsed = credentialsSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ error: INVALID }, { status: 400 });
    }

    const { email, password } = parsed.data;

    let user;
    try {
        user = await db.query.users.findFirst({ where: eq(users.email, email) });
    } catch (error) {
        console.error("mobile login: failed to fetch user", error);
        return NextResponse.json(
            { error: "Server is temporarily unavailable. Please try again." },
            { status: 503 },
        );
    }

    // Same checks as the web Credentials provider in auth.ts.
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        return NextResponse.json({ error: INVALID }, { status: 401 });
    }
    if (user.status !== "ACTIVE") {
        return NextResponse.json(
            { error: "Your account is inactive. Please contact the centre." },
            { status: 403 },
        );
    }
    if (!isMobileRole(user.role)) {
        return NextResponse.json(
            { error: "The mobile app is for parents and therapists. Please use the website." },
            { status: 403 },
        );
    }

    const token = await createMobileToken(user.id);
    return NextResponse.json({ token, user: toMobileUser(user) });
}
