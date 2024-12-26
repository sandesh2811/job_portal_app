"use client";

import GetSingleJobApplication from "@/utils/Hooks/GetSingleJobApplication";
import UpdateApplicationStatus from "@/Actions/UpdateApplicationStatus/UpdateApplicationStatus";

import Button from "@/Components/UI/Button";
import { GoArrowLeft, GoX } from "react-icons/go";
import Toast from "@/Components/UI/Toast";

import { Skills } from "../SingleJob/SingleJob";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const JobApplicationDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<string>("Pending");
  const [applicationStatusRes, setapplicationStatusRes] = useState<string>("");
  const router = useRouter();

  //   Check if the is is of type string or not
  const applicationId = typeof id === "string" ? id : "";

  //   Fetch single job
  const { jobApplication } = GetSingleJobApplication(applicationId);

  //   Job Updation Response
  const handleJobUpdation = async () => {
    const response = await UpdateApplicationStatus(status, applicationId);
    setapplicationStatusRes(response.message);

    setTimeout(() => {
      setapplicationStatusRes("");
    }, 3000);
  };

  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70">
      {/* Job Introduction */}

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl mid:text-3xl">{jobApplication?.jobId.title}</h2>

        <div className="text-sm mid:text-base mb-3 flex flex-col gap-1">
          <span>Job Description:</span>
          <p>{jobApplication?.jobId.description}</p>
        </div>
        <span className="text-sm mid:text-base">
          Salary: Rs {jobApplication?.jobId.salary}
        </span>
        <span className="text-sm mid:text-base">
          Type: {jobApplication?.jobId.position} Remote
        </span>
        <span className="text-sm mid:text-base">
          Required Candidates: {jobApplication?.jobId.required}
        </span>
        <span className="text-sm mid:text-base">
          Experience: {jobApplication?.jobId.experience} years
        </span>
      </div>

      {/* Required Skills  */}

      <div>
        <span className="text-sm mid:text-base">Required Skills:</span>
        {Skills.map((skill, idx) => (
          <li key={idx} className=" text-sm mid:text-base">
            {skill}
          </li>
        ))}
      </div>

      {/*  Company Details */}

      <div className="flex flex-col gap-2">
        <span className="text-sm mid:text-base">
          Company name: {jobApplication?.jobId.companyName}
        </span>
        <span className="text-sm mid:text-base">
          Location: {jobApplication?.jobId.location}
        </span>
      </div>

      {/* Applier Details */}

      <h2 className="text-2xl mid:text-3xl">Applier Details</h2>

      <div className="text-sm mid:text-base mb-3 flex flex-col  gap-4  mid:flex-row justify-between mid:items-center">
        {/* User Details */}

        <div className="flex flex-col gap-3">
          <span>Name: {jobApplication?.fullname}</span>
          <span>Experience: {jobApplication?.experience} year</span>
          <span>Phone Number: {jobApplication?.phonenumber}</span>
          <span>Email: {jobApplication?.email}</span>
          <span>For CV</span>
        </div>

        {/* Application Status */}

        <div>
          <select
            name="applicationStatus"
            className="bg-transparent  border-[1px] rounded-md p-[13px] w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option className="text-background" value={jobApplication?.status}>
              {jobApplication?.status}
            </option>
            <option className="text-background" value="Accepted">
              Accepted
            </option>
            <option className="text-background" value="Rejected">
              Rejected
            </option>
          </select>
        </div>
      </div>

      {/* CTA Button */}

      <div className="flex justify-between items-center">
        <span
          onClick={() => router.back()}
          className="flex gap-2 items-center underline underline-offset-4 text-sm mid:text-base cursor-pointer"
        >
          <GoArrowLeft />
          Return
        </span>
        <Button onClick={() => handleJobUpdation()} size="large">
          Update
        </Button>
      </div>

      {/* Toast Notification */}

      <div
        className={
          applicationStatusRes !== ""
            ? "absolute bottom-12 mid:right-10 right-2"
            : "hidden absolute bottom-12 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{applicationStatusRes}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </div>
  );
};

export default JobApplicationDetails;
