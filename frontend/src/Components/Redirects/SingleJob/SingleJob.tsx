"use client";

import useGetSingleJob from "@/utils/Hooks/Jobs/SingleJob/GetSingleJob";

import Button from "@/Components/UI/Button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import Link from "next/link";
import { useParams } from "next/navigation";

const SingleJob = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  const { data, singleJobLoading } = useGetSingleJob(userId);

  // const getSingleJob = async () => {
  //   const { id } = await params;
  //   try {
  //     const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
  //     const data = await res.json();
  //     const { job } = data;

  //     setJob(job);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getSingleJob();
  // }, []);

  return (
    <>
      {!singleJobLoading && (
        <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col justify-center  gap-6 bg-[#282828]/30">
          {/* Job Introduction */}

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl mid:text-3xl">{data?.job.title}</h2>
            <div className="text-sm mid:text-base mb-3 flex flex-col gap-1">
              <span>Job Description:</span>
              <p>{data?.job.description}</p>
            </div>
            <span className="text-sm mid:text-base">
              Salary: Rs {data?.job.salaryFrom} - {data?.job.salaryTo}
            </span>
            <span className="text-sm mid:text-base">
              Type: {data?.job?.position} Remote
            </span>
            <span className="text-sm mid:text-base">
              Required Candidates: {data?.job.required}
            </span>
            <span className="text-sm mid:text-base">
              Experience: {data?.job.experience} years
            </span>
          </div>

          {/* Required Skills  */}

          <div>
            <span className="text-sm mid:text-base">
              Required Skills: {data?.job.skills}
            </span>
          </div>

          {/*  Company Details */}

          <div className="flex flex-col gap-2">
            <span className="text-sm mid:text-base">
              Company name: {data?.job.companyName}
            </span>
            <span className="text-sm mid:text-base">
              Location: {data?.job.location}
            </span>
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
            <Link href={`/apply/${data?.job._id}`}>
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
      )}
    </>
  );
};

export default SingleJob;
