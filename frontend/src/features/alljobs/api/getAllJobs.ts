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
    const res = await fetch(
      `/api/jobs?page=${pageNumber}&limit=${jobLimit}&searchQuery=${searchQuery}&title=${title}&salaryFrom=${salary.from}&salaryTo=${salary.to}&experience=${experience}&position=${position}&location=${location}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const resData = await res.json();
    const data = await JobReturnDataSchema.parseAsync(resData);

    return data;
  } catch (error) {
    throw new Error("Oops! Something went wrong!");
  }
};

export default getAllJobs;
