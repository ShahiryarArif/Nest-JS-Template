import { z } from "zod";

export const createPropertySchema = z
.object({
  name: z.string(),
  description: z.string().min(5),
  price: z.number().default(0),
})
.required();

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;