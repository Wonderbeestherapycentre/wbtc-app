"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchInput({ placeholder = "Search..." }: { placeholder?: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [text, setText] = useState(searchParams.get("search")?.toString() || "");
    const [query] = useDebounce(text, 500);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set("search", query);
            params.set("page", "1"); // Reset to page 1 on new search
        } else {
            params.delete("search");
        }
        replace(`${pathname}?${params.toString()}`);
    }, [query, pathname, replace, searchParams]);

    const handleClear = () => {
        setText("");
    };

    return (
        <div className="relative w-full max-w-sm group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="block w-full pl-10 pr-10 py-2 border border-gray-100 dark:border-neutral-800 rounded-xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                placeholder={placeholder}
            />
            {text && (
                <button
                    onClick={handleClear}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
