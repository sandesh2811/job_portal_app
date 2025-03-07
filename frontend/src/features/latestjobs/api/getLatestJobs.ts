import api from "@/axios/axios";
import {
  LatestJobReturnType,
  LatestJobSchema,
} from "@/Validators/ReturnDataTypeValidators";
import axios from "axios";

const getLatestJobs = async (): Promise<LatestJobReturnType> => {
  try {
    const fetchLatestJobs = await api.get("/jobs/latestjobs");

    const { data } = fetchLatestJobs;

    const parsedData = await LatestJobSchema.parseAsync(data);

    return parsedData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success,
        message: error.response.data.message,
        latestJobs: [],
      };
    }

    return {
      success: false,
      message: "Couldn't fetch latest jobs. Please try again later!",
      latestJobs: [],
    };
  }
};

export default getLatestJobs;
