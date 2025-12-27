import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchSessions, fetchTherapists } from "@/lib/data";
import WeeklyTimetable from "@/components/schedule/WeeklyTimetable";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function WeeklyTimetablePage() {
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 90);

    const sessions = await fetchSessions(startDate, endDate);
    const therapists = await fetchTherapists();

    return (
        <AppLayout role={currentUserRole} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">


                <WeeklyTimetable sessions={sessions as any} therapists={therapists as any} />
            </div>
        </AppLayout>
    );
}
