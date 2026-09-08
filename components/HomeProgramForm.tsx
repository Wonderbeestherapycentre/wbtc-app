"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createHomeProgram, updateHomeProgram } from "@/lib/actions";
import { Plus, Trash2 } from "lucide-react";

interface HomeProgramFormProps {
    mode: "create" | "edit";
    program?: any;
    childrenList: { id: string; name: string; caseNumber?: string | null; therapyTypes?: { therapyId: string; therapy?: { name: string } }[] }[];
    therapies: { id: string; name: string }[];
    preselectChildId?: string;
    preselectTherapyId?: string;
    returnTo?: string;
}

export default function HomeProgramForm({
    mode,
    program,
    childrenList,
    therapies,
    preselectChildId,
    preselectTherapyId,
    returnTo = "/home-programs",
}: HomeProgramFormProps) {
    const router = useRouter();
    const isEdit = mode === "edit";
    const [isPending, startTransition] = useTransition();

    const [selectedChildId, setSelectedChildId] = useState<string>(
        isEdit ? program?.childId ?? "" : preselectChildId ?? ""
    );
    const [selectedTherapyId, setSelectedTherapyId] = useState<string>(
        isEdit ? program?.therapyId ?? "" : preselectTherapyId ?? ""
    );
    const [title, setTitle] = useState<string>(isEdit ? program?.title ?? "" : "");
    const [status, setStatus] = useState<string>(isEdit ? program?.status ?? "ACTIVE" : "ACTIVE");
    const [tasks, setTasks] = useState<{ description: string; status: string }[]>(
        isEdit && program?.tasks?.length > 0
            ? program.tasks.map((t: any) => ({ description: t.description, status: t.status }))
            : [{ description: "", status: "PENDING" }]
    );

    // When editing a program whose child is now inactive, keep it visible in the (disabled) select.
    const childOptions = isEdit && program && !childrenList.some((c) => c.id === program.childId)
        ? [...childrenList, { id: program.childId, name: program.child?.name ?? "Unknown", caseNumber: program.child?.caseNumber, therapyTypes: [] }]
        : childrenList;

    const availableTherapies = therapies.filter((t) => {
        if (!selectedChildId) return true;
        if (isEdit && program && t.id === program.therapyId) return true;
        const child = childOptions.find((c) => c.id === selectedChildId);
        return child?.therapyTypes?.some((tt) => tt.therapyId === t.id);
    });

    const handleTaskChange = (index: number, value: string) => {
        const newTasks = [...tasks];
        newTasks[index].description = value;
        setTasks(newTasks);
    };

    const addTask = () => setTasks([...tasks, { description: "", status: "PENDING" }]);

    const removeTask = (index: number) => {
        if (tasks.length === 1) return;
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const filteredTasks = tasks.filter((t) => t.description.trim() !== "");
        if (filteredTasks.length === 0) {
            toast.error("Please add at least one task");
            return;
        }

        const formData = new FormData();
        formData.append("childId", selectedChildId);
        formData.append("therapyId", selectedTherapyId);
        formData.append("title", title);
        formData.append("tasks", JSON.stringify(filteredTasks));
        formData.append("status", status);
        if (isEdit) formData.append("id", program.id);

        startTransition(async () => {
            const result = isEdit
                ? await updateHomeProgram(formData)
                : await createHomeProgram(formData);

            if (result.message.includes("successfully")) {
                toast.success(result.message);
                if (!isEdit && (result as any).id) {
                    router.push(`/home-programs/${(result as any).id}`);
                } else {
                    router.push(returnTo);
                }
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
                            disabled={isEdit || !!preselectTherapyId}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all disabled:opacity-50"
                        >
                            <option value="">Select Therapy</option>
                            {availableTherapies.map((t) => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Activity Name</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Stacking Rings"
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                        <select
                            required
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                            <option value="COMPLETED">Completed</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tasks Checklist</label>
                        <button
                            type="button"
                            onClick={addTask}
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
                        >
                            <Plus className="w-3 h-3" /> Add Task
                        </button>
                    </div>
                    <div className="space-y-2">
                        {tasks.map((task, index) => (
                            <div key={index} className="flex items-start gap-2 animate-in slide-in-from-left-2 duration-200">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={task.description}
                                        onChange={(e) => handleTaskChange(index, e.target.value)}
                                        placeholder={`Task ${index + 1} description (e.g. s${index + 1})`}
                                        className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm"
                                    />
                                </div>
                                {tasks.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeTask(index)}
                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors mt-1"
                                        title="Remove Task"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
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
                        {isPending ? "Saving..." : isEdit ? "Update Program" : "Create Program"}
                    </button>
                </div>
            </form>
        </div>
    );
}
