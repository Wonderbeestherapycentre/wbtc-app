import { fetchChildFeeDetails, fetchChildren, fetchTherapies } from "@/lib/data"; // update import
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import FeeFilterControls from "./FeeFilterControls";

export default async function ChildFeePage({
    params,
    searchParams
}: {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ startDate?: string; endDate?: string; therapyId?: string }>
}) {
    // Await params and searchParams
    const { id } = await params;
    const { startDate, endDate, therapyId } = await searchParams;

    const session = await auth();
    if (!session) return <div>Please sign in</div>;

    // Parse Dates
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;

    const [data, activeChildren, allTherapies] = await Promise.all([
        fetchChildFeeDetails(id, { startDate: start, endDate: end, therapyId }),
        fetchChildren(),
        fetchTherapies() // Fetch standard list for filter dropdown
    ]);

    if (!data) {
        notFound();
    }

    const { child, summary, sessions } = data;

    return (
        <AppLayout familyChildren={activeChildren} role={session.user.role as any} user={session.user}>
            <div className="container mx-auto space-y-3 animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{child.name}</h1>
                        <p className="text-gray-500 dark:text-gray-400">Case No: {child.caseNumber || "N/A"} • Status: <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${child.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{child.status}</span></p>
                    </div>
                    {/* Filters */}
                    <FeeFilterControls
                        therapies={allTherapies}
                        initialStartDate={startDate}
                        initialEndDate={endDate}
                        initialTherapyId={therapyId}
                    />
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Fees</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{summary.totalFee.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Sessions</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{summary.totalSessions}</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Present</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-green-600">{summary.present}</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Absent / Excused</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-red-600">{summary.absent}</span>
                            <span className="ml-2 text-sm text-gray-500">/ {summary.excused}</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Table */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Session History</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Therapy</th>
                                    <th className="px-6 py-3">Therapist</th>
                                    <th className="px-6 py-3">Session Status</th>
                                    <th className="px-6 py-3">Attendance</th>
                                    <th className="px-6 py-3 text-right">Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {sessions.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                            No sessions found.
                                        </td>
                                    </tr>
                                ) : (
                                    sessions.map((session) => (
                                        <tr key={session.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                                {new Date(session.date).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">{session.therapy.name}</td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">{session.therapist.name}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                    ${session.status === 'COMPLETED' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900' :
                                                        session.status === 'SCHEDULED' ? 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-neutral-800 dark:text-gray-400 dark:border-neutral-700' :
                                                            session.status === 'CANCELLED' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900' :
                                                                'bg-gray-50 text-gray-600'}`}>
                                                    {session.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {session.attendance ? (
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                                        ${session.attendance === 'PRESENT' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                            session.attendance === 'ABSENT' ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                                session.attendance === 'EXCUSED' ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                                    'bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400'}`}>
                                                        {session.attendance}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 text-xs">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-gray-900 dark:text-white">
                                                {session.attendance === 'PRESENT' ? `₹${session.fee.toLocaleString()}` : <span className="text-gray-400">-</span>}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
