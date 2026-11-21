import { Suspense } from "react";
import { redirect } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import ChatClient from "@/components/chat/ChatClient";
import { auth } from "@/auth";

export default async function MessagesPage() {
    const session = await auth();
    const role = session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER" | undefined;
    if (!session?.user?.id || !role) redirect("/");
    if (role === "ATTENDER") redirect("/dashboard");

    return (
        <AppLayout role={role} user={session.user}>
            <Suspense>
                <ChatClient role={role} />
            </Suspense>
        </AppLayout>
    );
}
