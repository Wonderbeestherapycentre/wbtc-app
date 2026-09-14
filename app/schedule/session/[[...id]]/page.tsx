import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { fetchChildren, fetchTherapists, fetchSessionById } from "@/lib/data";
import ScheduleSessionForm from "@/components/schedule/ScheduleSessionForm";

export default async function ScheduleSessionPage(props: {
    params: Promise<{ id?: string[] }>
}) {
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (currentUserRole !== "ADMIN") redirect("/schedule");

    const { id } = await props.params;
    const sessionId = id?.[0];

    const [children, therapists, sessionToEdit] = await Promise.all([
        fetchChildren(),
        fetchTherapists(),
        sessionId ? fetchSessionById(sessionId) : Promise.resolve(null),
    ]);

    if (sessionId && !sessionToEdit) notFound();

    return (
        <AppLayout role={currentUserRole} user={session?.user}>
            <div className="animate-fade-in pb-10">
                <ScheduleSessionForm
                    children={children as any}
                    allTherapists={therapists as any}
                    sessionToEdit={sessionToEdit as any}
                />
            </div>
        </AppLayout>
    );
}
