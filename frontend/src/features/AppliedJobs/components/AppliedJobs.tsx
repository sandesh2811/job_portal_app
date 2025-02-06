"use client";

import CheckJobAvailability from "@/features/AppliedJobs/utils/CheckJobAvailability";
import useGetAppliedJobsByApplier from "@/features/AppliedJobs/hooks/useGetAppliedJobsByApplier";

import NoAppliedJobsMobile from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksMobile";
import NoAppliedJobsLaptop from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksLaptop";
import AppliedJobsTableContainer from "@/features/AppliedJobs/components/LaptopScreen/AppliedJobsContainerTable";
import AppliedJobsContainerMobile from "@/features/AppliedJobs/components/MobileScreen/AppliedJobsContainerMobile";

import { useParams } from "next/navigation";

const AppliedJobs = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch job applications
  const { data, appliedJobsLoading, appliedJobsError, error } =
    useGetAppliedJobsByApplier(userId);

  // Check if the job if closed/deleted or not
  const appliedJobsWhichAreAvailable = CheckJobAvailability(data);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {!appliedJobsLoading &&
        !appliedJobsError &&
        (appliedJobsWhichAreAvailable?.length === 0 ? (
          <NoAppliedJobsMobile
            href="/jobs"
            title="Haven't applied to any jobs!"
            buttonText="Apply Now"
          />
        ) : (
          <AppliedJobsContainerMobile
            appliedJobsWhichAreAvailable={appliedJobsWhichAreAvailable}
          />
        ))}

      {/* For laptop screens */}

      {!appliedJobsLoading &&
        !appliedJobsError &&
        (appliedJobsWhichAreAvailable?.length === 0 ? (
          <NoAppliedJobsLaptop
            href="/jobs"
            title="Haven't applied to any jobs!"
            buttonText="Apply Now"
          />
        ) : (
          <AppliedJobsTableContainer
            appliedJobsWhichAreAvailable={appliedJobsWhichAreAvailable}
          />
        ))}
    </div>
  );
};

export default AppliedJobs;
