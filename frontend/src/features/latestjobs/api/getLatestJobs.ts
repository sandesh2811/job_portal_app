import {
  LatestJobReturnType,
  LatestJobSchema,
} from "@/Validators/ReturnDataTypeValidators";

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

export default getLatestJobs;
