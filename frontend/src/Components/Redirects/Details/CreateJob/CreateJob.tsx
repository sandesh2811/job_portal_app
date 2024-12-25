"use client";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Toast from "@/Components/UI/Toast";
import { GoX } from "react-icons/go";

import postNewJob from "@/Actions/Create Job/postNewJob";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import GetLoginData from "@/utils/Hooks/GetLoginData";

const CreateJobSchema = z.object({
  title: z
    .string({ message: "Job title is required!" })
    .min(5, { message: "Job title cannot be less than 5 characters!" })
    .max(25, { message: "Job title cannot exceed 25 characters!" }),
  description: z
    .string({ message: "Job description is required!" })
    .min(20, { message: "Job description cannot be less than 20 characters!" })
    .max(300, { message: "Job description cannot exceed 300 characters!" }),
  salary: z
    .string({ message: "Salary is required!" })
    .min(4, { message: "Salary cannot be less than 4 characters!" })
    .max(50, { message: "Salary cannot exceed 50 characters!" }),
  required: z
    .string({ message: "Number of required employee is required!" })
    .min(1, {
      message: "Number of required employee cannot be less than 1 characters!",
    })
    .max(3, {
      message: "Number of required employee cannot exceed 3 characters!",
    }),
  experience: z
    .string({ message: "Experience is required!" })
    .min(1, { message: "Experience cannot be less than 1 characters!" })
    .max(2, { message: "Experience cannot exceed 2 characters!" }),
  position: z
    .string({ message: "Position is required!" })
    .min(5, { message: "Position cannot be less than 5 characters!" })
    .max(20, { message: "Position cannot exceed 20 characters!" }),
  status: z
    .string({ message: "Status is required!" })
    .min(5, { message: "Status cannot be less than 5 characters!" })
    .max(20, { message: "Status cannot exceed 20 characters!" }),
  companyName: z
    .string({ message: "Company name is required!" })
    .min(5, { message: "Company name cannot be less than 5 characters!" })
    .max(20, { message: "Company name cannot exceed 20 characters!" }),
  location: z
    .string({ message: "Location is required!" })
    .min(4, { message: "Location cannot be less than 5 characters!" })
    .max(25, { message: "Location cannot exceed 20 characters!" }),
});

export type CreateJobType = z.infer<typeof CreateJobSchema>;

const CreateJob = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateJobType>({
    resolver: zodResolver(CreateJobSchema),
    mode: "onChange",
  });

  const [jobCreationRes, setjobCreationRes] = useState<string>("");

  const { loginData } = GetLoginData();
  const { userId } = loginData;

  const handleJobCreation: SubmitHandler<CreateJobType> = async (
    formData: CreateJobType
  ) => {
    const response = await postNewJob(formData, userId);
    setjobCreationRes(response.message);
    setTimeout(() => {
      setjobCreationRes("");
    }, 2000);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleJobCreation)}
        className="flex flex-col gap-4"
      >
        {/* Job title and location */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Job Title</span>
            <Input {...register("title")} name="title" type="string" />
            {errors.title && (
              <span className="text-sm text-red-600">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Location</span>
            <Input {...register("location")} name="location" type="string" />
            {errors.location && (
              <span className="text-sm text-red-600">
                {errors.location.message}
              </span>
            )}
          </div>
        </div>

        {/* Salary and No of required employees */}
        <div className="flex  gap-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Salary</span>
            <Input {...register("salary")} name="salary" type="string" />
            {errors.salary && (
              <span className="text-sm text-red-600">
                {errors.salary.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Required</span>
            <Input {...register("required")} name="required" type="string" />
            {errors.required && (
              <span className="text-sm text-red-600">
                {errors.required.message}
              </span>
            )}
          </div>
        </div>

        {/* Experience and Position */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Experience</span>
            <Input
              {...register("experience")}
              name="experience"
              type="string"
            />
            {errors.experience && (
              <span className="text-sm text-red-600">
                {errors.experience.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Position</span>
            <Input {...register("position")} name="position" type="string" />
            {errors.position && (
              <span className="text-sm text-red-600">
                {errors.position.message}
              </span>
            )}
          </div>
        </div>

        {/* Job status and Company name */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Status</span>
            <select
              {...register("status")}
              name="status"
              className="bg-transparent border-[1px] rounded-md p-[13px]"
            >
              <option value="Available">Available</option>
            </select>
            {errors.status && (
              <span className="text-sm text-red-600">
                {errors.status.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Company Name</span>
            <Input
              {...register("companyName")}
              name="companyName"
              type="string"
            />
            {errors.companyName && (
              <span className="text-sm text-red-600">
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>

        {/* Job description */}
        <div className="flex flex-col gap-2 w-full">
          <span>Job Description</span>
          <textarea
            {...register("description")}
            name="description"
            className="bg-transparent border-[1px] rounded-md p-2"
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-600">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-3">
          <Button type="submit" size="large">
            Create
          </Button>
        </div>
      </form>

      {/* Toast notification */}
      <div
        className={
          jobCreationRes !== ""
            ? "absolute bottom-12 mid:right-10 right-2"
            : "hidden absolute bottom-12 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{jobCreationRes}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </>
  );
};

export default CreateJob;
