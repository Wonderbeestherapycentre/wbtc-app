import { z } from "zod";

export const GoalSchema = z.object({
    title: z.string().min(1, "Title is required"),
    childId: z.string().min(1, "Child is required"),
    therapyId: z.string().min(1, "Therapy is required"),
    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid start date",
    }),
    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid end date",
    }),
    objectives: z.string().min(1, "At least one objective is required"), // Validates the JSON string is not empty
    status: z.enum(["IN_PROGRESS", "COMPLETED", "ARCHIVED"]).default("IN_PROGRESS"),
});

export const UpdateGoalSchema = GoalSchema.partial().extend({
    id: z.string().min(1, "Goal ID is required"),
});
