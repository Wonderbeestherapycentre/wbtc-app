import React from "react";
import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchSessions } from "@/lib/data";
import { format } from "date-fns";

export default async function StaffDashboard() {
    const session = await auth();
    // Fetch sessions from today onwards for this therapist
    const sessions = await fetchSessions(new Date(), undefined, session?.user?.id);

    return (
        <AppLayout role="THERAPIST" user={session?.user}>
            <div className="space-y-6 animate-fade-in">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Staff Dashboard</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Welcome back, {session?.user?.name}
                    </p>
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-neutral-800">
                        <h3 className="text-lg font-semibold">Upcoming Sessions</h3>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {sessions.length > 0 ? (
                            sessions.map((session: any) => (
                                <div key={session.id} className="p-4 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {session.child?.name || "Unknown Child"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {session.therapy?.name} • {format(new Date(session.date), "PPP p")}
                                        </p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${session.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-700' :
                                        session.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>
                                        {session.status}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500">
                                No upcoming sessions scheduled.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
