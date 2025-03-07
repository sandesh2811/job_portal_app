import handleJobUpdation from "@/features/jobdetails/utils/handleJobUpdation";
import handleJobDeletion from "@/features/jobdetails/utils/handleJobDeletion";
import useDeleteJob from "@/features/jobdetails/hooks/useDeleteJob";

import { CreateJobType } from "@/features/createjob/schemas/CreateJobSchema";
import { SingleJobReturnType } from "@/Validators/ReturnDataTypeValidators";

import Button from "@/Components/UI/Button";
import { GoArrowLeft } from "react-icons/go";
import TextInput from "@/Components/UI/TextInput";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectOption from "@/Components/UI/SelectOption";
import InputFieldContainer from "@/Components/FormInputFieldContainer/InputFieldContainer";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";
import { useQueryClient } from "@tanstack/react-query";

type JobUpdationFormProps = {
  jobId: string;
  data: SingleJobReturnType | undefined;
  singleJobLoading: boolean;
};

const JobUpdationForm = ({
  jobId,
  data,
  singleJobLoading,
}: JobUpdationFormProps) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    location: "",
    salaryFrom: "",
    salaryTo: "",
    required: "",
    skills: "",
    experience: "",
    position: "",
    status: "",
    companyName: "",
    description: "",
  });
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateJobType>();

  const router = useRouter();
  const { mutateAsync } = useDeleteJob();
  const queryClient = useQueryClient();

  const handleFormSubmit = handleSubmit(async (newdata) => {
    const success = await handleJobUpdation({
      newdata,
      formData,
      router,
      jobId,
    });

    if (success) {
      const queryKey = ["jobsPostedByEmployer", "singleJob"];
      InvalidateAndRefetchQuery({ queryClient, queryKey });
    }
  });

  useEffect(() => {
    if (!singleJobLoading) {
      setFormData({
        id: data?.job._id || "",
        title: data?.job.title || "",
        location: data?.job.location || "",
        salaryFrom: data?.job.salaryFrom || "",
        salaryTo: data?.job.salaryTo || "",
        required: data?.job.required || "",
        skills: data?.job.skills || "",
        experience: data?.job.experience || "",
        position: data?.job.position || "",
        status: data?.job.status || "",
        companyName: data?.job.companyName || "",
        description: data?.job.description || "",
      });
    }
  }, [singleJobLoading]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex w-full flex-col gap-4 py-4"
    >
      {/* Job title and location */}
      <InputFieldContainer>
        <TextInput
          control={control}
          text="Job Title"
          name="title"
          defaultValue={data?.job.title}
        />
        <TextInput
          control={control}
          text="Location"
          name="location"
          defaultValue={data?.job.location}
        />
      </InputFieldContainer>

      {/* Salary */}

      <InputFieldContainer>
        <TextInput
          control={control}
          text="Salary From"
          name="salaryFrom"
          defaultValue={data?.job.salaryFrom}
        />

        <TextInput
          control={control}
          text="Salary To"
          name="salaryTo"
          defaultValue={data?.job.salaryTo}
        />
      </InputFieldContainer>

      {/* Experience and Position */}

      <InputFieldContainer>
        <TextInput
          control={control}
          text="Experience"
          name="experience"
          defaultValue={data?.job.experience}
        />

        <TextInput
          control={control}
          text="Location"
          name="location"
          defaultValue={data?.job.position}
        />
      </InputFieldContainer>

      {/* Job status and Company name */}

      <InputFieldContainer>
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-sm font-semibold mid:text-base">Status</span>
          <select
            {...register("status")}
            name="status"
            className="flex-1 rounded-[2px] border-[1px] border-primaryText bg-transparent p-2 focus:outline-none mid:px-2"
            defaultValue={data?.job.status}
          >
            <SelectOption title="Available" value="Available" />
            <SelectOption title="Expired" value="Expired" />
          </select>
          {errors.status && (
            <span className="text-sm text-red-600">
              {errors.status.message}
            </span>
          )}
        </div>
        <TextInput
          control={control}
          text="Company Name"
          name="companyName"
          defaultValue={data?.job.companyName}
        />
      </InputFieldContainer>

      {/* No of required employees and required skills  */}

      <InputFieldContainer>
        <TextInput
          control={control}
          text="Required Candidates"
          name="required"
          defaultValue={data?.job.required}
        />

        <TextInput
          control={control}
          text="Required Skills"
          name="skills"
          defaultValue={data?.job.skills}
        />
      </InputFieldContainer>

      {/* Job description */}

      <div className="flex w-full flex-col gap-2">
        <span className="text-sm font-semibold mid:text-base">
          Job Description
        </span>
        <textarea
          rows={5}
          {...register("description")}
          name="description"
          className="rounded-[2px] border-[1px] border-primaryText bg-transparent p-2"
          defaultValue={data?.job.description}
        ></textarea>
        {errors.description && (
          <span className="text-sm text-red-600">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Button */}

      <div className="mt-3 flex flex-col justify-between gap-4 mid:flex-row mid:items-center">
        <span
          onClick={() => router.back()}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-primaryText px-4 py-2 text-sm text-background underline-offset-4 mid:bg-transparent mid:text-base mid:text-primaryText mid:underline"
        >
          <GoArrowLeft className="hidden mid:block" />
          Return
        </span>
        <div className="flex w-full flex-col justify-end gap-4 mid:flex-row">
          <Button type="submit" className="bg-primaryText text-background">
            Update
          </Button>
          <Button
            className="bg-primaryText text-background"
            type="button"
            onClick={() => handleJobDeletion({ jobId, router, mutateAsync })}
          >
            Delete
          </Button>
        </div>
      </div>
    </form>
  );
};

export default JobUpdationForm;
