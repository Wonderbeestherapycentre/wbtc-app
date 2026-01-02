"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Plus, CreditCard } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface FeeSummaryItem {
    childId: string;
    childName: string;
    caseNumber: string;
    parentName: string;
    therapistNames: string;
    present: number;
    absent: number;
    totalFee: number;
    totalAssignedFee: number;
    paidFee: number;
    therapyBreakdown: Record<string, number>;
    assignedTherapyBreakdown: Record<string, number>;
    therapyFees: Record<string, number>;
}

interface FeesTableProps {
    data: FeeSummaryItem[];
}

export default function FeesTable({ data }: FeesTableProps) {
    const [selectedChild, setSelectedChild] = useState<{ id: string; name: string; caseNumber?: string } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPayment = (child: { id: string; name: string; caseNumber?: string }) => {
        setSelectedChild(child);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="glass-card rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-neutral-800 border-b border-gray-100 dark:border-neutral-800">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Child Name</th>
                                {/* <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Parent</th> */}
                                {/* <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Therapist(s)</th> */}
                                {/* <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Attendance</th> */}
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Sessions</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Total Bill</th>
                                {/* <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Attended Fee</th> */}
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Paid</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Pending</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={10} className="px-6 py-12 text-center text-gray-500">
                                        No data found.
                                    </td>
                                </tr>
                            ) : (
                                data.map((item) => {
                                    // Pending = Total Bill (Assigned) - Paid
                                    const pending = Number(item.totalAssignedFee) - Number(item.paidFee);
                                    return (
                                        <tr key={item.childId} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900 dark:text-white">{item.childName}</div>
                                                <div className="text-xs text-gray-400">{item.caseNumber}</div>
                                            </td>
                                            {/* <td className="px-6 py-4 hidden md:table-cell">
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{item.parentName}</span>
                                            </td> */}
                                            {/* <td className="px-6 py-4 hidden lg:table-cell">
                                                <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-[200px] block" title={item.therapistNames}>
                                                    {item.therapistNames || "-"}
                                                </span>
                                            </td> */}
                                            {/* <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="text-green-600 font-medium" title="Present">{item.present}</span> /
                                                    <span className="text-red-500 font-medium" title="Absent">{item.absent}</span>
                                                </div>
                                            </td> */}
                                            {/* <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.present}</span>
                                                    <span className="text-[10px] text-gray-400 font-medium">
                                                        ({Object.entries(item.therapyBreakdown).map(([k, v]) => `${k}=${v}`).join(", ")})
                                                    </span>
                                                </div>
                                            </td> */}

                                            <td className="px-6 py-4 ">
                                                <div className="flex flex-col gap-0.5">
                                                    {Object.entries(item.assignedTherapyBreakdown).map(([k, count]) => {
                                                        const rate = item.therapyFees[k] || 0;
                                                        return (
                                                            <span key={k} className="text-[11px] font-bold text-gray-900 dark:text-white whitespace-nowrap">
                                                                {k}({count}){rate}={(count * rate).toLocaleString()}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex flex-col items-end">
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">₹{item.totalAssignedFee.toLocaleString()}</span>
                                                    {/* <span className="text-[10px] text-gray-400 font-medium">
                                                        {item.present + item.absent} total ({Object.entries(item.assignedTherapyBreakdown).map(([k, v]) => `${k}=${v}`).join(", ")})
                                                    </span> */}
                                                </div>
                                            </td>
                                            {/* <td className="px-6 py-4 text-right">
                                                <div className="flex flex-col items-end">
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">₹{item.totalFee.toLocaleString()}</span>
                                                    <span className="text-[10px] text-gray-400 font-medium">{item.present} sessions</span>
                                                </div>
                                            </td> */}
                                            <td className="px-6 py-4 text-right">
                                                <span className="text-sm font-medium text-emerald-600">₹{item.paidFee.toLocaleString()}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`text-sm font-bold ${pending > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                                    ₹{pending.toLocaleString()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button
                                                        onClick={() => handleAddPayment({ id: item.childId, name: item.childName, caseNumber: item.caseNumber })}
                                                        className="inline-flex items-center justify-center p-2 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all"
                                                        title="Record Payment"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                    <Link
                                                        href={`/fees/${item.childId}`}
                                                        className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                                        title="View Detailed Report"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedChild && (
                <PaymentModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedChild(null);
                    }}
                    child={selectedChild}
                />
            )}
        </>
    );
}
