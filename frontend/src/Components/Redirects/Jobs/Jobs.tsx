"use client";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";
import Input from "@/Components/UI/Input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Jobs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allJobs, setAllJobs] = useState<JobType[]>([]);

  const getAllJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "GET",
      });
      const data = await res.json();
      setAllJobs(data.jobs);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <div className="min-h-[80vh] bg-yellow-400 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col  gap-6">
        {/* Searching Section */}
        <div className="flex justify-center mid:justify-start">
          <Input type="string" name="search" placeholder="Search..." />
          <Button className="rounded-none">Search</Button>
        </div>

        {/*Jobs Section*/}
        {!loading && (
          <div className="flex flex-col gap-4 mid:items-center md:flex-row flex-wrap md:justify-center">
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
                    href="/"
                    className="flex gap-2 items-center underline underline-offset-4 text-sm"
                  >
                    See more <GoArrowRight />
                  </Link>
                  <Button
                    buttonType="Apply"
                    size="small"
                    className="text-primaryText flex gap-2 items-center "
                  >
                    Apply <GoArrowRight />
                  </Button>
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
