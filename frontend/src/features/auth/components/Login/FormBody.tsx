"use client";
import loginUser from "@/features/auth/utils/LoginUser";

import { AppDispatch } from "@/Store/store";

import { LoginSchema, LoginType } from "@/features/auth/schemas/LoginSchema";

import Button from "@/Components/UI/Button";
import ToastContainer from "@/Components/Toast/ToastContainer";
import TextInput from "@/Components/UI/TextInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";

const FormBody = () => {
  const { control, handleSubmit, reset } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [loginFailed, setLoginFailed] = useState<string>("");

  const handleFormSubmit = handleSubmit(async (data: LoginType) => {
    await loginUser({ data, reset, setLoginFailed, router, dispatch });
  });

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 ">
        <TextInput
          control={control}
          name="username"
          text="Username"
          placeholder="Eg: Ram"
        />

        <TextInput
          control={control}
          name="password"
          text="Password"
          type="password"
        />

        <Button buttonType="AuthButtons" size="medium">
          Login
        </Button>
      </form>

      {/* Toast Notification */}
      <ToastContainer value={loginFailed} />
    </>
  );
};

export default FormBody;
