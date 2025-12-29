import React from "react";
import AppLayout from "@/components/AppLayout";
import { fetchChildren, fetchCaseload } from "@/lib/data";
import { auth } from "@/auth";
import { Users, Baby } from "lucide-react";

export default async function CaseloadPage() {
    const session = await auth();
    const [children, caseload] = await Promise.all([
        fetchChildren(true),
        fetchCaseload()
    ]);

    return (
        <AppLayout familyChildren={children} role="ADMIN" user={session?.user}>
            <div className="space-y-6 animate-fade-in">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Caseload Report</h2>
                    <p className="text-gray-500 text-sm">Overview of children assigned to each therapist.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseload.map((item: any) => (
                        <div key={item.therapist.id} className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                                    <Users className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.therapist.name}</h3>
                                    <p className="text-xs text-gray-500">{item.therapist.specialization || "Therapist"}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 dark:border-neutral-800 pt-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-500">Active Students</span>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold">
                                        {item.children.length}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {item.children.length > 0 ? (
                                        item.children.map((child: any) => (
                                            <li key={child.id} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                                <Baby className="w-4 h-4 mr-2 text-gray-400" />
                                                {child.name}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-sm text-gray-400 italic">No students assigned</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                    {caseload.length === 0 && (
                        <div className="col-span-full text-center py-10 text-gray-500 bg-white dark:bg-neutral-900 rounded-xl border border-dashed">
                            No caseload data found. Ensure children are assigned to therapists.
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
