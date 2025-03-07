import getSingleJobApplication from "@/features/singleJobApplication/api/getSingleJobApplication";

import { useQuery } from "@tanstack/react-query";

const useGetSingleJobApplication = (applicationId: string) => {
  const { data, isLoading: singleApplicationLoading } = useQuery({
    queryKey: ["singleApplication", "singleJob"],
    queryFn: () => getSingleJobApplication(applicationId),
  });

  return {
    data,
    singleApplicationLoading,
  };
};

export default useGetSingleJobApplication;
