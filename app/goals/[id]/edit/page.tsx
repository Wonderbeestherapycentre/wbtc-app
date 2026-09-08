import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchGoalById, fetchChildren, fetchTherapies } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import GoalForm from "@/components/GoalForm";

export const metadata = {
    title: "Edit Goal | WBTC",
};

export default async function EditGoalPage({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ returnTo?: string }>;
}) {
    const { id } = await params;
    const { returnTo } = await searchParams;

    const session = await auth();
    if (!session?.user) redirect("/login");
    if (session.user.role === "PARENT") redirect("/goals");

    const [goal, childrenList, therapies] = await Promise.all([
        fetchGoalById(id),
        fetchChildren(true),
        fetchTherapies(true),
    ]);

    if (!goal) notFound();

    const childrenOptions = childrenList
        .filter((c: any) => c.status === "ACTIVE" || c.id === (goal as any).childId)
        .map((c: any) => ({
            id: c.id,
            name: c.name,
            caseNumber: c.caseNumber,
            assignedTherapies: c.therapyTypes?.map((t: any) => t.therapyId) || [],
        }));
    const therapyOptions = therapies.map((t: any) => ({ id: t.id, name: t.name }));

    return (
        <AppLayout role={session.user.role as any} user={session.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center gap-4">
                    <Link href={returnTo || "/goals"}>
                        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Goal</h2>
                </div>

                <GoalForm
                    mode="edit"
                    goal={goal}
                    childrenList={childrenOptions}
                    therapies={therapyOptions}
                    role={session.user.role as any}
                    returnTo={returnTo || "/goals"}
                />
            </div>
        </AppLayout>
    );
}
