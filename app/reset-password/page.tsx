import Link from "next/link";
import { XCircle } from "lucide-react";
import AuthShell from "@/components/auth/AuthShell";
import { verifyPasswordResetToken } from "@/lib/actions";
import ResetPasswordForm from "./ResetPasswordForm";

export const dynamic = "force-dynamic";

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
    const { token = "" } = await searchParams;
    const check = await verifyPasswordResetToken(token);

    if (!check.valid) {
        return (
            <AuthShell title="Link Expired or Invalid">
                <div className="space-y-4 text-center">
                    <XCircle className="w-12 h-12 text-red-400 mx-auto" />
                    <p className="text-sm text-slate-600">
                        This password reset link is invalid, has expired, or has already been used.
                    </p>
                    <Link
                        href="/forgot-password"
                        className="block w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-400/40"
                    >
                        Request a New Link
                    </Link>
                    <Link href="/" className="block text-xs font-semibold text-blue-900 hover:text-amber-600">Back to Login</Link>
                </div>
            </AuthShell>
        );
    }

    return (
        <AuthShell title="Set New Password" subtitle={`For ${check.email}`}>
            <ResetPasswordForm token={token} />
        </AuthShell>
    );
}
