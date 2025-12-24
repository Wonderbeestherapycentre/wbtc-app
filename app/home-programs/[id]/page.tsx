import { fetchHomeProgramDetails, fetchChildren } from "@/lib/data";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import HomeProgramDetails from "@/components/HomeProgramDetails";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function HomeProgramViewPage({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user) redirect("/login");

    const [program, childrenList] = await Promise.all([
        fetchHomeProgramDetails(id),
        fetchChildren(true),
    ]);

    if (!program) notFound();

    const activeChildren = childrenList.filter((c: any) => c.status === "ACTIVE");

    return (
        <AppLayout
            role={session.user.role as any}
            user={session.user}
            familyChildren={activeChildren}
        >
            <div className="w-full mx-auto space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Link
                    href="/home-programs"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Programs
                </Link>

                <div className="bg-white dark:bg-neutral-900 rounded-[1.0rem] border border-gray-100 dark:border-neutral-800 shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden">
                    <div className="p-2 md:p-4">
                        <HomeProgramDetails
                            program={program}
                            isParent={session.user.role === "PARENT"}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
