import { z } from "zod";

export const uploadSchema = z.object({
  title: z
    .string()
    .min(20, "Title must be at least 20 chars long")
    .max(50, "Title shoudn't be more than 50 chars"),
  description: z.string(),
  tags: z.string(),
  image: z.instanceof(File).refine((file) => file.type === "image/png", {
    message: "File must be a PNG image",
  }),
});

export type UploadSchema = z.infer<typeof uploadSchema>;
