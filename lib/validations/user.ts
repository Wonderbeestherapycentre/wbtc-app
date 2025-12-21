import { z } from "zod";

const roleEnum = z.enum(["ADMIN", "THERAPIST", "PARENT"]);

const emptyStringToNull = z.string().nullable().optional().transform(v => (v === "" || v === undefined ? null : v));

const PasswordSchema = z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters')
    .regex(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        'Password must contain at least 8 characters that includes at least 1 uppercase, 1 lowercase, 1 number and 1 special character.'
    );

export const UserSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    role: z.enum(["ADMIN", "THERAPIST", "PARENT"] as const, {
        message: "Please select a user role",
    }),
    qualification: emptyStringToNull,
    specialization: emptyStringToNull,
    mobile1: z.string().min(1, "Mobile 1 is required").regex(/^\d+$/, "Mobile number must contain only digits").min(10, "Mobile number must be at least 10 digits"),
    mobile2: z.string().optional().nullable().transform(v => (v === "" || v === undefined ? null : v)).refine(v => v === null || /^\d+$/.test(v), "Mobile number must contain only digits"),
    address: emptyStringToNull,
    doj: emptyStringToNull,
    endDate: emptyStringToNull,
});

export const CreateUserSchema = UserSchema.extend({
    password: PasswordSchema,
});

export const UpdateUserSchema = UserSchema.extend({
    password: PasswordSchema.optional().or(z.literal("")).transform(v => v === "" ? undefined : v),
});

export type UserInput = z.infer<typeof UserSchema>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
