"use client";

import { useEffect, useState } from "react";

const GetSingleJob = (id: string) => {
  const [job, setJob] = useState<JobType>();
  const getSingleJob = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
      const data = await res.json();
      const { job } = data;

      setJob(job);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
  }, []);

  return {
    job,
  };
};

export default GetSingleJob;
