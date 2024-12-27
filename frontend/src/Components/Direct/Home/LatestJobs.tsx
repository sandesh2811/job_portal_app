"use client";

import Card from "@/Components/UI/Card";
import { GoArrowRight } from "react-icons/go";
import Button from "@/Components/UI/Button";

import Link from "next/link";
import useGetLatestJobs from "@/utils/Hooks/Jobs/LatestJobs/useGetLatestJobs";

const LatestJobs = () => {
  const { latestJobsList } = useGetLatestJobs();

  return (
    <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col justify-evenly tracking-wide ">
      <h2 className="text-2xl font-semibold">Latest Job Postings</h2>

      {/* Card Section */}
      <div
        className="flex flex-col gap-6 mid:items-center 
      md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center
      "
      >
        {latestJobsList.map((job) => (
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
                  className=" bg-background text-primaryText  flex gap-2 items-center "
                >
                  Apply <GoArrowRight />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
