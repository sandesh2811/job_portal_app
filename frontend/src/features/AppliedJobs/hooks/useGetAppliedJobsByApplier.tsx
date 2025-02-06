import fetchJobsPostedByEmployer from "@/features/AppliedJobs/api/GetJobApplicationsAppliedByApplier";

import { useQuery } from "@tanstack/react-query";

const useGetAppliedJobsByApplier = (id: string) => {
  const {
    data,
    isLoading: appliedJobsLoading,
    isError: appliedJobsError,
    error,
  } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: () => fetchJobsPostedByEmployer(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    data,
    appliedJobsLoading,
    appliedJobsError,
    error,
  };
};

export default useGetAppliedJobsByApplier;
