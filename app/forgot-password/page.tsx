"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import AuthShell from "@/components/auth/AuthShell";
import { requestPasswordReset, type ForgotPasswordState } from "@/lib/actions";

const initialState: ForgotPasswordState = { status: "idle", message: "" };

export default function ForgotPasswordPage() {
    const [state, dispatch, isPending] = useActionState(requestPasswordReset, initialState);
    const [email, setEmail] = useState("");

    return (
        <AuthShell title="Forgot Password?" subtitle="Enter your registered email and we'll send you a reset link">
            {state.status === "sent" ? (
                <div className="space-y-4 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <p className="text-sm text-slate-600">{state.message}</p>
                    <p className="text-[11px] text-slate-400">The link is valid for 30 minutes.</p>
                </div>
            ) : (
                <form action={dispatch} className="space-y-3">
                    <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            name="email"
                            type="email"
                            required
                            autoFocus
                            autoComplete="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-sm"
                        />
                    </div>

                    {state.status === "error" && (
                        <div className="p-2 rounded-xl bg-red-50 text-red-500 text-xs text-center border border-red-100">{state.message}</div>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-400/40 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isPending ? "Sending..." : "Send Reset Link"}
                        {!isPending && <ArrowRight className="w-4 h-4" />}
                    </button>
                </form>
            )}

            <Link href="/" className="mt-4 flex items-center justify-center gap-1 text-xs font-semibold text-blue-900 hover:text-amber-600">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
            </Link>
        </AuthShell>
    );
}
