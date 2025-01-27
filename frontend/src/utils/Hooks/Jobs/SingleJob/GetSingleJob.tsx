import { useQuery } from "@tanstack/react-query";

const getSingleJob = async (id: string) => {
  try {
    const res = await fetch(`/api/jobs/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const useGetSingleJob = (id: string) => {
  const { data, isLoading: singleJobLoading } = useQuery<JobType>({
    queryKey: ["singleJob"],
    queryFn: () => getSingleJob(id),
  });

  return {
    data,
    singleJobLoading,
  };
};

export default useGetSingleJob;
