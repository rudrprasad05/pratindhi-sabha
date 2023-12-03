import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
  category: z.string().min(3),
});

export const CreateAdminFormSchema = z.object({
  email: z.string().min(4),
  password: z.string().min(4),
  confirmPassword: z.string().min(4),
});
// .superRefine(({ confirmPassword, password }, ctx) => {
//   if (confirmPassword !== password) {
//     ctx.addIssue({
//       code: "custom",
//       message: "The passwords did not match",
//     });
//   }
// });

export type formSchemaType = z.infer<typeof formSchema>;
export type CreateAdminFormSchemaType = z.infer<typeof formSchema>;
