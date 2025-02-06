import TableHeadings from "@/Components/UI/TableHeadings";
import { JobApplicationToTheJobType } from "@/Validators/ReturnDataTypeValidators";
import JobApplicationsLaptop from "@/features/jobapplicationsforjob/components/LaptopScreen/JobApplicationsLaptop";

const headings = ["Job Title", "Applier Name", "Email", "Status"];

type JobApplicationsContainerTableProps = {
  data: JobApplicationToTheJobType | undefined;
};

const JobApplicationsContainerTable = ({
  data,
}: JobApplicationsContainerTableProps) => {
  return (
    <table className="hidden mid:block w-full ">
      <thead className="border-b-[1.3px]">
        <TableHeadings data={headings} />
      </thead>
      <tbody>
        {data?.jobApplicationsToTheJob.map((application) => (
          <JobApplicationsLaptop
            application={application}
            key={application._id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default JobApplicationsContainerTable;
