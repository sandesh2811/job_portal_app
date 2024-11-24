import z from "zod";

const LoginSchema = z.object({
  username: z
    .string({ required_error: "Usename cannot be empty!" })
    .min(3, { message: "Username must be atleast 3 characters!" })
    .max(15, { message: "Username cannot exceed 15 characters!" })
    .trim(),
  password: z
    .string({ required_error: "Password cannot be empty!" })
    .min(8, { message: "Password must be atleast 3 characters!" })
    .max(15, { message: "Password cannot exceed 15 characters!" })
    .trim(),
});

export default LoginSchema;
