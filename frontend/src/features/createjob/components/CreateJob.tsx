"use client";

import CreateJobSchema, {
  CreateJobType,
} from "@/features/createjob/schemas/CreateJobSchema";
import GetLoginData from "@/utils/GetLoginData";
import handleJobCreation from "@/features/createjob/utils/handleJobCreation";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import ToastContainer from "@/Components/Toast/ToastContainer";
import TextInput from "@/Components/UI/TextInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectOption from "@/Components/UI/SelectOption";

const CreateJob = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateJobType>({
    resolver: zodResolver(CreateJobSchema),
    mode: "onChange",
  });
  const [jobCreationRes, setJobCreationRes] = useState<string>("");

  const { loginData } = GetLoginData();
  const { userId } = loginData;

  const handleFormSubmit = handleSubmit(async (formData: CreateJobType) => {
    await handleJobCreation({ formData, reset, setJobCreationRes, userId });
  });

  return (
    <>
      {/* Create job form */}

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        {/* Job title and location */}
        <div className="flex flex-col  gap-6 w-full justify-evenly md:flex-row">
          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Job Title"
            name="title"
          />

          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Location"
            name="location"
          />
        </div>

        {/* Salary */}
        <div className="flex flex-col  md:flex-row gap-6 justify-evenly">
          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Salary From"
            name="salaryFrom"
          />

          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Salary To"
            name="salaryTo"
          />
        </div>

        {/* Experience and Position */}
        <div className="flex flex-col md:flex-row  gap-6 justify-evenly">
          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Experience"
            name="experience"
          />

          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Location"
            name="location"
          />
        </div>

        {/* No of required employees and required skills  */}

        <div className="flex flex-col  md:flex-row gap-6 justify-evenly">
          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Required Candidates"
            name="required"
          />

          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Required Skills"
            name="skills"
          />
        </div>

        {/* Job status and Company name */}
        <div className="flex flex-col md:flex-row gap-6 justify-evenly">
          <div className="flex flex-col gap-2 ">
            <span>Status</span>
            <select
              {...register("status")}
              name="status"
              className="bg-transparent border-[1px] rounded-md p-[13px] md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            >
              <SelectOption value="Available" title="Available" />
            </select>
            {errors.status && (
              <span className="text-sm text-red-600">
                {errors.status.message}
              </span>
            )}
          </div>
          <TextInput
            className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
            control={control}
            text="Company Name"
            name="companyName"
          />
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
      <ToastContainer value={jobCreationRes} />
    </>
  );
};

export default CreateJob;
