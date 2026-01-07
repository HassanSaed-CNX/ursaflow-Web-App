import { z } from "zod";

export const workOrderSchema = z.object({
  id: z.string().min(4),
  line: z.enum([
    "Cylinders",
    "Pumps",
    "Motors",
    "Valves",
    "Manifolds",
    "HPUs",
    "Hose & Fittings"
  ]),
  status: z.enum(["Planned", "In Progress", "Hold", "Complete"]),
  dueDate: z.string().min(8)
});

export const notificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  severity: z.enum(["info", "warning", "critical"]),
  role: z.string(),
  action: z.enum(["Approve", "Reject", "Rework", "Acknowledge"]),
  woId: z.string()
});

export type WorkOrder = z.infer<typeof workOrderSchema>;
export type NotificationItem = z.infer<typeof notificationSchema>;
