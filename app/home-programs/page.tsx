import { fetchHomeProgramsPaginated, fetchChildren, fetchTherapies, fetchHomeProgramTherapyGroups, fetchHomeProgramChildGroups } from "@/lib/data";
import HomeProgramList from "@/components/HomeProgramList";
import HomeProgramTherapyCards from "@/components/HomeProgramTherapyCards";
import HomeProgramChildList from "@/components/HomeProgramChildList";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AppLayout from "@/components/AppLayout";

export const metadata = {
    title: "Home Programs | WBTC",
};

export default async function HomeProgramsPage({
    searchParams
}: {
    searchParams: Promise<{ page?: string; search?: string; status?: string; therapy?: string; child?: string }>;
}) {
    const { page: pageParam, search, status, therapy, child } = await searchParams;
    const page = parseInt(pageParam || "1");
    const limit = 10;

    const session = await auth();
    if (!session?.user) redirect("/login");

    const isTherapist = session.user.role === "THERAPIST";

    const [childrenList, therapies, therapyGroups, childGroups] = await Promise.all([
        fetchChildren(true), // Include inactive for layout/management
        fetchTherapies(),
        isTherapist ? Promise.resolve([]) : fetchHomeProgramTherapyGroups(),
        isTherapist ? fetchHomeProgramChildGroups() : Promise.resolve([]),
    ]);

    // For AppLayout dropdowns, we might want only active children
    const activeChildren = childrenList.filter((c: any) => c.status === "ACTIVE");

    // Therapists browse by child; everyone else browses by therapy.
    if (isTherapist) {
        const selectedChild = child
            ? (childGroups.find((g: any) => g.childId === child)
                ?? childrenList.find((c: any) => c.id === child))
            : null;
        const selectedChildName = (selectedChild as any)?.childName ?? (selectedChild as any)?.name ?? null;

        // Default the New Program therapy to the one this therapist handles for the child.
        const selectedChildRecord = child ? childrenList.find((c: any) => c.id === child) : null;
        const therapistTherapyId = (selectedChildRecord as any)?.therapyTypes
            ?.find((t: any) => t.therapistId === session.user.id)?.therapyId ?? undefined;

        const programsData = child
            ? await fetchHomeProgramsPaginated(page, limit, search, status, "", child)
            : null;

        return (
            <AppLayout
                role={session.user.role as any}
                user={session.user}
                familyChildren={activeChildren}
            >
                <div className="space-y-3 animate-in fade-in duration-500">
                    {!child ? (
                        <>
                            <div className="flex flex-col gap-2">
                                <h1 className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white tracking-tight">Home Programs</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Select a child to view their home programs.</p>
                            </div>

                            <HomeProgramChildList groups={childGroups as any} />
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/home-programs"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                                >
                                    <ArrowLeft className="w-4 h-4" /> All Children
                                </Link>
                                <h1 className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white tracking-tight capitalize">
                                    {selectedChildName || "Home Programs"}
                                </h1>
                            </div>

                            <HomeProgramList
                                programs={(programsData?.data ?? []) as any}
                                meta={programsData!.meta}
                                childrenList={activeChildren}
                                therapies={therapies}
                                canAdd
                                userRole={session.user.role as string}
                                hideTherapyColumn
                                hideChildColumn
                                hideSearch
                                preselectChildId={child}
                                preselectTherapyId={therapistTherapyId}
                            />
                        </>
                    )}
                </div>
            </AppLayout>
        );
    }

    const selectedTherapyName = therapy
        ? (therapyGroups.find((g: any) => g.therapyId === therapy)?.therapyName
            ?? therapies.find((t: any) => t.id === therapy)?.name)
        : null;

    const programsData = therapy
        ? await fetchHomeProgramsPaginated(page, limit, search, status, therapy)
        : null;

    return (
        <AppLayout
            role={session.user.role as any}
            user={session.user}
            familyChildren={activeChildren}
        >
            <div className="space-y-3 animate-in fade-in duration-500">
                {!therapy ? (
                    <>
                        <div className="flex flex-col gap-2">
                            <h1 className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white tracking-tight">Home Programs</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Select a therapy to view its home programs.</p>
                        </div>

                        <HomeProgramTherapyCards groups={therapyGroups as any} />
                    </>
                ) : (
                    <>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/home-programs"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                            >
                                <ArrowLeft className="w-4 h-4" /> All Therapies
                            </Link>
                            <h1 className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white tracking-tight capitalize">
                                {selectedTherapyName || "Home Programs"}
                            </h1>
                        </div>

                        <HomeProgramList
                            programs={(programsData?.data ?? []) as any}
                            meta={programsData!.meta}
                            childrenList={activeChildren}
                            therapies={therapies}
                            canAdd={(session.user.role as string) !== "PARENT"}
                            userRole={session.user.role as string}
                            hideTherapyColumn
                            hideSearch={session.user.role === "PARENT"}
                        />
                    </>
                )}
            </div>
        </AppLayout>
    );
}
