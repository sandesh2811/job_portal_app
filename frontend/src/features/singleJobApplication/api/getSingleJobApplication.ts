import {
  SingleJobApplicationReturnType,
  SingleJobApplicationSchema,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getSingleJobApplication = async (
  applicationId: string
): Promise<SingleJobApplicationReturnType> => {
  try {
    const res = await fetch(`/api/jobApplication/details/${applicationId}`);
    const resData = await res.json();

    const data = await SingleJobApplicationSchema.parseAsync(resData);

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};
export default getSingleJobApplication;
