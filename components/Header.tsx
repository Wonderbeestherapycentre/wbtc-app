"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, Menu, User, LogOut, Settings, ChevronDown } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo.png";

interface HeaderProps {
    user?: any;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ user, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [greeting, setGreeting] = useState("Welcome back");
    const [unreadCount, setUnreadCount] = useState(0);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 4 && hour < 12) setGreeting("Good Morning");
        else if (hour >= 12 && hour < 17) setGreeting("Good Afternoon");
        else if (hour >= 17 || hour < 4) setGreeting("Good Evening");
    }, []);

    useEffect(() => {
        let active = true;
        const fetchCount = async () => {
            try {
                const res = await fetch("/api/notifications/count");
                if (!res.ok) return;
                const data = await res.json();
                if (active) setUnreadCount(data.count || 0);
            } catch { }
        };
        fetchCount();
        const interval = setInterval(fetchCount, 30000);
        return () => {
            active = false;
            clearInterval(interval);
        };
    }, []);

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

    // Only one panel open at a time — the last clicked wins.
    const handleMobileMenuToggle = () => {
        setIsProfileOpen(false);
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => {
            const next = !prev;
            if (next) setMobileMenuOpen(false);
            return next;
        });
    };

    return (
        <header className="bg-gradient-to-r from-amber-50/70 via-white to-sky-50/70 dark:bg-neutral-900 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 border-b border-amber-100 dark:border-neutral-800 h-16 px-4 flex items-center justify-between sticky top-0 z-40">
            {/* Left Side: Mobile Menu Toggle & Brand (Mobile only) / Breadcrumbs (Desktop) */}
            <div className="flex items-center gap-4">
                <button
                    onClick={handleMobileMenuToggle}
                    className="p-2 -ml-2 rounded-lg hover:bg-amber-50 dark:hover:bg-neutral-800 md:hidden text-gray-600 dark:text-gray-300"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Mobile Brand */}
                <div className="md:hidden flex items-center gap-2">
                    <div className="relative w-7 h-7 shrink-0">
                        <NextImage src={logo} alt="WonderBees Logo" fill className="object-contain" placeholder="blur" />
                    </div>
                    <span className="font-bold text-lg tracking-tight leading-none">
                        <span className="text-amber-500">Wonder</span>
                        <span className="text-blue-900">Bees</span>
                    </span>
                </div>

                {/* Desktop Welcome/Context - Optional */}
                <div className="hidden md:block">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {greeting}, <span className="text-amber-600">{user?.name?.split(' ')[0] || 'User'}</span>
                    </h2>
                </div>
            </div>

            {/* Right Side: Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <Link
                    href="/notifications"
                    className="p-2 rounded-full hover:bg-amber-50 dark:hover:bg-neutral-800 text-gray-500 hover:text-amber-600 relative transition-colors"
                >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white dark:border-neutral-900">
                            {unreadCount > 99 ? "99+" : unreadCount}
                        </span>
                    )}
                </Link>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={handleProfileToggle}
                        className="flex items-center gap-3 p-1.5 rounded-full hover:bg-amber-50 dark:hover:bg-neutral-800 transition-colors border border-transparent hover:border-amber-200 dark:hover:border-neutral-700"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-blue-950 font-semibold shadow-md shadow-amber-400/30">
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
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-amber-100 dark:border-neutral-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="px-4 py-2 border-b border-amber-100 dark:border-neutral-800 md:hidden">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role?.toLowerCase()}</p>
                            </div>

                            <div className="py-1">
                                <Link
                                    href="/profile"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-neutral-800 hover:text-amber-700"
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
