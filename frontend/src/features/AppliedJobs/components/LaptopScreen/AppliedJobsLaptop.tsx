type AppliedJobsLaptopProps = {
  appliedJob: JobApplicationType<JobType>;
};

const AppliedJobsLaptop = ({ appliedJob }: AppliedJobsLaptopProps) => {
  return (
    <tr className="border-2 border-primaryText">
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {appliedJob.jobId.title}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {appliedJob.jobId.position}
      </td>
      <td
        className={
          appliedJob.status === "Accepted"
            ? "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center text-green-500"
            : appliedJob.status === "Rejected"
              ? "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center text-red-500"
              : "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center"
        }
      >
        {appliedJob.status}
      </td>
    </tr>
  );
};

export default AppliedJobsLaptop;
