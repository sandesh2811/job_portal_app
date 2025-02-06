type AppliedJobsLaptopProps = {
  appliedJob: JobApplicationType<JobType>;
};

const AppliedJobsLaptop = ({ appliedJob }: AppliedJobsLaptopProps) => {
  return (
    <tr className="border-b-[1.3px]">
      <td className=" w-1/5 py-6 text-center px-5">{appliedJob.jobId.title}</td>
      <td className=" w-1/5 py-6 text-center px-5">
        {appliedJob.jobId.position}
      </td>
      <td
        className={
          appliedJob.status === "Accepted"
            ? "text-green-500 w-1/5 py-6 text-center px-5"
            : appliedJob.status === "Rejected"
            ? "text-red-500 w-1/5 py-6 text-center px-5"
            : "w-1/5 py-6 text-center px-5"
        }
      >
        {appliedJob.status}
      </td>
    </tr>
  );
};

export default AppliedJobsLaptop;
