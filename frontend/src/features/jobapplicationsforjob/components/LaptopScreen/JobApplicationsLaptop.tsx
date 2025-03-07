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
      className="cursor-pointer border-2 border-primaryText duration-300 ease-in-out hover:bg-black/20"
    >
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {application.jobId.title}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {application.fullname}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {application.email}
      </td>
      <td
        className={
          application.status === "Accepted"
            ? "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center text-green-500"
            : application.status === "Rejected"
              ? "w-1/5 px-5 py-6 text-center text-red-500"
              : "w-1/5 border-r-2 border-primaryText px-5 py-6 text-center"
        }
      >
        {application.status}
      </td>
    </tr>
  );
};

export default JobApplicationsLaptop;
