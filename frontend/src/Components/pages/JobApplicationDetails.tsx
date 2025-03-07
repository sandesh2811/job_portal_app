"use client";

import useGetSingleJobApplication from "@/features/singleJobApplication/hooks/useGetSingleJobApplication";
import CheckIdType from "@/utils/CheckIdType";

import JobSummary from "@/features/singleJobApplication/components/JobSummary";
import UserDetails from "@/features/singleJobApplication/components/UserDetails";
import ApplicationStatus from "@/features/singleJobApplication/components/ApplicationStatus";
import CtaButton from "@/features/singleJobApplication/components/CtaButton";
import MainContainer from "@/Components/MainContainer";

import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { SingleJobApplicationReturnType } from "@/Validators/ReturnDataTypeValidators";

const SingleJobApplicationDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<string>("");

  //   Check if the is is of type string or not
  const applicationId = CheckIdType(id);

  //   Fetch single job application
  const { data, singleApplicationLoading } =
    useGetSingleJobApplication(applicationId);

  return (
    <MainContainer className="my-8 min-h-[90vh]">
      {!singleApplicationLoading && (
        <>
          {/* Job Introduction */}

          <JobSummary data={data} />

          {/* Applier Details Section*/}
          <ApplierDetails setStatus={setStatus} data={data} status={status} />

          {/* CTA Button */}
          <CtaButton status={status} applicationId={applicationId} />
        </>
      )}
    </MainContainer>
  );
};

export default SingleJobApplicationDetails;

type ApplierDetailsProps = {
  data: SingleJobApplicationReturnType | undefined;
  setStatus: Dispatch<SetStateAction<string>>;
  status: string;
};

const ApplierDetails = ({ data, setStatus, status }: ApplierDetailsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl mid:text-3xl">Applier Details</h2>
      <div className="mb-3 flex flex-col justify-between gap-4 text-sm mid:flex-row mid:items-center mid:text-base">
        {/* User Details */}

        <UserDetails data={data} />

        {/* Application Status */}

        <ApplicationStatus data={data} setStatus={setStatus} status={status} />
      </div>
    </div>
  );
};
