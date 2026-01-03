"use client";

import { useEffect, useState } from "react";
import { getBackups, deleteBackupAction, triggerBackupAction } from "@/lib/actions";
import { Download, Trash2, Database, RefreshCw, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

export default function BackupsPage() {
    const [backups, setBackups] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isTriggering, setIsTriggering] = useState(false);

    const fetchBackups = async () => {
        setLoading(true);
        const data = await getBackups();
        setBackups(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchBackups();
    }, []);

    const handleTrigger = async () => {
        setIsTriggering(true);
        const res = await triggerBackupAction();
        if (res.success) {
            toast.success(res.message);
            fetchBackups();
        } else {
            toast.error(res.message);
        }
        setIsTriggering(false);
    };

    const handleDelete = async (fileName: string) => {
        if (!confirm("Are you sure you want to delete this backup?")) return;
        const res = await deleteBackupAction(fileName);
        if (res.success) {
            toast.success(res.message);
            fetchBackups();
        } else {
            toast.error(res.message);
        }
    };

    const formatBytes = (bytes: number) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Database Backups
                    </h1>
                    <p className="text-gray-500 mt-2">Manage and monitor your system's data security.</p>
                </div>
                <button
                    onClick={handleTrigger}
                    disabled={isTriggering}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all font-semibold disabled:opacity-50 shadow-lg shadow-blue-500/20"
                >
                    <RefreshCw size={18} className={isTriggering ? "animate-spin" : ""} />
                    {isTriggering ? "Creating Backup..." : "Trigger Manual Backup"}
                </button>
            </div>

            <div className="glass-card rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800">
                <div className="p-6 bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800 flex items-center gap-2 text-gray-500">
                    <Database size={18} />
                    <span className="font-medium text-sm">Backup History</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-gray-400 font-bold border-b border-gray-50 dark:border-neutral-900">
                                <th className="px-8 py-4">Filename</th>
                                <th className="px-8 py-4">Created At</th>
                                <th className="px-8 py-4">Size</th>
                                <th className="px-8 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-neutral-900">
                            {loading ? (
                                Array(3).fill(0).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-8 py-6"><div className="h-4 bg-gray-100 dark:bg-neutral-800 rounded w-48" /></td>
                                        <td className="px-8 py-6"><div className="h-4 bg-gray-100 dark:bg-neutral-800 rounded w-32" /></td>
                                        <td className="px-8 py-6"><div className="h-4 bg-gray-100 dark:bg-neutral-800 rounded w-16" /></td>
                                        <td className="px-8 py-6"><div className="h-8 bg-gray-100 dark:bg-neutral-800 rounded w-24 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : backups.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-12 text-center text-gray-400">
                                        <div className="flex flex-col items-center gap-3">
                                            <AlertCircle size={40} className="text-gray-200" />
                                            <p>No backups found. Trigger one to get started.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                backups.map((backup) => (
                                    <tr key={backup.name} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/20 transition-colors">
                                        <td className="px-8 py-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {backup.name}
                                        </td>
                                        <td className="px-8 py-6 text-sm text-gray-500">
                                            {format(new Date(backup.createdAt), "PPp")}
                                        </td>
                                        <td className="px-8 py-6 text-sm text-gray-500">
                                            {formatBytes(backup.size)}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <a
                                                    href={`/api/backups/download?filename=${backup.name}`}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                                    title="Download"
                                                >
                                                    <Download size={18} />
                                                </a>
                                                <button
                                                    onClick={() => handleDelete(backup.name)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
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

            <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-3xl border border-amber-100 dark:border-amber-900/30 flex gap-4">
                <AlertCircle className="text-amber-600 flex-shrink-0" />
                <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                    <p className="font-bold mb-1">Backup Policy</p>
                    <p>The system stores backups for a maximum of 7 days. Ensure you download critical copies for long-term archival. Each backup includes clinical notes, schedules, and financial records.</p>
                </div>
            </div>
        </div>
    );
}
