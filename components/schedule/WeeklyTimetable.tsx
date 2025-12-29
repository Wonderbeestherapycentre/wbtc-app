"use client";

import { useState } from "react";
import { format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks } from "date-fns";
import { ChevronLeft, ChevronRight, Calendar, Filter, Trash2 } from "lucide-react";
import dynamic from 'next/dynamic';
import { deleteSession } from "@/lib/actions";
import ConfirmModal from "@/components/ConfirmModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const WeeklyTimetableDownload = dynamic(
    () => import("./WeeklyTimetableDownload"),
    {
        ssr: false,
        loading: () => <button className="text-xs font-bold text-white px-3 py-1.5 bg-gray-300 rounded-lg">Loading PDF...</button>,
    }
);



interface Session {
    id: string;
    date: Date | string;
    durationMinutes: number | null;
    status: "SCHEDULED" | "COMPLETED" | "CANCELLED" | "RESCHEDULED" | null;
    child: { id: string; name: string };
    therapist: { id: string; name: string };
    therapy: { id: string; name: string };
}

interface WeeklyTimetableProps {
    sessions: Session[];
    therapists: { id: string; name: string }[];
}

export default function WeeklyTimetable({ sessions, therapists }: WeeklyTimetableProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedTherapistId, setSelectedTherapistId] = useState("");

    const weekStartDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday start
    const weekDays = Array.from({ length: 6 }).map((_, i) => addDays(weekStartDate, i)); // Mon-Sat

    const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
    const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));
    const goToToday = () => setCurrentDate(new Date());

    const filteredSessions = selectedTherapistId
        ? sessions.filter(s => s.therapist.id === selectedTherapistId)
        : sessions;

    // Generate 45-minute slots from 9:00 AM to 8:30 PM
    const generateTimeSlots = () => {
        const slots: { label: string; startTime: Date; endTime: Date; isBreak?: boolean; breakLabel?: string }[] = [];
        let currentTime = new Date();
        currentTime.setHours(9, 0, 0, 0); // Start at 9:00 AM

        const endTime = new Date();
        endTime.setHours(20, 30, 0, 0); // End at 8:30 PM

        while (currentTime < endTime) {
            // Check for Break Time 11:15 - 11:30
            if (currentTime.getHours() === 11 && currentTime.getMinutes() === 15) {
                const breakEnd = new Date(currentTime);
                breakEnd.setMinutes(breakEnd.getMinutes() + 15);

                slots.push({
                    label: "11.15-11.30",
                    startTime: new Date(currentTime),
                    endTime: breakEnd,
                    isBreak: true,
                    breakLabel: "BREAK"
                });
                currentTime = breakEnd;
                continue;
            }

            // Check for Lunch Time 1:00 PM - 1:45 PM (13:00)
            if (currentTime.getHours() === 13 && currentTime.getMinutes() === 0) {
                const lunchEnd = new Date(currentTime);
                lunchEnd.setMinutes(lunchEnd.getMinutes() + 45);

                slots.push({
                    label: "1.45-2.30",
                    startTime: new Date(currentTime),
                    endTime: lunchEnd,
                    isBreak: true,
                    breakLabel: "LUNCH"
                });
                currentTime = lunchEnd;
                continue;
            }

            const startStr = format(currentTime, "h.mm"); // 9.00

            const nextTime = new Date(currentTime.getTime() + 45 * 60000); // 45 minutes
            const endStr = format(nextTime, "h.mm"); // 9.45

            const label = `${startStr}-${endStr}`;

            slots.push({
                label,
                startTime: new Date(currentTime),
                endTime: new Date(nextTime),
                isBreak: false
            });

            currentTime = nextTime;
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    // Helper to check if session fits in slot roughly
    const findSessions = (day: Date, slotStart: Date) => {
        return filteredSessions.filter(s => {
            const sDate = new Date(s.date);
            if (!isSameDay(sDate, day)) return false;

            // Convert everything to minutes from midnight for easier comparison
            const sMinutes = sDate.getHours() * 60 + sDate.getMinutes();
            const slotMinutes = slotStart.getHours() * 60 + slotStart.getMinutes();

            // Check if session starts at or slightly after slot start
            const diff = Math.abs(sMinutes - slotMinutes);
            return diff < 5; // 5 minute tolerance
        });
    };

    const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter(); // Initialize router

    const handleDelete = (sessionId: string) => {
        setSessionToDelete(sessionId);
    };

    const confirmDelete = async () => {
        if (!sessionToDelete) return;

        setIsDeleting(true);
        try {
            await deleteSession(sessionToDelete);
            setSessionToDelete(null); // Close modal
            router.refresh(); // Refresh to update UI
        } catch (error) {
            console.error("Failed to delete", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Link
                            href="/schedule"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <Calendar className="w-5 h-5" />
                        Weekly Timetable
                    </h2>
                    <div className="flex items-center gap-1 bg-gray-100 dark:bg-neutral-800 p-1 rounded-lg">
                        <button onClick={prevWeek} className="p-1 hover:bg-white dark:hover:bg-neutral-700 rounded-md">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-bold px-2 w-32 text-center">
                            {format(weekStartDate, "MMM d")} - {format(weekDays[weekDays.length - 1], "MMM d, yyyy")}
                        </span>
                        <button onClick={nextWeek} className="p-1 hover:bg-white dark:hover:bg-neutral-700 rounded-md">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <WeeklyTimetableDownload
                        key={`${weekStartDate.toISOString()}-${selectedTherapistId}-${filteredSessions.length}`}
                        sessions={filteredSessions}
                        weekStartDate={weekStartDate}
                        selectedTherapistName={therapists.find(t => t.id === selectedTherapistId)?.name}
                    />

                    <button onClick={goToToday} className="text-xs font-bold text-blue-600 px-3 py-1.5 bg-blue-50 rounded-lg hover:bg-blue-100">
                        Current Week
                    </button>

                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-800/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-neutral-700">
                        <Filter className="w-3.5 h-3.5 text-gray-400" />
                        <select
                            value={selectedTherapistId}
                            onChange={(e) => setSelectedTherapistId(e.target.value)}
                            className="bg-transparent border-none text-xs font-bold focus:ring-0 p-0 text-gray-700 dark:text-gray-300"
                        >
                            <option value="">All Therapists</option>
                            {therapists.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow border border-gray-200 dark:border-neutral-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="p-3 text-xs font-black uppercase tracking-wider border-r border-blue-500 w-32">
                                    Timings
                                </th>
                                {weekDays.map(day => (
                                    <th key={day.toString()} className="p-3 text-xs font-black uppercase tracking-wider border-r border-blue-500 min-w-[120px]">
                                        {format(day, "EEEE")}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {timeSlots.map((slot, index) => (
                                <tr key={index} className={`hover:bg-gray-50 dark:hover:bg-neutral-800/50 ${slot.isBreak ? "bg-orange-50 dark:bg-orange-900/10" : ""}`}>
                                    <td className={`p-3 text-xs font-bold text-gray-500 border-r border-gray-100 dark:border-neutral-800 whitespace-nowrap ${slot.isBreak ? "text-orange-700 dark:text-orange-500 italic" : "bg-gray-50/50 dark:bg-neutral-900/50"}`}>
                                        {slot.label}
                                        {slot.isBreak && <span className="ml-2 px-1.5 py-0.5 bg-orange-100 text-orange-800 text-[10px] rounded uppercase font-black tracking-wider">{slot.breakLabel || "BREAK"}</span>}
                                    </td>
                                    {weekDays.map(day => {
                                        if (slot.isBreak) {
                                            return (
                                                <td key={day.toString()} className="p-2 border-r border-gray-200 dark:border-neutral-800 text-center relative h-10 bg-stripes-orange opacity-40">
                                                    {/* Break Area */}
                                                </td>
                                            );
                                        }

                                        const slotSessions = findSessions(day, slot.startTime);
                                        return (
                                            <td key={day.toString()} className="p-2 border-r border-gray-100 dark:border-neutral-800 text-center align-top relative h-16">
                                                {slotSessions.map(session => (
                                                    <div key={session.id} className="group relative mb-1 p-1.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold leading-tight hover:bg-blue-200 transition-colors">
                                                        {session.child.name}
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDelete(session.id);
                                                            }}
                                                            className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-sm text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 z-10"
                                                        >
                                                            <Trash2 className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmModal
                isOpen={!!sessionToDelete}
                onClose={() => setSessionToDelete(null)}
                onConfirm={confirmDelete}
                title="Delete Session"
                description="Are you sure you want to delete this session? This action cannot be undone."
                confirmLabel="Delete Session"
                isPending={isDeleting}
            />
        </div>
    );
}
