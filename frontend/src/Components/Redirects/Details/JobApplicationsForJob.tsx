"use client";

import useGetJobApplications from "@/utils/Hooks/Jobs/JobApplicationsToJob/useGetJobApplications";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const JobApplicationsForJob = () => {
  const { id } = useParams();
  const router = useRouter();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch job applications
  const { jobApplications } = useGetJobApplications(userId);
  console.log(jobApplications);

  // Redirect user
  const RedirectUser = (id: string) => {
    router.push(`/jobapplicationdetails/${id}`);
  };

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {jobApplications.map((application) => (
        <Link
          key={application._id}
          href={`/jobapplicationdetails/${application._id}`}
          className="mid:hidden"
        >
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
            <th className="w-1/5 font-normal py-6">Job Title</th>
            <th className="w-1/5 font-normal py-6">Applier Name</th>
            <th className="w-1/5 font-normal py-6">Email</th>
            <th className="w-1/5 font-normal py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((application) => (
            <tr
              onClick={() => RedirectUser(application._id)}
              key={application._id}
              className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
            >
              <td className=" w-1/5 py-6 text-center px-5">
                {application.jobId.title}
              </td>
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
