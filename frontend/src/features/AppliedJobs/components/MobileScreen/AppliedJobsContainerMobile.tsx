import AppliedJobsMobile from "@/features/AppliedJobs/components/MobileScreen/AppliedJobsMobile";

type AppliedJobsContainerMobileProps = {
  appliedJobsWhichAreAvailable: JobApplicationType<JobType>[] | undefined;
};

const AppliedJobsContainerMobile = ({
  appliedJobsWhichAreAvailable,
}: AppliedJobsContainerMobileProps) => {
  return appliedJobsWhichAreAvailable?.map((appliedJob) => (
    <div
      key={appliedJob._id}
      className="flex justify-between items-center gap-2 border-b-[1.2px]  cursor-pointer py-4 mid:hidden"
    >
      <AppliedJobsMobile appliedJob={appliedJob} />
    </div>
  ));
};

export default AppliedJobsContainerMobile;
