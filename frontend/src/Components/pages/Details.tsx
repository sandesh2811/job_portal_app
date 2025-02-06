"use client";

import Filters from "@/Components/Filters";
import Profile from "@/features/Profile/components/Profile";
import PostedJobs from "@/features/PostedJobs/components/PostedJobs";
import JobApplicationsForJob from "@/features/jobapplicationsforjob/components/JobApplicationsForJob";
import CreateJob from "@/features/createjob/components/CreateJob";
import AppliedJobs from "@/features/AppliedJobs/components/AppliedJobs";
import Bookmarks from "@/features/bookmarks/components/Bookmarks";

import { usePathname } from "next/navigation";

const Details = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70 ">
      <Filters />
      {pathname.startsWith("/details") && <Profile />}
      {pathname.startsWith("/postedjobs") && <PostedJobs />}
      {pathname.startsWith("/jobapplications") && <JobApplicationsForJob />}
      {pathname.startsWith("/createjob") && <CreateJob />}
      {pathname.startsWith("/appliedjobs") && <AppliedJobs />}
      {pathname.startsWith("/bookmarks") && <Bookmarks />}
    </div>
  );
};

export default Details;
