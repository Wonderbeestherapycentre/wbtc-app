import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchChildren, fetchTherapies } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import GoalForm from "@/components/GoalForm";

export const metadata = {
    title: "New Goal | WBTC",
};

export default async function NewGoalPage({
    searchParams,
}: {
    searchParams: Promise<{ childId?: string; therapyId?: string; returnTo?: string }>;
}) {
    const { childId, therapyId, returnTo } = await searchParams;

    const session = await auth();
    if (!session?.user) redirect("/login");
    if (session.user.role === "PARENT") redirect("/goals");

    const [childrenList, therapies] = await Promise.all([
        fetchChildren(true),
        fetchTherapies(true),
    ]);

    const activeChildren = childrenList.filter(
        (c: any) => c.status === "ACTIVE"
    );

    const childrenOptions = activeChildren.map((c: any) => ({
        id: c.id,
        name: c.name,
        caseNumber: c.caseNumber,
        assignedTherapies: c.therapyTypes?.map((t: any) => t.therapyId) || [],
    }));
    const therapyOptions = therapies.map((t: any) => ({ id: t.id, name: t.name }));

    // Default the therapy to the one this therapist handles for the preselected child.
    let preselectTherapyId = therapyId;
    if (!preselectTherapyId && childId && session.user.role === "THERAPIST") {
        const childRecord = childrenList.find((c: any) => c.id === childId);
        preselectTherapyId = childRecord?.therapyTypes
            ?.find((t: any) => t.therapistId === session.user.id)?.therapyId;
    }

    return (
        <AppLayout role={session.user.role as any} user={session.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center gap-4">
                    <Link href={returnTo || "/goals"}>
                        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">New Goal</h2>
                </div>

                <GoalForm
                    mode="create"
                    childrenList={childrenOptions}
                    therapies={therapyOptions}
                    preselectChildId={childId}
                    preselectTherapyId={preselectTherapyId}
                    role={session.user.role as any}
                    returnTo={returnTo || "/goals"}
                />
            </div>
        </AppLayout>
    );
}
