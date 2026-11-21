"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Lock, Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";
import { resetPasswordWithToken, type ResetPasswordState } from "@/lib/actions";
import { validatePassword } from "@/lib/validations/password";
import PasswordRequirements from "@/components/auth/PasswordRequirements";

const initialState: ResetPasswordState = { status: "idle", message: "" };

export default function ResetPasswordForm({ token }: { token: string }) {
    const [state, dispatch, isPending] = useActionState(resetPasswordWithToken, initialState);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [clientError, setClientError] = useState("");

    if (state.status === "success") {
        return (
            <div className="space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <p className="text-sm text-slate-600">{state.message}</p>
                <Link
                    href="/"
                    className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-400/40 flex items-center justify-center gap-2"
                >
                    Go to Login <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    const inputClass =
        "w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-sm";

    const error = clientError || (state.status === "error" ? state.message : "");

    return (
        <form
            action={dispatch}
            onSubmit={(e) => {
                const policyError = validatePassword(newPassword);
                if (policyError) {
                    e.preventDefault();
                    setClientError(policyError);
                } else if (newPassword !== confirmPassword) {
                    e.preventDefault();
                    setClientError("Passwords do not match.");
                } else {
                    setClientError("");
                }
            }}
            className="space-y-3"
        >
            <input type="hidden" name="token" value={token} />

            <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    name="newPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    autoFocus
                    autoComplete="new-password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={inputClass}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
            </div>

            <div className="px-1">
                <PasswordRequirements password={newPassword} />
            </div>

            <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={inputClass}
                />
            </div>

            {error && <div className="p-2 rounded-xl bg-red-50 text-red-500 text-xs text-center border border-red-100">{error}</div>}

            <button
                type="submit"
                disabled={isPending}
                className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-400/40 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {isPending ? "Updating..." : "Update Password"}
            </button>
        </form>
    );
}
