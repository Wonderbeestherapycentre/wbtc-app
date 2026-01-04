"use client";

import { useState, useEffect, useTransition } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { createSessionNote, updateSessionNote } from "@/lib/actions";
import { X, Plus, Trash2, Baby } from "lucide-react";
import { PROMPT_OPTIONS } from "@/lib/constants";
import { SessionNoteSchema } from "@/lib/validations/session-note";
import { getTodayIST } from "@/lib/utils/timezone";
import SearchableDropdown from "../ui/SearchableDropdown";

interface SessionNoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    note?: any;
    childrenList: { id: string; name: string; caseNumber?: string; assignedTherapies: string[] }[];
    therapies: { id: string; name: string }[];
    goals: any[];
    therapistSpecialization?: string | null;
}

export default function SessionNoteModal({
    isOpen,
    onClose,
    note,
    childrenList,
    therapies,
    goals,
    therapistSpecialization
}: SessionNoteModalProps) {
    const [isPending, startTransition] = useTransition();
    const [mounted, setMounted] = useState(false);

    // Form state
    const [selectedChildId, setSelectedChildId] = useState("");
    const [selectedTherapyId, setSelectedTherapyId] = useState("");
    const [date, setDate] = useState("");
    const [selectedObjectives, setSelectedObjectives] = useState<Record<string, string[]>>({}); // {goalId: [objective1, objective2...]}
    const [activities, setActivities] = useState<{ description: string; prompt: string }[]>([
        { description: "", prompt: "" }
    ]);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const childOptions = childrenList.map(c => ({
        value: c.id,
        label: c.name
    }));

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            if (note) {
                // Editing
                setSelectedChildId(note.childId);
                setSelectedTherapyId(note.therapyId);
                setDate(note.date);
                try {
                    const objData = JSON.parse(note.goalsAddressed || "{}");
                    setSelectedObjectives(typeof objData === 'object' && !Array.isArray(objData) ? objData : {});
                } catch (e) {
                    setSelectedObjectives({});
                }
                try {
                    const acts = JSON.parse(note.activities || "[]");
                    setActivities(Array.isArray(acts) && acts.length > 0 ? acts : [{ description: "", prompt: "" }]);
                } catch (e) {
                    setActivities([{ description: "", prompt: "" }]);
                }
            } else {
                // Creating new note - auto-select therapist's specialization
                console.log("Creating new note, setting therapy to:", therapistSpecialization || "empty");
                setSelectedChildId("");
                setSelectedTherapyId(therapistSpecialization || "");
                setDate(getTodayIST());
                setSelectedObjectives({});
                setActivities([{ description: "", prompt: "" }]);
            }
            setErrors({});
        }
    }, [isOpen, note, therapistSpecialization]);

    // Filter goals based on selected child and therapy
    const availableGoals = goals.filter(
        goal => goal.childId === selectedChildId && goal.therapyId === selectedTherapyId
    );

    const handleActivityChange = (index: number, field: "description" | "prompt", value: string) => {
        const newActivities = [...activities];
        newActivities[index][field] = value;
        setActivities(newActivities);
        if (errors[`activities.${index}.${field}`]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[`activities.${index}.${field}`];
                return newErrs;
            });
        }
    };

    const addActivity = () => {
        setActivities([...activities, { description: "", prompt: "" }]);
    };

    const removeActivity = (index: number) => {
        if (activities.length === 1) return;
        setActivities(activities.filter((_, i) => i !== index));
    };

    const toggleObjective = (goalId: string, objective: string) => {
        setSelectedObjectives(prev => {
            const currentObjectives = prev[goalId] || [];
            const isSelected = currentObjectives.includes(objective);

            if (isSelected) {
                // Remove objective
                const newObjectives = currentObjectives.filter(obj => obj !== objective);
                if (newObjectives.length === 0) {
                    // Remove goal entirely if no objectives selected
                    const { [goalId]: _, ...rest } = prev;
                    return rest;
                }
                return { ...prev, [goalId]: newObjectives };
            } else {
                // Add objective
                return { ...prev, [goalId]: [...currentObjectives, objective] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const validActivities = activities.filter(a => a.description.trim() !== "" || a.prompt !== "");

        const validationResult = SessionNoteSchema.safeParse({
            childId: selectedChildId,
            therapyId: selectedTherapyId,
            date: date,
            goalsAddressed: JSON.stringify(selectedObjectives),
            activities: JSON.stringify(validActivities),
        });

        if (!validationResult.success) {
            const fieldErrors: Record<string, string> = {};
            validationResult.error.issues.forEach(issue => {
                const path = issue.path.join('.');
                fieldErrors[path] = issue.message;
            });
            setErrors(fieldErrors);

            // Focus on first error if it's a field
            const firstError = validationResult.error.issues[0].message;
            toast.error(firstError);
            return;
        }

        const formData = new FormData();
        formData.append("childId", selectedChildId);
        formData.append("therapyId", selectedTherapyId);
        formData.append("date", date);
        formData.append("goalsAddressed", JSON.stringify(selectedObjectives));
        formData.append("activities", JSON.stringify(validActivities));

        if (note) {
            formData.append("id", note.id);
        }

        startTransition(async () => {
            const result = note ? await updateSessionNote(formData) : await createSessionNote(formData);

            if (result.message.includes("success")) {
                toast.success(result.message);
                onClose();
            } else if ((result as any).errors) {
                const fieldErrors = (result as any).errors;
                setErrors(fieldErrors);
                const firstError = Object.values(fieldErrors)[0];
                toast.error(String(firstError));
            } else {
                toast.error(result.message);
            }
        });
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-10 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {note ? "Edit Session Note" : "New Session Note"}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="py-2 px-4 space-y-2">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Child</label>
                            <SearchableDropdown
                                options={childOptions}
                                value={selectedChildId}
                                onChange={(val) => {
                                    setSelectedChildId(val);
                                    if (errors.childId) {
                                        setErrors(prev => {
                                            const { childId, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                disabled={!!note}
                                required={true}
                                error={errors.childId}
                                placeholder="Select Child"
                                icon={<Baby className="w-4 h-4" />}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Therapy</label>
                            <select
                                required
                                value={selectedTherapyId}
                                onChange={(e) => setSelectedTherapyId(e.target.value)}
                                disabled={true}
                                className="w-full px-4 py-2 bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all opacity-60 cursor-not-allowed"
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
                            <p className="text-xs text-gray-500 dark:text-gray-400">Auto-selected from your specialization</p>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                            <input
                                type="date"
                                required
                                value={date}
                                max={getTodayIST()}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    if (errors.date) {
                                        setErrors(prev => {
                                            const { date, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                className={`w-full px-4 py-2 bg-white dark:bg-neutral-800 border ${errors.date ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
                            />
                            {errors.date && (
                                <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                            )}
                        </div>
                    </div>

                    {/* Goals */}
                    {selectedChildId && selectedTherapyId && availableGoals.length > 0 && (
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Today Goals</label>
                            <div className="max-h-60 overflow-y-auto border border-gray-200 dark:border-neutral-700 rounded-xl p-3 space-y-3">
                                {availableGoals.map(goal => {
                                    let objectives = [];
                                    try {
                                        objectives = JSON.parse(goal.objectives || "[]");
                                    } catch (e) {
                                        objectives = [];
                                    }

                                    if (!Array.isArray(objectives) || objectives.length === 0) return null;

                                    const selectedForThisGoal = selectedObjectives[goal.id] || [];

                                    return (
                                        <div key={goal.id} className="border-b border-gray-100 dark:border-neutral-800 pb-3 last:border-b-0 last:pb-0">
                                            <div className="font-medium text-sm text-gray-900 dark:text-white mb-2 px-2">{goal.title}</div>
                                            <div className="space-y-1.5">
                                                {objectives.map((objective, idx) => (
                                                    <label key={idx} className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedForThisGoal.includes(objective)}
                                                            onChange={() => toggleObjective(goal.id, objective)}
                                                            className="mt-0.5 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                                        />
                                                        <span className="text-sm text-gray-700 dark:text-gray-200">{objective}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Activities */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Activities</label>
                            <button
                                type="button"
                                onClick={addActivity}
                                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
                            >
                                <Plus className="w-3 h-3" /> Add Activity
                            </button>
                        </div>
                        <div className="space-y-3">
                            {activities.map((activity, index) => (
                                <div key={index} className="flex gap-2 items-start animate-in slide-in-from-left-2 duration-200">
                                    <div className="px-2 py-2 text-xs font-medium text-gray-400">{index + 1}.</div>
                                    <div className="flex-1 space-y-2">
                                        <input
                                            type="text"
                                            value={activity.description}
                                            onChange={(e) => handleActivityChange(index, "description", e.target.value)}
                                            placeholder="Activity description..."
                                            className={`w-full px-3 py-2 bg-white dark:bg-neutral-800 border ${errors[`activities.${index}.description`] ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm`}
                                        />
                                        {errors[`activities.${index}.description`] && (
                                            <p className="mt-1 text-[10px] text-red-500 px-1">{errors[`activities.${index}.description`]}</p>
                                        )}
                                        <div className="space-y-1">
                                            <select
                                                value={activity.prompt}
                                                onChange={(e) => handleActivityChange(index, "prompt", e.target.value)}
                                                className={`w-full px-3 py-2 bg-white dark:bg-neutral-800 border ${errors[`activities.${index}.prompt`] ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm`}
                                            >
                                                <option value="">Select Prompt</option>
                                                {PROMPT_OPTIONS.map(opt => (
                                                    <option key={opt.key} value={opt.key}>{opt.value}</option>
                                                ))}
                                            </select>
                                            {errors[`activities.${index}.prompt`] && (
                                                <p className="mt-1 text-[10px] text-red-500 px-1">{errors[`activities.${index}.prompt`]}</p>
                                            )}
                                            {activity.prompt && (() => {
                                                const option = PROMPT_OPTIONS.find(opt => opt.key === activity.prompt);
                                                return option?.desc ? (
                                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 px-1 leading-tight">
                                                        {option.desc}
                                                    </p>
                                                ) : null;
                                            })()}
                                        </div>
                                    </div>
                                    {activities.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeActivity(index)}
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
                            {isPending ? "Saving..." : (note ? "Update Note" : "Create Note")}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
