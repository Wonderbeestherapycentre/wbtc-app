"use client";

import { Plus } from "lucide-react";

export default function AddExpenseButton({ onOpenCart }: { onOpenCart: () => void }) {
    return (
        <button
            onClick={onOpenCart}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 flex items-center gap-2"
        >
            <Plus className="w-4 h-4" />
            Add Expense
        </button>
    );
}
