"use client";

import useGetSingleJobApplication from "@/utils/Hooks/Jobs/SingleJobApplication/useGetSingleJobApplication";

import UpdateApplicationStatus from "@/Actions/UpdateApplicationStatus/UpdateApplicationStatus";

import Button from "@/Components/UI/Button";
import { GoArrowLeft, GoX } from "react-icons/go";
import Toast from "@/Components/UI/Toast";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const singleJobApplicationDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<string>("");
  const [applicationStatusRes, setapplicationStatusRes] = useState<string>("");
  const router = useRouter();
  const [fileName, setFileName] = useState<string>("");

  //   Check if the is is of type string or not
  const applicationId = typeof id === "string" ? id : "";

  //   Fetch single job
  const { data, singleApplicationLoading } =
    useGetSingleJobApplication(applicationId);

  //   Job Updation Response
  const handleJobUpdation = async () => {
    const response = await UpdateApplicationStatus(status, applicationId);
    setapplicationStatusRes(response.message);

    let timerId = setTimeout(() => {
      setapplicationStatusRes("");
      router.back();
      clearTimeout(timerId);
    }, 3000);
  };

  const GetCV = async () => {
    const res = await fetch(
      `/api/uploads/files/${data?.singleJobApplication?.fileName}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const resData = await res.json();
    if (resData.success) {
      setFileName(resData.fileName);
      window.open(`http://localhost:5000/${fileName}`);
    }
  };

  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70">
      {!singleApplicationLoading && (
        <>
          {/* Job Introduction */}

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl mid:text-3xl">
              {data?.singleJobApplication.jobId.title}
            </h2>

            <div className="text-sm mid:text-base mb-3 flex flex-col gap-1">
              <span>Job Description:</span>
              <p>{data?.singleJobApplication.jobId.description}</p>
            </div>
            <span className="text-sm mid:text-base">
              Salary: Rs {data?.singleJobApplication.jobId.salaryFrom} -{" "}
              {data?.singleJobApplication.jobId.salaryTo}
            </span>
            <span className="text-sm mid:text-base">
              Type: {data?.singleJobApplication.jobId.position} Remote
            </span>
            <span className="text-sm mid:text-base">
              Required Candidates: {data?.singleJobApplication.jobId.required}
            </span>
            <span className="text-sm mid:text-base">
              Experience: {data?.singleJobApplication.jobId.experience} years
            </span>
          </div>

          {/* Required Skills  */}

          <div>
            <span className="text-sm mid:text-base">
              Required Skills: {data?.singleJobApplication.jobId.skills}
            </span>
          </div>

          {/*  Company Details */}

          <div className="flex flex-col gap-2">
            <span className="text-sm mid:text-base">
              Company name: {data?.singleJobApplication.jobId.companyName}
            </span>
            <span className="text-sm mid:text-base">
              Location: {data?.singleJobApplication.jobId.location}
            </span>
          </div>

          {/* Applier Details */}

          <h2 className="text-2xl mid:text-3xl">Applier Details</h2>

          <div className="text-sm mid:text-base mb-3 flex flex-col  gap-4  mid:flex-row justify-between mid:items-center">
            {/* User Details */}

            <div className="flex flex-col gap-3">
              <span>Name: {data?.singleJobApplication.fullname}</span>
              <span>
                Experience: {data?.singleJobApplication.experience} year
              </span>
              <span>
                Phone Number: {data?.singleJobApplication.phonenumber}
              </span>
              <span>Email: {data?.singleJobApplication.email}</span>
              <div className="flex items-center gap-2 justify-center">
                <span>CV:</span>
                <span
                  className="cursor-pointer underline underline-offset-4"
                  onClick={() => GetCV()}
                >
                  {data?.singleJobApplication.fileName}
                </span>
              </div>
            </div>

            {/* Application Status */}

            <div>
              <select
                name="applicationStatus"
                className="bg-transparent  border-[1px] rounded-md p-[13px] w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option
                  className="text-background"
                  value={data?.singleJobApplication.status}
                >
                  {data?.singleJobApplication.status}
                </option>
                {data?.singleJobApplication.status === "Pending" && (
                  <>
                    <option className="text-background" value="Accepted">
                      Accepted
                    </option>
                    <option className="text-background" value="Rejected">
                      Rejected
                    </option>
                  </>
                )}
                {data?.singleJobApplication.status === "Accepted" && (
                  <>
                    <option className="text-background" value="Pending">
                      Pending
                    </option>
                    <option className="text-background" value="Rejected">
                      Rejected
                    </option>
                  </>
                )}
                {data?.singleJobApplication.status === "Rejected" && (
                  <>
                    <option className="text-background" value="Pending">
                      Pending
                    </option>
                    <option className="text-background" value="Accepted">
                      Accepted
                    </option>
                  </>
                )}
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
                ? "absolute top-5 mid:right-10 right-2"
                : "hidden absolute top-5 mid:right-10 right-2"
            }
          >
            <Toast>
              <span>{applicationStatusRes}</span>
              <GoX
                size={20}
                className="absolute top-2 right-2 cursor-pointer"
              />
            </Toast>
          </div>
        </>
      )}
    </div>
  );
};

export default singleJobApplicationDetails;
