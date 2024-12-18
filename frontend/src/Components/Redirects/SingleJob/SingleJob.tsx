"use client";

import Button from "@/Components/UI/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Skills = ["React", "Javascript", "Tailwind CSS", "Nodejs"];

const SingleJob = ({ params }: JobProps) => {
  const [job, setJob] = useState<JobType>();
  const getSingleJob = async () => {
    const { id } = await params;
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
      const data = await res.json();
      const { job } = data;

      setJob(job);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
  }, []);

  return (
    <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col justify-center  gap-6 bg-[#282828]/30">
      {/* Job Introduction */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl mid:text-3xl">{job?.title}</h2>
        <div className="text-sm mid:text-base mb-3 flex flex-col gap-1">
          <span>Job Description:</span>
          <p>{job?.description}</p>
        </div>
        <span className="text-sm mid:text-base">Salary: Rs {job?.salary}</span>
        <span className="text-sm mid:text-base">
          Type: {job?.position} Remote
        </span>
        <span className="text-sm mid:text-base">
          Required Candidates: {job?.required}
        </span>
        <span className="text-sm mid:text-base">
          Experience: {job?.experience} years
        </span>
      </div>
      {/* Required Skills  */}
      <div>
        <span className="text-sm mid:text-base">Required Skills:</span>
        {Skills.map((skill, idx) => (
          <li key={idx} className=" text-sm mid:text-base">
            {skill}
          </li>
        ))}
      </div>
      {/*  Company Details */}
      <div className="flex flex-col gap-2">
        <span className="text-sm mid:text-base">
          Company name: {job?.companyName}
        </span>
        <span className="text-sm mid:text-base">Location: {job?.location}</span>
      </div>
      {/* CTA Buttons */}
      <div className="flex justify-between items-center ">
        <Link
          href="/jobs"
          className="flex gap-2 items-center underline underline-offset-4 text-sm mid:text-base"
        >
          <GoArrowLeft />
          Return
        </Link>
        <Link href={`/apply/${job?._id}`}>
          <Button
            buttonType="Apply"
            size="small"
            className="flex gap-2 items-center "
          >
            Apply <GoArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleJob;
