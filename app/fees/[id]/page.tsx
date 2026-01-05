import { fetchChildFeeDetails, fetchChildren, fetchTherapies } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import FeeFilterControls from "./FeeFilterControls";
import { formatDateToLocal } from "@/lib/utils";
import PaymentHistoryList from "@/components/fees/PaymentHistoryList";

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

    // Parse Dates or Defaults
    const now = new Date();
    const defaultStartDate = formatDateToLocal(new Date(now.getFullYear(), now.getMonth(), 1));
    const defaultEndDate = formatDateToLocal(new Date(now.getFullYear(), now.getMonth() + 1, 0));

    // Use URL params if exist, else defaults
    const startStr = startDate || defaultStartDate;
    const endStr = endDate || defaultEndDate;

    const start = new Date(startStr);
    const end = new Date(endStr);

    const [data, activeChildren, allTherapies] = await Promise.all([
        fetchChildFeeDetails(id, { startDate: start, endDate: end, therapyId }),
        fetchChildren(),
        fetchTherapies() // Fetch standard list for filter dropdown
    ]);

    if (!data) {
        notFound();
    }

    const { child, summary, sessions, payments } = data;

    return (
        <AppLayout familyChildren={activeChildren} role={session.user.role as any} user={session.user}>
            <div className="container mx-auto space-y-3 animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/fees"
                            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            title="Back to Fees"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{child.name}</h1>
                            <p className="text-gray-500 dark:text-gray-400">{child.caseNumber || "N/A"} • Status: <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${child.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{child.status}</span></p>
                        </div>
                    </div>
                    {/* Filters */}
                    <FeeFilterControls
                        therapies={allTherapies}
                        initialStartDate={startStr}
                        initialEndDate={endStr}
                        initialTherapyId={therapyId}
                    />
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4">
                    <div className="bg-white dark:bg-neutral-900 p-2 md:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Bill</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-md md:text-3xl font-bold text-gray-900 dark:text-white">₹{summary.totalAssignedFee.toLocaleString()}</span>
                        </div>
                    </div>
                    {
                        session.user.role === "ADMIN" && (
                            <div className="bg-white dark:bg-neutral-900 p-2 md:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attended Fee</h3>
                                <div className="mt-2 flex items-baseline">
                                    <span className="text-md md:text-3xl font-bold text-blue-600">₹{summary.totalFee.toLocaleString()}</span>
                                </div>
                            </div>
                        )
                    }
                    <div className="bg-white dark:bg-neutral-900 p-2 md:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Paid</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-md md:text-3xl font-bold text-emerald-600">₹{summary.paidFee.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-2 md:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Due</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className={`text-md md:text-3xl font-bold ${summary.pendingFees > 0 ? 'text-red-600' : 'text-gray-900 dark:text-white'}`}>
                                ₹{summary.pendingFees.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    {/* <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Sessions (Present)</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                {summary.present} <span className="text-sm text-gray-500 font-normal"> / {summary.totalSessions}</span>
                            </span>
                            <div className="flex flex-col gap-0.5 mt-1">
                                {Object.entries(summary.assignedTherapyBreakdown || {}).map(([k, count]) => {
                                    const rate = summary.therapyFees[k] || 0;
                                    return (
                                        <span key={k} className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
                                            {k}({count}){rate}={(count * rate).toLocaleString()}
                                        </span>
                                    );
                                })}
                                {Object.keys(summary.assignedTherapyBreakdown || {}).length > 0 && (
                                    <div className="mt-1 pt-1 border-t border-blue-50 dark:border-blue-900/30">
                                        <span className="text-[10px] font-extrabold text-blue-700 dark:text-blue-300 uppercase tracking-tight">
                                            Total {Object.values(summary.assignedTherapyBreakdown).join("+")}={Object.values(summary.assignedTherapyBreakdown).reduce((a: number, b: number) => a + b, 0)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Absent / Excused</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-red-600">{summary.absent}</span>
                            <span className="ml-2 text-sm text-gray-500">/ {summary.excused}</span>
                        </div>
                    </div> */}
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
                                    sessions.map((s) => (
                                        <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                                {new Date(s.date).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">{s.therapy.name}</td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">{s.therapist.name}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                    ${s.status === 'COMPLETED' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900' :
                                                        s.status === 'SCHEDULED' ? 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-neutral-800 dark:text-gray-400 dark:border-neutral-700' :
                                                            s.status === 'CANCELLED' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900' :
                                                                'bg-gray-50 text-gray-600'}`}>
                                                    {s.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {s.attendance ? (
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                                        ${s.attendance === 'PRESENT' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                            s.attendance === 'ABSENT' ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                                s.attendance === 'EXCUSED' ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                                    'bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400'}`}>
                                                        {s.attendance}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 text-xs">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-gray-900 dark:text-white">
                                                {s.attendance === 'PRESENT' ? `₹${s.fee.toLocaleString()}` : <span className="text-gray-400">-</span>}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment History Section */}
                <PaymentHistoryList
                    payments={payments}
                    child={child}
                    summary={{ paidFee: summary.paidFee }}
                    role={session.user.role}
                />
            </div>
        </AppLayout>
    );
}
