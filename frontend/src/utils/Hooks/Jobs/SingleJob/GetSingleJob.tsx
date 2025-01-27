import {
  SingleJobReturnDataSchema,
  SingleJobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const getSingleJob = async (id: string): Promise<SingleJobReturnType> => {
  try {
    const res = await fetch(`/api/jobs/${id}`);
    const resData = await res.json();
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

const useGetSingleJob = (id: string) => {
  const { data, isLoading: singleJobLoading } = useQuery({
    queryKey: ["singleJob"],
    queryFn: () => getSingleJob(id),
  });

  return {
    data,
    singleJobLoading,
  };
};

export default useGetSingleJob;
