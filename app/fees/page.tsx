import { fetchChildrenFeeSummary, fetchChildren } from "@/lib/data"; // importing fetchChildren just for layout prop
import { db } from "@/lib/db";
import { therapies as therapiesTable } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import Link from "next/link";
import { Eye, CreditCard, ExternalLink } from "lucide-react";
import FeeReportsFilter from "./FeeReportsFilter";
import { formatDateToLocal } from "@/lib/utils";
import FeesTable from "@/components/fees/FeesTable";

export default async function FeesPage(props: { searchParams: Promise<{ startDate?: string; endDate?: string; therapyId?: string }> }) {
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
    const therapyId = searchParams?.therapyId || "ALL";


    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const [summaryData, activeChildren, therapiesList] = await Promise.all([
        fetchChildrenFeeSummary(startDate, endDate, therapyId),
        fetchChildren(),
        db.query.therapies.findMany({ where: eq(therapiesTable.status, "ACTIVE"), orderBy: [asc(therapiesTable.name)] })
    ]);

    // Calculate Totals
    const grandTotal = summaryData.reduce((acc: number, curr: any) => acc + curr.totalAssignedFee, 0);
    const totalPaid = summaryData.reduce((acc: number, curr: any) => acc + curr.paidFee, 0);
    const totalPending = grandTotal - totalPaid;
    const grandBreakdown = summaryData.reduce((acc: Record<string, number>, curr: any) => {
        Object.entries(curr.assignedTherapyBreakdown || {}).forEach(([k, v]) => {
            acc[k] = (acc[k] || 0) + (v as number);
        });
        return acc;
    }, {} as Record<string, number>);
    const totalSessions = Object.values(grandBreakdown).reduce((a, b) => a + b, 0);

    return (
        <AppLayout familyChildren={activeChildren} role={session.user.role as any} user={session.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <CreditCard className="w-6 h-6 text-emerald-600" />
                            Fee Details
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Financial overview and payment tracking
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">Total Sessions</span>
                            <div className="flex items-baseline gap-2">
                                <p className="text-lg font-bold text-blue-700 dark:text-blue-300">{totalSessions}</p>
                                <span className="text-[10px] font-bold text-blue-500/80">
                                    ({Object.entries(grandBreakdown).map(([k, v]) => `${k}:${v}`).join(", ")})
                                </span>
                            </div>
                        </div>
                        <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-800 rounded-xl border border-gray-100 dark:border-neutral-700">
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider block">Total Bill</span>
                            <p className="text-lg font-bold text-gray-700 dark:text-gray-300">₹{grandTotal.toLocaleString()}</p>
                        </div>
                        <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">Total Paid</span>
                            <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">₹{totalPaid.toLocaleString()}</p>
                        </div>
                        <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
                            <span className="text-[10px] text-red-600 dark:text-red-400 font-bold uppercase tracking-wider block">Pending</span>
                            <p className="text-lg font-bold text-red-700 dark:text-red-300">₹{totalPending.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <FeeReportsFilter
                    defaultStartDate={defaultStartDate}
                    defaultEndDate={defaultEndDate}
                    therapies={therapiesList}
                />

                <FeesTable data={summaryData} />
            </div>
        </AppLayout>
    );
}
