"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, Menu, User, LogOut, Settings, ChevronDown } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
    user?: any;
    onMobileMenuToggle: () => void;
}

export default function Header({ user, onMobileMenuToggle }: HeaderProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        router.push("/api/auth/force-signout");
    };

    return (
        <header className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 h-16 px-4 flex items-center justify-between sticky top-0 z-40">
            {/* Left Side: Mobile Menu Toggle & Brand (Mobile only) / Breadcrumbs (Desktop) */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMobileMenuToggle}
                    className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 md:hidden text-gray-600 dark:text-gray-300"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Mobile Brand */}
                <div className="md:hidden flex items-center gap-2">
                    <span className="font-bold text-lg bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                        Wonderbees
                    </span>
                </div>

                {/* Desktop Welcome/Context - Optional */}
                <div className="hidden md:block">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Welcome back, {user?.name?.split(' ')[0] || 'User'}
                    </h2>
                </div>
            </div>

            {/* Right Side: Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-3 p-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-neutral-700"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white font-medium shadow-md">
                            {user?.name?.[0]?.toUpperCase() || <User className="w-4 h-4" />}
                        </div>
                        <div className="hidden md:block text-left mr-1">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-200 max-w-[150px] truncate">
                                {user?.name || "User"}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                {user?.role?.toLowerCase() || "Guest"}
                            </p>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 hidden md:block ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="px-4 py-2 border-b border-gray-100 dark:border-neutral-800 md:hidden">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role?.toLowerCase()}</p>
                            </div>

                            <div className="py-1">
                                <Link
                                    href="/profile"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800"
                                >
                                    <User className="w-4 h-4" />
                                    Profile Settings
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
