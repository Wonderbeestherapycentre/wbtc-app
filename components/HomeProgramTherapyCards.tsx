import Link from "next/link";
import { ClipboardList, ChevronRight, Filter } from "lucide-react";

interface TherapyGroup {
    therapyId: string;
    therapyName: string;
    total: number;
    activeCount: number;
}

interface HomeProgramTherapyCardsProps {
    groups: TherapyGroup[];
}

export default function HomeProgramTherapyCards({ groups }: HomeProgramTherapyCardsProps) {
    if (groups.length === 0) {
        return (
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm px-6 py-20 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 dark:bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Filter className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">No home programs yet</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Programs will appear here grouped by therapy.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((group) => (
                <Link
                    key={group.therapyId}
                    href={`/home-programs?therapy=${group.therapyId}`}
                    className="group bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all"
                >
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                            <ClipboardList className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white capitalize">
                        {group.therapyName}
                    </h3>

                    <div className="mt-2 flex items-center gap-3 text-xs">
                        <span className="text-gray-500 dark:text-gray-400">
                            {group.total} {group.total === 1 ? "program" : "programs"}
                        </span>
                        {group.activeCount > 0 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                                {group.activeCount} active
                            </span>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
