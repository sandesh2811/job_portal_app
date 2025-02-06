import {
  AppliedJobReturnDataSchema,
  AppliedJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";
import { z } from "zod";

const fetchJobsPostedByEmployer = async (
  id: string
): Promise<AppliedJobReturnType> => {
  try {
    const res = await fetch(`/api/jobApplication/applier/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const resData = await res.json();

    const data = await AppliedJobReturnDataSchema.parseAsync(resData);

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

export default fetchJobsPostedByEmployer;
