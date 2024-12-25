"use client";

import GetAppliedJobsByApplier from "@/utils/Hooks/GetAppliedJobsByApplier";
import Link from "next/link";
import { useParams } from "next/navigation";

const AppliedJobs = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch job applications
  const { appliedJobs } = GetAppliedJobsByApplier(userId);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {appliedJobs.map((appliedJob) => (
        <Link key={appliedJob._id} href="#" className="mid:hidden">
          <div className="flex flex-col gap-2 border-b-[1.2px]  cursor-pointer lg:hover:bg-white/20 duration-300 ease-in-out py-4 mid:flex-row mid:justify-between">
            <span>{appliedJob.fullname}</span>

            <span className="text-sm">{appliedJob.jobId.title}</span>
            <span className="text-sm">{appliedJob.status}</span>
          </div>
        </Link>
      ))}

      {/* For laptop screens */}

      <table className="hidden mid:block w-full">
        <thead className="border-b-[1.3px]">
          <tr>
            <th className="w-1/5 font-normal py-6">Job Title</th>
            <th className="w-1/5 font-normal py-6">Full Name</th>
            <th className="w-1/5 font-normal py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.map((appliedJob) => (
            <tr
              key={appliedJob._id}
              className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
            >
              <td className=" w-1/5 py-6 text-center px-5">
                {appliedJob.jobId.title}
              </td>
              <td className=" w-1/5 py-6 text-center px-5">
                {appliedJob.fullname}
              </td>

              <td className=" w-1/5 py-6 text-center px-5">
                {appliedJob.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobs;
