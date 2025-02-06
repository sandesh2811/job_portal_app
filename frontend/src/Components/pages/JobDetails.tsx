"use client";

import GetSingleJob from "@/features/jobdetails/hooks/GetSingleJob";

import CheckIdType from "@/utils/CheckIdType";

import ToastContainer from "@/Components/Toast/ToastContainer";
import JobUpdationForm from "@/features/jobdetails/components/JobUpdationForm";

import { useParams } from "next/navigation";
import { useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const [jobSettings, setJobSettings] = useState<string>("");

  //   Check if the id is of type string or not
  const jobId = CheckIdType(id);

  //   Get the formData for the selected job
  // const { formData } = GetSingleJob(jobId);
  const { data, singleJobLoading } = GetSingleJob(jobId);

  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70">
      {/* Form */}
      {!singleJobLoading && (
        <JobUpdationForm
          jobId={jobId}
          setJobSettings={setJobSettings}
          data={data}
          singleJobLoading={singleJobLoading}
        />
      )}

      {/* Toast notification */}
      <ToastContainer value={jobSettings} />
    </div>
  );
};

export default JobDetails;
