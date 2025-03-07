import api from "@/axios/axios";
import {
  SingleJobApplicationReturnType,
  SingleJobApplicationSchema,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getSingleJobApplication = async (
  applicationId: string,
): Promise<SingleJobApplicationReturnType> => {
  try {
    const response = await api.get(`/jobApplication/details/${applicationId}`);
    const { data } = response;
    const resData = await SingleJobApplicationSchema.parseAsync(data);

    return resData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};
export default getSingleJobApplication;
