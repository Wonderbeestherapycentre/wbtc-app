"use client";

import React, { useState } from "react";
import { Menu, X, Receipt } from "lucide-react";
import Sidebar from "./Sidebar";
import logo from "@/app/assets/logo.jpeg";
import NextImage from "next/image";

export default function AppLayout({
    children,
    familyChildren = [],
    role = "ADMIN",
    user
}: {
    children: React.ReactNode;
    familyChildren?: any[];
    role?: "ADMIN" | "THERAPIST" | "PARENT";
    user?: any;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="h-screen overflow-hidden flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-orange-500/20 shadow-lg">
                        {/* <Receipt className="w-5 h-5 text-white" /> */}
                        <NextImage
                            src={logo}
                            alt="Wonderbees Therapy Centre Logo"
                            width={100}
                            height={100}
                            className="rounded-xl shadow-lg"
                            placeholder="blur"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none">
                            Wonderbees
                        </h1>
                        <span className="text-xs font-medium text-gray-400 tracking-wide">Therapy Centre</span>
                    </div>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar (Desktop) / Drawer (Mobile) */}
            <Sidebar
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                role={role}
                user={user}
            />

            <main className="flex-1 overflow-y-auto p-2 md:p-8 bg-gray-50/50 dark:bg-neutral-950">
                <div className="max-w-7xl mx-auto space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
