"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";

interface Option {
    value: string;
    label: string;
}

interface SearchableDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export default function SearchableDropdown({
    options,
    value,
    onChange,
    placeholder = "Select...",
    label,
    icon,
    className = "",
    disabled = false
}: SearchableDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    const filteredOptions = options.filter(opt =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (!isOpen) {
            setSearchTerm("");
        }
    }, [isOpen]);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={`flex items-center gap-2 bg-gray-50 dark:bg-neutral-800/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-neutral-700 min-w-[180px] w-full justify-between text-left transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    {icon && <span className="text-gray-400 flex-shrink-0">{icon}</span>}
                    <div className="flex flex-col">
                        {label && <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{label}</span>}
                        <span className={`text-xs font-bold truncate ${selectedOption ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500'}`}>
                            {selectedOption ? selectedOption.label : placeholder}
                        </span>
                    </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full min-w-[220px] bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    {/* Search Input */}
                    <div className="p-2 border-b border-gray-50 dark:border-neutral-800">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full bg-gray-50 dark:bg-neutral-800 rounded-lg pl-8 pr-3 py-1.5 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Options List */}
                    <div className="max-h-[240px] overflow-y-auto custom-scrollbar p-1">
                        {/* Static Options (like 'All' or 'Unassigned') could be passed as props or part of options array */}

                        {filteredOptions.length === 0 ? (
                            <div className="px-3 py-4 text-center">
                                <p className="text-xs text-gray-400">No results found</p>
                            </div>
                        ) : (
                            filteredOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group ${value === option.value
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    {option.label}
                                    {value === option.value && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
