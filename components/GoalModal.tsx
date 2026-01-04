"use client";

import { useState, useEffect } from "react";
import { useTransition } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { createGoal, updateGoal } from "@/lib/actions";
import { X, Plus, Trash2, User } from "lucide-react";
import SearchableDropdown from "./ui/SearchableDropdown";

interface GoalModalProps {
    isOpen: boolean;
    onClose: () => void;
    goal?: any; // Goal to edit, if any
    childId?: string; // Pre-select child if available
    childrenList: { id: string; name: string; caseNumber?: string; assignedTherapies: string[] }[];
    therapies: { id: string; name: string }[];
    role?: "ADMIN" | "THERAPIST" | "PARENT";
}

export default function GoalModal({
    isOpen,
    onClose,
    goal,
    childId,
    childrenList,
    therapies,
    role
}: GoalModalProps) {
    const [isPending, startTransition] = useTransition();

    // Form States
    // const [title, setTitle] = useState("");
    const [selectedChildId, setSelectedChildId] = useState("");
    const [selectedTherapyId, setSelectedTherapyId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("EMERGING");

    // Objectives List
    const [objectives, setObjectives] = useState<string[]>([""]);

    useEffect(() => {
        if (isOpen) {
            if (goal) {
                // Editing
                // setTitle(goal.title);
                setSelectedChildId(goal.childId);
                setSelectedTherapyId(goal.therapyId);
                setStartDate(goal.startDate ? new Date(goal.startDate).toISOString().split('T')[0] : "");
                setEndDate(goal.endDate ? new Date(goal.endDate).toISOString().split('T')[0] : "");
                setStatus(goal.status);
                try {
                    const parsed = JSON.parse(goal.objectives);
                    setObjectives(Array.isArray(parsed) && parsed.length > 0 ? parsed : [""]);
                } catch (e) {
                    setObjectives([""]); // Fallback
                }
            } else {
                // Creating
                // setTitle("");
                setSelectedChildId(childId || "");
                setSelectedTherapyId("");
                setStartDate(new Date().toISOString().split('T')[0]);
                // Default end date +3 months? 
                const future = new Date();
                future.setMonth(future.getMonth() + 3);
                setEndDate(future.toISOString().split('T')[0]);
                setStatus("EMERGING");
                setObjectives([""]);
            }
        }
    }, [isOpen, goal, childId]);

    // Auto-select therapy if only one is available for the child
    useEffect(() => {
        if (selectedChildId) {
            const availableTherapies = therapies.filter(t => {
                const child = childrenList.find(c => c.id === selectedChildId);
                return child?.assignedTherapies?.includes(t.id);
            });

            if (availableTherapies.length === 1 && !selectedTherapyId) {
                setSelectedTherapyId(availableTherapies[0].id);
            }
        }
    }, [selectedChildId, therapies, childrenList, selectedTherapyId]);

    const handleObjectiveChange = (index: number, value: string) => {
        const newObjectives = [...objectives];
        newObjectives[index] = value;
        setObjectives(newObjectives);
    };

    const addObjective = () => {
        setObjectives([...objectives, ""]);
    };

    const removeObjective = (index: number) => {
        if (objectives.length === 1) return; // Keep at least one
        const newObjectives = objectives.filter((_, i) => i !== index);
        setObjectives(newObjectives);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Filter out empty objectives
        const filteredObjectives = objectives.filter(o => o.trim() !== "");
        if (filteredObjectives.length === 0) {
            toast.error("Please add at least one objective");
            return;
        }

        const formData = new FormData();
        // formData.append("title", title);
        formData.append("childId", selectedChildId);
        formData.append("therapyId", selectedTherapyId);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("objectives", JSON.stringify(filteredObjectives));
        formData.append("status", status);

        if (goal) {
            formData.append("id", goal.id);
        }

        startTransition(async () => {
            let result;
            if (goal) {
                result = await updateGoal(formData);
            } else {
                result = await createGoal(formData);
            }

            if (result.message.includes("success")) {
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

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-10 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {goal ? "Edit Goal" : "New Goal Plan"}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="py-2 px-4 space-y-2">
                    {/* Basic Info */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Child</label>
                            <SearchableDropdown
                                options={childrenList.map(c => ({
                                    value: c.id,
                                    label: c.name
                                }))}
                                value={selectedChildId}
                                onChange={(val) => setSelectedChildId(val)}
                                disabled={!!childId || !!goal}
                                placeholder="Search & Select Child"
                                icon={<User className="w-3.5 h-3.5" />}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Therapy</label>
                            <select
                                required
                                value={selectedTherapyId}
                                onChange={(e) => setSelectedTherapyId(e.target.value)}
                                disabled={(role === "THERAPIST" && therapies.filter(t => {
                                    const child = childrenList.find(c => c.id === selectedChildId);
                                    return child?.assignedTherapies?.includes(t.id);
                                }).length <= 1) || !!goal}
                                className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all disabled:opacity-50"
                            >
                                <option value="">Select Therapy</option>
                                {therapies
                                    .filter(t => {
                                        if (!selectedChildId) return true;
                                        const child = childrenList.find(c => c.id === selectedChildId);
                                        return child?.assignedTherapies?.includes(t.id);
                                    })
                                    .map(t => (
                                        <option key={t.id} value={t.id}>{t.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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

                    {/* Objectives Section */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {goal ? "Goal Description" : "Goals"}
                            </label>
                            {!goal && (
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
                                <div key={index} className="flex items-start gap-2 animate-in slide-in-from-left-2 duration-200">
                                    {!goal && <div className="px-2 py-2 text-xs font-medium text-gray-400">{index + 1}.</div>}
                                    <textarea
                                        value={obj}
                                        onChange={(e) => handleObjectiveChange(index, e.target.value)}
                                        placeholder={goal ? "Enter goal description..." : "Enter specific goal..."}
                                        rows={2}
                                        className="flex-1 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm resize-none"
                                    />
                                    {!goal && objectives.length > 1 && (
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
                        {/* <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Goal Title</label>
                            <input
                                type="text"
                                
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Q1 Speech Therapy Plan"
                                className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            />
                        </div> */}
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

                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 dark:border-neutral-800">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isPending ? "Saving..." : (goal ? "Update Goal" : "Create Goal")}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
