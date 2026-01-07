"use server";

import { workOrderSchema } from "@ursaflow/schemas";

export const createWorkOrder = async (formData: FormData) => {
  const payload = workOrderSchema.parse({
    id: String(formData.get("id")),
    line: formData.get("line"),
    status: formData.get("status"),
    dueDate: String(formData.get("dueDate"))
  });

  return { ok: true, workOrder: payload };
};
