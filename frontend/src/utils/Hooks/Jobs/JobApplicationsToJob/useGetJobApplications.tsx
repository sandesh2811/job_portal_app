import { useQuery } from "@tanstack/react-query";

const fetchJobsPostedByEmployer = async (id: string) => {
  try {
    const res = await fetch(`/api/jobApplication/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Oops something went wrong!", error);
  }
};

const useGetJobApplications = (id: string) => {
  const { data, isLoading: jobApplicationsLoading } = useQuery<
    JobApplicationType<JobType>
  >({
    queryKey: ["jobApplications"],
    queryFn: () => fetchJobsPostedByEmployer(id),
  });

  return {
    data,
    jobApplicationsLoading,
  };
};

export default useGetJobApplications;
