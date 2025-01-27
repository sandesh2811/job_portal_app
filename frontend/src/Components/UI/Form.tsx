"use client";

// import userLogin from "@/Actions/userLogin";

import { AppDispatch } from "@/Store/store";
import { getLoginData } from "@/Store/Features/userLoginState";

import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";
import Toast from "./Toast";
import { GoX } from "react-icons/go";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

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

const userLogin = async (data: LoginType) => {
  const { username, password } = data;

  try {
    const postToDatabase = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await postToDatabase.json();
    return responseData;
  } catch (error) {
    console.log("Error:", error);
  }
};

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
  const dispatch: AppDispatch = useDispatch();
  const [loginFailed, setLoginFailed] = useState<string>("");

  const loginUser: SubmitHandler<LoginType> = async (data: LoginType) => {
    const res = await userLogin(data);
    const { userData } = res;

    if (res.success) {
      dispatch(getLoginData(userData));
      router.push("/");
      reset();
    } else {
      setLoginFailed(res.message);
      let timerId = setTimeout(() => {
        setLoginFailed("");
        clearTimeout(timerId);
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)} className="flex flex-col gap-4 ">
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
        <Button buttonType="AuthButtons" size="medium">
          Login
        </Button>
      </form>

      {/* Toast Notification */}
      <div
        className={
          loginFailed !== ""
            ? "absolute top-5 mid:right-10 right-2"
            : "hidden absolute top-12 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{loginFailed}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </>
  );
};

export default Form;
