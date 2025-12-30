"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, IndianRupee, Tags, Users, Plus, X, Baby, Clock, Heart, Calendar, FileText, Home, ChevronLeft, ChevronRight, ChevronDown, Clipboard as ClipboardIcon, History as HistoryIcon } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assets/logo.jpeg";

import { cn } from "@/lib/utils";
import Link from "next/link";


interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    role?: "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
    user?: any;
}

export default function Sidebar({ isOpen, onClose, role = "ADMIN", user }: SidebarProps) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [collapsedSections, setCollapsedSections] = React.useState<Record<string, boolean>>({
        "FinTrack": true,
        "Management": true
    });

    const toggleSection = (label: string) => {
        setCollapsedSections(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const ADMIN_NAV = [
        {
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
                { icon: Calendar, label: "Schedule", href: "/schedule" },
                { icon: ClipboardIcon, label: "Attendance", href: "/attendance" },
                { icon: Home, label: "Home Programs", href: "/home-programs" },
            ]
        },
        {
            label: "FinTrack",
            items: [
                { icon: LayoutDashboard, label: "Caseload", href: "/caseload" },
                { icon: IndianRupee, label: "Income / Expense", href: "/income-expense" },
                { icon: IndianRupee, label: "Fee Reports", href: "/fees" },
            ]
        },
        {
            label: "Management",
            items: [
                { icon: ClipboardIcon, label: "Staff Attendance", href: "/staff-attendance" },
                { icon: Baby, label: "Childrens", href: "/childrens" },
                { icon: Tags, label: "Goals", href: "/goals" },
                { icon: FileText, label: "Session Notes", href: "/session-notes" },
                { icon: Users, label: "Users", href: "/users" },
                { icon: Heart, label: "Services", href: "/therapies" },
            ]
        }
    ];

    const THERAPIST_NAV = [
        {
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
                { icon: Home, label: "Home Programs", href: "/home-programs" },
                { icon: Calendar, label: "Schedule", href: "/schedule" },
                { icon: ClipboardIcon, label: "Attendance", href: "/attendance" },
                { icon: Baby, label: "Childrens", href: "/childrens" },
                { icon: Tags, label: "Goals", href: "/goals" },
                { icon: FileText, label: "Session Notes", href: "/session-notes" },
            ]
        }
    ];

    const PARENT_NAV = [
        {
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
                { icon: Home, label: "Home Programs", href: "/home-programs" },
                { icon: Calendar, label: "Schedule", href: "/schedule" },
                { icon: Baby, label: "Childrens", href: "/childrens" },
                { icon: Tags, label: "Goals", href: "/goals" },
                { icon: FileText, label: "Session Notes", href: "/session-notes" },
            ]
        }
    ];

    const ATTENDER_NAV = [
        {
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
                { icon: ClipboardIcon, label: "Staff Attendance", href: "/staff-attendance" },
            ]
        }
    ];

    let navGroups = ADMIN_NAV;
    if (role === "THERAPIST") navGroups = THERAPIST_NAV;
    if (role === "PARENT") navGroups = PARENT_NAV;
    if (role === "ATTENDER") navGroups = ATTENDER_NAV;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-md transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 bg-gray-100 dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 transform transition-all duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    isCollapsed ? "md:w-20" : "md:w-64"
                )}
            >
                <div className="flex flex-col h-full relative">
                    {/* Toggle Button (Desktop Only) */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex absolute -right-3 top-9 z-[60] bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-full p-1 shadow-md hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                        {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
                    </button>

                    <div className="flex flex-col h-full overflow-hidden">
                        {/* Header */}
                        <div className={cn("flex items-center justify-between transition-all duration-300", isCollapsed ? "p-4 justify-center" : "p-6 pb-2")}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                    <Image
                                        src={logo}
                                        alt="Wonderbees Logo"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>
                                <div className={cn("transition-all duration-300 overflow-hidden", isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>
                                    <h1 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none whitespace-nowrap">
                                        Wonderbees
                                    </h1>
                                    <span className="text-xs font-medium text-gray-400 tracking-wide whitespace-nowrap">Therapy Centre</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto custom-scrollbar mt-4">
                            {!isCollapsed && <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2 transition-opacity duration-300">Menu</p>}

                            {navGroups.map((group, groupIndex) => {
                                const isSectionCollapsed = group.label ? collapsedSections[group.label] : false;

                                return (
                                    <div key={`group-${groupIndex}`} className="mb-4">
                                        {group.label && (
                                            !isCollapsed ? (
                                                <button
                                                    onClick={() => toggleSection(group.label!)}
                                                    className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                >
                                                    <span>{group.label}</span>
                                                    {isSectionCollapsed ? (
                                                        <ChevronRight className="w-3 h-3" />
                                                    ) : (
                                                        <ChevronDown className="w-3 h-3" />
                                                    )}
                                                </button>
                                            ) : (
                                                <div className="my-2 h-px bg-gray-200 dark:bg-neutral-800 mx-2" title={group.label} />
                                            )
                                        )}

                                        <div className={cn(
                                            "space-y-1.5 transition-all duration-300 ease-in-out",
                                            group.label && isSectionCollapsed && !isCollapsed ? "max-h-0 overflow-hidden opacity-0" : "max-h-[500px] opacity-100"
                                        )}>
                                            {group.items.map((item: any) => {
                                                const isActive = pathname === item.href;
                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        title={isCollapsed ? item.label : ""}
                                                        className={cn(
                                                            "group flex items-center w-full rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden",
                                                            isCollapsed ? "justify-center p-2.5" : "px-4 py-2.5",
                                                            isActive
                                                                ? "text-blue-600 bg-blue-50 dark:bg-blue-900/10"
                                                                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-gray-200"
                                                        )}
                                                    >
                                                        {isActive && (
                                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
                                                        )}
                                                        <item.icon className={cn(
                                                            "w-5 h-5 transition-colors flex-shrink-0",
                                                            isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300",
                                                            !isCollapsed && "mr-3"
                                                        )} />
                                                        <span className={cn("transition-all duration-300 overflow-hidden whitespace-nowrap", isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100")}>
                                                            {item.label}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    );
}
