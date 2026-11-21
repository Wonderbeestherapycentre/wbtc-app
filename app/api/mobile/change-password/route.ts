import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { getMobileUser } from "@/lib/mobile/auth";
import { validatePassword } from "@/lib/validations/password";

/**
 * Mobile "Change password" for the signed-in user — same rules as the web
 * profile page's updatePassword action (current password required, shared password policy).
 */
export async function POST(request: Request) {
    const me = await getMobileUser(request);
    if (!me) {
        return NextResponse.json({ error: "Session expired. Please sign in again." }, { status: 401 });
    }

    const body = await request.json().catch(() => null);
    const currentPassword = typeof body?.currentPassword === "string" ? body.currentPassword : "";
    const newPassword = typeof body?.newPassword === "string" ? body.newPassword : "";
    const confirmPassword = typeof body?.confirmPassword === "string" ? body.confirmPassword : "";

    if (!currentPassword || !newPassword || !confirmPassword) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (newPassword !== confirmPassword) {
        return NextResponse.json({ error: "New passwords do not match" }, { status: 400 });
    }
    const passwordError = validatePassword(newPassword);
    if (passwordError) {
        return NextResponse.json({ error: passwordError }, { status: 400 });
    }

    try {
        const user = await db.query.users.findFirst({ where: eq(users.id, me.id) });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
        if (!isMatch) {
            return NextResponse.json({ error: "Incorrect current password" }, { status: 400 });
        }

        const passwordHash = await bcrypt.hash(newPassword, 10);
        await db.update(users).set({ passwordHash }).where(eq(users.id, me.id));

        return NextResponse.json({ message: "Password updated successfully." });
    } catch (error) {
        console.error("mobile change-password failed", error);
        return NextResponse.json(
            { error: "Server is temporarily unavailable. Please try again." },
            { status: 503 },
        );
    }
}
