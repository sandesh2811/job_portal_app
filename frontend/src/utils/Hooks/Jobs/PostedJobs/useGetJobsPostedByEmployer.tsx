import {
  PostedJobReturnDataSchema,
  PostedJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const fetchJobsPostedByEmployer = async (
  id: string
): Promise<PostedJobReturnType> => {
  try {
    const res = await fetch(`/api/jobs/employer/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const resData = await res.json();
    const data = await PostedJobReturnDataSchema.parseAsync(resData);

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

const useGetJobsPostedByEmployer = (id: string) => {
  const { data, isLoading: jobsPostedByEmployerLoading } = useQuery({
    queryKey: ["jobsPostedByEmployer"],
    queryFn: () => fetchJobsPostedByEmployer(id),
  });

  return {
    data,
    jobsPostedByEmployerLoading,
  };
};

export default useGetJobsPostedByEmployer;
