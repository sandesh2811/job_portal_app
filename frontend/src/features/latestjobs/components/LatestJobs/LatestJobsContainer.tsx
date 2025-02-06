import useGetLatestJobs from "@/features/latestjobs/hooks/useGetLatestJobs";

import JobCard from "@/Components/JobCard/JobCard";

import { Dispatch, SetStateAction } from "react";

type LatestJobsContainerProps = {
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const LatestJobsContainer = ({
  setBookmarkStatus,
}: LatestJobsContainerProps) => {
  const { data, latestJobLoading } = useGetLatestJobs();

  return (
    <div
      className="flex flex-col gap-8 mid:items-center 
    md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center"
    >
      {!latestJobLoading &&
        data?.latestJobs?.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            setBookmarkStatus={setBookmarkStatus}
          />
        ))}
    </div>
  );
};

export default LatestJobsContainer;
