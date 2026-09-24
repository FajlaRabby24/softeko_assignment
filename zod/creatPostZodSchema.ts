import { z } from "zod";

export const createPostZodSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(120, "Title must be 120 characters or less"),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required")
    .max(160, "Slug must be 160 characters or less")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can only use lowercase letters, numbers, and hyphens",
    ),
  content: z.string().trim().min(1, "Content is required"),
  published: z.boolean().default(false),
});

export type CreatePostInput = z.infer<typeof createPostZodSchema>;
