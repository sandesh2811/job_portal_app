"use client";

import useGetAppliedJobsByApplier from "@/utils/Hooks/Jobs/AppliedJobsByApplier/useGetAppliedJobsByApplier";

import Button from "@/Components/UI/Button";

import Link from "next/link";
import { useParams } from "next/navigation";

const AppliedJobs = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch job applications
  const { data, appliedJobsLoading } = useGetAppliedJobsByApplier(userId);

  // Check if the job if closed/deleted or not
  const appliedJobsWhichAreAvailable = data?.jobApplicationsByApplier.filter(
    (job) => job.jobId !== null
  );

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {!appliedJobsLoading &&
        (appliedJobsWhichAreAvailable.length === 0 ? (
          <div className="mid:hidden flex flex-col items-center gap-4 ">
            <span>Haven't applied to any jobs!</span>
            <Link href="/jobs">
              <Button buttonType="Apply">Apply Now</Button>
            </Link>
          </div>
        ) : (
          appliedJobsWhichAreAvailable.map((appliedJob) => (
            <div
              key={appliedJob._id}
              className="flex justify-between items-center gap-2 border-b-[1.2px]  cursor-pointer py-4 mid:hidden"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm">{appliedJob.jobId.title}</span>
                <span>{appliedJob.jobId.position}</span>
                <span
                  className={
                    appliedJob.status === "Accepted"
                      ? "text-green-500 text-sm"
                      : appliedJob.status === "Rejected"
                      ? "text-red-500 text-sm"
                      : "text-sm"
                  }
                >
                  {appliedJob.status}
                </span>
              </div>
              <span className="underline underline-offset-4 text-sm cursor-pointer">
                Details
              </span>
            </div>
          ))
        ))}

      {/* For laptop screens */}

      {!appliedJobsLoading &&
        (appliedJobsWhichAreAvailable.length === 0 ? (
          <div className="hidden mid:flex flex-col items-center gap-4 ">
            <span>Haven't applied to any jobs!</span>
            <Link href="/jobs">
              <Button buttonType="Apply">Apply Now</Button>
            </Link>
          </div>
        ) : (
          <table className="hidden mid:block w-full">
            <thead className="border-b-[1.3px]">
              <tr>
                <th className="w-1/5 font-normal py-6">Job Title</th>
                <th className="w-1/5 font-normal py-6">Position</th>
                <th className="w-1/5 font-normal py-6">Status</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobsWhichAreAvailable.map((appliedJob) => (
                <tr key={appliedJob._id} className="border-b-[1.3px]">
                  <td className=" w-1/5 py-6 text-center px-5">
                    {appliedJob.jobId.title}
                  </td>
                  <td className=" w-1/5 py-6 text-center px-5">
                    {appliedJob.jobId.position}
                  </td>
                  <td
                    className={
                      appliedJob.status === "Accepted"
                        ? "text-green-500 w-1/5 py-6 text-center px-5"
                        : appliedJob.status === "Rejected"
                        ? "text-red-500 w-1/5 py-6 text-center px-5"
                        : "w-1/5 py-6 text-center px-5"
                    }
                  >
                    {appliedJob.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
    </div>
  );
};

export default AppliedJobs;
