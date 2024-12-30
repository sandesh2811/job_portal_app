"use client";

import useGetAllJobs from "@/utils/Hooks/Jobs/AllJobs/useGetAllJobs";
import {
  DecreasePageNumber,
  IncreasePageNumber,
} from "@/utils/Pagination/SetPageNumber";
import { searchQuery } from "@/utils/Pagination/SetSearchQuery";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";
import Input from "@/Components/UI/Input";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import Link from "next/link";
import { useState } from "react";

const Jobs = () => {
  const {
    loading,
    allJobs,
    totalPages,
    pageNumber,
    jobLimit,
    setPageNumber,
    setSearchQuery,
  } = useGetAllJobs();
  const [userInput, setUserInput] = useState<string>("");

  // Checks if the total page number is null or undefined. If it is undefined or null it returns the value 0  else returns the total page number
  const checkedTotalPageNumber = totalPages ?? 0;

  return (
    <>
      <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col justify-evenly  gap-6">
        {/* Searching Section */}
        <div className="flex justify-center mid:justify-start">
          <Input
            type="string"
            name="search"
            placeholder="Search..."
            className="rounded-none"
            autoComplete="off"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button
            className="rounded-none"
            onClick={() => searchQuery(userInput, setSearchQuery)}
          >
            Search
          </Button>
        </div>

        {/*Jobs Section*/}
        {!loading && (
          <div className="flex flex-col gap-4 mid:items-center md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center">
            {allJobs.length === 0 ? (
              <h3 className="h-[60vh] w-full bg-slate-400">
                Couldn't find any jobs!
              </h3>
            ) : (
              allJobs.map((job: JobType) => (
                <Card key={job._id}>
                  {/* Top */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl">{job.title}</h3>
                    <div className="flex flex-col justify-between">
                      <span className="text-sm">{job.companyName}</span>
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center ">
                    <Link
                      href={`jobs/${job._id}`}
                      className="flex gap-2 items-center underline underline-offset-4 text-sm"
                    >
                      See more <GoArrowRight />
                    </Link>
                    <Link href={`/apply/${job?._id}`}>
                      <Button
                        buttonType="Apply"
                        size="small"
                        className=" bg-background text-primaryText flex gap-2 items-center "
                      >
                        Apply <GoArrowRight />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <Button
            size="medium"
            className={
              pageNumber === 1 || pageNumber <= 0
                ? "flex gap-1 items-center cursor-not-allowed"
                : "flex gap-1 items-center"
            }
            disabled={pageNumber === 1 || pageNumber <= 0}
            onClick={() => DecreasePageNumber(setPageNumber)}
          >
            <GoArrowLeft /> Prev
          </Button>
          <Button
            size="medium"
            className={
              pageNumber === checkedTotalPageNumber ||
              pageNumber > checkedTotalPageNumber ||
              (userInput !== "" && allJobs.length < jobLimit)
                ? "flex gap-1 items-center cursor-not-allowed"
                : "flex gap-1 items-center"
            }
            disabled={
              (pageNumber === checkedTotalPageNumber ||
                pageNumber > checkedTotalPageNumber ||
                (userInput !== "" && allJobs.length < jobLimit)) &&
              true
            }
            onClick={() => IncreasePageNumber(setPageNumber)}
          >
            Next <GoArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Jobs;
