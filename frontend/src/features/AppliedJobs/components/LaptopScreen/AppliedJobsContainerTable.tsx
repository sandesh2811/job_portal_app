import TableHeadings from "@/Components/UI/TableHeadings";
import AppliedJobsLaptop from "@/features/AppliedJobs/components/LaptopScreen/AppliedJobsLaptop";

export const headings = ["Job Title", "Postion", "Status"];

type AppliedJobsTableContainerProps = {
  appliedJobsWhichAreAvailable: JobApplicationType<JobType>[] | undefined;
};

const AppliedJobsTableContainer = ({
  appliedJobsWhichAreAvailable,
}: AppliedJobsTableContainerProps) => {
  return (
    <table className="hidden w-full mid:block">
      <thead className="border-2 border-primaryText">
        <TableHeadings data={headings} />
      </thead>
      <tbody>
        {appliedJobsWhichAreAvailable?.map((appliedJob) => (
          <AppliedJobsLaptop appliedJob={appliedJob} key={appliedJob._id} />
        ))}
      </tbody>
    </table>
  );
};

export default AppliedJobsTableContainer;
