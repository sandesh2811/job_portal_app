import RedirectUser from "@/utils/RedirectUser";

import { useRouter } from "next/navigation";

type PostedJobsProps = {
  job: JobType;
};

const PostedJobsLaptop = ({ job }: PostedJobsProps) => {
  const router = useRouter();

  return (
    <tr
      className="cursor-pointer border-2 border-primaryText duration-300 ease-in-out hover:bg-black/20"
      onClick={() => RedirectUser(`/jobdetails/${job._id}`, router)}
    >
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {job.title}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {job.companyName}
      </td>
      <td
        className={
          job.status === "Expired"
            ? "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center text-red-500"
            : "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center text-green-500"
        }
      >
        {job.status}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {job.createdAt as string}
      </td>
    </tr>
  );
};

export default PostedJobsLaptop;
