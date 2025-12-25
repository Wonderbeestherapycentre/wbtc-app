"use client";

import { useState, useEffect } from "react";
import {
    format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks,
    startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth,
    addMonths, subMonths, isToday, startOfDay, addHours, differenceInMinutes, getHours, setHours
} from "date-fns";
import { ChevronLeft, ChevronRight, Plus, MapPin, User, Baby, Clock, Filter, Calendar as CalendarIcon, LayoutList, CalendarDays } from "lucide-react";
import ScheduleModal from "./ScheduleModal";

interface Session {
    id: string;
    date: Date | string;
    durationMinutes: number | null;
    status: "SCHEDULED" | "COMPLETED" | "CANCELLED" | "RESCHEDULED" | null;
    child: { id: string; name: string };
    therapist: { id: string; name: string };
    therapy: { id: string; name: string };
}

interface ScheduleCalendarProps {
    sessions: Session[];
    childrenData: any[];
    allTherapists: any[];
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT";
    userId: string;
}


const START_HOUR = 8.26;
const END_HOUR = 21.10;
const SLOT_MINUTES = 45; // 45-minute intervals
const SLOT_HEIGHT = 48; // px per 45-minute slot


export default function ScheduleCalendar({ sessions, childrenData, allTherapists, currentUserRole, userId }: ScheduleCalendarProps) {
    const [view, setView] = useState<"DAY" | "WEEK" | "MONTH">("DAY");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sessionToEdit, setSessionToEdit] = useState<any>(null);
    // Auto-filter to logged-in therapist if role is THERAPIST
    const [filterTherapistId, setFilterTherapistId] = useState(currentUserRole === "THERAPIST" ? userId : "");
    const [filterChildId, setFilterChildId] = useState("");
    const [now, setNow] = useState(new Date());

    // Ensure therapist filter stays locked to current user for THERAPIST role
    useEffect(() => {
        if (currentUserRole === "THERAPIST") {
            setFilterTherapistId(userId);
        }
    }, [currentUserRole, userId]);

    // Update 'now' every minute
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Date Range Logic
    const weekStartDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(weekStartDate, i));
    const monthStart = startOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const monthDays = eachDayOfInterval({ start: calendarStart, end: addDays(calendarStart, 41) });

    const nextRange = () => {
        if (view === "DAY") setCurrentDate(addDays(currentDate, 1));
        else if (view === "WEEK") setCurrentDate(addWeeks(currentDate, 1));
        else setCurrentDate(addMonths(currentDate, 1));
    };

    const prevRange = () => {
        if (view === "DAY") setCurrentDate(addDays(currentDate, -1));
        else if (view === "WEEK") setCurrentDate(subWeeks(currentDate, 1));
        else setCurrentDate(subMonths(currentDate, 1));
    };

    const filteredSessions = sessions.filter(session => {
        const matchesTherapist = !filterTherapistId || session.therapist.id === filterTherapistId;
        const matchesChild = !filterChildId || session.child.id === filterChildId;
        return matchesTherapist && matchesChild;
    });

    const getSessionsForDay = (day: Date) => {
        return filteredSessions.filter(session => isSameDay(new Date(session.date), day));
    };

    // Calculate vertical position for time-grid (45-minute slots)
    const getTimePosition = (date: Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        if (hours < START_HOUR) return 0;
        if (hours >= END_HOUR) return ((END_HOUR - START_HOUR) * 60 / SLOT_MINUTES) * SLOT_HEIGHT;

        // Calculate total minutes from START_HOUR
        const totalMinutes = (hours - START_HOUR) * 60 + minutes;
        // Convert to slot position
        return (totalMinutes / SLOT_MINUTES) * SLOT_HEIGHT;
    };

    const getStatusColor = (status: string | null) => {
        switch (status) {
            case "COMPLETED": return "bg-green-500/10 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-900/50";
            case "CANCELLED": return "bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/20 dark:text-red-400 dark:border-red-900/50";
            case "RESCHEDULED": return "bg-purple-500/10 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-900/50";
            default: return "bg-blue-600/10 text-blue-700 border-blue-200 dark:bg-blue-600/20 dark:text-blue-400 dark:border-blue-900/50";
        }
    };

    // Extract unique therapists for filter
    const getShortTherapyName = (name: string) => {
        const lower = name.toLowerCase();
        if (lower.includes("occupational")) return "OT";
        if (lower.includes("speech")) return "ST";
        if (lower.includes("behavior")) return "BT";
        if (lower.includes("physio")) return "PT";
        if (lower.includes("special")) return "SE";
        return name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 3);
    };

    const therapists = Array.from(new Set(sessions.map(s => JSON.stringify(s.therapist)))).map(t => JSON.parse(t));

    // Overlap handling logic
    const getSessionLayouts = (daySessions: Session[]) => {
        const sorted = [...daySessions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const columns: Session[][] = [];

        sorted.forEach(s => {
            let placed = false;
            for (let col of columns) {
                const last = col[col.length - 1];
                const lastEnd = new Date(new Date(last.date).getTime() + (last.durationMinutes || 45) * 60000);
                if (new Date(s.date).getTime() >= lastEnd.getTime()) {
                    col.push(s);
                    placed = true;
                    break;
                }
            }
            if (!placed) columns.push([s]);
        });

        const layouts = new Map<string, { left: number, width: number }>();
        columns.forEach((col, colIndex) => {
            col.forEach(s => {
                layouts.set(s.id, {
                    left: (colIndex / columns.length) * 100,
                    width: (1 / columns.length) * 100
                });
            });
        });

        return layouts;
    };

    const handleEditSession = (session: Session) => {
        if (currentUserRole === "PARENT") return;
        setSessionToEdit(session);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSessionToEdit(null);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-xl p-1 gap-1">
                        {[
                            { id: "DAY", label: "Day", icon: CalendarDays },
                            { id: "WEEK", label: "Week", icon: LayoutList },
                            { id: "MONTH", label: "Month", icon: CalendarIcon }
                        ].map(v => (
                            <button
                                key={v.id}
                                onClick={() => setView(v.id as any)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${view === v.id ? 'bg-white dark:bg-neutral-700 text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <v.icon className="w-3.5 h-3.5" />
                                {v.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-xl p-1 hidden md:flex">
                        <button onClick={prevRange} className="p-1.5 hover:bg-white dark:hover:bg-neutral-700 rounded-lg transition-all">
                            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>
                        <span className="px-3 text-sm font-bold min-w-[140px] text-center">
                            {format(currentDate, view === "MONTH" ? "MMMM yyyy" : view === "WEEK" ? "'Week of' MMM d" : "EEEE, MMM d")}
                        </span>
                        <button onClick={nextRange} className="p-1.5 hover:bg-white dark:hover:bg-neutral-700 rounded-lg transition-all">
                            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>

                    <button onClick={() => setCurrentDate(new Date())} className="hidden md:block text-xs font-bold text-blue-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 transition-all">
                        Today
                    </button>
                    {currentUserRole === "ADMIN" && (
                        <button onClick={() => setIsModalOpen(true)} className=" flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-500/25 transition-all font-bold text-xs">
                            <Plus className="w-4 h-4" />
                            <span className="sr-only">New Schedule</span>
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {currentUserRole === "ADMIN" && (
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-800/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-neutral-700">
                            <Filter className="w-3.5 h-3.5 text-gray-400" />
                            <select value={filterTherapistId} onChange={(e) => setFilterTherapistId(e.target.value)} className="bg-transparent border-none text-xs font-bold focus:ring-0 p-0">
                                <option value="">All Therapists</option>
                                {allTherapists.map((t: any) => <option key={t.id} value={t.id}>{t.name}</option>)}
                            </select>
                        </div>
                    )}

                    {currentUserRole !== "PARENT" && (
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-800/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-neutral-700">
                            <Baby className="w-3.5 h-3.5 text-gray-400" />
                            <select value={filterChildId} onChange={(e) => setFilterChildId(e.target.value)} className="bg-transparent border-none text-xs font-bold focus:ring-0 p-0 max-w-[140px]">
                                <option value="">All Children</option>
                                {childrenData.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>
                    )}
                </div>
            </div>

            {/* Calendar Body */}
            <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 overflow-hidden shadow-2xl shadow-blue-100/20 dark:shadow-none min-h-[500px]">

                {view === "MONTH" ? (
                    /* Existing MONTH View */
                    <div className="flex flex-col">
                        <div className="grid grid-cols-7 bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-100 dark:border-neutral-800">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                                <div key={d} className="py-4 text-center">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{d}</span>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 divide-x divide-y divide-gray-50 dark:divide-neutral-800/50 min-h-[600px] border-b border-gray-50 dark:border-neutral-800/50">
                            {monthDays.map(day => {
                                const sessionsForDay = getSessionsForDay(day);
                                const isCurrentMonth = isSameMonth(day, currentDate);
                                return (
                                    <div key={day.toString()} className={`min-h-[120px] p-2 flex flex-col gap-1 transition-all ${!isCurrentMonth ? "bg-gray-50/30 dark:bg-neutral-900/40 opacity-30" : ""} ${isToday(day) ? "bg-blue-50/20 dark:bg-blue-900/10" : ""}`}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${isToday(day) ? "bg-blue-600 text-white shadow-lg" : "text-gray-500"}`}>{format(day, "d")}</span>
                                        </div>
                                        <div className="space-y-1 overflow-y-auto max-h-[120px] custom-scrollbar px-1">
                                            {sessionsForDay.map(s => (
                                                <div
                                                    key={s.id}
                                                    onClick={() => handleEditSession(s)}
                                                    className={`p-1 px-1.5 rounded-md border text-[10px] font-bold truncate ${getStatusColor(s.status)} shadow-sm flex items-center gap-1.5 ${currentUserRole !== "PARENT" ? "cursor-pointer hover:border-blue-400 transition-colors" : ""}`}
                                                >
                                                    <span className="text-[7px] font-black opacity-50 uppercase tracking-tighter">{getShortTherapyName(s.therapy.name)}</span>
                                                    <span className="truncate">{s.child.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    /* DAY & WEEK Hourly Grid View */
                    <div className="flex flex-col h-[700px]">
                        {/* Day Headers */}
                        <div className="flex border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 ml-16">
                            {(view === "WEEK" ? weekDays : [currentDate]).map(day => (
                                <div key={day.toString()} className="flex-1 py-4 text-center border-l border-gray-100 dark:border-neutral-800">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">{format(day, "EEE")}</span>
                                    <span className={`text-xl font-black ${isToday(day) ? "text-blue-600" : "text-gray-900 dark:text-white"}`}>{format(day, "d")}</span>
                                </div>
                            ))}
                        </div>

                        {/* Scrolling Content */}
                        <div className="flex-1 overflow-y-auto relative custom-scrollbar flex">
                            {/* Time Axis */}
                            <div className="w-16 flex-shrink-0 border-r border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky left-0 z-10">
                                {(() => {
                                    const totalMinutes = (END_HOUR - START_HOUR) * 60;
                                    const numSlots = Math.ceil(totalMinutes / SLOT_MINUTES);
                                    return Array.from({ length: numSlots }).map((_, i) => {
                                        const slotMinutes = START_HOUR * 60 + i * SLOT_MINUTES;
                                        const hour = Math.floor(slotMinutes / 60);
                                        const minute = slotMinutes % 60;
                                        const timeDate = setHours(startOfDay(new Date()), hour);
                                        timeDate.setMinutes(minute);

                                        return (
                                            <div key={i} className="relative border-b border-gray-50 dark:border-neutral-800/50" style={{ height: `${SLOT_HEIGHT}px` }}>
                                                <span className="absolute -top-2.5 right-2 text-[10px] font-black text-gray-400">
                                                    {format(timeDate, "h:mm a")}
                                                </span>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>

                            {/* Column Grid */}
                            <div className="flex-1 flex relative">
                                {/* Vertical Grid Lines */}
                                {(view === "WEEK" ? weekDays : [currentDate]).map((day, dayIndex) => (
                                    <div key={day.toString()} className="flex-1 relative border-l border-gray-100 dark:border-neutral-800 group">

                                        {/* Row Dividers */}
                                        {(() => {
                                            const totalMinutes = (END_HOUR - START_HOUR) * 60;
                                            const numSlots = Math.ceil(totalMinutes / SLOT_MINUTES);
                                            return Array.from({ length: numSlots }).map((_, i) => (
                                                <div key={i} className="border-b border-gray-50 dark:border-neutral-800/10" style={{ height: `${SLOT_HEIGHT}px` }} />
                                            ));
                                        })()}

                                        {/* Sessions */}
                                        {(() => {
                                            const daySessions = getSessionsForDay(day);
                                            const layouts = getSessionLayouts(daySessions);
                                            return daySessions.map(s => {
                                                const sDate = new Date(s.date);
                                                const top = getTimePosition(sDate);
                                                const height = (s.durationMinutes || 45) / SLOT_MINUTES * SLOT_HEIGHT;
                                                const layout = layouts.get(s.id) || { left: 0, width: 100 };

                                                return (
                                                    <div
                                                        key={s.id}
                                                        onClick={() => handleEditSession(s)}
                                                        style={{
                                                            top,
                                                            height,
                                                            left: `${layout.left}%`,
                                                            width: `${layout.width}%`,
                                                            zIndex: 20 + Math.floor(layout.left) // Slight boost for later columns
                                                        }}
                                                        className={`absolute p-1 rounded-xl border-l-[4px] shadow-sm transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer ${getStatusColor(s.status)} backdrop-blur-sm overflow-hidden ${currentUserRole !== "PARENT" ? "hover:border-blue-400" : ""}`}
                                                    >
                                                        <div className="flex flex-col h-full overflow-hidden">
                                                            <div className="flex items-start gap-1 pb-1">
                                                                <span className="text-[7px] font-black bg-white/40 dark:bg-black/40 px-1 py-0.5 rounded shadow-sm border border-black/5 flex-shrink-0">
                                                                    {getShortTherapyName(s.therapy.name)}
                                                                </span>
                                                                <p className="text-[10px] font-black leading-tight truncate">{s.child.name}</p>
                                                            </div>
                                                            {currentUserRole !== "PARENT" && (
                                                                <p className="text-[8px] font-semibold opacity-60 mt-auto flex items-center gap-1 truncate pt-0.5 border-t border-black/5">
                                                                    <User className="w-2 h-2 flex-shrink-0" />
                                                                    {s.therapist.name}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            });
                                        })()}

                                        {/* Current Time Line */}
                                        {isToday(day) && (
                                            <div
                                                className="absolute left-0 right-0 z-30 pointer-events-none flex items-center"
                                                style={{ top: getTimePosition(now) }}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-red-600 -ml-1 border-2 border-white dark:border-neutral-900" />
                                                <div className="flex-1 h-0.5 bg-red-600/60" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <ScheduleModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                children={childrenData}
                allTherapists={allTherapists}
                initialDate={currentDate}
                sessionToEdit={sessionToEdit}
            />
        </div>
    );
}
