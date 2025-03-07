import api from "@/axios/axios";
import {
  AppliedJobReturnDataSchema,
  AppliedJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";
import { z } from "zod";

const fetchJobsPostedByEmployer = async (
  id: string,
): Promise<AppliedJobReturnType> => {
  try {
    const getJobsPostedByEmployer = await api.get(
      `jobApplication/applier/${id}`,
    );

    const { data } = getJobsPostedByEmployer;

    const parsedData = await AppliedJobReturnDataSchema.parseAsync(data);

    return parsedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

export default fetchJobsPostedByEmployer;
