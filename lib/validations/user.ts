import { z } from "zod";
import { PasswordSchema } from "./password";

const roleEnum = z.enum(["ADMIN", "THERAPIST", "PARENT", "ATTENDER"]);

const emptyStringToNull = z.string().nullable().optional().transform(v => (v === "" || v === undefined ? null : v));

export const UserSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    role: z.enum(["ADMIN", "THERAPIST", "PARENT", "ATTENDER"] as const, {
        message: "Please select a user role",
    }),
    qualification: emptyStringToNull,
    specialization: emptyStringToNull,
    mobile1: z.string().min(1, "Mobile 1 is required").regex(/^\d+$/, "Mobile number must contain only digits").min(10, "Mobile number must be at least 10 digits"),
    mobile2: z.string().optional().nullable().transform(v => (v === "" || v === undefined ? null : v)).refine(v => v === null || /^\d+$/.test(v), "Mobile number must contain only digits"),
    address: emptyStringToNull,
    doj: emptyStringToNull.refine((val) => {
        if (!val) return true;
        const date = new Date(val);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        return date <= today;
    }, "Date of joining cannot be in the future"),
    endDate: emptyStringToNull,
    status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

export const CreateUserSchema = UserSchema.extend({
    password: PasswordSchema.optional().or(z.literal("")).transform(v => v === "" ? undefined : v),
});

export const UpdateUserSchema = UserSchema.extend({
    password: PasswordSchema.optional().or(z.literal("")).transform(v => v === "" ? undefined : v),
});

export type UserInput = z.infer<typeof UserSchema>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
