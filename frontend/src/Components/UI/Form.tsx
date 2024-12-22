"use client";

import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import userLogin from "@/Actions/userLogin";
import { useRouter } from "next/navigation";

// Zod
const LoginSchema = z.object({
  username: z
    .string({ message: "User name is required" })
    .min(3, { message: "User name must be atleast 3 characters long!" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be atleast of 8 characters long!" })
    .max(15, { message: "Password cannot exceed 15 characters !" }),
});

export type LoginType = z.infer<typeof LoginSchema>;

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });
  const router = useRouter();

  const loginUser: SubmitHandler<LoginType> = async (data: LoginType) => {
    const res = await userLogin(data);
    const { userData } = res;

    if (res.success) {
      localStorage.setItem("userData", JSON.stringify(userData));
      router.push("/");
      reset();
    } else {
      console.log("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(loginUser)} className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <span className="font-medium">Username</span>
        <Input
          {...register("username")}
          type="text"
          name="username"
          placeholder="eg: Ram"
        />
        {errors.username && (
          <span className="text-sm text-red-600">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Password</span>
        <Input {...register("password")} type="password" name="password" />
        {errors.password && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button buttonType="AuthButtons" size="medium">
        Login
      </Button>
    </form>
  );
};

export default Form;
