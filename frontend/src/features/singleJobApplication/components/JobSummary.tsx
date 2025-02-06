import { SingleJobApplicationReturnType } from "@/Validators/ReturnDataTypeValidators";

import CompanyDetails from "@/Components/JobAndCompanyDetails/CompanyDetails";
import JobDetails from "@/Components/JobAndCompanyDetails/JobDetails";
import RequiredSkills from "@/Components/JobAndCompanyDetails/RequiredSkills";

type JobSummaryProps = {
  data: SingleJobApplicationReturnType | undefined;
};

const JobSummary = ({ data }: JobSummaryProps) => {
  const prefix = data?.singleJobApplication.jobId;

  return (
    <>
      <JobDetails
        title={prefix?.title}
        description={prefix?.description}
        experience={prefix?.experience}
        salaryFrom={prefix?.salaryFrom}
        salaryTo={prefix?.salaryTo}
        required={prefix?.required}
        position={prefix?.position}
      />

      <RequiredSkills skills={prefix?.skills} />

      <CompanyDetails
        companyName={prefix?.companyName}
        location={prefix?.location}
      />
    </>
  );
};

export default JobSummary;
