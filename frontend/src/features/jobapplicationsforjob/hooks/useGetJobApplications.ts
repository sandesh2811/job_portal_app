import getJobsApplicationsToTheJob from "@/features/jobapplicationsforjob/api/GetJobApplications";

import { useQuery } from "@tanstack/react-query";

const useGetJobApplications = (id: string) => {
  const { data, isLoading: jobApplicationsLoading } = useQuery({
    queryKey: ["jobApplications"],
    queryFn: () => getJobsApplicationsToTheJob(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    data,
    jobApplicationsLoading,
  };
};

export default useGetJobApplications;
