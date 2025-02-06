type AppliedJobsMobileProps = {
  appliedJob: JobApplicationType<JobType>;
};

const AppliedJobsMobile = ({ appliedJob }: AppliedJobsMobileProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">{appliedJob.jobId.title}</span>
      <span>{appliedJob.jobId.position}</span>
      <span
        className={
          appliedJob.status === "Accepted"
            ? "text-green-500 text-sm"
            : appliedJob.status === "Rejected"
            ? "text-red-500 text-sm"
            : "text-sm"
        }
      >
        {appliedJob.status}
      </span>
    </div>
  );
};

export default AppliedJobsMobile;
