import getSingleJob from "@/features/jobdetails/api/getSingleJob";

import { useQuery } from "@tanstack/react-query";

const useGetSingleJob = (id: string) => {
  const { data, isLoading: singleJobLoading } = useQuery({
    queryKey: ["singleJob"],
    queryFn: () => getSingleJob(id),
  });

  return {
    data,
    singleJobLoading,
  };
};

export default useGetSingleJob;
