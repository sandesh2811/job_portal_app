"use client";

import useGetLatestJobs from "@/utils/Hooks/Jobs/LatestJobs/useGetLatestJobs";
import GetLoginData from "@/utils/Hooks/GetLoginData";
import setBookmark from "@/Actions/JobBookmarks/SetBookmarks/setBookmark";

import Card from "@/Components/UI/Card";
import { GoArrowRight, GoBookmark, GoBookmarkFill, GoX } from "react-icons/go";
import Button from "@/Components/UI/Button";
import Toast from "@/Components/UI/Toast";

import Link from "next/link";
import { useState } from "react";

const LatestJobs = () => {
  const { data, latestJobLoading } = useGetLatestJobs();

  const [bookmarkedJobs, setBookmarkedJobs] = useState<BookmarkedJobType>({});
  const [bookmarkStatus, setBookmarkStatus] = useState<string>("");

  // Get user login data
  const { loginData } = GetLoginData();

  // Handle bookmark clicks
  const handleBookmarks = async (jobId: string, userId: string) => {
    // Set or remove bookmarks in database
    const data = await setBookmark(jobId, userId);

    // Set the bookmarkedjobs for icon switching
    setBookmarkedJobs((prev) => ({
      ...prev,
      [jobId]: prev[jobId] ?? false ? false : true,
    }));

    setBookmarkStatus(data?.message);

    let timerId = setTimeout(() => {
      setBookmarkStatus("");
      clearTimeout(timerId);
    }, 3000);
  };

  return (
    <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col justify-evenly tracking-wide ">
      <h2 className="text-4xl font-semibold">Latest Job Postings</h2>

      {/* Card Section */}
      <div
        className="flex flex-col gap-8 mid:items-center 
      md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center"
      >
        {!latestJobLoading &&
          data?.latestJobs?.map((job) => (
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
                        handleBookmarks(job._id, loginData.userId);
                      }}
                    />
                  ) : (
                    <GoBookmarkFill
                      size={25}
                      className="cursor-pointer"
                      onClick={() => {
                        handleBookmarks(job._id, loginData.userId);
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
                    className=" bg-background text-primaryText  flex gap-2 items-center "
                  >
                    Apply <GoArrowRight />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
      </div>

      {/* Toast notification */}
      <div
        className={
          bookmarkStatus !== ""
            ? "absolute top-5 mid:right-10 right-2"
            : "hidden absolute top-5 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{bookmarkStatus}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </div>
  );
};

export default LatestJobs;
