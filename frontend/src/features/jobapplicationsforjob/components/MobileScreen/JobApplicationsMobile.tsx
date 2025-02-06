import JobsAndApplicationContainer from "@/Components/JobsAndApplicationContainer";

type JobApplicationsMobileProps = {
  application: JobApplicationType<JobType>;
};

const JobApplicationsMobile = ({ application }: JobApplicationsMobileProps) => {
  return (
    <JobsAndApplicationContainer
      key={application._id}
      href={`/jobapplicationdetails/${application._id}`}
    >
      <span>{application.jobId.title}</span>
      <span className="text-sm">{application.fullname}</span>
      <span className="text-sm">{application.email}</span>
      <span
        className={
          application.status === "Accepted"
            ? "text-green-500 text-sm"
            : application.status === "Rejected"
            ? "text-red-500 text-sm"
            : "text-sm"
        }
      >
        {application.status}
      </span>
    </JobsAndApplicationContainer>
  );
};

export default JobApplicationsMobile;
