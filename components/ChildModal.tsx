"use client";

import { useState, useTransition, useEffect } from "react";
import { createChild, updateChild } from "@/lib/actions";
import { toast } from "sonner";
import { X, Save, AlertCircle, Calendar, User, Stethoscope, Activity, Check } from "lucide-react";
import { createPortal } from "react-dom";
import { differenceInYears } from "date-fns";

interface ChildModalProps {
    isOpen: boolean;
    onClose: () => void;
    child?: {
        id: string;
        name: string;
        status: "ACTIVE" | "INACTIVE";
        dob?: string | null;
        gender?: string | null;
        diagnosis?: string | null;
        parentId?: string | null;
        therapyTypes?: {
            therapyId: string,
            therapistId?: string | null,
            therapy: { id: string, name: string },
            therapist?: { id: string, name: string } | null
        }[];
    } | null;
    parents?: { id: string; name: string }[];
    therapists?: { id: string; name: string }[];
    therapies?: { id: string; name: string }[];
}

export default function ChildModal({ isOpen, onClose, child, parents = [], therapists = [], therapies = [] }: ChildModalProps) {
    const [mounted, setMounted] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Form State
    const [name, setName] = useState("");
    const [status, setStatus] = useState<"ACTIVE" | "INACTIVE">("ACTIVE");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [parentId, setParentId] = useState("");
    const [assignedTherapies, setAssignedTherapies] = useState<Record<string, string>>({}); // therapyId -> therapistId
    const [selectedTherapyIds, setSelectedTherapyIds] = useState<string[]>([]); // Keep this for easier UI toggling
    const [age, setAge] = useState<string>("");

    // Calculate age when DOB changes
    useEffect(() => {
        if (dob) {
            const ageInYears = differenceInYears(new Date(), new Date(dob));
            setAge(ageInYears.toString());
        } else {
            setAge("");
        }
    }, [dob]);

    // Initialize/Reset form
    useEffect(() => {
        if (isOpen) {
            if (child) {
                setName(child.name);
                setStatus(child.status);
                setDob(child.dob || "");
                setGender(child.gender || "");
                setDiagnosis(child.diagnosis || "");
                setParentId(child.parentId || "");
                const assignments: Record<string, string> = {};
                child.therapyTypes?.forEach(t => {
                    assignments[t.therapyId] = t.therapistId || "";
                });
                setAssignedTherapies(assignments);
                setSelectedTherapyIds(child.therapyTypes?.map(t => t.therapyId) || []);
            } else {
                setName("");
                setStatus("ACTIVE");
                setDob("");
                setGender("");
                setDiagnosis("");
                setParentId("");
                setAssignedTherapies({});
                setSelectedTherapyIds([]);
            }
        }
    }, [isOpen, child]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("Name is required");
            return;
        }

        const formData = new FormData();
        formData.append("name", name.trim());
        formData.append("status", status);
        if (dob) formData.append("dob", dob);
        if (gender) formData.append("gender", gender);
        if (diagnosis) formData.append("diagnosis", diagnosis);
        if (parentId) formData.append("parentId", parentId);

        // Pass therapies as JSON string: { therapyId, therapistId }[]
        const therapiesToSubmit = selectedTherapyIds.map(tid => ({
            therapyId: tid,
            therapistId: assignedTherapies[tid] || null
        }));
        formData.append("therapies", JSON.stringify(therapiesToSubmit));

        startTransition(async () => {
            let result;
            if (child) {
                result = await updateChild(child.id, formData);
            } else {
                result = await createChild(formData);
            }

            if (result.message.includes("created") || result.message.includes("updated")) {
                toast.success(result.message);
                onClose();
            } else {
                toast.error(result.message);
            }
        });
    };

    const toggleTherapy = (id: string) => {
        setSelectedTherapyIds(prev => {
            const isSelected = prev.includes(id);
            if (isSelected) {
                const newState = prev.filter(tid => tid !== id);
                // Assignment removal is optional if you want them to keep it if they toggle back
                return newState;
            } else {
                return [...prev, id];
            }
        });
    };

    const updateTherapistForTherapy = (therapyId: string, therapistId: string) => {
        setAssignedTherapies(prev => ({ ...prev, [therapyId]: therapistId }));
    };

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            {child ? "Edit Child Profile" : "Add New Child"}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {child ? "Update personal and therapy details" : "Register a new child for therapy services"}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto custom-scrollbar">
                    <div className="space-y-6">

                        {/* Basic Info Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                                <User className="w-4 h-4 text-blue-500" /> Basic Information
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                                        placeholder="e.g. John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Date of Birth
                                        {age && <span className="ml-2 text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded text-xs">Age: {age}</span>}
                                    </label>
                                    <input
                                        type="date"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender</label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100 dark:border-neutral-800" />

                        {/* Therapy Details Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                                <Stethoscope className="w-4 h-4 text-green-500" /> Clinical Details
                            </h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Diagnosis / Condition</label>
                                <textarea
                                    value={diagnosis}
                                    onChange={(e) => setDiagnosis(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400 min-h-[60px]"
                                    placeholder="e.g. ASD, ADHD, Speech Delay..."
                                />
                                <p className="text-xs text-gray-400 mt-1">Separate multiple diagnoses with commas</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assign Parent</label>
                                    <select
                                        value={parentId}
                                        onChange={(e) => setParentId(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none"
                                    >
                                        <option value="">Select Parent...</option>
                                        {parents.map(p => (
                                            <option key={p.id} value={p.id}>{p.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Therapy Types</label>
                                <div className="space-y-3">
                                    {therapies.map(t => {
                                        const isSelected = selectedTherapyIds.includes(t.id);
                                        return (
                                            <div key={t.id} className="space-y-2">
                                                <div
                                                    onClick={() => toggleTherapy(t.id)}
                                                    className={`cursor-pointer px-3 py-2.5 rounded-xl border text-sm flex items-center gap-3 transition-all ${isSelected
                                                        ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400 font-medium'
                                                        : 'bg-gray-50 border-gray-100 text-gray-600 dark:bg-neutral-800 dark:border-neutral-800 dark:text-gray-400 hover:border-gray-200 dark:hover:border-neutral-700'
                                                        }`}
                                                >
                                                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${isSelected
                                                        ? 'bg-blue-500 border-blue-500 text-white shadow-sm'
                                                        : 'bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-600'
                                                        }`}>
                                                        {isSelected && <Check className="w-3.5 h-3.5" />}
                                                    </div>
                                                    <span className="flex-1">{t.name}</span>
                                                </div>

                                                {isSelected && (
                                                    <div className="pl-8 pr-2 animate-in slide-in-from-top-1 duration-200">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                            <select
                                                                value={assignedTherapies[t.id] || ""}
                                                                onChange={(e) => updateTherapistForTherapy(t.id, e.target.value)}
                                                                className="flex-1 px-3 py-1.5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none"
                                                            >
                                                                <option value="">Select Therapist for {t.name}...</option>
                                                                {therapists.map(ther => (
                                                                    <option key={ther.id} value={ther.id}>{ther.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100 dark:border-neutral-800" />

                        {/* Status */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                                <Activity className="w-4 h-4 text-purple-500" /> System Status
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as "ACTIVE" | "INACTIVE")}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none"
                                >
                                    <option value="ACTIVE">Active</option>
                                    <option value="INACTIVE">Inactive</option>
                                </select>
                                <p className="text-xs text-gray-500 mt-1">
                                    <AlertCircle className="w-3 h-3 inline mr-1" />
                                    Inactive children won't appear in other lists.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-8 pt-4 border-t border-gray-100 dark:border-neutral-800">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
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
                                    Save Child
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
