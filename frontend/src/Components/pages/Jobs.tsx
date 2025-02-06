"use client";

import useGetAllJobs from "@/features/alljobs/hooks/useGetAllJobs";

import FilterAndSearchContainer from "@/features/alljobs/components/FilterAndSearch/FilterAndSearchContainer";
import AllJobsContainer from "@/features/alljobs/components/Jobs/AllJobsContainer";
import PaginationButtons from "@/features/alljobs/components/Pagination/PaginationButtons";
import ToastContainer from "@/Components/Toast/ToastContainer";

import { useState } from "react";

const Jobs = () => {
  // Getting all jobs
  const {
    data,
    jobsLoading,
    pageNumber,
    jobLimit,
    setPageNumber,
    setSearchQuery,
  } = useGetAllJobs();

  const [userInput, setUserInput] = useState<string>("");
  const [bookmarkStatus, setBookmarkStatus] = useState<string>("");

  // Checks if the total page number is null or undefined. If it is undefined or null it returns the value 0  else returns the total page number
  const checkedTotalPageNumber = data?.totalPages ?? 0;

  return (
    <>
      <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col justify-evenly  gap-6">
        {/* Search & Filter Section */}
        <FilterAndSearchContainer
          setSearchQuery={setSearchQuery}
          userInput={userInput}
          setUserInput={setUserInput}
        />

        {/*Jobs Section*/}

        <AllJobsContainer
          jobsLoading={jobsLoading}
          data={data}
          setBookmarkStatus={setBookmarkStatus}
        />

        {/* Pagination */}
        <PaginationButtons
          jobsLoading={jobsLoading}
          data={data}
          userInput={userInput}
          checkedTotalPageNumber={checkedTotalPageNumber}
          jobLimit={jobLimit}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />

        {/* Toast Notification */}
        <ToastContainer value={bookmarkStatus} />
      </div>
    </>
  );
};

export default Jobs;
