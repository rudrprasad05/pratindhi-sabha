import { z } from "zod";

export const CreatePostSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
  category: z.string(),
});

export const CreateAdminFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export type CreatePostSchemaType = z.infer<typeof CreatePostSchema>;
export type CreateAdminSchemaType = z.infer<typeof CreateAdminFormSchema>;
