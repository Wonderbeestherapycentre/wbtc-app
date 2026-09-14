import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { fetchChild, fetchParents, fetchTherapists, fetchTherapies } from "@/lib/data";
import ChildForm from "@/components/ChildForm";

export default async function ChildSessionPage(props: {
    params: Promise<{ id?: string[] }>
}) {
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (currentUserRole !== "ADMIN") redirect("/childrens");

    const { id } = await props.params;
    const childId = id?.[0];

    const [parents, therapists, therapies, childToEdit] = await Promise.all([
        fetchParents(),
        fetchTherapists(),
        fetchTherapies(true),
        childId ? fetchChild(childId) : Promise.resolve(null),
    ]);

    if (childId && !childToEdit) notFound();

    return (
        <AppLayout role={currentUserRole} user={session?.user}>
            <div className="animate-fade-in pb-10">
                <ChildForm
                    parents={parents}
                    therapists={therapists}
                    therapies={therapies as any}
                    child={childToEdit as any}
                />
            </div>
        </AppLayout>
    );
}
