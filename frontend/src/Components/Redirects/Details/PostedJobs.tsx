import Button from "@/Components/UI/Button";
import GetJobsPostedByEmployer from "@/utils/Hooks/Jobs/PostedJobs/useGetJobsPostedByEmployer";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const PostedJobs = () => {
  const { id } = useParams();
  const router = useRouter();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  // Fetch the jobs posted by employer
  const { data, jobsPostedByEmployerLoading } = GetJobsPostedByEmployer(userId);

  //   Format the date to basic date only and replace it with the original created date
  const newPostedJobs = data?.jobs.map((job) => {
    const date = new Date(job.createdAt).toLocaleDateString();
    return { ...job, createdAt: date };
  });

  // Redirect user to specific jobdetails
  const RedirectUser = (jobId: string) => {
    router.push(`/jobdetails/${jobId}`);
  };

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {!jobsPostedByEmployerLoading &&
        (newPostedJobs?.length === 0 ? (
          <div className="hidden mid:flex flex-col items-center gap-4">
            <span>Haven't created any jobs!</span>
            <Link href={`/createjob/${userId}`}>
              <Button buttonType="Apply">Create Now</Button>
            </Link>
          </div>
        ) : (
          newPostedJobs?.map((job) => (
            <Link
              key={job._id}
              href={`/jobdetails/${job._id}`}
              className="mid:hidden"
            >
              <div className="flex flex-col gap-2 border-b-[1.2px] cursor-pointer py-4 mid:flex-row mid:justify-between">
                <span>{job.companyName}</span>
                <span className="text-sm">{job.title}</span>
                <span
                  className={
                    job.status === "Expired"
                      ? "text-sm text-red-500"
                      : "text-sm text-green-500 "
                  }
                >
                  {job.status}
                </span>
                <span className="text-sm">{job.createdAt}</span>
              </div>
            </Link>
          ))
        ))}

      {/* For laptop screens */}

      {!jobsPostedByEmployerLoading &&
        (newPostedJobs?.length === 0 ? (
          <div className="hidden mid:flex flex-col items-center gap-4 ">
            <span>Haven't created any jobs!</span>
            <Link href={`/createjob/${userId}`}>
              <Button buttonType="Apply">Create Now</Button>
            </Link>
          </div>
        ) : (
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
              {newPostedJobs?.map((job) => (
                <tr
                  key={job._id}
                  className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
                  onClick={() => RedirectUser(job._id)}
                >
                  <td className=" w-1/5 py-6 text-center px-5">
                    {job.companyName}
                  </td>
                  <td className=" w-1/5 py-6 text-center px-5">{job.title}</td>
                  <td
                    className={
                      job.status === "Expired"
                        ? "text-red-500 w-1/5 py-6 text-center px-5"
                        : "text-green-500 w-1/5 py-6 text-center px-5"
                    }
                  >
                    {job.status}
                  </td>
                  <td className=" w-1/5 py-6 text-center px-5">
                    {job.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
    </div>
  );
};

export default PostedJobs;
