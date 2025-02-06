import handleBookmarks from "@/features/alljobs/utils/HandleBookmarks";
import GetLoginData from "@/utils/GetLoginData";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";
import { GoArrowRight, GoBookmark, GoBookmarkFill } from "react-icons/go";

import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

type JobCardProps = {
  job: JobType;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const JobCard = ({ job, setBookmarkStatus }: JobCardProps) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<BookmarkedJobType>({});

  // Get user login data
  const { loginData } = GetLoginData();

  return (
    <Card key={job._id}>
      {/* Top */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">{job.title}</h3>
          {!bookmarkedJobs[job._id] ? (
            <GoBookmark
              size={25}
              className="cursor-pointer"
              onClick={() => {
                handleBookmarks(
                  job._id,
                  loginData.userId,
                  setBookmarkedJobs,
                  setBookmarkStatus
                );
              }}
            />
          ) : (
            <GoBookmarkFill
              size={25}
              className="cursor-pointer"
              onClick={() => {
                handleBookmarks(
                  job._id,
                  loginData.userId,
                  setBookmarkedJobs,
                  setBookmarkStatus
                );
              }}
            />
          )}
        </div>
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
  );
};

export default JobCard;
