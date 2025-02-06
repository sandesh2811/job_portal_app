import { z } from "zod";

export const RegisterSchema = z.object({
  username: z
    .string({ message: "Username is required" })
    .min(3, { message: "Username must be atleast 3 characters long!" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be atleast of 8 characters long!" })
    .max(15, { message: "Password cannot exceed 15 characters !" }),
  email: z.string({ message: "Email is required" }).email(),
  role: z.string({ message: "Role is required" }),
});

export type RegisterType = z.infer<typeof RegisterSchema>;
