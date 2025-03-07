"use client";

import useGetLatestJobs from "@/features/latestjobs/hooks/useGetLatestJobs";

import JobCard from "@/Components/JobCard/JobCard";
import CardSkeleton from "@/Components/UI/CardSkeleton";

const LatestJobsContainer = () => {
  let { data, latestJobLoading } = useGetLatestJobs();

  if (latestJobLoading) {
    return <CardSkeleton />;
  }

  return (
    <div className="flex grid-cols-2 grid-rows-2 flex-wrap gap-4 mid:gap-6 md:grid lg:gap-10">
      {!latestJobLoading &&
        data?.latestJobs?.map((job) => <JobCard key={job._id} job={job} />)}
    </div>
  );
};

export default LatestJobsContainer;
