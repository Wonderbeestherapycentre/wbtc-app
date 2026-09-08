import { fetchChildren, fetchTherapies, fetchGoalsPaginated, fetchGoalChildGroups } from "@/lib/data";
import { auth } from "@/auth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import GoalsClient from "@/components/GoalsClient"; // Moving client logic to separate component
import GoalChildList from "@/components/GoalChildList";

export const metadata = {
    title: "Therapy Goals | WBTC",
};

export default async function GoalsPage({
    searchParams
}: {
    searchParams: Promise<{ page?: string; search?: string; status?: string; child?: string }>;
}) {
    const { page: pageParam, search, status, child } = await searchParams;
    const page = parseInt(pageParam || "1");
    const limit = 10;

    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    const childrenList = await fetchChildren(true);
    const therapies = await fetchTherapies(true);

    // Map minimal data for dropdowns
    const childrenOptions = childrenList.map((c: any) => ({
        id: c.id,
        name: c.name,
        caseNumber: c.caseNumber,
        assignedTherapies: c.therapyTypes?.map((t: any) => t.therapyId) || []
    }));
    const therapyOptions = therapies.map((t: any) => ({ id: t.id, name: t.name }));

    const isTherapist = role === "THERAPIST";

    // Therapists browse by child first: children -> goals.
    if (isTherapist && !child) {
        const childGroups = await fetchGoalChildGroups();

        return (
            <AppLayout role={session?.user?.role as any} user={session?.user}>
                <div className="space-y-3 animate-fade-in pb-3">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Therapy Goals</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Select a child to view their goals.</p>
                    </div>

                    <GoalChildList groups={childGroups as any} />
                </div>
            </AppLayout>
        );
    }

    const { data: goals, meta } = await fetchGoalsPaginated(page, limit, child, search, status);

    const selectedChildName = child
        ? childrenList.find((c: any) => c.id === child)?.name ?? null
        : null;

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-3 animate-fade-in pb-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        {isTherapist && (
                            <Link
                                href="/goals"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                            >
                                <ArrowLeft className="w-4 h-4" /> All Children
                            </Link>
                        )}
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                            {isTherapist && selectedChildName ? selectedChildName : "Therapy Goals"}
                        </h2>
                    </div>
                </div>

                <GoalsClient
                    initialGoals={goals}
                    meta={meta}
                    childrenList={childrenOptions}
                    therapies={therapyOptions}
                    role={role}
                    hideChildColumn={isTherapist}
                    hideSearch={isTherapist}
                    preselectChildId={child}
                />
            </div>
        </AppLayout>
    );
}
