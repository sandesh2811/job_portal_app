"use client";

import handleRegistration from "@/features/auth/utils/registerUser";

import {
  RegisterSchema,
  RegisterType,
} from "@/features/auth/schemas/RegistrationSchema";

import Button from "@/Components/UI/Button";
import TextInput from "@/Components/UI/TextInput";
import SelectOption from "@/Components/UI/SelectOption";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormBody = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });
  const router = useRouter();

  const handleUserRegistration = handleSubmit(async (data: RegisterType) => {
    await handleRegistration({ data, router });
  });

  return (
    <>
      <form onSubmit={handleUserRegistration} className="flex flex-col gap-4">
        {/* Username */}
        <TextInput
          control={control}
          name="username"
          text="Username"
          placeholder="Eg: Ram"
        />
        {/* Password */}
        <TextInput
          control={control}
          name="password"
          text="Password"
          type="password"
        />

        {/* Email */}
        <TextInput
          control={control}
          name="email"
          text="Email"
          placeholder="Eg: abc@gmail.com"
        />

        {/* Role */}
        <div className="flex flex-col gap-2">
          <span>Role</span>
          <select
            {...register("role")}
            name="role"
            className="bg-transparent border-[1px] rounded-md p-[13px]"
          >
            <SelectOption value="employer" title="Employer" />
            <SelectOption value="applier" title="Applier" />
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

export default FormBody;
