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
};

const AllJobsContainer = ({ jobsLoading, data }: AllJobsContainerProps) => {
  return (
    <>
      {!jobsLoading && (
        <div className="flex grid-cols-2 grid-rows-2 flex-wrap gap-4 mid:gap-6 md:grid lg:gap-10">
          {data?.jobs.map((job) => <JobCard key={job._id} job={job} />)}
        </div>
      )}
    </>
  );
};

export default AllJobsContainer;
