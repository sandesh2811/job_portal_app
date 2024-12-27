"use client";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";
import Input from "@/Components/UI/Input";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import Link from "next/link";
import useGetAllJobs from "@/utils/Hooks/Jobs/AllJobs/useGetAllJobs";

const Jobs = () => {
  const { loading, allJobs } = useGetAllJobs();

  return (
    <>
      <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col  gap-6">
        {/* Searching Section */}
        <div className="flex justify-center mid:justify-start">
          <Input
            type="string"
            name="search"
            placeholder="Search..."
            className="rounded-none"
          />
          <Button className="rounded-none">Search</Button>
        </div>

        {/*Jobs Section*/}
        {!loading && (
          <div className="flex flex-col gap-4 mid:items-center md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center">
            {allJobs.map((job: JobType) => (
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
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <Button size="small" className="flex gap-1 items-center">
            <GoArrowLeft /> Prev
          </Button>
          <Button size="small" className="flex gap-1 items-center">
            Next <GoArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Jobs;
