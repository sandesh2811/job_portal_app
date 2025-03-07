"use client";

import GetSingleJob from "@/features/jobdetails/hooks/useGetSingleJob";

import CheckIdType from "@/utils/CheckIdType";

import JobUpdationForm from "@/features/jobdetails/components/JobUpdationForm";

import { useParams } from "next/navigation";
import MainContainer from "../MainContainer";

const JobDetails = () => {
  const { id } = useParams();

  //   Check if the id is of type string or not
  const jobId = CheckIdType(id);

  //   Get the formData for the selected job
  const { data, singleJobLoading } = GetSingleJob(jobId);

  return (
    // <div className="mx-auto flex min-h-[90vh] flex-col gap-6 bg-blue-600 tracking-wide">
    <MainContainer className="my-2 md:my-12">
      {/* Form */}
      {!singleJobLoading && (
        <JobUpdationForm
          jobId={jobId}
          data={data}
          singleJobLoading={singleJobLoading}
        />
      )}
    </MainContainer>
    // </div>
  );
};

export default JobDetails;
