import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string({ message: "User name is required" })
    .min(3, { message: "User name must be atleast 3 characters long!" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be atleast of 8 characters long!" })
    .max(15, { message: "Password cannot exceed 15 characters !" }),
});

export type LoginType = z.infer<typeof LoginSchema>;
