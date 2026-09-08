"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createGoal, updateGoal } from "@/lib/actions";
import { Plus, Trash2 } from "lucide-react";

interface GoalFormProps {
    mode: "create" | "edit";
    goal?: any;
    childrenList: { id: string; name: string; caseNumber?: string | null; assignedTherapies: string[] }[];
    therapies: { id: string; name: string }[];
    preselectChildId?: string;
    preselectTherapyId?: string;
    role?: "ADMIN" | "THERAPIST" | "PARENT";
    returnTo?: string;
}

export default function GoalForm({
    mode,
    goal,
    childrenList,
    therapies,
    preselectChildId,
    preselectTherapyId,
    role,
    returnTo = "/goals",
}: GoalFormProps) {
    const router = useRouter();
    const isEdit = mode === "edit";
    const [isPending, startTransition] = useTransition();

    const [selectedChildId, setSelectedChildId] = useState<string>(
        isEdit ? goal?.childId ?? "" : preselectChildId ?? ""
    );
    const [selectedTherapyId, setSelectedTherapyId] = useState<string>(
        isEdit ? goal?.therapyId ?? "" : preselectTherapyId ?? ""
    );
    const [startDate, setStartDate] = useState<string>(
        isEdit && goal?.startDate
            ? new Date(goal.startDate).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0]
    );
    const [endDate, setEndDate] = useState<string>(() => {
        if (isEdit && goal?.endDate) return new Date(goal.endDate).toISOString().split("T")[0];
        const future = new Date();
        future.setMonth(future.getMonth() + 3);
        return future.toISOString().split("T")[0];
    });
    const [status, setStatus] = useState<string>(isEdit ? goal?.status ?? "EMERGING" : "EMERGING");
    const [objectives, setObjectives] = useState<string[]>(() => {
        if (isEdit) {
            try {
                const parsed = JSON.parse(goal?.objectives ?? "[]");
                return Array.isArray(parsed) && parsed.length > 0 ? parsed : [goal?.title ?? ""];
            } catch {
                return [goal?.title ?? ""];
            }
        }
        return [""];
    });

    // Keep the edit child visible even if inactive/out of list.
    const childOptions = isEdit && goal && !childrenList.some((c) => c.id === goal.childId)
        ? [...childrenList, { id: goal.childId, name: goal.child?.name ?? "Unknown", caseNumber: goal.child?.caseNumber, assignedTherapies: [] as string[] }]
        : childrenList;

    const availableTherapies = therapies.filter((t) => {
        if (!selectedChildId) return true;
        if (isEdit && goal && t.id === goal.therapyId) return true;
        const child = childOptions.find((c) => c.id === selectedChildId);
        return child?.assignedTherapies?.includes(t.id);
    });

    // Auto-select the therapy when the chosen child has exactly one assigned.
    useEffect(() => {
        if (isEdit || !selectedChildId || selectedTherapyId) return;
        const child = childOptions.find((c) => c.id === selectedChildId);
        const assigned = therapies.filter((t) => child?.assignedTherapies?.includes(t.id));
        if (assigned.length === 1) setSelectedTherapyId(assigned[0].id);
    }, [selectedChildId, selectedTherapyId, isEdit, childOptions, therapies]);

    const handleObjectiveChange = (index: number, value: string) => {
        const next = [...objectives];
        next[index] = value;
        setObjectives(next);
    };

    const addObjective = () => setObjectives([...objectives, ""]);

    const removeObjective = (index: number) => {
        if (objectives.length === 1) return;
        setObjectives(objectives.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const filtered = objectives.filter((o) => o.trim() !== "");
        if (filtered.length === 0) {
            toast.error("Please add at least one objective");
            return;
        }

        const formData = new FormData();
        formData.append("childId", selectedChildId);
        formData.append("therapyId", selectedTherapyId);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("objectives", JSON.stringify(filtered));
        formData.append("status", status);
        if (isEdit) formData.append("id", goal.id);

        startTransition(async () => {
            const result = isEdit ? await updateGoal(formData) : await createGoal(formData);

            if (result.message.includes("success")) {
                toast.success(result.message);
                router.push(returnTo);
                router.refresh();
            } else if ((result as any).errors) {
                const errors = (result as any).errors;
                const firstError = Object.values(errors).flat()[0];
                toast.error(String(firstError));
            } else {
                toast.error(result.message);
            }
        });
    };

    return (
        <div className="bg-white dark:bg-neutral-900 max-w-2xl rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800">
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Child</label>
                        <select
                            required
                            value={selectedChildId}
                            onChange={(e) => {
                                setSelectedChildId(e.target.value);
                                setSelectedTherapyId("");
                            }}
                            disabled={isEdit || !!preselectChildId}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all disabled:opacity-50"
                        >
                            <option value="">Select Child</option>
                            {childOptions.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name} {c.caseNumber ? `(${c.caseNumber})` : ""}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Therapy</label>
                        <select
                            required
                            value={selectedTherapyId}
                            onChange={(e) => setSelectedTherapyId(e.target.value)}
                            disabled={isEdit || !!preselectTherapyId || (role === "THERAPIST" && availableTherapies.length <= 1)}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all disabled:opacity-50"
                        >
                            <option value="">Select Therapy</option>
                            {availableTherapies.map((t) => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
                        <input
                            type="date"
                            required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
                        <input
                            type="date"
                            required
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {isEdit ? "Goal Description" : "Goals"}
                        </label>
                        {!isEdit && (
                            <button
                                type="button"
                                onClick={addObjective}
                                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
                            >
                                <Plus className="w-3 h-3" /> Add more
                            </button>
                        )}
                    </div>
                    <div className="space-y-2">
                        {objectives.map((obj, index) => (
                            <div key={index} className="flex items-start gap-2">
                                {!isEdit && <div className="px-2 py-2 text-xs font-medium text-gray-400">{index + 1}.</div>}
                                <textarea
                                    value={obj}
                                    onChange={(e) => handleObjectiveChange(index, e.target.value)}
                                    placeholder={isEdit ? "Enter goal description..." : "Enter specific goal..."}
                                    rows={2}
                                    className="flex-1 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm resize-none"
                                />
                                {!isEdit && objectives.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeObjective(index)}
                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors mt-1"
                                        title="Remove"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        >
                            <option value="EMERGING">Emerging</option>
                            <option value="PARTIALLY_ACHIEVED">Partially achieved</option>
                            <option value="ACHIEVED">Achieved</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800">
                    <button
                        type="button"
                        onClick={() => router.push(returnTo)}
                        className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isPending ? "Saving..." : isEdit ? "Update Goal" : "Create Goal"}
                    </button>
                </div>
            </form>
        </div>
    );
}
