import { z } from "zod";

/**
 * The one password policy for every place a password is set: registration,
 * admin-created users, profile change, admin reset, forgot-password reset and
 * the mobile app. (Login does NOT use this, so older passwords still sign in.)
 *
 * Rules: at least 8 characters, 1 uppercase, 1 lowercase, 1 special character.
 * Keep wbtc-mobile-app/src/utils/password.ts in sync with this file.
 */
export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_RULE_MESSAGE =
    "Password must be at least 8 characters and include 1 uppercase letter, 1 lowercase letter and 1 special character.";

/** Individual rules, used by the live checklist (components/auth/PasswordRequirements). */
export const PASSWORD_RULES: { id: string; label: string; test: (password: string) => boolean }[] = [
    { id: "length", label: `At least ${PASSWORD_MIN_LENGTH} characters`, test: (p) => p.length >= PASSWORD_MIN_LENGTH },
    { id: "upper", label: "1 uppercase letter", test: (p) => /[A-Z]/.test(p) },
    { id: "lower", label: "1 lowercase letter", test: (p) => /[a-z]/.test(p) },
    { id: "special", label: "1 special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
];

/** Returns an error message, or null when the password meets the policy. */
export function validatePassword(password: string): string | null {
    return PASSWORD_RULES.every((rule) => rule.test(password)) ? null : PASSWORD_RULE_MESSAGE;
}

export const PasswordSchema = z
    .string()
    .min(1, "Password is required")
    .refine((v) => validatePassword(v) === null, PASSWORD_RULE_MESSAGE);
