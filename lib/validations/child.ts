import { z } from "zod";

export const ChildSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
    dob: z.string().min(1, "Date of birth is required"),
    gender: z.string().min(1, "Gender is required"),
    diagnosis: z.string().optional().nullable(),
    parentId: z.string().min(1, "Parent is required"),
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
