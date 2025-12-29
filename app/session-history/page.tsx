import { fetchGlobalSessionHistory, fetchChildren, fetchTherapies, fetchTherapists } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import SessionFilterControls from "./SessionFilterControls";
import { CalendarIcon, History } from "lucide-react";
import Link from "next/link";
import { formatDateToLocal } from "@/lib/utils";

export default async function SessionHistoryPage(props: {
    searchParams: Promise<{
        startDate?: string;
        endDate?: string;
        childId?: string;
        therapyId?: string;
        therapistId?: string;
        status?: string;
        attendance?: string;
        page?: string;
    }>
}) {
    const searchParams = await props.searchParams;
    const session = await auth();
    if (!session) return <div>Please sign in</div>;

    const now = new Date();
    const defaultStartDate = formatDateToLocal(new Date(now.getFullYear(), now.getMonth(), 1));
    const defaultEndDate = formatDateToLocal(new Date(now.getFullYear(), now.getMonth() + 1, 0));

    // Use params or defaults
    const startDateStr = searchParams.startDate || defaultStartDate;
    const endDateStr = searchParams.endDate || defaultEndDate;

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const { childId, therapyId, therapistId, status, attendance } = searchParams;

    const page = searchParams.page ? Math.max(1, parseInt(searchParams.page) || 1) : 1;

    // Fetch Data
    const [historyData, childrenList, therapies, therapists, activeChildren] = await Promise.all([
        fetchGlobalSessionHistory({ startDate, endDate, childId, therapyId, therapistId, status, attendance, page }),
        fetchChildren(),
        fetchTherapies(),
        fetchTherapists(),
        fetchChildren()
    ]);

    const { sessions, pagination, summary } = historyData;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams();
        if (searchParams.startDate) params.set("startDate", searchParams.startDate);
        if (searchParams.endDate) params.set("endDate", searchParams.endDate);
        if (childId) params.set("childId", childId);
        if (therapyId) params.set("therapyId", therapyId);
        if (therapistId) params.set("therapistId", therapistId);
        if (status) params.set("status", status);
        if (attendance) params.set("attendance", attendance);
        params.set("page", pageNumber.toString());
        return `?${params.toString()}`;
    };

    return (
        <AppLayout familyChildren={activeChildren} role={session.user.role as any} user={session.user}>
            <div className="container mx-auto space-y-3 animate-fade-in pb-20">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <History className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Session History</h1>
                    </div>
                </div>

                <SessionFilterControls
                    childrenList={childrenList}
                    therapies={therapies}
                    therapists={therapists}
                    initialState={{
                        startDate: startDateStr,
                        endDate: endDateStr,
                        childId,
                        therapyId,
                        therapistId,
                        status,
                        attendance
                    }}
                />

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm">
                        <div className="text-sm text-gray-500">Total Sessions (Found)</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{pagination.total}</div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm">
                        <div className="text-sm text-gray-500">Total Present</div>
                        <div className="text-2xl font-bold text-green-600 mt-1">{summary?.totalPresent ?? 0}</div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm">
                        <div className="text-sm text-gray-500">Total Fees</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">₹{(summary?.totalFee ?? 0).toLocaleString()}</div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 font-medium border-b border-gray-100 dark:border-neutral-800">
                                <tr>
                                    <th className="px-6 py-3 whitespace-nowrap">Date</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Child</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Therapy</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Therapist</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Status</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Attendance</th>
                                    <th className="px-6 py-3 text-right whitespace-nowrap">Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {sessions.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                            No sessions found.
                                        </td>
                                    </tr>
                                ) : (
                                    sessions.map((session: any) => (
                                        <tr key={session.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                                {new Date(session.date).toLocaleDateString('en-IN', {
                                                    day: 'numeric', month: 'short', year: 'numeric',
                                                    hour: '2-digit', minute: '2-digit'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                {session.child.name}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                                {session.therapy.name}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                                {session.therapist.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                                                    ${session.status === 'COMPLETED' ? 'bg-blue-50 text-blue-700' :
                                                        session.status === 'SCHEDULED' ? 'bg-gray-100 text-gray-600' :
                                                            session.status === 'CANCELLED' ? 'bg-red-50 text-red-700' :
                                                                'bg-gray-50 text-gray-600'}`}>
                                                    {session.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {session.attendance ? (
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                                                        ${session.attendance === 'PRESENT' ? 'bg-green-50 text-green-700' :
                                                            session.attendance === 'ABSENT' ? 'bg-red-50 text-red-700' :
                                                                session.attendance === 'EXCUSED' ? 'bg-yellow-50 text-yellow-700' :
                                                                    'bg-gray-100 text-gray-600'}`}>
                                                        {session.attendance}
                                                    </span>
                                                ) : <span className="text-gray-300">-</span>}
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium">
                                                {session.attendance === 'PRESENT' ? `₹${session.fee}` : '-'}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Controls */}
                    {pagination.pages > 1 && (
                        <div className="px-6 py-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Page <span className="font-medium">{pagination.current}</span> of <span className="font-medium">{pagination.pages}</span>
                            </div>
                            <div className="flex gap-2">
                                {pagination.current > 1 && (
                                    <Link
                                        href={createPageURL(pagination.current - 1)}
                                        className="px-3 py-1 text-sm border border-gray-200 dark:border-neutral-700 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800"
                                    >
                                        Previous
                                    </Link>
                                )}
                                {pagination.current < pagination.pages && (
                                    <Link
                                        href={createPageURL(pagination.current + 1)}
                                        className="px-3 py-1 text-sm border border-gray-200 dark:border-neutral-700 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800"
                                    >
                                        Next
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
