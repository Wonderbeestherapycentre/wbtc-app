"use client";

import { useState } from "react";
import { format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks } from "date-fns";
import { ChevronLeft, ChevronRight, Plus, MapPin, User, Baby, Clock } from "lucide-react";
import { createSession } from "@/lib/actions";

interface Session {
    id: string;
    date: Date | string;
    durationMinutes: number | null;
    status: "SCHEDULED" | "COMPLETED" | "CANCELLED" | "MISSED" | null;
    child: { name: string };
    therapist: { name: string };
    therapy: { name: string };
}

interface ScheduleCalendarProps {
    sessions: Session[];
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT";
    userId: string;
    // For creating new sessions if needed (pass childId/therapistId options or handle in modal)
}

export default function ScheduleCalendar({ sessions, currentUserRole }: ScheduleCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday start

    const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

    const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
    const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));
    const today = () => setCurrentDate(new Date());

    const getSessionsForDay = (day: Date) => {
        return sessions.filter(session => isSameDay(new Date(session.date), day));
    };

    const getStatusColor = (status: string | null) => {
        switch (status) {
            case "COMPLETED": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800";
            case "CANCELLED": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800";
            case "MISSED": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800";
            default: return "bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 border-blue-100 dark:border-blue-800";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header / Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {format(startDate, "MMMM yyyy")}
                    </h2>
                    <div className="flex bg-gray-100 dark:bg-neutral-800 rounded-lg p-1">
                        <button onClick={prevWeek} className="p-1 hover:bg-white dark:hover:bg-neutral-700 rounded-md transition-shadow shadow-sm hover:shadow">
                            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        <button onClick={nextWeek} className="p-1 hover:bg-white dark:hover:bg-neutral-700 rounded-md transition-shadow shadow-sm hover:shadow">
                            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>
                    <button onClick={today} className="text-sm font-medium text-blue-600 hover:text-blue-700 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        Today
                    </button>
                </div>

                {currentUserRole !== "PARENT" && (
                    <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/20 transition-all font-medium text-sm">
                        <Plus className="w-4 h-4 mr-2" />
                        New Session
                    </button>
                )}
            </div>

            {/* Calendar Grid - Mobile List / Desktop Grid */}
            <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">

                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-7 divide-x divide-gray-100 dark:divide-neutral-800 bg-gray-50/50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
                    {weekDays.map((day) => (
                        <div key={day.toString()} className={`p-4 text-center ${isSameDay(day, new Date()) ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                            <p className="text-xs font-semibold uppercase text-gray-400 mb-1">{format(day, "EEE")}</p>
                            <p className={`text-lg font-bold ${isSameDay(day, new Date()) ? 'text-blue-600' : 'text-gray-900 dark:text-white'}`}>
                                {format(day, "d")}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-neutral-800 min-h-[500px]">
                    {weekDays.map((day) => {
                        const daySessions = getSessionsForDay(day);
                        const isToday = isSameDay(day, new Date());

                        return (
                            <div key={day.toString()} className={`p-2 flex flex-col gap-2 ${isToday ? 'bg-blue-50/10' : ''}`}>

                                {/* Mobile Date Header */}
                                <div className="md:hidden flex items-center justify-between p-2 border-b border-gray-100 dark:border-neutral-800 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">{format(day, "EEEE")}</span>
                                        <span className={`text-sm ${isToday ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>{format(day, "d MMM")}</span>
                                    </div>
                                    {isToday && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Today</span>}
                                </div>

                                {daySessions.length === 0 ? (
                                    <div className="h-full flex items-center justify-center p-4 md:p-0">
                                        {/* Optional: <p className="text-xs text-gray-300 dark:text-neutral-700">No sessions</p> */}
                                    </div>
                                ) : (
                                    daySessions.map((session) => (
                                        <div
                                            key={session.id}
                                            className={`p-3 rounded-xl border mb-2 md:mb-0 transition-all hover:shadow-md cursor-pointer ${getStatusColor(session.status)}`}
                                        >
                                            <div className="flex items-start justify-between mb-1.5">
                                                <span className="text-xs font-bold opacity-75">
                                                    {format(new Date(session.date), "h:mm a")}
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                                    {session.status}
                                                </span>
                                            </div>

                                            <div className="space-y-1">
                                                <div className="flex items-center gap-1.5" title="Child">
                                                    <Baby className="w-3 h-3 opacity-50" />
                                                    <p className="text-xs font-semibold truncate">{session.child.name}</p>
                                                </div>
                                                <div className="flex items-center gap-1.5" title="Therapy">
                                                    <MapPin className="w-3 h-3 opacity-50" />
                                                    <p className="text-xs truncate opacity-90">{session.therapy.name}</p>
                                                </div>
                                                {currentUserRole !== "PARENT" && (
                                                    <div className="flex items-center gap-1.5" title="Therapist">
                                                        <User className="w-3 h-3 opacity-50" />
                                                        <p className="text-[10px] truncate opacity-75">{session.therapist.name}</p>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-1.5 mt-1" title="Duration">
                                                    <Clock className="w-3 h-3 opacity-50" />
                                                    <p className="text-[10px] opacity-75">{session.durationMinutes}m</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
