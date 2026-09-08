import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchHomeProgram, fetchChildren, fetchTherapies } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import HomeProgramForm from "@/components/HomeProgramForm";

export const metadata = {
    title: "Edit Home Program | WBTC",
};

export default async function EditHomeProgramPage({
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
    if (session.user.role === "PARENT") redirect("/home-programs");

    const [program, childrenList, therapies] = await Promise.all([
        fetchHomeProgram(id),
        fetchChildren(true),
        fetchTherapies(),
    ]);

    if (!program) notFound();

    const childrenOptions = childrenList.filter(
        (c: any) => c.status === "ACTIVE" || c.id === (program as any).childId
    );

    return (
        <AppLayout role={session.user.role as any} user={session.user} familyChildren={childrenList.filter((c: any) => c.status === "ACTIVE")}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center gap-4">
                    <Link href={returnTo || "/home-programs"}>
                        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Home Program</h2>
                </div>

                <HomeProgramForm
                    mode="edit"
                    program={program}
                    childrenList={childrenOptions}
                    therapies={therapies}
                    returnTo={returnTo || "/home-programs"}
                />
            </div>
        </AppLayout>
    );
}
