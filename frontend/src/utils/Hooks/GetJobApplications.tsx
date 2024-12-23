import { useState, useEffect } from "react";

const GetJobApplications = (id: string) => {
  const [jobApplications, setJobApplications] = useState<JobApplicationType[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch the jobs posted by an employer
  const fetchJobsPostedByEmployer = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/jobApplication/${id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      const { jobApplicationsToTheJob } = data;

      setJobApplications(jobApplicationsToTheJob);
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
    jobApplications,
  };
};

export default GetJobApplications;
