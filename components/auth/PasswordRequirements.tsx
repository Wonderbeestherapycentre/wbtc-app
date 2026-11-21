"use client";

import { Check, X } from "lucide-react";
import { PASSWORD_RULES } from "@/lib/validations/password";

// Live checklist shown under a "new password" field
export default function PasswordRequirements({ password }: { password: string }) {
    return (
        <ul className="grid grid-cols-1 gap-0.5 text-[11px]">
            {PASSWORD_RULES.map((rule) => {
                const ok = rule.test(password);
                return (
                    <li key={rule.id} className={`flex items-center gap-1.5 ${ok ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}>
                        {ok ? <Check className="w-3 h-3 shrink-0" /> : <X className="w-3 h-3 shrink-0" />}
                        {rule.label}
                    </li>
                );
            })}
        </ul>
    );
}
