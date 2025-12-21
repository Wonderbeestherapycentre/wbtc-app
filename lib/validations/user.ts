import { z } from "zod";

const roleEnum = z.enum(["ADMIN", "THERAPIST", "PARENT"]);

export const UserSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    role: roleEnum.default("PARENT"),
    qualification: z.string().nullable().optional(),
    specialization: z.string().nullable().optional(),
    mobile1: z.string().nullable().optional(),
    mobile2: z.string().nullable().optional(),
    address: z.string().nullable().optional(),
    doj: z.string().nullable().optional(),
    endDate: z.string().nullable().optional(),
});

export const CreateUserSchema = UserSchema.extend({
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UpdateUserSchema = UserSchema.extend({
    password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal("")),
});

export type UserInput = z.infer<typeof UserSchema>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
