import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchChildren, fetchTherapies } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import HomeProgramForm from "@/components/HomeProgramForm";

export const metadata = {
    title: "New Home Program | WBTC",
};

export default async function NewHomeProgramPage({
    searchParams,
}: {
    searchParams: Promise<{ childId?: string; therapyId?: string; returnTo?: string }>;
}) {
    const { childId, therapyId, returnTo } = await searchParams;

    const session = await auth();
    if (!session?.user) redirect("/login");
    if (session.user.role === "PARENT") redirect("/home-programs");

    const [childrenList, therapies] = await Promise.all([
        fetchChildren(true),
        fetchTherapies(),
    ]);

    const activeChildren = childrenList.filter((c: any) => c.status === "ACTIVE");

    return (
        <AppLayout role={session.user.role as any} user={session.user} familyChildren={activeChildren}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center gap-4">
                    <Link href={returnTo || "/home-programs"}>
                        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">New Home Program</h2>
                </div>

                <HomeProgramForm
                    mode="create"
                    childrenList={activeChildren}
                    therapies={therapies}
                    preselectChildId={childId}
                    preselectTherapyId={therapyId}
                    returnTo={returnTo || "/home-programs"}
                />
            </div>
        </AppLayout>
    );
}
