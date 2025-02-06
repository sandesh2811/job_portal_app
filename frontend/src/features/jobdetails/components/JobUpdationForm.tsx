import handleJobUpdation from "@/features/jobdetails/utils/handleJobUpdation";
import handleJobDeletion from "@/features/jobdetails/utils/handleJobDeletion";

import { CreateJobType } from "@/features/createjob/schemas/CreateJobSchema";
import { SingleJobReturnType } from "@/Validators/ReturnDataTypeValidators";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import { GoArrowLeft } from "react-icons/go";
import TextInput from "@/Components/UI/TextInput";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectOption from "@/Components/UI/SelectOption";

type JobUpdationFormProps = {
  jobId: string;
  setJobSettings: Dispatch<SetStateAction<string>>;
  data: SingleJobReturnType | undefined;
  singleJobLoading: boolean;
};

const JobUpdationForm = ({
  jobId,
  setJobSettings,
  data,
  singleJobLoading,
}: JobUpdationFormProps) => {
  const router = useRouter();
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

  const handleFormSubmit = handleSubmit(async (newdata) => {
    await handleJobUpdation({
      newdata,
      formData,
      router,
      setJobSettings,
      jobId,
    });
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
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      {/* Job title and location */}

      <div className="flex flex-col md:flex-row gap-6 justify-evenly">
        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Job Title"
          name="title"
          defaultValue={data?.job.title}
        />

        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Location"
          name="location"
          defaultValue={data?.job.location}
        />
      </div>

      {/* Salary */}

      <div className="flex flex-col md:flex-row gap-6 justify-evenly">
        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Salary From"
          name="salaryFrom"
          defaultValue={data?.job.salaryFrom}
        />

        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Salary To"
          name="salaryTo"
          defaultValue={data?.job.salaryTo}
        />
      </div>

      {/* Experience and Position */}

      <div className="flex flex-col md:flex-row gap-6  justify-evenly">
        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Experience"
          name="experience"
          defaultValue={data?.job.experience}
        />

        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Location"
          name="location"
          defaultValue={data?.job.position}
        />
      </div>

      {/* Job status and Company name */}

      <div className="flex flex-col md:flex-row gap-6 justify-evenly">
        <div className="flex flex-col gap-2">
          <span>Status</span>
          <select
            {...register("status")}
            name="status"
            className="bg-transparent border-[1px] rounded-md p-[13px]  md:w-[350px] midLg:w-[395px] xl:w-[495px]"
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
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Company Name"
          name="companyName"
          defaultValue={data?.job.companyName}
        />
      </div>

      {/* No of required employees and required skills  */}

      <div className="flex flex-col md:flex-row gap-6 justify-evenly">
        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Required Candidates"
          name="required"
          defaultValue={data?.job.required}
        />

        <TextInput
          className="md:w-[350px] midLg:w-[395px] xl:w-[495px]"
          control={control}
          text="Required Skills"
          name="skills"
          defaultValue={data?.job.skills}
        />
      </div>

      {/* Job description */}

      <div className="flex flex-col gap-2 w-full">
        <span>Job Description</span>
        <textarea
          rows={5}
          {...register("description")}
          name="description"
          className="bg-transparent border-[1px] rounded-md p-2"
          defaultValue={data?.job.description}
        ></textarea>
        {errors.description && (
          <span className="text-sm text-red-600">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Button */}

      <div className="flex flex-col mid:flex-row gap-4 justify-between items-center mt-3">
        <span
          onClick={() => router.back()}
          className="flex gap-2 items-center underline underline-offset-4 text-sm mid:text-base cursor-pointer"
        >
          <GoArrowLeft />
          Return
        </span>
        <div className="flex  justify-end gap-4">
          <Button type="submit" size="large">
            Update
          </Button>
          <Button
            type="button"
            onClick={() => handleJobDeletion({ jobId, router, setJobSettings })}
            size="large"
          >
            Delete
          </Button>
        </div>
      </div>
    </form>
  );
};

export default JobUpdationForm;
