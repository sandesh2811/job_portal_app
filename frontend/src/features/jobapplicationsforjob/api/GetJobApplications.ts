import api from "@/axios/axios";
import {
  JobApplicationToTheJobReturnDataSchema,
  JobApplicationToTheJobType,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getJobsApplicationsToTheJob = async (
  id: string,
): Promise<JobApplicationToTheJobType> => {
  try {
    const fetchJobApplicationsToTheJob = await api.get(`jobApplication/${id}`);

    const { data } = fetchJobApplicationsToTheJob;

    const parsedData =
      await JobApplicationToTheJobReturnDataSchema.parseAsync(data);

    return parsedData;
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
