import { z } from "zod";

export const NotificationSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters").max(200),
    description: z.string().min(1, "Description is required"),
    recipientIds: z.array(z.string().uuid()).min(1, "Select at least one recipient"),
});

export type NotificationInput = z.infer<typeof NotificationSchema>;
