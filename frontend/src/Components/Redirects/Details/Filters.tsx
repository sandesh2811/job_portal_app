import GetLoginData from "@/utils/Hooks/GetLoginData";

import Link from "next/link";
import { useParams } from "next/navigation";

// Make active links

const Filters = () => {
  const { id } = useParams();
  const { loginData } = GetLoginData();

  return (
    <div className="min-h-[5vh] flex flex-col md:flex-row gap-4 justify-between items-center text-lg">
      <Link href={`/details/${id}`}>Profile</Link>
      {loginData.role === "employer" ? (
        <div className="flex-1 flex gap-4 items-center justify-end">
          <Link href={`/postedjobs/${id}`}>Posted Jobs</Link>
          <Link href={`/jobapplications/${id}`}>Job Applications</Link>
          <Link href={`/createjob/${id}`}>Create Job</Link>
        </div>
      ) : (
        <div className="flex-1 flex gap-4 items-center justify-end">
          <Link href={`/appliedjobs/${id}`}>Applied Jobs</Link>
          <Link href={`/bookmarks/${id}`}>Bookmarks</Link>
        </div>
      )}
    </div>
  );
};

export default Filters;
