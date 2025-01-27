import { useQuery } from "@tanstack/react-query";

const getLatestJobs = async () => {
  try {
    const res = await fetch(`/api/jobs/latestjobs`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    const { latestJobs } = data;

    if (res.ok) {
      return latestJobs;
    }
  } catch (error) {
    console.log("Oops! Something went wrong!", error);
    // throw new Error("Oops! Something went wrong!");
  }
};

const useGetLatestJobs = () => {
  const { data: latestJobsList, isLoading: latestJobLoading } = useQuery<
    JobType[]
  >({
    queryFn: getLatestJobs,
    queryKey: ["latestJobs"],
  });

  return {
    latestJobsList,
    latestJobLoading,
  };
};

export default useGetLatestJobs;
