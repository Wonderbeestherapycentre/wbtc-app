import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { fetchRecipientOptions } from "@/lib/data";
import NotificationForm from "@/components/notifications/NotificationForm";

export default async function NewNotificationPage() {
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER") || "PARENT";

    if (role !== "ADMIN" && role !== "THERAPIST") redirect("/notifications");

    const { parents, therapists } = await fetchRecipientOptions();

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <NotificationForm parents={parents as any} therapists={therapists as any} currentUserRole={role} />
        </AppLayout>
    );
}
