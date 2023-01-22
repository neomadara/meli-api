import { z } from "zod";

const searchAdapter = z.object({
  query: z.object({
    search: z.string({required_error: "search is required",}),
  })
});

export default searchAdapter
