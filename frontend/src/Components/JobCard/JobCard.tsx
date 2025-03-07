import handleBookmarks from "@/features/alljobs/utils/HandleBookmarks";
import GetLoginData from "@/utils/GetLoginData";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";
import { GoArrowRight, GoBookmark, GoBookmarkFill } from "react-icons/go";

import { useState } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

type JobCardProps = {
  job: JobType;
};

const JobCard = ({ job }: JobCardProps) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<BookmarkedJobType>({});

  // Get user login data
  const { loginData } = GetLoginData();

  const queryClient = useQueryClient();

  return (
    <Card key={job._id}>
      {/* Top */}
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl mid:text-2xl xl:text-[2rem] xl:leading-[2rem]">
            {job.title}
          </h3>
          {!bookmarkedJobs[job._id] ? (
            <GoBookmark
              className={
                loginData.role === "employer"
                  ? "cursor-not-allowed text-xl mid:text-2xl xl:text-3xl"
                  : "cursor-pointer text-xl mid:text-2xl xl:text-3xl"
              }
              onClick={() => {
                handleBookmarks(
                  queryClient,
                  job._id,
                  loginData,
                  setBookmarkedJobs,
                );
              }}
            />
          ) : (
            <GoBookmarkFill
              className={
                loginData.role === "employer"
                  ? "cursor-not-allowed text-xl mid:text-2xl xl:text-3xl"
                  : "cursor-pointer text-xl mid:text-2xl xl:text-3xl"
              }
              onClick={() => {
                handleBookmarks(
                  queryClient,
                  job._id,
                  loginData,
                  setBookmarkedJobs,
                );
              }}
            />
          )}
        </div>

        <div className="flex flex-col justify-between">
          <span className="text-sm text-white/80 midLg:text-base">
            {job.companyName}
          </span>
          <span className="text-sm text-white/80 midLg:text-base">
            {job.location}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <Link
          href={`jobs/${job._id}`}
          className="flex items-center gap-2 text-sm mid:text-lg"
        >
          See more <GoArrowRight className="text-xl xl:text-[28px]" />
        </Link>
        <Link href={`/apply/${job?._id}`}>
          <Button buttonType="Apply" className="flex items-center gap-2 px-0">
            Apply <GoArrowRight className="text-xl xl:text-[28px]" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default JobCard;
