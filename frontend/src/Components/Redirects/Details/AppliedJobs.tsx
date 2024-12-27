"use client";

import useGetAppliedJobsByApplier from "@/utils/Hooks/Jobs/AppliedJobsByApplier/useGetAppliedJobsByApplier";

import { useParams } from "next/navigation";

const AppliedJobs = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch job applications
  const { appliedJobs } = useGetAppliedJobsByApplier(userId);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {appliedJobs.map((appliedJob) => (
        // <Link key={appliedJob._id} href="#" className="mid:hidden">
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
          {/* <span className="underline underline-offset-4 text-sm cursor-pointer">
              Details
            </span> */}
        </div>
        // </Link>
      ))}

      {/* For laptop screens */}

      <table className="hidden mid:block w-full">
        <thead className="border-b-[1.3px]">
          <tr>
            <th className="w-1/5 font-normal py-6">Job Title</th>
            <th className="w-1/5 font-normal py-6">Position</th>
            <th className="w-1/5 font-normal py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.map((appliedJob) => (
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
              {/* <td className="w-1/5 py-6 text-center px-5 underline underline-offset-4 text-sm cursor-pointer">
                <Link href="#">Details</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobs;
