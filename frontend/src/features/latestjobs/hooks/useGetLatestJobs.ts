import { useQuery } from "@tanstack/react-query";

import getLatestJobs from "@/features/latestjobs/api/getLatestJobs";

const useGetLatestJobs = () => {
  const { data, isLoading: latestJobLoading } = useQuery({
    queryKey: ["latestJobs"],
    queryFn: getLatestJobs,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    data,
    latestJobLoading,
  };
};

export default useGetLatestJobs;
