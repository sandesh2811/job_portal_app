import { useQuery } from "@tanstack/react-query";

const fetchJobsPostedByEmployer = async (id: string) => {
  try {
    const res = await fetch(`/api/jobs/employer/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Oops something went wrong!", error);
  }
};

const useGetJobsPostedByEmployer = (id: string) => {
  const { data, isLoading: jobsPostedByEmployerLoading } = useQuery<JobType[]>({
    queryKey: ["jobsPostedByEmployer"],
    queryFn: () => fetchJobsPostedByEmployer(id),
  });

  return {
    data,
    jobsPostedByEmployerLoading,
  };
};

export default useGetJobsPostedByEmployer;
