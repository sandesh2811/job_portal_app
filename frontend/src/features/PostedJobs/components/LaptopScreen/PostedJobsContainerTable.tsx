import PostedJobsLaptop from "@/features/PostedJobs/components/LaptopScreen/PostedJobsLaptop";
import TableHeadings from "@/Components/UI/TableHeadings";

const headings = ["Company Name", "Job Title", "Status", "Posted On"];

type PostedJobsTableContainerProps = {
  newPostedJobs: JobType[] | undefined;
};

const PostedJobsTableContainer = ({
  newPostedJobs,
}: PostedJobsTableContainerProps) => {
  return (
    <table className="hidden mid:block w-full">
      <thead className="border-b-[1.3px]">
        <TableHeadings data={headings} />
      </thead>
      <tbody>
        {newPostedJobs?.map((job) => (
          <PostedJobsLaptop job={job} key={job._id} />
        ))}
      </tbody>
    </table>
  );
};

export default PostedJobsTableContainer;
