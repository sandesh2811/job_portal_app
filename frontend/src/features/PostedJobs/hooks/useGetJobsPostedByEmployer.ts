import getJobsPostedByEmployer from "@/features/PostedJobs/api/FetchJobsPostedByEmployer";

import { useQuery } from "@tanstack/react-query";

const useGetJobsPostedByEmployer = (id: string) => {
  const { data, isLoading: jobsPostedByEmployerLoading } = useQuery({
    queryKey: ["jobsPostedByEmployer"],
    queryFn: () => getJobsPostedByEmployer(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    data,
    jobsPostedByEmployerLoading,
  };
};

export default useGetJobsPostedByEmployer;
