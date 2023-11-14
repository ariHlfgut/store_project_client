import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "name is required")
      .min(2, "name must be at list 2 characters")
      .max(10, "name cant be more then 10 characters"),
    email: z.string().email(),
    city: z.string().min(1, "city is required"),
    street: z.string().min(1, "street is required"),
    departmentNumber: z.string().min(1, "department is required"),
    password: z.string().min(5, "Password must be at least 10 characters"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
