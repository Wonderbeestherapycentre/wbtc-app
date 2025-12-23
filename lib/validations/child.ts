import { z } from "zod";

export const ChildSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
    dob: z.string().min(1, "Date of birth is required").refine((val) => {
        const date = new Date(val);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        return date <= today;
    }, "Date of birth cannot be in the future"),
    gender: z.string().min(1, "Gender is required"),
    diagnosis: z.string().optional().nullable(),
    parentId: z.string().optional().nullable().transform(v => v === "" ? null : v),
    therapies: z.array(z.object({
        therapyId: z.string().min(1, "Therapy ID is required"),
        therapistId: z.string().min(1, "Therapist is required for selected therapy").nullable(),
        feePerSession: z.string().nullable().optional(),
    })).min(1, "At least one therapy must be assigned").refine(
        (therapies) => therapies.every(t => t.therapistId !== null && t.therapistId !== ""),
        { message: "All selected therapies must have a therapist assigned" }
    )
});

export type ChildFormValues = z.infer<typeof ChildSchema>;
