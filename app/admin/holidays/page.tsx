import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import { fetchHolidays } from "@/lib/data";
import { deleteHoliday } from "@/lib/actions";
import { redirect } from "next/navigation";
import { Trash2, Calendar } from "lucide-react";
import { format } from "date-fns";
import AddHolidayModal from "@/components/admin/AddHolidayModal";

export default async function HolidaysPage() {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        redirect("/dashboard");
    }

    const holidays = await fetchHolidays();

    return (
        <AppLayout role="ADMIN" user={session?.user}>
            <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Calendar className="w-6 h-6 text-blue-600" />
                            Holiday Management
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage clinic holidays and non-working days</p>
                    </div>
                    {/* Add Holiday Modal Trigger */}
                    <AddHolidayModal />
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden shadow-xl shadow-blue-100/20 dark:shadow-none">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-100 dark:border-neutral-800">
                                <tr>
                                    <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                                    <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Name</th>
                                    <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-neutral-800/50">
                                {holidays.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="py-12 text-center text-gray-400 text-sm">
                                            No holidays scheduled yet.
                                        </td>
                                    </tr>
                                ) : (
                                    holidays.map((holiday: any) => (
                                        <tr key={holiday.id} className="group hover:bg-red-50/30 dark:hover:bg-red-900/10 transition-colors">
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <span className="text-sm font-bold text-gray-900 dark:text-white">
                                                    {format(new Date(holiday.date), "MMM d, yyyy")}
                                                </span>
                                                <span className="block text-xs text-gray-400">{format(new Date(holiday.date), "EEEE")}</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{holiday.name}</span>
                                                {holiday.description && (
                                                    <p className="text-xs text-gray-500 mt-0.5">{holiday.description}</p>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <form action={async () => {
                                                    "use server";
                                                    await deleteHoliday(holiday.id);
                                                }}>
                                                    <button
                                                        type="submit"
                                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                        title="Delete Holiday"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </form>
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
