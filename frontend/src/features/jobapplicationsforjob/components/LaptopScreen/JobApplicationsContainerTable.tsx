import TableHeadings from "@/Components/UI/TableHeadings";
import { JobApplicationToTheJobType } from "@/Validators/ReturnDataTypeValidators";
import JobApplicationsLaptop from "@/features/jobapplicationsforjob/components/LaptopScreen/JobApplicationsLaptop";

export const headings = ["Job Title", "Applier Name", "Email", "Status"];

type JobApplicationsContainerTableProps = {
  data: JobApplicationToTheJobType | undefined;
};

const JobApplicationsContainerTable = ({
  data,
}: JobApplicationsContainerTableProps) => {
  return (
    <table className="hidden w-full mid:block">
      <thead className="border-2 border-primaryText">
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
