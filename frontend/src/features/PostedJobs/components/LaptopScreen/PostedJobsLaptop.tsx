import RedirectUser from "@/utils/RedirectUser";

import { useRouter } from "next/navigation";

type PostedJobsProps = {
  job: JobType;
};

const PostedJobsLaptop = ({ job }: PostedJobsProps) => {
  const router = useRouter();

  return (
    <tr
      className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
      onClick={() => RedirectUser(`/jobdetails/${job._id}`, router)}
    >
      <td className=" w-1/5 py-6 text-center px-5">{job.companyName}</td>
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
        {job.createdAt as string}
      </td>
    </tr>
  );
};

export default PostedJobsLaptop;
