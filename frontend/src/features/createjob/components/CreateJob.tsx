"use client";

import CreateJobSchema, {
  CreateJobType,
} from "@/features/createjob/schemas/CreateJobSchema";
import GetLoginData from "@/utils/GetLoginData";
import handleJobCreation from "@/features/createjob/utils/handleJobCreation";

import Button from "@/Components/UI/Button";
import TextInput from "@/Components/UI/TextInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SelectOption from "@/Components/UI/SelectOption";
import { useQueryClient } from "@tanstack/react-query";
import InputFieldContainer from "@/Components/FormInputFieldContainer/InputFieldContainer";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";

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

  const { loginData } = GetLoginData();
  const { userId } = loginData;
  const queryClient = useQueryClient();

  const handleFormSubmit = handleSubmit(async (formData: CreateJobType) => {
    const response = await handleJobCreation({
      formData,
      reset,
      userId,
    });

    if (response) {
      const keys = ["jobsPostedByEmployer", "allJobs", "latestJobs"];

      InvalidateAndRefetchQuery({ queryClient, queryKey: keys });
    }
  });

  return (
    <>
      {/* Create job form */}

      <form onSubmit={handleFormSubmit} className="flex w-full flex-col gap-4">
        {/* Job title and location */}

        <InputFieldContainer>
          <TextInput control={control} text="Job Title" name="title" />

          <TextInput control={control} text="Location" name="location" />
        </InputFieldContainer>

        {/* Salary */}
        <InputFieldContainer>
          <TextInput control={control} text="Salary From" name="salaryFrom" />

          <TextInput control={control} text="Salary To" name="salaryTo" />
        </InputFieldContainer>

        {/* Experience and Position */}
        <InputFieldContainer>
          <TextInput control={control} text="Experience" name="experience" />

          <TextInput control={control} text="Position" name="position" />
        </InputFieldContainer>

        {/* No of required employees and required skills  */}

        <InputFieldContainer>
          <TextInput
            control={control}
            text="Required Candidates"
            name="required"
          />

          <TextInput control={control} text="Required Skills" name="skills" />
        </InputFieldContainer>

        {/* Job status and Company name */}
        <InputFieldContainer>
          <div className="flex flex-1 flex-col gap-2">
            <span className="text-sm font-semibold">Status</span>
            <select
              {...register("status")}
              name="status"
              className="flex-1 rounded-[2px] border-[1px] border-primaryText bg-transparent p-2 focus:outline-none mid:px-2"
            >
              <SelectOption value="Available" title="Available" />
            </select>
            {errors.status && (
              <span className="text-sm text-red-600">
                {errors.status.message}
              </span>
            )}
          </div>
          <TextInput control={control} text="Company Name" name="companyName" />
        </InputFieldContainer>

        {/* Job description */}
        <div className="flex w-full flex-col gap-2">
          <span className="text-sm font-semibold mid:text-base">
            Job Description
          </span>
          <textarea
            {...register("description")}
            name="description"
            className="rounded-[2px] border-[1px] border-primaryText bg-transparent p-2"
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-600">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="mt-3 flex justify-center">
          <Button
            type="submit"
            className="w-full bg-primaryText text-background"
          >
            Create
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateJob;
