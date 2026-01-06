import { z } from "zod";

export const CreateHolidaySchema = z.object({
    name: z.string().min(1, "Name is required"),
    date: z.string().min(1, "Date is required"), // Could add regex for YYYY-MM-DD
    description: z.string().optional(),
});
