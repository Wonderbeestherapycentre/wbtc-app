"use client";

import { useState, useTransition } from "react";
import { Plus, X } from "lucide-react";
import { createHoliday } from "@/lib/actions";
import { createPortal } from "react-dom";
import { toast } from "sonner";

export default function AddHolidayModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    const handleCreate = async (formData: FormData) => {
        setFieldErrors({});

        startTransition(async () => {
            const result = await createHoliday(formData);

            if (result?.message === "Holiday created") {
                toast.success("Holiday created successfully");
                setIsOpen(false);
            } else {
                if (result?.errors) {
                    setFieldErrors(result.errors);
                }
                if (result?.message && result.message !== "Validation Error") {
                    toast.error(result.message);
                }
            }
        });
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 text-sm"
            >
                <Plus className="w-4 h-4" />
                Add Holiday
            </button>
        );
    }

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-scale-in border border-gray-100 dark:border-neutral-800">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add Holiday</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <form action={handleCreate} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="e.g. New Year's Day"
                                className={`w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border ${fieldErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                            />
                            {fieldErrors.name && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.name[0]}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Date</label>
                            <input
                                type="date"
                                name="date"
                                className={`w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border ${fieldErrors.date ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                            />
                            {fieldErrors.date && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.date[0]}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Description (Optional)</label>
                            <textarea
                                name="description"
                                rows={3}
                                className={`w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border ${fieldErrors.description ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none`}
                            />
                            {fieldErrors.description && (
                                <p className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.description[0]}</p>
                            )}
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isPending ? "Adding..." : "Add Holiday"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
}
