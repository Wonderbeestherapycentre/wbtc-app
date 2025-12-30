"use client";

import { useState, useTransition, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Plus, IndianRupee, Calendar, CreditCard, FileText, Save, Trash2 } from "lucide-react";
import { addPayment, updatePayment, deletePayment } from "@/lib/actions";
import { toast } from "sonner";

interface Payment {
    id: string;
    amount: string;
    date: string;
    mode: string;
    remarks: string | null;
}

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    child: { id: string; name: string; caseNumber?: string | null };
    payment?: Payment | null; // If provided, we are in EDIT/VIEW mode
    isReadOnly?: boolean;
}

export default function PaymentModal({ isOpen, onClose, child, payment, isReadOnly = false }: PaymentModalProps) {
    const [isPending, startTransition] = useTransition();
    const [mounted, setMounted] = useState(false);
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [mode, setMode] = useState("CASH");
    const [remarks, setRemarks] = useState("");
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            if (payment) {
                setAmount(Number(payment.amount).toString());
                setDate(payment.date);
                setMode(payment.mode);
                setRemarks(payment.remarks || "");
            } else {
                setAmount("");
                setRemarks("");
                setDate(new Date().toISOString().split("T")[0]);
                setMode("CASH");
            }
        }
    }, [isOpen, payment]);

    if (!isOpen || !mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isReadOnly) return;

        const formData = new FormData();
        formData.append("amount", amount);
        formData.append("date", date);
        formData.append("mode", mode);
        formData.append("remarks", remarks);

        if (!payment) {
            formData.append("childId", child.id);
        }

        startTransition(async () => {
            try {
                const result = payment
                    ? await updatePayment(payment.id, formData)
                    : await addPayment(formData);

                if (result?.error) {
                    toast.error(result.error);
                } else {
                    toast.success(payment ? "Payment updated successfully" : "Payment recorded successfully");
                    onClose();
                }
            } catch (error) {
                toast.error(payment ? "Failed to update payment" : "Failed to record payment");
            }
        });
    };

    const handleDelete = () => {
        if (!payment) return;
        startTransition(async () => {
            try {
                const result = await deletePayment(payment.id);
                if (result?.error) {
                    toast.error(result.error);
                } else {
                    toast.success("Payment deleted successfully");
                    setDeleteConfirmOpen(false);
                    onClose();
                }
            } catch (error) {
                toast.error("Failed to delete payment");
            }
        });
    };

    return createPortal(
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in text-left">
                <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800 animate-slide-up">
                    <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-emerald-600" />
                            {isReadOnly ? "View Payment" : payment ? "Edit Payment" : "Record Payment"}
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider text-[10px]">Recipient</label>
                            <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700">
                                <p className="font-bold text-gray-900 dark:text-white">{child.name}</p>
                                {child.caseNumber && <p className="text-xs text-gray-500 mt-0.5">{child.caseNumber}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-[10px]">Amount</label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">₹</span>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        readOnly={isReadOnly}
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-semibold disabled:opacity-50"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-[10px]">Date</label>
                                <input
                                    type="date"
                                    required
                                    readOnly={isReadOnly}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-[10px]">Payment Mode</label>
                            <div className="grid grid-cols-3 gap-2">
                                {["CASH", "UPI", "BANK_TRANSFER"].map((m) => (
                                    <button
                                        key={m}
                                        type="button"
                                        disabled={isReadOnly}
                                        onClick={() => setMode(m)}
                                        className={`px-2 py-2 rounded-lg border transition-all text-[11px] font-bold ${mode === m
                                            ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                            : "border-gray-200 dark:border-neutral-800 text-gray-400 hover:border-gray-300 dark:hover:border-neutral-700"
                                            } disabled:opacity-50`}
                                    >
                                        {m === "BANK_TRANSFER" ? "BANK" : m}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-[10px]">Remarks</label>
                            <textarea
                                value={remarks}
                                readOnly={isReadOnly}
                                onChange={(e) => setRemarks(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none text-sm disabled:opacity-50"
                                placeholder="Optional notes..."
                            />
                        </div>

                        <div className="pt-2 flex gap-3">

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 font-semibold transition-colors text-sm"
                            >
                                {isReadOnly ? "Close" : "Cancel"}
                            </button>
                            {!isReadOnly && (
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="flex-[2] px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all font-bold shadow-lg shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center gap-2 text-sm active:scale-95"
                                >
                                    {isPending ? "Saving..." : (
                                        <>
                                            {payment ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            {payment ? "Update Payment" : "Add Payment"}
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>


        </>,
        document.body
    );
}
