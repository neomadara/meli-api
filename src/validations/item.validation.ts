import { z } from "zod";

export const getItemsSchema = z.object({
  query: z.object({
    q: z.string({required_error: "q is required",}).min(1, {message: 'q is empty'}),
  })
});

