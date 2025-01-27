import { useQuery } from "@tanstack/react-query";

const fetchJobsPostedByEmployer = async (id: string) => {
  try {
    const res = await fetch(`/api/jobApplication/applier/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Oops something went wrong!", error);
  }
};

const useGetAppliedJobsByApplier = (id: string) => {
  const { data, isLoading: appliedJobsLoading } = useQuery<JobType[]>({
    queryKey: ["appliedJobs"],
    queryFn: () => fetchJobsPostedByEmployer(id),
  });
  if (!appliedJobsLoading) {
    console.log(data);
  }

  return {
    data,
    appliedJobsLoading,
  };
};

export default useGetAppliedJobsByApplier;
