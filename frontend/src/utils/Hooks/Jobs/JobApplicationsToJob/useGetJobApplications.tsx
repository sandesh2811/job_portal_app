import {
  JobApplicationToTheJobReturnDataSchema,
  JobApplicationToTheJobType,
} from "@/Validators/ReturnDataTypeValidators";

import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const fetchJobsPostedByEmployer = async (
  id: string
): Promise<JobApplicationToTheJobType> => {
  try {
    const res = await fetch(`/api/jobApplication/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const resData = await res.json();

    const data = await JobApplicationToTheJobReturnDataSchema.parseAsync(
      resData
    );

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.errors);

      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

const useGetJobApplications = (id: string) => {
  const { data, isLoading: jobApplicationsLoading } = useQuery({
    queryKey: ["jobApplications"],
    queryFn: () => fetchJobsPostedByEmployer(id),
  });

  return {
    data,
    jobApplicationsLoading,
  };
};

export default useGetJobApplications;
