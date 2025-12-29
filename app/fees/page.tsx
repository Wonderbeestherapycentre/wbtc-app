import { fetchChildrenFeeSummary, fetchChildren } from "@/lib/data"; // importing fetchChildren just for layout prop
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import Link from "next/link";
import { Eye, CreditCard, ExternalLink } from "lucide-react";
import FeeReportsFilter from "./FeeReportsFilter";
import { formatDateToLocal } from "@/lib/utils";

export default async function FeesPage(props: { searchParams: Promise<{ startDate?: string; endDate?: string }> }) {
    const searchParams = await props.searchParams;
    const session = await auth();
    if (!session) return <div>Please sign in</div>;

    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const defaultStartDate = formatDateToLocal(firstDay);
    const defaultEndDate = formatDateToLocal(lastDay);

    const startDateStr = searchParams?.startDate || defaultStartDate;
    const endDateStr = searchParams?.endDate || defaultEndDate;


    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const summaryData = await fetchChildrenFeeSummary(startDate, endDate);
    const activeChildren = await fetchChildren(); // For layout sidebar

    // Calculate Totals
    const grandTotal = summaryData.reduce((acc, curr) => acc + curr.totalFee, 0);
    const totalSessions = summaryData.reduce((acc, curr) => acc + curr.present, 0);

    return (
        <AppLayout familyChildren={activeChildren} role={session.user.role as any} user={session.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <CreditCard className="w-6 h-6 text-emerald-600" />
                            Fee Reports
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Consolidated fee summary for all children
                        </p>
                    </div>
                    {/* Totals Section was here, moved below or alongside filter? */}
                    {/* Let's keep totals at top right, filter below header */}
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Total Revenue</span>
                            <p className="text-xl font-bold text-emerald-700 dark:text-emerald-300">₹{grandTotal.toLocaleString()}</p>
                        </div>
                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 hidden md:block">
                            <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Total Sessions</span>
                            <p className="text-xl font-bold text-blue-700 dark:text-blue-300">{totalSessions}</p>
                        </div>
                    </div>
                </div>

                <FeeReportsFilter defaultStartDate={defaultStartDate} defaultEndDate={defaultEndDate} />

                <div className="glass-card rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-neutral-800 border-b border-gray-100 dark:border-neutral-800">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Child Name</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Parent</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Therapist(s)</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Attendance</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Total Fee</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {summaryData.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            No data found.
                                        </td>
                                    </tr>
                                ) : (
                                    summaryData.map((item) => (
                                        <tr key={item.childId} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900 dark:text-white">{item.childName}</div>
                                                <div className="text-xs text-gray-400">{item.caseNumber}</div>
                                            </td>
                                            <td className="px-6 py-4 hidden md:table-cell">
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{item.parentName}</span>
                                            </td>
                                            <td className="px-6 py-4 hidden lg:table-cell">
                                                <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-[200px] block" title={item.therapistNames}>
                                                    {item.therapistNames || "-"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="text-green-600 font-medium" title="Present">{item.present}</span> /
                                                    <span className="text-red-500 font-medium" title="Absent">{item.absent}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="text-base font-bold text-gray-900 dark:text-white">₹{item.totalFee.toLocaleString()}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link
                                                    href={`/fees/${item.childId}`}
                                                    className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                                    title="View Detailed Report"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
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
