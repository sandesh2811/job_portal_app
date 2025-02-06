import JobCard from "@/Components/JobCard/JobCard";
import { Dispatch, SetStateAction } from "react";

type AllJobsContainerProps = {
  jobsLoading: boolean;
  data:
    | {
        success: boolean;
        message: string;
        jobs: JobType[];
      }
    | undefined;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const AllJobsContainer = ({
  jobsLoading,
  data,
  setBookmarkStatus,
}: AllJobsContainerProps) => {
  return (
    <>
      {!jobsLoading && (
        <div className="flex flex-col gap-4 mid:items-center md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center">
          {data?.jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              setBookmarkStatus={setBookmarkStatus}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllJobsContainer;
