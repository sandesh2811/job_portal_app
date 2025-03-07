import JobsAndApplicationContainer from "@/Components/JobsAndApplicationContainer";

type PostedJobsMobileProps = {
  job: JobType;
};

const PostedJobsMobile = ({ job }: PostedJobsMobileProps) => {
  return (
    <JobsAndApplicationContainer href={`/jobdetails/${job._id}`}>
      <>
        <span className="text-xl font-medium">{job.title}</span>
        <span className="text-sm">{job.companyName}</span>
        <span
          className={
            job.status === "Expired"
              ? "text-sm text-red-500"
              : "text-sm text-green-500"
          }
        >
          {job.status}
        </span>
        <span className="text-sm">{job.createdAt as string}</span>
      </>
    </JobsAndApplicationContainer>
  );
};

export default PostedJobsMobile;
