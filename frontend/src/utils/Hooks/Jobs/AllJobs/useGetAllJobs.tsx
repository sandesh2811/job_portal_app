import { useEffect, useState } from "react";

const useGetAllJobs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allJobs, setAllJobs] = useState<JobType[]>([]);

  const getAllJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "GET",
      });
      const data = await res.json();
      setAllJobs(data.jobs);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);
  return {
    loading,
    allJobs,
  };
};

export default useGetAllJobs;
