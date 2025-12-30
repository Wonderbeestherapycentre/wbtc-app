"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import ExpenseForm from "./ExpenseForm";
import styles from "./cart.module.css";

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    expenseToEdit?: any;
    onSuccess?: () => void;
}

export default function Cart({ isOpen, onClose, children, expenseToEdit, onSuccess }: CartProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.cartBackdrop} onClick={onClose}>
            <div
                className={styles.cartContainer}
                onClick={(e) => e.stopPropagation()}
                ref={dialogRef}
            >

                <div className={styles.cartContent}>
                    <ExpenseForm
                        expense={expenseToEdit}
                        onClose={onSuccess || (() => { })}
                        onSuccess={onSuccess}
                    />
                </div>
            </div>
        </div>
    );
}
