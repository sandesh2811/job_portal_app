import useGetSelectedFilters from "../../GetSelectedFilters/useGetSelectedFilters";
import {
  JobReturnDataSchema,
  JobReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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

const useGetAllJobs = () => {
  const [jobLimit, setJobLimit] = useState<number>(4);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const selectedFilters = useGetSelectedFilters();
  const { title, salary, experience, position, location } = selectedFilters;

  const { data, isLoading: jobsLoading } = useQuery({
    queryKey: [
      "allJobs",
      jobLimit,
      pageNumber,
      searchQuery,
      title,
      salary,
      experience,
      position,
      location,
    ],
    queryFn: () =>
      getAllJobs({
        jobLimit,
        pageNumber,
        searchQuery,
        title,
        salary,
        experience,
        position,
        location,
      }),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    jobsLoading,
    jobLimit,
    pageNumber,
    setPageNumber,
    setSearchQuery,
  };
};

export default useGetAllJobs;
