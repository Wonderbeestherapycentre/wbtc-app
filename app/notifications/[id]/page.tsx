import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchNotificationById } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

function formatDateTime(date: string | Date) {
    return new Date(date)
        .toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
        .replace(/am|pm/i, (m) => m.toUpperCase());
}

export default async function NotificationDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    const { id } = await params;
    const notification = await fetchNotificationById(id);

    if (!notification) notFound();

    const role = session?.user?.role;
    const showRecipients = role === "ADMIN" || (role === "THERAPIST" && notification.senderId === session?.user?.id);

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="max-w-3xl mx-auto animate-fade-in">
                <Link
                    href="/notifications"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-4 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Notifications
                </Link>

                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800">
                    <div className="p-6 border-b border-gray-100 dark:border-neutral-800">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">{notification.title}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            From <span className="font-bold text-gray-700 dark:text-gray-300">{notification.sender?.name || "-"}</span> •{" "}
                            {formatDateTime(notification.createdAt)}
                        </p>
                    </div>

                    <div
                        className="p-6 text-sm text-gray-700 dark:text-gray-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2"
                        dangerouslySetInnerHTML={{ __html: notification.description }}
                    />

                    {showRecipients && notification.recipients && notification.recipients.length > 0 && (
                        <div className="p-6 border-t border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sent to</p>
                                <p className="text-xs text-gray-400">
                                    {notification.recipients.filter((r: any) => r.isRead).length} of {notification.recipients.length} read
                                </p>
                            </div>
                            <div className="space-y-1.5">
                                {notification.recipients.map((r: any) => (
                                    <div
                                        key={r.id}
                                        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-gray-50 dark:bg-neutral-800/50"
                                    >
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{r.user?.name}</span>
                                        {r.isRead ? (
                                            <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 dark:text-green-400 shrink-0">
                                                <Check className="w-3 h-3" />
                                                Read {r.readAt && formatDateTime(r.readAt)}
                                            </span>
                                        ) : (
                                            <span className="text-xs font-medium text-gray-400 shrink-0">Unread</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
