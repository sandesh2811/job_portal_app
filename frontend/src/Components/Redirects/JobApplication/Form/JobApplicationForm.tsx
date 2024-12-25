"use client";

import postJobApplication from "@/Actions/postJobApplication";
import GetLoginData from "@/utils/Hooks/GetLoginData";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Toast from "@/Components/UI/Toast";
import { GoX } from "react-icons/go";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Zod
const JobApplicationSchema = z.object({
  fullname: z
    .string({ message: "Fullname is required" })
    .min(3, { message: "Name must be atleast 3 characters long!" }),
  phonenumber: z
    .string({ message: "Phone number is required" })
    .min(10, { message: "Phone number must be atleast of 10 digits long!" })
    .max(10, { message: "Phone number cannot exceed 10 digits!" }),
  experience: z
    .string({ message: "Experience is required" })
    .max(2, { message: "Experience cannot be more than 2 digits!" }),
  email: z.string({ message: "Email is required" }).email(),
});

export type JobApplicationType = z.infer<typeof JobApplicationSchema>;

const JobApplicationForm = ({ params }: JobProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<JobApplicationType>({
    resolver: zodResolver(JobApplicationSchema),
    mode: "onChange",
  });
  const [applicationRes, setapplicationRes] = useState<string>("");
  const router = useRouter();

  const { loginData } = GetLoginData();

  const handleApplicationSubmit: SubmitHandler<JobApplicationType> = async (
    data
  ) => {
    const { id } = await params;
    const res = await postJobApplication(id, data, loginData.userId);

    setapplicationRes(res.message);
    setTimeout(() => {
      setapplicationRes("");
    }, 2000);
    reset();

    if (res.success) {
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleApplicationSubmit)}
        action="#"
        className="flex flex-col gap-4 mid:w-[500px]"
      >
        <div className="flex flex-col gap-2">
          <span>Full Name</span>
          <Input {...register("fullname")} name="fullname" type="string" />
          {errors.fullname && (
            <span className="text-sm text-red-600">
              {errors.fullname.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span>Phone Number</span>
          <Input
            {...register("phonenumber")}
            name="phonenumber"
            type="string"
          />
          {errors.phonenumber && (
            <span className="text-sm text-red-600">
              {errors.phonenumber.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span>Experience</span>
          <Input {...register("experience")} name="experience" type="string" />
          {errors.experience && (
            <span className="text-sm text-red-600">
              {errors.experience.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span>Email</span>
          <Input {...register("email")} name="email" type="string" />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>

      <div
        className={
          applicationRes !== ""
            ? "absolute bottom-12 mid:right-10 right-2"
            : "hidden absolute bottom-12 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{applicationRes}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </>
  );
};

export default JobApplicationForm;
