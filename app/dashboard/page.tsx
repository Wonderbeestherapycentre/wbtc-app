import React from "react";
import { auth } from "@/auth";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import ParentDashboard from "@/components/dashboard/ParentDashboard";
import StaffDashboard from "@/components/dashboard/StaffDashboard";
import { redirect } from "next/navigation";

export default async function DashboardPage({ searchParams }: { searchParams: any }) {
    const session = await auth();

    if (!session?.user) {
        return redirect("/api/auth/force-signout");
    }

    const role = session?.user?.role;

    switch (role) {
        case "ADMIN":
            return <AdminDashboard searchParams={searchParams} />;
        case "PARENT":
            return <ParentDashboard />;
        case "THERAPIST":
        case "ATTENDER":
            return <StaffDashboard />;
        default:
            return redirect("/api/auth/force-signout");
    }
}
