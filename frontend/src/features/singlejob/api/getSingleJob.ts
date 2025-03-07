import api from "@/axios/axios";
import {
  SingleJobReturnDataSchema,
  SingleJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";
import { z } from "zod";

const getSingleJob = async (id: string): Promise<SingleJobReturnType> => {
  try {
    const response = await api.get(`/jobs/${id}`);

    const { data } = response;

    const resData = await SingleJobReturnDataSchema.parseAsync(data);

    return resData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Data validation failed");
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

export default getSingleJob;
