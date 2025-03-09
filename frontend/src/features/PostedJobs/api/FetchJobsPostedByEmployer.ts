import api from "@/axios/axios";
import {
  PostedJobReturnDataSchema,
  PostedJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getJobsPostedByEmployer = async (
  id: string,
): Promise<PostedJobReturnType> => {
  try {
    const fetchJobsPostedByEmployer = await api.get(`jobs/employer/${id}`);

    const { data } = fetchJobsPostedByEmployer;

    const parsedData = await PostedJobReturnDataSchema.parseAsync(data);

    return parsedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

export default getJobsPostedByEmployer;
