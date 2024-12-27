import { useEffect, useState } from "react";

const useGetLatestJobs = () => {
  const [latestJobsList, setLatestJobsList] = useState<JobType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch the jobs posted by an employer
  const fetchLatestJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/jobs/latestjobs`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      const { latestJobs } = data;

      setLatestJobsList(latestJobs);
    } catch (error) {
      console.log("Oops something went wrong!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestJobs();
  }, []);

  return {
    latestJobsList,
  };
};

export default useGetLatestJobs;
