"use client";

import useGetSingleJob from "@/features/singlejob/hooks/useGetSingleJob";
import CheckIdType from "@/utils/CheckIdType";

import JobDetails from "@/Components/JobAndCompanyDetails/JobDetails";
import RequiredSkills from "@/Components/JobAndCompanyDetails/RequiredSkills";
import CompanyDetails from "@/Components/JobAndCompanyDetails/CompanyDetails";
import CtaButton from "@/features/singlejob/components/CtaButton";

import { useParams } from "next/navigation";
import MainContainer from "../MainContainer";

const SingleJob = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = CheckIdType(id);

  const { data, singleJobLoading } = useGetSingleJob(userId);
  const prefix = data?.job;

  return (
    <>
      {!singleJobLoading && (
        <MainContainer className="my-8 min-h-[70vh]">
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
        </MainContainer>
      )}
    </>
  );
};

export default SingleJob;
