import PostedJobsLaptop from "@/features/PostedJobs/components/LaptopScreen/PostedJobsLaptop";
import TableHeadings from "@/Components/UI/TableHeadings";

export const headings = ["Job Title", "Company Name", "Status", "Posted On"];

type PostedJobsTableContainerProps = {
  newPostedJobs: JobType[] | undefined;
};

const PostedJobsTableContainer = ({
  newPostedJobs,
}: PostedJobsTableContainerProps) => {
  return (
    <>
      <table className="hidden w-full mid:block">
        <thead className="border-2 border-primaryText">
          <TableHeadings data={headings} />
        </thead>
        <tbody>
          {newPostedJobs?.map((job) => (
            <PostedJobsLaptop job={job} key={job._id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PostedJobsTableContainer;
