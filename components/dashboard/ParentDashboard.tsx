import React from "react";
import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchChildren, fetchSessions, fetchSessionNotes, fetchGoals, fetchHomePrograms, fetchChildrenFeeSummary } from "@/lib/data";
import { intervalToDuration, format, isAfter, isBefore, addDays, startOfMonth, endOfMonth } from "date-fns";
import {
    Users,
    Calendar,
    ClipboardList,
    Target,
    CreditCard,
    ArrowRight,
    Clock,
    ChevronRight,
    CheckCircle2,
    AlertCircle,
    FileText
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function ParentDashboard() {
    const session = await auth();
    const now = new Date();

    // Fetch data in parallel
    const [
        children,
        allSessions,
        notes,
        goals,
        programs,
        feeSummary
    ] = await Promise.all([
        fetchChildren(true),
        fetchSessions(now, addDays(now, 7)), // Next 7 days
        fetchSessionNotes(),
        fetchGoals(),
        fetchHomePrograms(),
        fetchChildrenFeeSummary(startOfMonth(now), endOfMonth(now))
    ]);

    const calculateAge = (dob: string | null) => {
        if (!dob) return null;
        const duration = intervalToDuration({
            start: new Date(dob),
            end: new Date()
        });
        const parts = [];
        if (duration.years) parts.push(`${duration.years} yrs`);
        if (duration.months) parts.push(`${duration.months} mos`);
        return parts.join(' ') || "0 mos";
    };

    // Calculate Stats
    const totalKids = children.length;

    const upcomingSessions = allSessions
        .filter(s => isAfter(new Date(s.date), now) && s.status === "SCHEDULED")
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const nextSession = upcomingSessions[0];

    const pendingTasks = programs.reduce((acc: number, p: any) =>
        acc + (p.tasks?.length || 0), 0);

    const activeGoals = goals.filter((g: any) => g.status !== "ACHIEVED").length;

    const totalDue = feeSummary.reduce((acc: number, item: any) =>
        acc + (item.totalAssignedFee - item.paidFee), 0);

    const recentNotes = notes.slice(0, 3);

    return (
        <AppLayout role="PARENT" familyChildren={children} user={session?.user}>
            <div className="space-y-8 animate-fade-in pb-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Welcome, {session?.user?.name?.split(' ')[0]}!
                        </h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{format(now, "EEEE")}</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">{format(now, "do MMMM, yyyy")}</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* <StatCard
                        title="Children"
                        value={totalKids}
                        icon={Users}
                        color="blue"
                    /> */}
                    <StatCard
                        title="Next Session"
                        value={nextSession ? format(new Date(nextSession.date), "do MMM") : "None"}
                        subValue={nextSession ? nextSession.therapy.name.split(' ')[0] : undefined}
                        icon={Calendar}
                        color="emerald"
                    />
                    <StatCard
                        title="Active Goals"
                        value={activeGoals}
                        icon={Target}
                        color="purple"
                    />
                    <StatCard
                        title="Home Programs"
                        value={programs.length}
                        subValue={`${pendingTasks} Activities`}
                        icon={ClipboardList}
                        color="orange"
                    />
                    <StatCard
                        title="Total Due"
                        value={`₹${totalDue.toLocaleString()}`}
                        icon={CreditCard}
                        color="red"
                        isCurrency
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Children & Recent Notes */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Children Cards */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    Children
                                </h3>
                                <Link href="/childrens" className="text-sm text-blue-600 hover:underline flex items-center gap-1 font-medium">
                                    View All <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {children.map((child: any) => (
                                    <Link key={child.id} href={`/childrens/${child.id}`} className="group p-5 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 transition-all">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{child.name}</h4>
                                                <p className="text-sm text-gray-500 mt-1">{calculateAge(child.dob)} • {child.gender}</p>
                                            </div>
                                            <span className={cn(
                                                "px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg",
                                                child.status === 'ACTIVE'
                                                    ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                                    : 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                            )}>
                                                {child.status}
                                            </span>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-50 dark:border-neutral-800">
                                            <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Primary Diagnosis</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium truncate mt-1">
                                                {child.diagnosis || "No diagnosis provided"}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Recent Session Notes */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-purple-600" />
                                    Recent Session Notes
                                </h3>
                                <Link href="/session-notes" className="text-sm text-purple-600 hover:underline flex items-center gap-1 font-medium">
                                    All Notes <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                                {recentNotes.length > 0 ? (
                                    <div className="divide-y divide-gray-50 dark:divide-neutral-800">
                                        {recentNotes.map((note: any) => (
                                            <Link key={note.id} href={`/session-notes?id=${note.id}`} className="block p-4 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white">{note.child.name}</span>
                                                    <span className="text-xs text-gray-500">{format(new Date(note.date), "MMM d")}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-md font-medium">
                                                        {note.therapy.name}
                                                    </span>
                                                    <p className="text-sm text-gray-500 truncate flex-1">{note.summary}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-8 text-center">
                                        <p className="text-sm text-gray-500">No session notes recorded yet.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Upcoming Schedule & Quick Links */}
                    <div className="space-y-8">
                        {/* Upcoming Schedule */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-emerald-600" />
                                    Week Ahead
                                </h3>
                                <Link href="/schedule" className="text-sm text-emerald-600 hover:underline flex items-center gap-1 font-medium">
                                    Full Schedule <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm p-4">
                                {upcomingSessions.length > 0 ? (
                                    <div className="space-y-4">
                                        {upcomingSessions.slice(0, 5).map((s: any) => (
                                            <div key={s.id} className="flex gap-4 items-center">
                                                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 dark:bg-neutral-800 rounded-xl flex flex-col items-center justify-center border border-gray-100 dark:border-neutral-700">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase leading-none">{format(new Date(s.date), "EEE")}</span>
                                                    <span className="text-sm font-black text-gray-900 dark:text-white">{format(new Date(s.date), "d")}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{s.child.name}</p>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <span className="font-medium text-emerald-600">{s.therapy.name}</span>
                                                        <span>•</span>
                                                        <span>{s.startTime}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-8 text-center">
                                        <p className="text-sm text-gray-500">No sessions scheduled for this week.</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Quick Actions / Links */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Access</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <QuickLink
                                    href="/home-programs"
                                    title="Home Programs"
                                    desc="Daily exercises & tasks"
                                    icon={ClipboardList}
                                    color="orange"
                                />
                                <QuickLink
                                    href="/goals"
                                    title="Therapy Goals"
                                    desc="Track milestones"
                                    icon={Target}
                                    color="purple"
                                />
                                <QuickLink
                                    href="/fees"
                                    title="Fee Reports"
                                    desc="Payments & invoices"
                                    icon={CreditCard}
                                    color="red"
                                />
                                {/* <QuickLink
                                    href="/attendance"
                                    title="Attendance"
                                    desc="View history"
                                    icon={CheckCircle2}
                                    color="emerald"
                                /> */}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function StatCard({ title, value, subValue, icon: Icon, color, isCurrency }: any) {
    const colorClasses: any = {
        blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
        emerald: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20",
        purple: "text-purple-600 bg-purple-50 dark:bg-purple-900/20",
        orange: "text-orange-600 bg-orange-50 dark:bg-orange-900/20",
        red: "text-red-600 bg-red-50 dark:bg-red-900/20",
    };

    return (
        <div className="p-4 md:p-5 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            {/* <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", colorClasses[color])}>
                <Icon className="w-5 h-5" />
            </div> */}
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
            <div className="mt-1 flex items-baseline gap-2">
                <span className={cn(
                    "font-black tracking-tight text-gray-900 dark:text-white",
                    isCurrency ? "text-md md:text-xl" : "text-md md:text-xl"
                )}>
                    {value}
                </span>
                {subValue && <span className="text-[10px] font-bold text-gray-400 uppercase">{subValue}</span>}
            </div>
        </div>
    );
}

function QuickLink({ href, title, desc, icon: Icon, color }: any) {
    const iconColors: any = {
        blue: "text-blue-600",
        emerald: "text-emerald-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
        red: "text-red-600",
    };

    return (
        <Link href={href} className="group flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:border-gray-300 dark:hover:border-neutral-700 transition-all">
            <div className={cn("w-10 h-10 rounded-xl bg-gray-50 dark:bg-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform", iconColors[color])}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
        </Link>
    );
}
