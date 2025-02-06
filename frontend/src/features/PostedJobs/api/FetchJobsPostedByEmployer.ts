import {
  PostedJobReturnDataSchema,
  PostedJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getJobsPostedByEmployer = async (
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

export default getJobsPostedByEmployer;
