"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, User as UserIcon, LogOut } from "lucide-react";
import { useState } from "react";
import { signOutAction } from "@/lib/actions";
import { useRouter } from "next/navigation";

interface UserSwitcherProps {
    user?: {
        name: string;
        email: string;
        color?: string | null;
    } | null;
}

export default function UserSwitcher({ user }: UserSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    if (!user) return null;

    const initials = user.name ? user.name[0] : "?";

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center w-full p-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl hover:shadow-md transition-all duration-200"
            >
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm"
                    style={{ backgroundColor: user.color || "#3b82f6" }}
                >
                    {initials}
                </div>
                <div className="ml-3 text-left flex-1">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Current User</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-[120px]">{user.name}</p>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-1 border-t border-gray-100 dark:border-neutral-700 mt-1 space-y-1">
                        <button
                            onClick={() => {
                                router.push('/profile');
                                setIsOpen(false);
                            }}
                            className="flex items-center w-full p-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <UserIcon className="w-4 h-4 mr-3" />
                            My Profile
                        </button>
                        <button
                            onClick={() => signOutAction()}
                            className="flex items-center w-full p-2 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            <LogOut className="w-4 h-4 mr-3" />
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
