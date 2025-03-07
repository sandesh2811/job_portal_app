import api from "@/axios/axios";
import {
  JobReturnDataSchema,
  JobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

const getAllJobs = async ({
  pageNumber,
  jobLimit,
  searchQuery,
  title,
  salary,
  experience,
  position,
  location,
}: QueryParams): Promise<JobReturnType> => {
  try {
    const fetchAllJobs = await api.get("jobs", {
      params: {
        page: pageNumber,
        limit: jobLimit,
        searchQuery: searchQuery,
        title: title,
        salaryFrom: salary.from,
        salaryTo: salary.to,
        experience: experience,
        position: position,
        location: location,
      },
    });

    const { data } = fetchAllJobs;

    const parsedData = await JobReturnDataSchema.parseAsync(data);

    return parsedData;
  } catch (error) {
    throw new Error("Oops! Something went wrong!");
  }
};

export default getAllJobs;
