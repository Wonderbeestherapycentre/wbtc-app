"use client";

import { useState, useEffect } from "react";
import { useTransition } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { createHomeProgram, updateHomeProgram } from "@/lib/actions";
import { X, Plus, Trash2 } from "lucide-react";

interface HomeProgramModalProps {
    isOpen: boolean;
    onClose: () => void;
    program?: any; // Program to edit, if any
    childId?: string; // Pre-select child if available
    childrenList: { id: string; name: string; caseNumber?: string; therapyTypes: { therapyId: string, therapy: { name: string } }[] }[];
    therapies: { id: string; name: string }[];
}

export default function HomeProgramModal({
    isOpen,
    onClose,
    program,
    childId,
    childrenList,
    therapies
}: HomeProgramModalProps) {
    const [isPending, startTransition] = useTransition();

    // Form States
    const [selectedChildId, setSelectedChildId] = useState("");
    const [selectedTherapyId, setSelectedTherapyId] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("ACTIVE");

    // Tasks List
    const [tasks, setTasks] = useState<{ description: string; status: string }[]>([{ description: "", status: "PENDING" }]);

    useEffect(() => {
        if (isOpen) {
            if (program) {
                // Editing
                setSelectedChildId(program.childId);
                setSelectedTherapyId(program.therapyId);
                setTitle(program.title);
                setStatus(program.status);
                setTasks(program.tasks && program.tasks.length > 0 ? program.tasks.map((t: any) => ({ description: t.description, status: t.status })) : [{ description: "", status: "PENDING" }]);
            } else {
                // Creating
                setSelectedChildId(childId || "");
                setSelectedTherapyId("");
                setTitle("");
                setStatus("ACTIVE");
                setTasks([{ description: "", status: "PENDING" }]);
            }
        }
    }, [isOpen, program, childId]);

    const handleTaskChange = (index: number, value: string) => {
        const newTasks = [...tasks];
        newTasks[index].description = value;
        setTasks(newTasks);
    };

    const addTask = () => {
        setTasks([...tasks, { description: "", status: "PENDING" }]);
    };

    const removeTask = (index: number) => {
        if (tasks.length === 1) return; // Keep at least one
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Filter out empty tasks
        const filteredTasks = tasks.filter(t => t.description.trim() !== "");
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

        if (program) {
            formData.append("id", program.id);
        }

        startTransition(async () => {
            let result;
            if (program) {
                result = await updateHomeProgram(formData);
            } else {
                result = await createHomeProgram(formData);
            }

            if (result.message.includes("successfully")) {
                toast.success(result.message);
                onClose();
            } else if ((result as any).errors) {
                const errors = (result as any).errors;
                const firstError = Object.values(errors).flat()[0];
                toast.error(String(firstError));
            } else {
                toast.error(result.message);
            }
        });
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isOpen || !mounted) return null;

    // Filter therapies based on selected child
    const availableTherapies = therapies.filter(t => {
        if (!selectedChildId) return true;
        const child = childrenList.find(c => c.id === selectedChildId);
        return child?.therapyTypes?.some(tt => tt.therapyId === t.id);
    });

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-10 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {program ? "Edit Home Program" : "New Home Program"}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Child</label>
                            <select
                                required
                                value={selectedChildId}
                                onChange={(e) => {
                                    setSelectedChildId(e.target.value);
                                    setSelectedTherapyId(""); // Reset therapy when child changes
                                }}
                                disabled={!!childId || !!program}
                                className="w-full px-4 py-2.5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all disabled:opacity-50"
                            >
                                <option value="">Select Child</option>
                                {childrenList.map(c => (
                                    <option key={c.id} value={c.id}>{c.name} {c.caseNumber ? `(${c.caseNumber})` : ''}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Therapy</label>
                            <select
                                required
                                value={selectedTherapyId}
                                onChange={(e) => setSelectedTherapyId(e.target.value)}
                                className="w-full px-4 py-2.5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            >
                                <option value="">Select Therapy</option>
                                {availableTherapies.map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Activity Name</label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Stacking Rings"
                                className="w-full px-4 py-2.5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                            <select
                                required
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-4 py-2.5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            >
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                                <option value="COMPLETED">Completed</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tasks Checklist</label>
                            <button
                                type="button"
                                onClick={addTask}
                                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                            >
                                <Plus className="w-4 h-4" /> Add Task
                            </button>
                        </div>
                        <div className="space-y-3">
                            {tasks.map((task, index) => (
                                <div key={index} className="flex items-start gap-3 animate-in slide-in-from-left-2 duration-200">
                                    <div className="flex-1">
                                        <textarea
                                            value={task.description}
                                            onChange={(e) => handleTaskChange(index, e.target.value)}
                                            placeholder={`Task ${index + 1} description (e.g. s${index + 1})`}
                                            rows={2}
                                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm resize-none"
                                        />
                                    </div>
                                    {tasks.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeTask(index)}
                                            className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all mt-1"
                                            title="Remove Task"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 dark:border-neutral-800">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isPending ? "Saving..." : (program ? "Update Program" : "Create Program")}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
