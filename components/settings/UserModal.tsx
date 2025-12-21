"use client";

import { X } from "lucide-react";
import { useState, useTransition, useEffect } from "react";
import { createPortal } from "react-dom";
import { updateUser, createUser } from "@/lib/actions";
import { toast } from "sonner";

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "THERAPIST" | "PARENT";
    qualification?: string | null;
    specialization?: string | null;
    mobile1?: string | null;
    mobile2?: string | null;
    address?: string | null;
    doj?: string | null;
    endDate?: string | null;
}

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: User | null;
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT";
}

export default function UserModal({ isOpen, onClose, user, currentUserRole }: UserModalProps) {
    const [isPending, startTransition] = useTransition();
    const [mounted, setMounted] = useState(false);

    const [selectedRole, setSelectedRole] = useState<"ADMIN" | "THERAPIST" | "PARENT" | "">(user?.role || "");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setFieldErrors({});
        if (user?.role) {
            setSelectedRole(user.role);
        } else {
            setSelectedRole("");
        }
    }, [user, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setFieldErrors({});

        startTransition(async () => {
            const result: any = user
                ? await updateUser(user.id, formData)
                : await createUser(formData);

            if (result?.message === "User updated" || result?.message === "User created") {
                toast.success(result.message);
                onClose();
            } else {
                if (result?.errors) {
                    setFieldErrors(result.errors);
                }
                toast.error(result.message);
            }
        });
    };

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800 animate-slide-up">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user ? "Edit User" : "Add New User"}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4 max-h-[75vh] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
                            <input
                                name="name"
                                defaultValue={user?.name || ""}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                                placeholder="John Doe"
                            />
                            {fieldErrors.name && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.name[0]}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
                            <input
                                name="email"
                                type="email"
                                defaultValue={user?.email || ""}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                                placeholder="john@example.com"
                            />
                            {fieldErrors.email && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.email[0]}</p>
                            )}
                        </div>

                        {!user && (
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.password ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                                    placeholder="••••••••"
                                />
                                {fieldErrors.password && (
                                    <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.password[0]}</p>
                                )}
                            </div>
                        )}

                        {currentUserRole === "ADMIN" && (
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Role</label>
                                <select
                                    name="role"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value as any)}
                                    className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.role ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                                >
                                    <option value="" disabled>Select Role</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="THERAPIST">Therapist</option>
                                    <option value="PARENT">Parent</option>
                                </select>
                                {fieldErrors.role && (
                                    <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.role[0]}</p>
                                )}
                            </div>
                        )}

                        {selectedRole === "THERAPIST" && (
                            <>
                                <div className="animate-fade-in">
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Qualification</label>
                                    <input
                                        name="qualification"
                                        defaultValue={user?.qualification || ""}
                                        placeholder="e.g. B.Sc, M.Sc, PhD"
                                        className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.qualification ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                                    />
                                    {fieldErrors.qualification && (
                                        <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.qualification[0]}</p>
                                    )}
                                </div>
                                <div className="animate-fade-in">
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Specialization</label>
                                    <input
                                        name="specialization"
                                        defaultValue={user?.specialization || ""}
                                        placeholder="e.g. Occupational Therapist, Speech Therapist"
                                        className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.specialization ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                                    />
                                    {fieldErrors.specialization && (
                                        <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.specialization[0]}</p>
                                    )}
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Mobile 1</label>
                            <input
                                name="mobile1"
                                defaultValue={user?.mobile1 || ""}
                                placeholder="PhoneNumber"
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.mobile1 ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                            />
                            {fieldErrors.mobile1 && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.mobile1[0]}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Mobile 2 (Optional)</label>
                            <input
                                name="mobile2"
                                defaultValue={user?.mobile2 || ""}
                                placeholder="PhoneNumber"
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.mobile2 ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                            />
                            {fieldErrors.mobile2 && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.mobile2[0]}</p>
                            )}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Address</label>
                            <textarea
                                name="address"
                                defaultValue={user?.address || ""}
                                rows={2}
                                placeholder="Full Address"
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">DOJ (Joining Date)</label>
                            <input
                                name="doj"
                                type="date"
                                defaultValue={user?.doj || ""}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.doj ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                            />
                            {fieldErrors.doj && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.doj[0]}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">End Date</label>
                            <input
                                name="endDate"
                                type="date"
                                defaultValue={user?.endDate || ""}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.endDate ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none`}
                            />
                            {fieldErrors.endDate && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.endDate[0]}</p>
                            )}
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50"
                        >
                            {isPending ? "Saving..." : (user ? "Save Changes" : "Create User")}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
