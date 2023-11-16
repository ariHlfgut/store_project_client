import { z } from "zod";

export const signUpSchema = z.object({
  full_name: z
    .string()
    .min(1, "name is required")
    .min(2, "name must be at least 2 characters")
    .max(10, "name can't be more than 10 characters"),
  email: z.string().email(),
  address: z.object({
    city: z.string().min(1, "city is required"),
    street: z.string().min(1, "street is required"),
    apartment_number: z.string().min(1, "department is required"),
  }),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
