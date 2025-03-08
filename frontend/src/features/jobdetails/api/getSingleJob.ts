import api from "@/axios/axios";
import {
  SingleJobReturnDataSchema,
  SingleJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getSingleJob = async (id: string): Promise<SingleJobReturnType> => {
  try {
    const res = await api.get(`/jobs/${id}`);

    const resData = res.data;

    const data = await SingleJobReturnDataSchema.parseAsync(resData);

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

export default getSingleJob;
