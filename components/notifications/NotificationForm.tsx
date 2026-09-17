"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createNotification } from "@/lib/actions";
import { toast } from "sonner";
import { Save, ArrowLeft, Check, Search } from "lucide-react";
import RichTextEditor from "@/components/ui/RichTextEditor";

interface ParentOption {
    id: string;
    name: string;
    email: string;
    children?: { id: string; name: string }[];
}

interface TherapistOption {
    id: string;
    name: string;
    email: string;
}

interface NotificationFormProps {
    parents: ParentOption[];
    therapists: TherapistOption[];
    currentUserRole: "ADMIN" | "THERAPIST";
}

export default function NotificationForm({ parents, therapists, currentUserRole }: NotificationFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [search, setSearch] = useState("");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    const toggleId = (id: string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleGroup = (ids: string[], allSelected: boolean) => {
        setSelectedIds(prev => allSelected
            ? prev.filter(id => !ids.includes(id))
            : [...new Set([...prev, ...ids])]);
    };

    const searchLower = search.toLowerCase();
    const filteredParents = parents.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.children?.some(c => c.name.toLowerCase().includes(searchLower))
    );
    const filteredTherapists = therapists.filter(t => t.name.toLowerCase().includes(searchLower));

    const allParentIds = filteredParents.map(p => p.id);
    const allTherapistIds = filteredTherapists.map(t => t.id);
    const allParentsSelected = allParentIds.length > 0 && allParentIds.every(id => selectedIds.includes(id));
    const allTherapistsSelected = allTherapistIds.length > 0 && allTherapistIds.every(id => selectedIds.includes(id));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors: Record<string, string[]> = {};
        if (!title.trim()) errors.title = ["Title is required"];
        if (!description || description === "<p></p>") errors.description = ["Description is required"];
        if (selectedIds.length === 0) errors.recipientIds = ["Select at least one recipient"];

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setFieldErrors({});

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("recipientIds", JSON.stringify(selectedIds));

        startTransition(async () => {
            const result: any = await createNotification(formData);
            if (result?.message === "Notification sent") {
                toast.success(result.message);
                router.push("/notifications");
                router.refresh();
            } else {
                if (result?.errors) setFieldErrors(result.errors);
                toast.error(result?.message || "Failed to send notification");
            }
        });
    };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in">
            <Link
                href="/notifications"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-4 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Notifications
            </Link>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 flex flex-col">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">New Notification</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {currentUserRole === "ADMIN" ? "Send to selected parents and/or therapists" : "Send to selected parents"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-4 md:p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={`w-full px-4 py-2 rounded-xl border ${fieldErrors.title ? "border-red-500" : "border-gray-200 dark:border-neutral-700"} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
                            placeholder="Notification title"
                        />
                        {fieldErrors.title && (
                            <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.title[0]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Description</label>
                        <RichTextEditor value={description} onChange={setDescription} error={!!fieldErrors.description} />
                        {fieldErrors.description && (
                            <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.description[0]}</p>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm font-medium dark:text-gray-300">Recipients</label>
                            <span className="text-xs text-gray-500">{selectedIds.length} selected</span>
                        </div>

                        <div className="relative mb-2">
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search parents or children..."
                                className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div className={`rounded-xl border ${fieldErrors.recipientIds ? "border-red-500" : "border-gray-200 dark:border-neutral-700"} max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-neutral-800`}>
                            {currentUserRole === "ADMIN" && filteredTherapists.length > 0 && (
                                <div className="p-2">
                                    <div
                                        className="flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-600"
                                        onClick={() => toggleGroup(allTherapistIds, allTherapistsSelected)}
                                    >
                                        <span>Therapists</span>
                                        <span className="text-blue-600 normal-case font-medium">
                                            {allTherapistsSelected ? "Deselect all" : "Select all"}
                                        </span>
                                    </div>
                                    {filteredTherapists.map(t => (
                                        <div
                                            key={t.id}
                                            onClick={() => toggleId(t.id)}
                                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${selectedIds.includes(t.id)
                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                                : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                                                }`}
                                        >
                                            <span>{t.name} <span className="text-xs text-gray-400">({t.email})</span></span>
                                            {selectedIds.includes(t.id) && <Check className="w-4 h-4" />}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="p-2">
                                <div
                                    className="flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-600"
                                    onClick={() => toggleGroup(allParentIds, allParentsSelected)}
                                >
                                    <span>Parents</span>
                                    <span className="text-blue-600 normal-case font-medium">
                                        {allParentsSelected ? "Deselect all" : "Select all"}
                                    </span>
                                </div>
                                {filteredParents.length === 0 ? (
                                    <div className="px-3 py-2 text-sm text-gray-500">No parents available</div>
                                ) : (
                                    filteredParents.map(p => (
                                        <div
                                            key={p.id}
                                            onClick={() => toggleId(p.id)}
                                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${selectedIds.includes(p.id)
                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                                : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                                                }`}
                                        >
                                            <span>
                                                {p.name}
                                                {p.children && p.children.length > 0 && (
                                                    <span className="text-xs text-gray-400 ml-1">
                                                        ({p.children.map(c => c.name).join(", ")})
                                                    </span>
                                                )}
                                            </span>
                                            {selectedIds.includes(p.id) && <Check className="w-4 h-4" />}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        {fieldErrors.recipientIds && (
                            <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.recipientIds[0]}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800">
                        <Link
                            href="/notifications"
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
                                "Sending..."
                            ) : (
                                <>
                                    <Save className="w-4 h-4" />
                                    Send Notification
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
