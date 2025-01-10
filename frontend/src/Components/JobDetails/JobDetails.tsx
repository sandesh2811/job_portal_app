"use client";

import GetSingleJob from "@/utils/Hooks/Jobs/SingleJob/GetSingleJob";
import CompareForms from "@/utils/CompareFormData/CompareForm";
import UpdateJob from "@/Actions/UpdateJob/UpdateJob";
import DeleteJob from "@/Actions/DeleteJob/DeleteJob";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Toast from "../UI/Toast";
import { GoArrowLeft, GoX } from "react-icons/go";

import {
  CreateJobSchema,
  CreateJobType,
} from "../Redirects/Details/CreateJob/CreateJob";

import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

const JobDetails = () => {
  const { id } = useParams();
  const [jobSettings, setJobSettings] = useState<string>("");
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateJobType>({
    resolver: zodResolver(CreateJobSchema),
    mode: "onSubmit",
  });

  //   Check if the id is of type string or not
  const jobId = typeof id === "string" ? id : "";

  //   Get the formData for the selected job
  const { formData } = GetSingleJob(jobId);

  //   Handling job deletion
  const handleJobDeletion = async () => {
    const response = await DeleteJob(jobId);
    setJobSettings(response.message);
    setTimeout(() => {
      setJobSettings("");
    }, 3000);

    response.success &&
      setTimeout(() => {
        router.back();
      }, 5000);
  };

  //   Handling job updation
  const handleJobUpdation: SubmitHandler<CreateJobType> = async (
    newdata: CreateJobType
  ) => {
    // Getting the changed attributes by comparing the two form data's

    const changedAttributes = CompareForms(formData, newdata);

    // Making a PATCH request and getting the response

    const response = await UpdateJob(jobId, changedAttributes);

    // For toast message & routing

    setJobSettings(response.message);

    setTimeout(() => {
      setJobSettings("");
    }, 3000);

    response.success &&
      setTimeout(() => {
        router.back();
      }, 5000);
  };

  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70">
      {/* Form */}

      <form
        onSubmit={handleSubmit(handleJobUpdation)}
        className="flex flex-col gap-4"
      >
        {/* Job title and location */}

        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Job Title</span>
            <Input
              {...register("title")}
              name="title"
              type="string"
              defaultValue={formData.title}
            />
            {errors.title && (
              <span className="text-sm text-red-600">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Location</span>
            <Input
              {...register("location")}
              name="location"
              type="string"
              defaultValue={formData.location}
            />
            {errors.location && (
              <span className="text-sm text-red-600">
                {errors.location.message}
              </span>
            )}
          </div>
        </div>

        {/* Salary */}

        <div className="flex  gap-6">
          {/* Salary From */}

          <div className="flex flex-col gap-2 w-[50%]">
            <span>Salary From</span>
            <Input
              {...register("salaryFrom")}
              name="salaryFrom"
              type="string"
              defaultValue={formData.salaryFrom}
            />
            {errors.salaryFrom && (
              <span className="text-sm text-red-600">
                {errors.salaryFrom.message}
              </span>
            )}
          </div>

          {/* Salary To */}

          <div className="flex flex-col gap-2 w-[50%]">
            <span>Salary To</span>
            <Input
              {...register("salaryTo")}
              name="salaryTo"
              type="string"
              defaultValue={formData.salaryTo}
            />
            {errors.salaryTo && (
              <span className="text-sm text-red-600">
                {errors.salaryTo.message}
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
              defaultValue={formData.experience}
            />
            {errors.experience && (
              <span className="text-sm text-red-600">
                {errors.experience.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Position</span>
            <Input
              {...register("position")}
              name="position"
              type="string"
              defaultValue={formData.position}
            />
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
              defaultValue={formData.status}
            >
              <option value="Available" className="text-background">
                Available
              </option>
              <option value="Expired" className="text-background">
                Expired
              </option>
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
              defaultValue={formData.companyName}
            />
            {errors.companyName && (
              <span className="text-sm text-red-600">
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>

        {/* No of required employees and required skills  */}

        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Required Candidates</span>
            <Input
              {...register("required")}
              name="required"
              type="string"
              defaultValue={formData.required}
            />
            {errors.required && (
              <span className="text-sm text-red-600">
                {errors.required.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <span>Required Skills</span>
            <Input
              {...register("skills")}
              name="skills"
              type="string"
              defaultValue={formData.skills}
            />
            {errors.skills && (
              <span className="text-sm text-red-600">
                {errors.skills.message}
              </span>
            )}
          </div>
        </div>

        {/* Job description */}

        <div className="flex flex-col gap-2 w-full">
          <span>Job Description</span>
          <textarea
            rows={5}
            {...register("description")}
            name="description"
            className="bg-transparent border-[1px] rounded-md p-2"
            defaultValue={formData.description}
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-600">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Button */}

        <div className="flex justify-between items-center mt-3">
          <span
            onClick={() => router.back()}
            className="flex gap-2 items-center underline underline-offset-4 text-sm mid:text-base cursor-pointer"
          >
            <GoArrowLeft />
            Return
          </span>
          <div className="flex justify-end gap-4">
            <Button type="submit" size="large">
              Update
            </Button>
            <Button
              type="button"
              onClick={() => handleJobDeletion()}
              size="large"
            >
              Delete
            </Button>
          </div>
        </div>
      </form>

      {/* Toast notification */}

      <div
        className={
          jobSettings !== ""
            ? "absolute top-5 mid:right-10 right-2"
            : "hidden absolute top-5 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{jobSettings}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </div>
  );
};

export default JobDetails;
