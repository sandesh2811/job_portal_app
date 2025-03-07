"use client";

import Filters from "@/Components/Filters";
import Profile from "@/features/Profile/components/Profile";
import PostedJobs from "@/features/PostedJobs/components/PostedJobs";
import JobApplicationsForJob from "@/features/jobapplicationsforjob/components/JobApplicationsForJob";
import CreateJob from "@/features/createjob/components/CreateJob";
import AppliedJobs from "@/features/AppliedJobs/components/AppliedJobs";
import Bookmarks from "@/features/bookmarks/components/Bookmarks";
import MainContainer from "@/Components/MainContainer";

import { usePathname } from "next/navigation";

const Details = () => {
  const pathname = usePathname();

  return (
    <MainContainer className="my-8 min-h-[70vh] justify-normal gap-6">
      <Filters pathname={pathname} />
      {pathname.startsWith("/details") && <Profile />}
      {pathname.startsWith("/postedjobs") && <PostedJobs />}
      {pathname.startsWith("/jobapplications") && <JobApplicationsForJob />}
      {pathname.startsWith("/createjob") && <CreateJob />}
      {pathname.startsWith("/appliedjobs") && <AppliedJobs />}
      {pathname.startsWith("/bookmarks") && <Bookmarks />}
    </MainContainer>
  );
};

export default Details;
