import { fetchHomeProgramDetails } from "@/lib/data";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import HomeProgramReportPage from "@/components/HomeProgramReportPage";
import { isToday } from "date-fns";

export default async function HomeProgramReportRoutePage({
    params,
    searchParams
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ returnTo?: string }>;
}) {
    const { id } = await params;
    const { returnTo } = await searchParams;
    const session = await auth();
    if (!session?.user) redirect("/login");

    const program = await fetchHomeProgramDetails(id);
    if (!program) notFound();

    const todaySubmission = program.submissions?.find((s: any) => isToday(new Date(s.date)));
    const backHref = returnTo || `/home-programs/${id}`;

    return (
        <AppLayout
            role={session.user.role as any}
            user={session.user}
        >
            <HomeProgramReportPage
                programId={program.id}
                programTitle={program.title}
                childId={program.childId}
                tasks={program.tasks || []}
                initialData={todaySubmission?.submissionTasks}
                backHref={backHref}
            />
        </AppLayout>
    );
}
