"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { format, startOfWeek, addDays } from "date-fns";
import { X, Calendar, Clock, RotateCcw, User, Baby, Activity } from "lucide-react";
import { createSession, createMonthlySchedule, updateSession } from "@/lib/actions";

interface Child {
    id: string;
    name: string;
    therapyTypes?: {
        therapyId: string;
        therapistId: string;
        therapy: { name: string };
        therapist: { name: string };
    }[];
}

interface ScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: Child[];
    allTherapists?: any[];
    initialDate?: Date;
    sessionToEdit?: any;
}

export default function ScheduleModal({ isOpen, onClose, children, allTherapists, initialDate, sessionToEdit }: ScheduleModalProps) {
    const [mode, setMode] = useState<"SINGLE" | "MONTHLY">("SINGLE");
    const [selectedChildId, setSelectedChildId] = useState("");
    const [selectedTherapyId, setSelectedTherapyId] = useState("");
    const [selectedTherapistId, setSelectedTherapistId] = useState("");
    const [date, setDate] = useState(format(initialDate || new Date(), "yyyy-MM-dd"));
    const [startTime, setStartTime] = useState("10:00");
    const [duration, setDuration] = useState("45");
    const [status, setStatus] = useState<"SCHEDULED" | "COMPLETED" | "CANCELLED" | "RESCHEDULED">("SCHEDULED");
    const [weeks, setWeeks] = useState("4");
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Populate when editing
    useEffect(() => {
        if (sessionToEdit) {
            setMode("SINGLE");
            setSelectedChildId(sessionToEdit.child.id);
            setSelectedTherapyId(sessionToEdit.therapy.id);
            setSelectedTherapistId(sessionToEdit.therapist.id);
            setStatus(sessionToEdit.status || "SCHEDULED");
            const sDate = new Date(sessionToEdit.date);
            setDate(format(sDate, "yyyy-MM-dd"));
            setStartTime(format(sDate, "HH:mm"));
            setDuration(String(sessionToEdit.durationMinutes || "45"));
        } else {
            // Reset for new
            setSelectedChildId("");
            setSelectedTherapyId("");
            setSelectedTherapistId("");
            setStatus("SCHEDULED");
            setDate(format(initialDate || new Date(), "yyyy-MM-dd"));
            setStartTime("10:00");
        }
    }, [sessionToEdit, initialDate]);

    // Reset when child changes (only for new session)
    useEffect(() => {
        if (selectedChildId && !sessionToEdit) {
            const child = children.find(c => c.id === selectedChildId);
            if (child?.therapyTypes?.length) {
                const first = child.therapyTypes[0];
                setSelectedTherapyId(first.therapyId);
                setSelectedTherapistId(first.therapistId);
            }
        }
    }, [selectedChildId, children, sessionToEdit]);

    // Update therapist when therapy changes
    const handleTherapyChange = (therapyId: string) => {
        setSelectedTherapyId(therapyId);
        const child = children.find(c => c.id === selectedChildId);
        const therapyType = child?.therapyTypes?.find(t => t.therapyId === therapyId);
        if (therapyType) {
            setSelectedTherapistId(therapyType.therapistId);
        }
    };

    const toggleDay = (day: number) => {
        setSelectedDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        setMessage("");

        const formData = new FormData();
        formData.append("childId", selectedChildId);
        formData.append("therapistId", selectedTherapistId);
        formData.append("therapyId", selectedTherapyId);
        formData.append("durationMinutes", duration);
        formData.append("status", status);

        try {
            let res;
            if (sessionToEdit) {
                const fullDate = new Date(`${date}T${startTime}`);
                formData.append("date", fullDate.toISOString());
                res = await updateSession(sessionToEdit.id, formData);
            } else if (mode === "SINGLE") {
                const fullDate = new Date(`${date}T${startTime}`);
                formData.append("date", fullDate.toISOString());
                res = await createSession(formData);
            } else {
                formData.append("startTime", startTime);
                formData.append("startDate", date);
                formData.append("weeks", weeks);
                formData.append("selectedDays", JSON.stringify(selectedDays));
                res = await createMonthlySchedule(formData);
            }

            if (res.message.toLowerCase().includes("success") || res.message.toLowerCase().includes("updated") || res.message.toLowerCase().includes("scheduled")) {
                onClose();
            } else {
                setMessage(res.message);
            }
        } catch (error) {
            setMessage("Something went wrong");
        } finally {
            setIsPending(false);
        }
    };

    if (!isOpen) return null;
    if (!mounted) return null;

    const selectedChild = children.find(c => c.id === selectedChildId);

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-gray-50/50 dark:bg-neutral-900">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {sessionToEdit ? "Reschedule Session" : "Schedule Sessions"}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {sessionToEdit ? "Modify appointment details" : "Create therapy appointments"}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {/* Mode Toggle */}
                    {!sessionToEdit && (
                        <div className="flex p-1 bg-gray-100 dark:bg-neutral-800 rounded-xl">
                            <button
                                type="button"
                                onClick={() => setMode("SINGLE")}
                                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all ${mode === "SINGLE"
                                    ? "bg-white dark:bg-neutral-700 text-blue-600 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                                    }`}
                            >
                                <Calendar className="w-4 h-4" />
                                Single
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode("MONTHLY")}
                                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all ${mode === "MONTHLY"
                                    ? "bg-white dark:bg-neutral-700 text-blue-600 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                                    }`}
                            >
                                <RotateCcw className="w-4 h-4" />
                                Monthly Recurring
                            </button>
                        </div>
                    )}

                    <div className="space-y-4">
                        {/* Child Selection */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Child</label>
                            <div className="relative">
                                <Baby className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select
                                    required
                                    disabled={!!sessionToEdit}
                                    value={selectedChildId}
                                    onChange={(e) => setSelectedChildId(e.target.value)}
                                    className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all appearance-none ${sessionToEdit ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <option value="">Select Child</option>
                                    {children.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                            </div>
                        </div>

                        {selectedChild && (
                            <>
                                {/* Therapy Selection */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Therapy Type</label>
                                    <div className="relative">
                                        <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <select
                                            required
                                            value={selectedTherapyId}
                                            onChange={(e) => handleTherapyChange(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                                        >
                                            <option value="">Select Therapy</option>
                                            {selectedChild.therapyTypes?.map(t => (
                                                <option key={t.therapyId} value={t.therapyId}>{t.therapy.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Therapist */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Therapist</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <select
                                            required
                                            value={selectedTherapistId}
                                            onChange={(e) => setSelectedTherapistId(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                                        >
                                            <option value="">Select Therapist</option>
                                            {/* Show assigned therapist first if available */}
                                            {selectedChild.therapyTypes?.find(t => t.therapyId === selectedTherapyId) && (
                                                <optgroup label="Assigned">
                                                    {selectedChild.therapyTypes
                                                        .filter(t => t.therapyId === selectedTherapyId)
                                                        .map(t => (
                                                            <option key={`assigned-${t.therapistId}`} value={t.therapistId}>{t.therapist.name}</option>
                                                        ))
                                                    }
                                                </optgroup>
                                            )}
                                            {/* Show other eligible therapists */}
                                            <optgroup label="Other Qualified Therapists">
                                                {allTherapists?.filter(t => {
                                                    // Check if specialization matches selected therapy
                                                    try {
                                                        const spec = t.specialization;
                                                        if (!spec) return false;
                                                        // Check if it's the specific therapy ID
                                                        if (spec === selectedTherapyId) return true;
                                                        // Check if it's a JSON array containing the ID
                                                        const parsed = JSON.parse(spec);
                                                        return Array.isArray(parsed) && parsed.includes(selectedTherapyId);
                                                    } catch (e) {
                                                        return t.specialization === selectedTherapyId;
                                                    }
                                                })
                                                    .filter(t => !selectedChild.therapyTypes?.some(st => st.therapistId === t.id && st.therapyId === selectedTherapyId)) // Exclude already shown
                                                    .map(t => (
                                                        <option key={`other-${t.id}`} value={t.id}>{t.name}</option>
                                                    ))}
                                            </optgroup>
                                        </select>
                                    </div>
                                    {!sessionToEdit && <p className="text-[10px] text-gray-400 mt-1 italic">Therapist is automatically assigned based on therapy type</p>}
                                </div>
                            </>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">
                                    {mode === "SINGLE" ? "Date" : "Start Date"}
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Start Time</label>
                                <input
                                    type="time"
                                    required
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Duration</label>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <select
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                                    >
                                        <option value="30">30 min</option>
                                        <option value="45">45 min</option>
                                        <option value="60">60 min</option>
                                        <option value="90">90 min</option>
                                    </select>
                                </div>
                            </div>
                            {sessionToEdit && (
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Status</label>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value as any)}
                                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                                    >
                                        <option value="SCHEDULED">Scheduled</option>
                                        <option value="COMPLETED">Completed</option>
                                        <option value="CANCELLED">Cancelled</option>
                                        <option value="RESCHEDULED">Rescheduled</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {mode === "MONTHLY" && !sessionToEdit && (
                            <div className="space-y-4 pt-2 animate-slide-up">
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Repeat For (Weeks)</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="52"
                                        value={weeks}
                                        onChange={(e) => setWeeks(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">On Days</label>
                                    <div className="flex flex-wrap gap-2">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label, i) => {
                                            const dayVal = (i + 1) % 7;
                                            const isSelected = selectedDays.includes(dayVal);
                                            return (
                                                <button
                                                    key={label}
                                                    type="button"
                                                    onClick={() => toggleDay(dayVal)}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${isSelected
                                                        ? "bg-blue-600 border-blue-600 text-white"
                                                        : "bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-gray-300 hover:border-blue-400"
                                                        }`}
                                                >
                                                    {label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {message && (
                        <div className={`p-4 rounded-xl text-sm font-medium ${message.toLowerCase().includes("success") || message.toLowerCase().includes("updated") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                            {message}
                        </div>
                    )}

                    <div className="pt-4 sticky bottom-0 bg-white dark:bg-neutral-900 pb-2">
                        <button
                            type="submit"
                            disabled={isPending || !selectedChildId || (mode === "MONTHLY" && selectedDays.length === 0)}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all transform active:scale-95"
                        >
                            {isPending ? "Saving..." : sessionToEdit ? "Update Session" : "Schedule Session"}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
