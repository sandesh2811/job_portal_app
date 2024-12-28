import { useEffect, useState } from "react";

const useGetAllJobs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allJobs, setAllJobs] = useState<JobType[]>([]);
  const [jobLimit, setJobLimit] = useState<number>(4);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>();

  const getAllJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/jobs?page=${pageNumber}&limit=${jobLimit}&searchQuery=${searchQuery}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setAllJobs(data.jobs);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [pageNumber, searchQuery]);

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
