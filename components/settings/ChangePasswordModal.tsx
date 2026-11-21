"use client";

import { useEffect, useState, useTransition } from "react";
import { createPortal } from "react-dom";
import { KeyRound, X, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { adminResetPassword } from "@/lib/actions";
import ConfirmModal from "@/components/ConfirmModal";
import PasswordRequirements from "@/components/auth/PasswordRequirements";
import { validatePassword } from "@/lib/validations/password";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: { id: string; name: string; email: string } | null;
}

export default function ChangePasswordModal({ isOpen, onClose, user }: ChangePasswordModalProps) {
    const [mounted, setMounted] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Reset form each time the modal opens
    useEffect(() => {
        if (isOpen) {
            setNewPassword("");
            setConfirmPassword("");
            setShowPassword(false);
            setError("");
            setConfirmOpen(false);
        }
    }, [isOpen]);

    if (!mounted || !isOpen || !user) return null;

    const handleUpdateClick = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) return setError("Both fields are required");
        const policyError = validatePassword(newPassword);
        if (policyError) return setError(policyError);
        if (newPassword !== confirmPassword) return setError("Passwords do not match");
        setError("");
        setConfirmOpen(true);
    };

    const onConfirm = () => {
        startTransition(async () => {
            const result = await adminResetPassword(user.id, newPassword, confirmPassword);
            setConfirmOpen(false);
            if (result.success) {
                toast.success(result.message);
                onClose();
            } else {
                setError(result.message);
                toast.error(result.message);
            }
        });
    };

    const inputClass =
        "w-full px-3 py-2 pr-10 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20";

    return createPortal(
        <>
            <div className="fixed inset-0 z-[55] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
                <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 overflow-hidden">
                    <div className="flex items-start justify-between p-6 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-500">
                                <KeyRound className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Change Password</h3>
                                <p className="text-xs text-gray-500">{user.name} · {user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            disabled={isPending}
                            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <form onSubmit={handleUpdateClick} className="px-6 pb-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className={inputClass}
                                    autoComplete="new-password"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <div className="mt-2">
                                <PasswordRequirements password={newPassword} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={inputClass}
                                autoComplete="new-password"
                            />
                        </div>

                        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={isPending}
                                className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors disabled:opacity-50 shadow-sm"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <ConfirmModal
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={onConfirm}
                title="Confirm Password Change"
                description={`Are you sure you want to change the password for ${user.name}?`}
                confirmLabel="Yes, Update"
                isPending={isPending}
            />
        </>,
        document.body
    );
}
