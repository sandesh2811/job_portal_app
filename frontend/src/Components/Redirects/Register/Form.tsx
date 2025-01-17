"use client";

import RegisterNewUser from "@/Actions/HandleRegistration/RegisterNewUser";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RegisterSchema = z.object({
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

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });
  const router = useRouter();

  const handleRegistration = async (data: RegisterType) => {
    const response = await RegisterNewUser(data);
    if (response.success) {
      router.push("/login");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="flex flex-col gap-4"
      >
        {/* Username */}
        <div className="flex flex-col gap-2">
          <span className="font-medium">Username</span>
          <Input
            {...register("username")}
            type="text"
            name="username"
            placeholder="eg: Ram"
            autoComplete="off"
          />
          {errors.username && (
            <span className="text-sm text-red-600">
              {errors.username.message}
            </span>
          )}
        </div>
        {/* Password */}
        <div className="flex flex-col gap-2">
          <span className="font-medium">Password</span>
          <Input
            {...register("password")}
            type="password"
            name="password"
            autoComplete="off"
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2">
          <span className="font-medium">Email</span>
          <Input
            {...register("email")}
            type="string"
            name="email"
            autoComplete="off"
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>
        {/* Role */}
        <div className="flex flex-col gap-2">
          <span>Role</span>
          <select
            {...register("role")}
            name="role"
            className="bg-transparent border-[1px] rounded-md p-[13px]"
          >
            <option value="employer" className="text-background">
              Employer
            </option>
            <option value="applier" className="text-background">
              Applier
            </option>
          </select>
          {errors.role && (
            <span className="text-sm text-red-600">{errors.role.message}</span>
          )}
        </div>
        <Button buttonType="AuthButtons" size="medium">
          Register
        </Button>
      </form>
    </>
  );
};

export default Form;
