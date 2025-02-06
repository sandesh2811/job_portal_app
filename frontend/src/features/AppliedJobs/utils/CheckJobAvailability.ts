import { AppliedJobReturnType } from "@/Validators/ReturnDataTypeValidators";

const CheckJobAvailability = (data: AppliedJobReturnType | undefined) => {
  const appliedJobsWhichAreAvailable = data?.jobApplicationsByApplier.filter(
    (job) => job.jobId !== null
  );
  return appliedJobsWhichAreAvailable;
};

export default CheckJobAvailability;
