import {
  JobApplicationToTheJobReturnDataSchema,
  JobApplicationToTheJobType,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getJobsApplicationsToTheJob = async (
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

export default getJobsApplicationsToTheJob;
