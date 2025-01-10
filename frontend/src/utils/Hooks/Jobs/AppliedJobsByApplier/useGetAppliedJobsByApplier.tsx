import { useEffect, useState } from "react";

const useGetAppliedJobsByApplier = (id: string) => {
  const [appliedJobs, setAppliedJobs] = useState<JobApplicationType<JobType>[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch the jobs posted by an employer
  const fetchJobsPostedByEmployer = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/jobApplication/applier/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await res.json();
      const { jobApplicationsByApplier } = data;

      setAppliedJobs(jobApplicationsByApplier);
    } catch (error) {
      console.log("Oops something went wrong!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsPostedByEmployer();
  }, []);

  return {
    loading,
    appliedJobs,
  };
};

export default useGetAppliedJobsByApplier;
