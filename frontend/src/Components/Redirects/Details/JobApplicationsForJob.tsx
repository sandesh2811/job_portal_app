"use client";

import GetJobApplications from "@/utils/Hooks/GetJobApplications";

import Link from "next/link";
import { useParams } from "next/navigation";

const JobApplicationsForJob = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch job applications
  const { jobApplications } = GetJobApplications(userId);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {jobApplications.map((application) => (
        <Link key={application._id} href="#" className="mid:hidden">
          <div className="flex flex-col gap-2 border-b-[1.2px]  cursor-pointer lg:hover:bg-white/20 duration-300 ease-in-out py-4 mid:flex-row mid:justify-between">
            <span>{application.fullname}</span>
            <span className="text-sm">{application.email}</span>
            <span className="text-sm">{application.status}</span>
          </div>
        </Link>
      ))}

      {/* For laptop screens */}

      <table className="hidden mid:block w-full">
        <thead className="border-b-[1.3px]">
          <tr>
            <th className="w-1/5 font-normal py-6">Full Name</th>
            <th className="w-1/5 font-normal py-6">Email</th>
            <th className="w-1/5 font-normal py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((application) => (
            <tr
              key={application._id}
              className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
            >
              <td className=" w-1/5 py-6 text-center px-5">
                {application.fullname}
              </td>
              <td className=" w-1/5 py-6 text-center px-5">
                {application.email}
              </td>
              <td className=" w-1/5 py-6 text-center px-5">
                {application.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsForJob;