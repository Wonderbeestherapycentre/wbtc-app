"use client";

import { useState } from "react";
import { Edit2, Eye, Plus, Trash2 } from "lucide-react";
import PaymentModal from "./PaymentModal";
import { deletePayment } from "@/lib/actions";
import { toast } from "sonner";
import ConfirmModal from "@/components/ConfirmModal";

interface Payment {
    id: string;
    amount: string;
    date: string;
    mode: string;
    remarks: string | null;
}

interface PaymentHistoryListProps {
    payments: Payment[];
    child: { id: string; name: string; caseNumber?: string | null };
    summary: { paidFee: number };
}

export default function PaymentHistoryList({ payments, child, summary }: PaymentHistoryListProps) {
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(false);

    // Delete confirmation state
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleView = (payment: Payment) => {
        setSelectedPayment(payment);
        setIsReadOnly(true);
        setIsModalOpen(true);
    };

    const handleEdit = (payment: Payment) => {
        setSelectedPayment(payment);
        setIsReadOnly(false);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedPayment(null);
        setIsReadOnly(false);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id: string) => {
        setIdToDelete(id);
        setDeleteConfirmOpen(true);
    };

    const onConfirmDelete = async () => {
        if (!idToDelete) return;
        setIsDeleting(true);
        try {
            const result = await deletePayment(idToDelete);
            if (result?.error) {
                toast.error(result.error);
            } else {
                toast.success("Payment deleted successfully");
                setDeleteConfirmOpen(false);
                setIdToDelete(null);
            }
        } catch (error) {
            toast.error("Failed to delete payment");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment History</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                            Total Paid: ₹{summary.paidFee.toLocaleString()}
                        </span>
                        <button
                            onClick={handleAdd}
                            className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-sm"
                            title="Add Payment"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 font-medium">
                            <tr>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Mode</th>
                                <th className="px-6 py-3">Remarks</th>
                                <th className="px-6 py-3 text-right">Amount</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {payments.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No payment records found.
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment) => (
                                    <tr key={payment.id} className="hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-medium">
                                            {new Date(payment.date).toLocaleDateString('en-IN', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase
                                                ${payment.mode === 'UPI' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' :
                                                    payment.mode === 'BANK_TRANSFER' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                        'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                                                {payment.mode?.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 italic">
                                            {payment.remarks || "-"}
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-emerald-600">
                                            ₹{Number(payment.amount).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1 transition-opacity">
                                                <button
                                                    onClick={() => handleView(payment)}
                                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(payment)}
                                                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all"
                                                    title="Edit Payment"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(payment.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                                                    title="Delete Payment"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedPayment(null);
                }}
                child={child}
                payment={selectedPayment}
                isReadOnly={isReadOnly}
            />

            <ConfirmModal
                isOpen={deleteConfirmOpen}
                onClose={() => {
                    setDeleteConfirmOpen(false);
                    setIdToDelete(null);
                }}
                onConfirm={onConfirmDelete}
                title="Delete Payment"
                description="Are you sure you want to delete this payment record? This action cannot be undone."
                confirmLabel="Delete Payment"
                isPending={isDeleting}
            />
        </>
    );
}
