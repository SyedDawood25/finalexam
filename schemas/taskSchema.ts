import { z } from "zod"
 
export const TaskSchema = z.object({
  title: z.string().min(2).max(50),
})