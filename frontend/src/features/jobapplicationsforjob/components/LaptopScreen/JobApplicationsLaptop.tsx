import RedirectUser from "@/utils/RedirectUser";

import { useRouter } from "next/navigation";

type JobApplicationsLaptopProps = {
  application: JobApplicationType<JobType>;
};

const JobApplicationsLaptop = ({ application }: JobApplicationsLaptopProps) => {
  const id = application._id;
  const router = useRouter();

  return (
    <tr
      onClick={() => RedirectUser(`/jobapplicationdetails/${id}`, router)}
      className="border-b-[1.3px] hover:bg-white/20 duration-300 ease-in-out cursor-pointer"
    >
      <td className=" w-1/5 py-6 text-center px-5">
        {application.jobId.title}
      </td>
      <td className=" w-1/5 py-6 text-center px-5">{application.fullname}</td>
      <td className=" w-1/5 py-6 text-center px-5">{application.email}</td>
      <td
        className={
          application.status === "Accepted"
            ? "text-green-500 w-1/5 py-6 text-center px-5"
            : application.status === "Rejected"
            ? "text-red-500 w-1/5 py-6 text-center px-5"
            : "w-1/5 py-6 text-center px-5"
        }
      >
        {application.status}
      </td>
    </tr>
  );
};

export default JobApplicationsLaptop;
