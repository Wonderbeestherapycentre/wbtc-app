import { fetchGoals, fetchChildren, fetchTherapies, fetchGoalsPaginated } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import GoalModal from "@/components/GoalModal";
import GoalsClient from "@/components/GoalsClient"; // Moving client logic to separate component
import SearchInput from "@/components/SearchInput"; // Reusing search

export const metadata = {
    title: "Therapy Goals | WBTC",
};

export default async function GoalsPage({
    searchParams
}: {
    searchParams: Promise<{ page?: string; search?: string; status?: string }>;
}) {
    const { page: pageParam, search, status } = await searchParams;
    const page = parseInt(pageParam || "1");
    const limit = 10;

    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    const { data: goals, meta } = await fetchGoalsPaginated(page, limit, undefined, search, status);
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

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-3 animate-fade-in pb-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Therapy Goals</h2>
                    </div>
                </div>

                <GoalsClient
                    initialGoals={goals}
                    meta={meta}
                    childrenList={childrenOptions}
                    therapies={therapyOptions}
                    role={role}
                />
            </div>
        </AppLayout>
    );
}
