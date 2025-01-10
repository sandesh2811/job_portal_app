import { useEffect, useState } from "react";
import useGetSelectedFilters from "../../GetSelectedFilters/useGetSelectedFilters";

const useGetAllJobs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allJobs, setAllJobs] = useState<JobType[]>([]);
  const [jobLimit, setJobLimit] = useState<number>(4);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>();
  const selectedFilters = useGetSelectedFilters();
  const { title, salary, experience, position, location } = selectedFilters;

  const getAllJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/jobs?page=${pageNumber}&limit=${jobLimit}&searchQuery=${searchQuery}&title=${title}&salaryFrom=${salary.from}&salaryTo=${salary.to}&experience=${experience}&position=${position}&location=${location}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setAllJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [pageNumber, searchQuery, selectedFilters]);

  return {
    loading,
    allJobs,
    totalPages,
    jobLimit,
    pageNumber,
    setPageNumber,
    setSearchQuery,
  };
};

export default useGetAllJobs;
