"use client";

import GetJobsPostedByEmployer from "@/utils/Hooks/GetJobsPostedByEmployer";
import Link from "next/link";
import { useParams } from "next/navigation";

const PostedJobs = () => {
  const { id } = useParams();

  const userId = typeof id === "string" ? id : "";

  const { postedJobs } = GetJobsPostedByEmployer(userId);

  const newPostedJobs = postedJobs.map((job) => {
    const date = new Date(job.createdAt).toLocaleDateString();
    return { ...job, createdAt: date };
  });

  console.log(newPostedJobs);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {newPostedJobs.map((job) => (
        <Link key={job._id} href="#" className="mid:hidden">
          <div className="flex flex-col gap-2 border-b-[1.2px]  cursor-pointer lg:hover:bg-white/20 duration-300 ease-in-out py-4 mid:flex-row mid:justify-between">
            <span>{job.companyName}</span>
            <span className="text-sm">{job.title}</span>
            <span className="text-sm">{job.status}</span>
            <span className="text-sm">{job.createdAt}</span>
          </div>
        </Link>
      ))}

      {/* For laptop screens */}

      <table className="hidden mid:block w-full">
        <thead className="border-b-[1.3px]">
          <tr>
            <th className="w-1/5 font-normal py-6">Company Name</th>
            <th className="w-1/5 font-normal py-6">Job Title</th>
            <th className="w-1/5 font-normal py-6">Status</th>
            <th className="w-1/5 font-normal py-6">Posted On</th>
          </tr>
        </thead>
        <tbody>
          {newPostedJobs.map((job) => (
            <tr
              key={job._id}
              className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
            >
              <td className=" w-1/5 py-6 text-center px-5">
                {job.companyName}
              </td>
              <td className=" w-1/5 py-6 text-center px-5">{job.title}</td>
              <td className=" w-1/5 py-6 text-center px-5">{job.status}</td>
              <td className=" w-1/5 py-6 text-center px-5">{job.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJobs;
