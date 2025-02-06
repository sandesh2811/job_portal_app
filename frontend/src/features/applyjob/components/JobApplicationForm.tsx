"use client";

import CheckIdType from "@/utils/CheckIdType";
import handleJobApplicationSubmit from "@/features/applyjob/utils/handleJobApplicationSubmit";
import GetLoginData from "@/utils/GetLoginData";

import JobApplicationSchema, {
  JobApplicationType,
} from "@/features/applyjob/schemas/JobApplicationSchema";

import Button from "@/Components/UI/Button";
import TextInput from "@/Components/UI/TextInput";
import ToastContainer from "@/Components/Toast/ToastContainer";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useParams, useRouter } from "next/navigation";

const JobApplicationForm = () => {
  const { control, handleSubmit, reset } = useForm<JobApplicationType>({
    resolver: zodResolver(JobApplicationSchema),
    mode: "onChange",
  });
  const [applicationRes, setapplicationRes] = useState<string>("");

  const router = useRouter();
  const { id } = useParams();

  // Check if the type of id is string or not
  const jobId = CheckIdType(id);

  // Get the user login data
  const { loginData } = GetLoginData();
  // Extract the userid from the user login data
  const userId = loginData.userId;

  const handleFormSubmit = handleSubmit(async (data) => {
    await handleJobApplicationSubmit({
      data,
      jobId,
      router,
      setapplicationRes,
      userId,
      reset,
    });
  });

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        action="#"
        className="flex flex-col gap-4 mid:w-[500px]"
      >
        <TextInput control={control} name="fullname" text="Full Name" />
        <TextInput control={control} name="phonenumber" text="Phone Number" />
        <TextInput control={control} name="experience" text="Experience" />
        <TextInput control={control} name="email" text="Email" />
        <TextInput control={control} name="file" text="CV" type="file" />
        <Button type="submit">Submit</Button>
      </form>

      {/* Toast Notification */}
      <ToastContainer value={applicationRes} />
    </>
  );
};

export default JobApplicationForm;
