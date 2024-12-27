import { useEffect, useState } from "react";

const useGetSingleJobApplication = (applicationId: string) => {
  const [jobApplication, setJobApplication] =
    useState<JobApplicationType<JobType>>();
  const getSingleJob = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/jobApplication/details/${applicationId}`
      );
      const data = await res.json();
      const { singleJob } = data;

      setJobApplication(singleJob);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
  }, []);
  return {
    jobApplication,
  };
};

export default useGetSingleJobApplication;
