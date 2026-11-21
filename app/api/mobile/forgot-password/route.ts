import { NextResponse } from "next/server";
import { requestPasswordReset } from "@/lib/actions";

/**
 * Mobile "Forgot password" — same flow as the web /forgot-password page.
 * Emails a one-time link (valid 30 min) that opens the web /reset-password page.
 * Always answers with the same message whether or not the account exists.
 */
export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email : "";

    const formData = new FormData();
    formData.set("email", email);

    try {
        const result = await requestPasswordReset({ status: "idle", message: "" }, formData);
        if (result.status === "error") {
            return NextResponse.json({ error: result.message }, { status: 400 });
        }
        return NextResponse.json({ message: result.message });
    } catch (error) {
        console.error("mobile forgot-password failed", error);
        return NextResponse.json(
            { error: "Server is temporarily unavailable. Please try again." },
            { status: 503 },
        );
    }
}
