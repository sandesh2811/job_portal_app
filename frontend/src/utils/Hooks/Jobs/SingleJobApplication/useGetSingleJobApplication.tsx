import {
  SingleJobApplicationReturnType,
  SingleJobApplicationSchema,
} from "@/Validators/ReturnDataTypeValidators";
import { useQuery } from "@tanstack/react-query";
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

const useGetSingleJobApplication = (applicationId: string) => {
  const { data, isLoading: singleApplicationLoading } = useQuery({
    queryKey: ["singleApplication"],
    queryFn: () => getSingleJobApplication(applicationId),
  });

  return {
    data,
    singleApplicationLoading,
  };
};

export default useGetSingleJobApplication;
