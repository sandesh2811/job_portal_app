import { useQuery } from "@tanstack/react-query";

const getSingleJob = async (applicationId: string) => {
  try {
    const res = await fetch(`/api/jobApplication/details/${applicationId}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const useGetSingleJobApplication = (applicationId: string) => {
  const { data, isLoading: singleApplicationLoading } = useQuery<JobType>({
    queryKey: ["singleApplication"],
    queryFn: () => getSingleJob(applicationId),
  });

  return {
    data,
    singleApplicationLoading,
  };
};

export default useGetSingleJobApplication;
