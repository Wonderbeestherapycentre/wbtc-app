import { z } from "zod";

export const HomeProgramTaskSchema = z.object({
    description: z.string().min(1, "Task description is required"),
    status: z.enum(["PENDING", "COMPLETED", "IN_PROGRESS", "BORED", "REFUSED"]).default("PENDING"),
});

export const HomeProgramSchema = z.object({
    childId: z.string().uuid("Invalid child ID"),
    therapyId: z.string().uuid("Invalid therapy ID"),
    title: z.string().min(1, "Program title is required"),
    tasks: z.array(HomeProgramTaskSchema).min(1, "At least one task is required"),
    status: z.enum(["ACTIVE", "INACTIVE", "COMPLETED"]).default("ACTIVE"),
});

export const UpdateHomeProgramSchema = HomeProgramSchema.partial().extend({
    id: z.string().uuid("Invalid program ID"),
});
