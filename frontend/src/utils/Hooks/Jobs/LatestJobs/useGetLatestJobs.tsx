import {
  LatestJobReturnType,
  LatestJobSchema,
} from "@/Validators/ReturnDataTypeValidators";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const getLatestJobs = async (): Promise<LatestJobReturnType> => {
  try {
    const res = await fetch(`/api/jobs/latestjobs`, {
      method: "GET",
      credentials: "include",
    });
    const resData = await res.json();
    const data = await LatestJobSchema.parseAsync(resData);

    return data;
  } catch (error) {
    throw new Error("Failed to fetch job applications!");
  }
};

const useGetLatestJobs = () => {
  const { data, isLoading: latestJobLoading } = useQuery({
    queryFn: getLatestJobs,
    queryKey: ["latestJobs"],
  });

  return {
    data,
    latestJobLoading,
  };
};

export default useGetLatestJobs;
