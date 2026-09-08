import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";

interface ChildGroup {
    childId: string;
    childName: string;
    total: number;
    activeCount: number;
}

interface HomeProgramChildListProps {
    groups: ChildGroup[];
}

export default function HomeProgramChildList({ groups }: HomeProgramChildListProps) {
    return (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                            <th className="px-3 py-4 w-px whitespace-nowrap text-xs font-bold text-gray-400 uppercase tracking-wider">#</th>
                            <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider min-w-[200px]">Child</th>
                            <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {groups.length > 0 ? (
                            groups.map((group, index) => (
                                <tr key={group.childId} className="group hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                    <td className="px-3 py-4 w-px whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                    <td className="px-3 py-4">
                                        <Link href={`/home-programs?child=${group.childId}`} className="text-sm font-bold text-gray-900 dark:text-white capitalize">
                                            {group.childName}
                                        </Link>
                                    </td>
                                    <td className="px-3 py-4 text-right">
                                        <Link
                                            href={`/home-programs?child=${group.childId}`}
                                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
                                        >
                                            View <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="px-6 py-20 text-center">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-100 dark:bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                            <Users className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">No assigned children</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Children assigned to you will appear here.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
