"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUser, updateUser } from "@/lib/actions";
import { toast } from "sonner";
import { Save, ArrowLeft, Check, ChevronsUpDown } from "lucide-react";

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
    qualification?: string | null;
    specialization?: string | null;
    mobile1?: string | null;
    mobile2?: string | null;
    address?: string | null;
    doj?: string | null;
    endDate?: string | null;
    status?: "ACTIVE" | "INACTIVE";
    children?: { id: string; name: string }[];
}

interface UserFormProps {
    user?: User | null;
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
    allChildren?: { id: string; name: string; caseNumber?: string; parent?: { id: string; name: string } | null }[];
    therapies?: { id: string; name: string; status: string }[];
}

export default function UserForm({ user, currentUserRole, allChildren = [], therapies = [] }: UserFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const [selectedRole, setSelectedRole] = useState<"ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER" | "">(user?.role || "");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    const [selectedChildIds, setSelectedChildIds] = useState<string[]>(
        user?.children?.map(c => c.id) || []
    );
    const [selectedTherapyId, setSelectedTherapyId] = useState(() => {
        if (!user?.specialization) return "";
        try {
            const parsed = JSON.parse(user.specialization);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed[0];
            return "";
        } catch (e) {
            return user.specialization;
        }
    });
    const [isChildSelectOpen, setIsChildSelectOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (selectedRole === "PARENT") {
            if (selectedChildIds.length === 0) {
                setFieldErrors({ children: ["At least one child must be selected"] });
                return;
            }
            formData.append("childIds", JSON.stringify(selectedChildIds));
        }

        setFieldErrors({});

        startTransition(async () => {
            const result: any = user
                ? await updateUser(user.id, formData)
                : await createUser(formData);

            if (result?.message?.includes("User updated") || result?.message?.includes("User created")) {
                toast.success(result.message);
                router.push("/users");
                router.refresh();
            } else {
                if (result?.errors) {
                    setFieldErrors(result.errors);
                }
                toast.error(result.message);
            }
        });
    };

    return (
        <div className="max-w-2xl mx-auto animate-fade-in">
            <Link
                href="/users"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-4 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Users
            </Link>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 flex flex-col">

                {/* Header */}
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {user ? "Edit User" : "Add New User"}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {user ? "Update user account details" : "Create a new user account"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
                            <input
                                name="name"
                                defaultValue={user?.name || ""}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
                                placeholder="vellies"
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
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
                                placeholder="vellies@example.com"
                            />
                            {fieldErrors.email && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.email[0]}</p>
                            )}
                        </div>

                        {currentUserRole === "ADMIN" && (
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Role</label>
                                <select
                                    name="role"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value as any)}
                                    className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.role ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none`}
                                >
                                    <option value="" disabled>Select Role</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="THERAPIST">Therapist</option>
                                    <option value="PARENT">Parent</option>
                                    <option value="ATTENDER">Attender</option>
                                </select>
                                {fieldErrors.role && (
                                    <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.role[0]}</p>
                                )}
                            </div>
                        )}

                        {selectedRole === "PARENT" && (
                            <div className="relative">
                                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Children</label>
                                <button
                                    type="button"
                                    onClick={() => setIsChildSelectOpen(!isChildSelectOpen)}
                                    className={`w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border ${fieldErrors.children ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all flex items-center justify-between text-left`}
                                >
                                    <span className={`block truncate ${selectedChildIds.length === 0 ? "text-gray-400" : "text-gray-900 dark:text-white"}`}>
                                        {selectedChildIds.length === 0
                                            ? "Select Child"
                                            : `${selectedChildIds.length} Child${selectedChildIds.length > 1 ? 'ren' : ''} Selected`
                                        }
                                    </span>
                                    <ChevronsUpDown className="w-4 h-4 text-gray-400" />
                                </button>
                                {fieldErrors.children && (
                                    <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.children[0]}</p>
                                )}

                                {isChildSelectOpen && (
                                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 max-h-60 overflow-auto">
                                        <div className="p-1">
                                            {allChildren.length === 0 ? (
                                                <div className="px-4 py-2 text-sm text-gray-500">No children available</div>
                                            ) : (
                                                allChildren
                                                    .filter(child => !child.parent || (user && child.parent.id === user.id) || selectedChildIds.includes(child.id))
                                                    .sort((a, b) => {
                                                        const aSelected = selectedChildIds.includes(a.id);
                                                        const bSelected = selectedChildIds.includes(b.id);
                                                        if (aSelected && !bSelected) return -1;
                                                        if (!aSelected && bSelected) return 1;
                                                        return a.name.localeCompare(b.name);
                                                    })
                                                    .map((child) => (
                                                        <div
                                                            key={child.id}
                                                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${selectedChildIds.includes(child.id)
                                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                                                : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                                                                }`}
                                                            onClick={() => {
                                                                setSelectedChildIds(prev =>
                                                                    prev.includes(child.id)
                                                                        ? prev.filter(id => id !== child.id)
                                                                        : [...prev, child.id]
                                                                );
                                                            }}
                                                        >
                                                            <span>{child.name} {child.caseNumber ? `(${child.caseNumber})` : ''}</span>
                                                            {selectedChildIds.includes(child.id) && (
                                                                <Check className="w-4 h-4" />
                                                            )}
                                                        </div>
                                                    ))
                                            )}
                                        </div>
                                    </div>
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
                                        className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.qualification ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
                                    />
                                    {fieldErrors.qualification && (
                                        <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.qualification[0]}</p>
                                    )}
                                </div>
                                <div className="animate-fade-in">
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Specialization</label>
                                    <select
                                        name="specialization"
                                        value={selectedTherapyId}
                                        onChange={(e) => setSelectedTherapyId(e.target.value)}
                                        className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.specialization ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none`}
                                    >
                                        <option value="">Select Therapy</option>
                                        {therapies
                                            .filter(t => t.status === 'ACTIVE')
                                            .map(therapy => (
                                                <option key={therapy.id} value={therapy.id}>{therapy.name}</option>
                                            ))
                                        }
                                    </select>
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
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.mobile1 ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
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
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.mobile2 ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
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
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">DOJ (Joining Date)</label>
                            <input
                                name="doj"
                                type="date"
                                defaultValue={user?.doj || ""}
                                max={new Date().toISOString().split('T')[0]}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.doj ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
                            />
                            {fieldErrors.doj && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.doj[0]}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Status</label>
                            <select
                                name="status"
                                defaultValue={user?.status || "ACTIVE"}
                                className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.status ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none`}
                            >
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                            {fieldErrors.status && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.status[0]}</p>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-8 pt-4 border-t border-gray-100 dark:border-neutral-800">
                        <Link
                            href="/users"
                            className="flex-1 px-4 py-2.5 text-sm font-semibold text-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-xl transition-colors"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPending ? (
                                "Saving..."
                            ) : (
                                <>
                                    <Save className="w-4 h-4" />
                                    {user ? "Save Changes" : "Create User"}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
