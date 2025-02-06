"use client";

import useGetJobApplications from "@/features/jobapplicationsforjob/hooks/useGetJobApplications";
import CheckIdType from "@/utils/CheckIdType";

import NoJobApplicationsMobile from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksMobile";
import NoJobApplicationsLaptop from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksLaptop";
import JobApplicationsContainerTable from "@/features/jobapplicationsforjob/components/LaptopScreen/JobApplicationsContainerTable";
import JobApplicationsContainerMobile from "@/features/jobapplicationsforjob/components/MobileScreen/JobApplicationsContainerMobile";

import { useParams } from "next/navigation";

const JobApplicationsForJob = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = CheckIdType(id);

  //   Fetch job applications
  const { jobApplicationsLoading, data } = useGetJobApplications(userId);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {!jobApplicationsLoading &&
        (data?.jobApplicationsToTheJob.length === 0 ? (
          <NoJobApplicationsMobile
            href="/"
            title="No job applications for any jobs!"
            buttonText="Return Home"
          />
        ) : (
          <JobApplicationsContainerMobile data={data} />
        ))}

      {/* For laptop screens */}

      {!jobApplicationsLoading &&
        (data?.jobApplicationsToTheJob.length === 0 ? (
          <NoJobApplicationsLaptop
            href="/"
            title="No job applications for any jobs!"
            buttonText="Return Home"
          />
        ) : (
          <JobApplicationsContainerTable data={data} />
        ))}
    </div>
  );
};

export default JobApplicationsForJob;
