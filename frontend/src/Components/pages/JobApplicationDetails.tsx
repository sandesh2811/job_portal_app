"use client";

import useGetSingleJobApplication from "@/features/singleJobApplication/hooks/useGetSingleJobApplication";
import CheckIdType from "@/utils/CheckIdType";

import JobSummary from "@/features/singleJobApplication/components/JobSummary";
import ToastContainer from "@/Components/Toast/ToastContainer";
import UserDetails from "@/features/singleJobApplication/components/UserDetails";
import ApplicationStatus from "@/features/singleJobApplication/components/ApplicationStatus";
import CtaButton from "@/features/singleJobApplication/components/CtaButton";

import { useParams } from "next/navigation";
import { useState } from "react";

const singleJobApplicationDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<string>("");
  const [applicationStatusRes, setApplicationStatusRes] = useState<string>("");

  //   Check if the is is of type string or not
  const applicationId = CheckIdType(id);

  //   Fetch single job
  const { data, singleApplicationLoading } =
    useGetSingleJobApplication(applicationId);

  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70">
      {!singleApplicationLoading && (
        <>
          {/* Job Introduction */}

          <JobSummary data={data} />

          {/* Applier Details Section*/}

          <h2 className="text-2xl mid:text-3xl">Applier Details</h2>

          <div className="text-sm mid:text-base mb-3 flex flex-col  gap-4  mid:flex-row justify-between mid:items-center">
            {/* User Details */}

            <UserDetails data={data} />

            {/* Application Status */}

            <ApplicationStatus
              data={data}
              setStatus={setStatus}
              status={status}
            />
          </div>

          {/* CTA Button */}
          <CtaButton
            setApplicationStatusRes={setApplicationStatusRes}
            status={status}
            applicationId={applicationId}
          />

          {/* Toast Notification */}
          <ToastContainer value={applicationStatusRes} />
        </>
      )}
    </div>
  );
};

export default singleJobApplicationDetails;
