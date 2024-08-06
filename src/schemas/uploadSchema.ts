import { any, z } from "zod";

export const uploadSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 20 chars long")
    .max(50, "Title shoudn't be more than 50 chars"),
  description: z.string(),
  tags: z.string(),
  image: z.unknown().transform(value => {
    return value as FileList
  }).refine((files: FileList) => {
    console.log("type: "+ files[0].type);
    return files[0].type === 'image/png'
  }),
});

export type UploadSchema = z.infer<typeof uploadSchema>;
