"use client";

import LatestJobsContainer from "@/features/latestjobs/components/LatestJobs/LatestJobsContainer";
import ToastContainer from "@/Components/Toast/ToastContainer";

import { useState } from "react";

const LatestJobs = () => {
  const [bookmarkStatus, setBookmarkStatus] = useState<string>("");

  return (
    <div className="min-h-[80vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col justify-evenly tracking-wide ">
      <h2 className="text-4xl font-semibold">Latest Job Postings</h2>

      {/* Card Section */}
      <LatestJobsContainer setBookmarkStatus={setBookmarkStatus} />

      {/* Toast notification */}
      <ToastContainer value={bookmarkStatus} />
    </div>
  );
};

export default LatestJobs;
