"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
// import logo from "@/app/assets/logo.png"; 
// import NextImage from "next/image";

export default function AppLayout({
    children,
    familyChildren = [],
    role = "ADMIN",
    user
}: {
    children: React.ReactNode;
    familyChildren?: any[];
    role?: "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
    user?: any;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-gray-50/50 dark:bg-neutral-950">

            {/* Sidebar (Desktop) / Drawer (Mobile) */}
            <Sidebar
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                role={role}
                user={user}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Unified Header */}
                <Header
                    user={user}
                    onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                />

                <main className="flex-1 overflow-y-auto p-2 md:px-4 md:py-2">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
