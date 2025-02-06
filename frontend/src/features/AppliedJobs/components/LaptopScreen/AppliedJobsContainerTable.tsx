import TableHeadings from "@/Components/UI/TableHeadings";
import AppliedJobsLaptop from "@/features/AppliedJobs/components/LaptopScreen/AppliedJobsLaptop";

const headings = ["Job Title", "Postion", "Status"];

type AppliedJobsTableContainerProps = {
  appliedJobsWhichAreAvailable: JobApplicationType<JobType>[] | undefined;
};

const AppliedJobsTableContainer = ({
  appliedJobsWhichAreAvailable,
}: AppliedJobsTableContainerProps) => {
  return (
    <table className="hidden mid:block w-full">
      <thead className="border-b-[1.3px]">
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
