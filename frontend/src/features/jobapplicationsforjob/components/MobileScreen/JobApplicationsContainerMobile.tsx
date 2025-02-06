import { JobApplicationToTheJobType } from "@/Validators/ReturnDataTypeValidators";
import JobApplicationsMobile from "@/features/jobapplicationsforjob/components/MobileScreen/JobApplicationsMobile";

type JobApplicationsContainerMobileProps = {
  data: JobApplicationToTheJobType | undefined;
};

const JobApplicationsContainerMobile = ({
  data,
}: JobApplicationsContainerMobileProps) => {
  return (
    <>
      {data?.jobApplicationsToTheJob?.map((application) => {
        return (
          <JobApplicationsMobile
            key={application._id}
            application={application}
          />
        );
      })}
    </>
  );
};

export default JobApplicationsContainerMobile;
