"use client";

import AppliedJobs from "./AppliedJobs";
import Bookmarks from "./Bookmarks/Bookmarks";
import CreateJob from "./CreateJob/CreateJob";
import Filters from "./Filters";
import JobApplicationsForJob from "./JobApplicationsForJob";
import PostedJobs from "./PostedJobs";
import Profile from "./Profile/Profile";

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
