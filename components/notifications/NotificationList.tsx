"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Plus, Bell, Check, Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteNotification } from "@/lib/actions";
import ConfirmModal from "@/components/ConfirmModal";

interface NotificationRow {
    id: string;
    title: string;
    createdAt: string | Date;
    senderName?: string;
    recipientCount?: number;
    readCount?: number;
    unreadCount?: number;
    isRead?: boolean;
}

interface NotificationListProps {
    notifications: NotificationRow[];
    canSend: boolean;
    view: "sent" | "received";
    isAdmin?: boolean;
}

export default function NotificationList({ notifications, canSend, view, isAdmin = false }: NotificationListProps) {
    const [isPending, startTransition] = useTransition();
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [notificationToDelete, setNotificationToDelete] = useState<string | null>(null);

    const handleDeleteClick = (id: string) => {
        setNotificationToDelete(id);
        setDeleteConfirmOpen(true);
    };

    const onConfirmDelete = () => {
        if (!notificationToDelete) return;

        startTransition(async () => {
            const result = await deleteNotification(notificationToDelete);
            if (result?.message === "Notification deleted") {
                toast.success(result.message);
            } else {
                toast.error(result?.message || "Failed to delete notification");
            }
            setDeleteConfirmOpen(false);
            setNotificationToDelete(null);
        });
    };

    return (
        <>
            <div className="p-2 flex flex-row justify-between items-center gap-4 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                    <h2 className="text-md md:text-xl font-bold text-gray-900 dark:text-white">Notifications</h2>
                    {canSend && (
                        <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-lg p-1 text-sm">
                            <Link
                                href="/notifications?view=sent"
                                className={`px-3 py-1 rounded-md transition-colors ${view === "sent" ? "bg-white dark:bg-neutral-700 shadow-sm font-medium" : "text-gray-500"}`}
                            >
                                Sent
                            </Link>
                            <Link
                                href="/notifications?view=received"
                                className={`px-3 py-1 rounded-md transition-colors ${view === "received" ? "bg-white dark:bg-neutral-700 shadow-sm font-medium" : "text-gray-500"}`}
                            >
                                Received
                            </Link>
                        </div>
                    )}
                </div>
                {canSend && (
                    <Link
                        href="/notifications/new"
                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4 mx-2" />
                        <span className="hidden md:block">Add New</span>
                    </Link>
                )}
            </div>

            <div className="glass-card rounded-2xl overflow-hidden animate-fade-in animate-delay-100">
                <ConfirmModal
                    isOpen={deleteConfirmOpen}
                    onClose={() => {
                        setDeleteConfirmOpen(false);
                        setNotificationToDelete(null);
                    }}
                    onConfirm={onConfirmDelete}
                    title="Delete Notification"
                    description="Are you sure you want to delete this notification? This will remove it for all recipients and cannot be undone."
                    confirmLabel="Delete Notification"
                    isPending={isPending}
                />

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                            <tr>
                                <th className="text-left py-4 px-3 w-px whitespace-nowrap text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                                {view === "sent" && (
                                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">From</th>
                                )}
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {view === "sent" ? "Recipients" : "From"}
                                </th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {notifications.length === 0 ? (
                                <tr>
                                    <td colSpan={view === "sent" ? 7 : 6} className="py-10 text-center text-sm text-gray-500">
                                        <Bell className="w-6 h-6 mx-auto mb-2 text-gray-300" />
                                        No notifications yet
                                    </td>
                                </tr>
                            ) : (
                                notifications.map((n, index) => (
                                    <tr key={n.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                        <td className="py-4 px-3 w-px whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                        <td className="py-4 px-6">
                                            <Link
                                                href={`/notifications/${n.id}`}
                                                className="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                                            >
                                                {n.title}
                                            </Link>
                                        </td>
                                        {view === "sent" && (
                                            <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
                                                {n.senderName}
                                            </td>
                                        )}
                                        <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
                                            {view === "sent"
                                                ? `${n.recipientCount ?? 0} recipient${(n.recipientCount ?? 0) === 1 ? "" : "s"}`
                                                : n.senderName}
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
                                            {new Date(n.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </td>
                                        <td className="py-4 px-6">
                                            {view === "sent" ? (
                                                <div className="flex items-center gap-1.5">
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                        <Check className="w-3 h-3" />
                                                        {n.readCount ?? 0} Read
                                                    </span>
                                                    {(n.unreadCount ?? 0) > 0 && (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                                            {n.unreadCount} Unread
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${n.isRead
                                                    ? "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400"
                                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                                    }`}>
                                                    {n.isRead && <Check className="w-3 h-3" />}
                                                    {n.isRead ? "Read" : "Unread"}
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/notifications/${n.id}`}
                                                    className="inline-flex p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                {isAdmin && (
                                                    <button
                                                        onClick={() => handleDeleteClick(n.id)}
                                                        disabled={isPending}
                                                        className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-600 transition-colors disabled:opacity-50"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
