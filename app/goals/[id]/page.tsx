import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Edit2, Calendar, User, Stethoscope, Target, ListChecks } from "lucide-react";
import { format } from "date-fns";
import { fetchGoalById } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";

export const metadata = {
    title: "Goal Details | WBTC",
};

function getStatusColor(status: string) {
    switch (status) {
        case "EMERGING": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
        case "PARTIALLY_ACHIEVED": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
        case "ACHIEVED": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
        default: return "bg-gray-100 text-gray-800";
    }
}

export default async function ViewGoalPage({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ returnTo?: string }>;
}) {
    const { id } = await params;
    const { returnTo } = await searchParams;

    const session = await auth();
    if (!session?.user) redirect("/login");

    const goal: any = await fetchGoalById(id);
    if (!goal) notFound();

    const role = session.user.role as "ADMIN" | "THERAPIST" | "PARENT";
    const backHref = returnTo || "/goals";

    let objectives: string[] = [];
    try {
        const parsed = JSON.parse(goal.objectives ?? "[]");
        objectives = Array.isArray(parsed) && parsed.length > 0 ? parsed : [goal.title].filter(Boolean);
    } catch {
        objectives = [goal.title].filter(Boolean);
    }

    return (
        <AppLayout role={session.user.role as any} user={session.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href={backHref}>
                            <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                                <ArrowLeft className="h-4 w-4" />
                            </button>
                        </Link>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Goal Details</h2>
                    </div>
                    {role !== "PARENT" && (
                        <Link
                            href={`/goals/${goal.id}/edit?returnTo=${encodeURIComponent(backHref)}`}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
                        >
                            <Edit2 className="w-4 h-4" />
                            Edit Goal
                        </Link>
                    )}
                </div>

                <div className="bg-white dark:bg-neutral-900 max-w-2xl rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-6 space-y-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                                <Target className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">Goal Description</p>
                                <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
                                    {goal.title || "No description"}
                                </p>
                            </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ${getStatusColor(goal.status)}`}>
                            {goal.status.toLowerCase().replace("_", " ")}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-neutral-800">
                        <div className="flex items-start gap-3">
                            <User className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">Child</p>
                                <p className="text-sm text-gray-900 dark:text-white font-medium">{goal.child?.name}</p>
                                {goal.child?.caseNumber && (
                                    <p className="text-xs text-gray-400">{goal.child.caseNumber}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Stethoscope className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">Therapy</p>
                                <p className="text-sm text-gray-900 dark:text-white font-medium">{goal.therapy?.name}</p>
                                {role !== "THERAPIST" && (
                                    <p className="text-xs text-gray-400">By: {goal.therapist?.name || "Unknown"}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">Duration</p>
                                <p className="text-sm text-gray-900 dark:text-white font-medium">
                                    {format(new Date(goal.startDate), "MMM d, yyyy")} - {format(new Date(goal.endDate), "MMM d, yyyy")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {objectives.length > 0 && (
                        <div className="pt-4 border-t border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center gap-2 mb-3">
                                <ListChecks className="w-4 h-4 text-gray-400" />
                                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">Objectives</p>
                            </div>
                            <ul className="space-y-2">
                                {objectives.map((obj, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                                        <span className="text-xs font-medium text-gray-400 mt-0.5">{index + 1}.</span>
                                        <span className="leading-relaxed">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
