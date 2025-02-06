"use client";

import useGetSingleJob from "@/features/singlejob/hooks/useGetSingleJob";
import CheckIdType from "@/utils/CheckIdType";

import JobDetails from "@/Components/JobAndCompanyDetails/JobDetails";
import RequiredSkills from "@/Components/JobAndCompanyDetails/RequiredSkills";
import CompanyDetails from "@/Components/JobAndCompanyDetails/CompanyDetails";
import CtaButton from "@/features/singlejob/components/CtaButton";

import { useParams } from "next/navigation";

const SingleJob = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = CheckIdType(id);

  const { data, singleJobLoading } = useGetSingleJob(userId);
  const prefix = data?.job;

  return (
    <>
      {!singleJobLoading && (
        <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col justify-center  gap-6 bg-[#282828]/30">
          {/* Job Introduction */}
          <JobDetails
            title={prefix?.title}
            description={prefix?.description}
            experience={prefix?.experience}
            salaryFrom={prefix?.salaryFrom}
            salaryTo={prefix?.salaryTo}
            required={prefix?.required}
            position={prefix?.position}
          />

          {/* Required Skills  */}
          <RequiredSkills skills={prefix?.skills} />

          {/*  Company Details */}
          <CompanyDetails
            companyName={prefix?.companyName}
            location={prefix?.location}
          />

          {/* CTA Buttons */}
          <CtaButton jobId={data?.job._id} />
        </div>
      )}
    </>
  );
};

export default SingleJob;
