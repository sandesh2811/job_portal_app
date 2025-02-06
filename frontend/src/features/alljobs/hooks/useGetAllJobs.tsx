import useGetSelectedFilters from "@/features/alljobs/hooks/useGetSelectedFilters";
import getAllJobs from "@/features/alljobs/api/getAllJobs";

import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
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
