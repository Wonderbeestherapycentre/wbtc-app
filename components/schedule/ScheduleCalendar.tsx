"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks,
    startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth,
    addMonths, subMonths, isToday, startOfDay, addHours, differenceInMinutes, getHours, setHours
} from "date-fns";
import { ChevronLeft, ChevronRight, Plus, MapPin, User, Baby, Clock, Filter, Calendar as CalendarIcon, LayoutList, CalendarDays, Table as TableIcon, Trash2 } from "lucide-react";
import ScheduleModal from "./ScheduleModal";
import { deleteSession } from "@/lib/actions";
import ConfirmModal from "@/components/ConfirmModal";
import SearchableDropdown from "../ui/SearchableDropdown";
import { convertUTCToIST } from "@/lib/utils/timezone";

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
    holidays: any[];
}


const START_HOUR = 8.26;
const END_HOUR = 21.10;
const SLOT_MINUTES = 60; // 45-minute intervals
const SLOT_HEIGHT = 48; // px per 45-minute slot


export default function ScheduleCalendar({ sessions, childrenData, allTherapists, currentUserRole, userId, holidays }: ScheduleCalendarProps & { holidays: any[] }) {
    // existing code ...
    // In MONTH view, after sessions list, add holiday display
    // Inside monthDays.map loop, after sessionsForDay rendering, add:
    // const holidaysForDay = holidays.filter(h => isSameDay(new Date(h.date), day));
    // {holidaysForDay.map(h => (
    //   <div key={h.id} className="text-xs text-red-600">{h.name}</div>
    // ))}

    const router = useRouter();

    const [view, setView] = useState<"DAY" | "WEEK" | "MONTH" | "TABLE">("TABLE");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sessionToEdit, setSessionToEdit] = useState<any>(null);
    // Auto-filter to logged-in therapist if role is THERAPIST
    const [filterTherapistId, setFilterTherapistId] = useState(currentUserRole === "THERAPIST" ? userId : "");
    const [filterChildId, setFilterChildId] = useState("");
    const [now, setNow] = useState(new Date());

    // Delete State
    const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

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

        // If therapist is logged in and viewing as a list, only show current date
        const matchesDate = (currentUserRole === "THERAPIST" && view === "TABLE")
            ? isSameDay(new Date(session.date), currentDate)
            : true;

        return matchesTherapist && matchesChild && matchesDate;
    });

    const getSessionsForDay = (day: Date) => {
        return filteredSessions.filter(session => {
            return isSameDay(session.date as Date, day);
        });
    };

    // Calculate vertical position for time-grid (45-minute slots)
    const getTimePosition = (date: Date) => {
        // Use the pre-normalized date directly
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

    const handleDelete = (sessionId: string) => {
        setSessionToDelete(sessionId);
    };

    const confirmDelete = async () => {
        if (!sessionToDelete) return;

        setIsDeleting(true);
        try {
            await deleteSession(sessionToDelete);
            setSessionToDelete(null);
            router.refresh();
        } catch (error) {
            console.error("Failed to delete", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                    {/* <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-xl p-1 gap-1">
                        {[
                            { id: "TABLE", label: "List", icon: TableIcon },
                            currentUserRole === "ADMIN" ? { id: "DAY", label: "Day", icon: CalendarDays } : null,
                            currentUserRole === "ADMIN" ? { id: "WEEK", label: "Week", icon: LayoutList } : null,
                            currentUserRole === "ADMIN" ? { id: "MONTH", label: "Month", icon: CalendarIcon } : null,
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
                    </div> */}

                    <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-xl p-1 gap-1">
                        {[
                            { id: "TABLE", label: "List", icon: TableIcon },
                            currentUserRole === "ADMIN" ? { id: "DAY", label: "Day", icon: CalendarDays } : null,
                            currentUserRole === "ADMIN" ? { id: "WEEK", label: "Week", icon: LayoutList } : null,
                            currentUserRole === "ADMIN" ? { id: "MONTH", label: "Month", icon: CalendarIcon } : null,
                        ]
                            .filter(Boolean)
                            .map((v: any) => (
                                <button
                                    key={v.id}
                                    onClick={() => setView(v.id)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${view === v.id
                                        ? "bg-white dark:bg-neutral-700 text-blue-600 shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    <v.icon className="w-3.5 h-3.5" />
                                    {v.label}
                                </button>
                            ))}
                    </div>


                    <div className={`flex items-center bg-gray-100 dark:bg-neutral-800 rounded-xl p-1 hidden md:flex ${view === "TABLE" ? "opacity-50 pointer-events-none" : ""}`}>
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
                        <SearchableDropdown
                            icon={<Filter className="w-3.5 h-3.5 text-gray-400" />}
                            options={[
                                { value: "", label: "All Therapists" },
                                // { value: "unassigned", label: "Unassigned" },
                                ...allTherapists.map((t: any) => ({ value: t.id, label: t.name }))
                            ]}
                            value={filterTherapistId}
                            onChange={setFilterTherapistId}
                            placeholder="All Therapists"
                            className="w-[200px]"
                        />
                    )}

                    {currentUserRole !== "PARENT" && (
                        <SearchableDropdown
                            icon={<Baby className="w-3.5 h-3.5 text-gray-400" />}
                            options={[
                                { value: "", label: "All Children" },
                                ...childrenData.map((c: any) => ({ value: c.id, label: c.name }))
                            ]}
                            value={filterChildId}
                            onChange={setFilterChildId}
                            placeholder="All Children"
                            className="w-[200px]"
                        />
                    )}
                </div>
            </div>

            {/* Calendar Body */}
            <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 overflow-hidden shadow-2xl shadow-blue-100/20 dark:shadow-none min-h-[500px]">

                {view === "TABLE" ? (
                    /* TABLE View */
                    <div className="flex flex-col min-h-[600px] bg-white dark:bg-neutral-900">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-100 dark:border-neutral-800 sticky top-0 z-10 backdrop-blur-sm">
                                    <tr>
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date & Time</th>
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Child</th>
                                        {currentUserRole !== "THERAPIST" && (
                                            <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Therapy</th>
                                        )}
                                        {currentUserRole === "ADMIN" && (
                                            <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Therapist</th>
                                        )}
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Status</th>
                                        {currentUserRole == "ADMIN" && (
                                            <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-neutral-800/50">
                                    {filteredSessions.length === 0 && holidays.length === 0 ? (
                                        <tr>
                                            <td colSpan={currentUserRole === "ADMIN" ? 6 : 4} className="py-12 text-center text-gray-400 text-sm">
                                                No sessions or holidays found for the selected filters.
                                            </td>
                                        </tr>
                                    ) : (
                                        [
                                            ...filteredSessions.map(s => ({ type: 'session', data: s, date: new Date(s.date) })),
                                            ...holidays.map(h => ({ type: 'holiday', data: h, date: new Date(h.date) }))
                                        ]
                                            .sort((a, b) => a.date.getTime() - b.date.getTime())
                                            .map((item) => {
                                                if (item.type === 'holiday') {
                                                    const holiday = item.data;
                                                    return (
                                                        <tr key={`holiday-${holiday.id}`} className="bg-red-50/50 dark:bg-red-900/10 border-l-4 border-l-red-400">
                                                            <td className="py-4 px-6 whitespace-nowrap">
                                                                <div className="flex flex-col">
                                                                    <span className="text-sm font-bold text-red-600 dark:text-red-400">
                                                                        {format(new Date(holiday.date), "MMM d, yyyy")}
                                                                    </span>
                                                                    <span className="text-xs font-medium text-red-400 flex items-center gap-1 mt-0.5">
                                                                        All Day
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td colSpan={currentUserRole === "ADMIN" ? 4 : 2} className="py-4 px-6">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-sm font-bold text-red-600 dark:text-red-400">{holiday.name}</span>
                                                                    {holiday.description && <span className="text-xs text-red-400">- {holiday.description}</span>}
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-center">
                                                                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide border bg-red-100 text-red-700 border-red-200">
                                                                    HOLIDAY
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    );
                                                }

                                                const session = item.data;
                                                return (
                                                    <tr
                                                        key={session.id}
                                                        onClick={() => currentUserRole == "ADMIN" && handleEditSession(session)}
                                                        className={`group transition-all hover:bg-blue-50/30 dark:hover:bg-blue-900/10 ${currentUserRole !== "PARENT" ? "cursor-pointer" : ""}`}
                                                    >
                                                        <td className="py-4 px-6 whitespace-nowrap">
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold text-gray-900 dark:text-white">
                                                                    {format(session.date as Date, "MMM d, yyyy")}
                                                                </span>
                                                                <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mt-0.5">
                                                                    {/* <Clock className="w-3 h-3" /> */}
                                                                    {(() => {
                                                                        const d = session.date as Date;
                                                                        const endDate = new Date(d.getTime() + (session.durationMinutes || 45) * 60000);
                                                                        return `${format(d, "h:mm a")} - ${format(endDate, "h:mm a")}`;
                                                                    })()}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{session.child.name}</span>
                                                            </div>
                                                        </td>
                                                        {currentUserRole !== "THERAPIST" && (
                                                            <td className="py-4 px-6">
                                                                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-gray-100 dark:bg-neutral-800 text-gray-600">
                                                                    {session.therapy.name}
                                                                </span>
                                                            </td>
                                                        )}
                                                        {currentUserRole === "ADMIN" && (
                                                            <td className="py-4 px-6">
                                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                                    <User className="w-3.5 h-3.5" />
                                                                    {session.therapist.name}
                                                                </div>
                                                            </td>
                                                        )}
                                                        <td className="py-4 px-6 text-center">
                                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide border ${getStatusColor(session.status)}`}>
                                                                {session.status || "SCHEDULED"}
                                                            </span>
                                                        </td>
                                                        {currentUserRole == "ADMIN" && (
                                                            <td className="py-4 px-6 text-right">
                                                                <div className="flex items-center justify-end gap-2">
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            handleEditSession(session);
                                                                        }}
                                                                        className="px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            handleDelete(session.id);
                                                                        }}
                                                                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                                        title="Delete Session"
                                                                    >
                                                                        <Trash2 className="w-4 h-4" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        )}
                                                    </tr>
                                                );
                                            })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : view === "MONTH" ? (
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
                                            {/* Holidays */}
                                            {holidays
                                                .filter(h => isSameDay(new Date(h.date), day))
                                                .map(h => (
                                                    <div key={h.id} className="text-xs text-red-600">{h.name}</div>
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

                                        {/* Holidays Background Overlay */}
                                        {(() => {
                                            const dayHolidays = holidays.filter(h => isSameDay(new Date(h.date), day));
                                            if (dayHolidays.length === 0) return null;

                                            return (
                                                <div className="absolute inset-0 z-0 bg-red-50/30 dark:bg-red-900/10 flex items-center justify-center pointer-events-none">
                                                    <div className="transform -rotate-45 text-red-200 dark:text-red-900/30 font-black text-4xl uppercase tracking-widest select-none">
                                                        {dayHolidays[0].name}
                                                    </div>
                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-red-500 bg-white/80 dark:bg-black/50 px-2 py-0.5 rounded-full border border-red-100 dark:border-red-900/30 shadow-sm backdrop-blur-sm z-10 w-max max-w-[90%] truncate">
                                                        Wait! It's {dayHolidays[0].name}
                                                    </div>
                                                </div>
                                            );
                                        })()}

                                        {/* Sessions */}
                                        {(() => {
                                            const daySessions = getSessionsForDay(day);
                                            const layouts = getSessionLayouts(daySessions);
                                            return daySessions.map(s => {
                                                const sDate = s.date as Date;
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
