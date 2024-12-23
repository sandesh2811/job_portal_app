"use client";

import { useEffect, useState } from "react";

const GetJobsPostedByEmployer = (id: string) => {
  const [postedJobs, setPostedJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJobsPostedByEmployer = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/jobs/employer/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      const { jobs } = data;

      setPostedJobs(jobs);
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
    postedJobs,
  };
};

export default GetJobsPostedByEmployer;
