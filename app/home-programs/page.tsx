import { fetchHomeProgramsPaginated, fetchChildren, fetchTherapies } from "@/lib/data";
import HomeProgramList from "@/components/HomeProgramList";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AppLayout from "@/components/AppLayout";

export const metadata = {
    title: "Home Programs | WBTC",
};

export default async function HomeProgramsPage({
    searchParams
}: {
    searchParams: Promise<{ page?: string; search?: string; status?: string }>;
}) {
    const { page: pageParam, search, status } = await searchParams;
    const page = parseInt(pageParam || "1");
    const limit = 10;

    const session = await auth();
    if (!session?.user) redirect("/login");

    const [programsData, childrenList, therapies] = await Promise.all([
        fetchHomeProgramsPaginated(page, limit, search, status),
        fetchChildren(true), // Include inactive for layout/management
        fetchTherapies(),
    ]);

    const { data: programs, meta } = programsData;

    // For AppLayout dropdowns, we might want only active children
    const activeChildren = childrenList.filter((c: any) => c.status === "ACTIVE");

    return (
        <AppLayout
            role={session.user.role as any}
            user={session.user}
            familyChildren={activeChildren}
        >
            <div className="space-y-3 animate-in fade-in duration-500">
                <div className="flex flex-col gap-2">
                    <h1 className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white tracking-tight">Home Programs</h1>
                </div>

                <HomeProgramList
                    programs={programs as any}
                    meta={meta}
                    childrenList={childrenList}
                    therapies={therapies}
                    canAdd={(session.user.role as string) !== "PARENT"}
                    userRole={session.user.role as string}
                />
            </div>
        </AppLayout>
    );
}
