import GetJobsPostedByEmployer from "@/features/PostedJobs/hooks/useGetJobsPostedByEmployer";
import CheckIdType from "@/utils/CheckIdType";

import PostedJobsContainerMobile from "@/features/PostedJobs/components/MobileScreen/PostedJobsContainerMobile";
import PostedJobsTableContainer from "@/features/PostedJobs/components/LaptopScreen/PostedJobsContainerTable";
import NoPostedJobsMobile from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksMobile";
import NoPostedJobsLaptop from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksLaptop";

import { useParams } from "next/navigation";
import formatCreatedDate from "@/utils/formatCreatedDate";

const PostedJobs = () => {
  const { id } = useParams();

  //   Check if the is is of type string or not
  const userId = CheckIdType(id);

  // Fetch the jobs posted by employer
  const { data, jobsPostedByEmployerLoading } = GetJobsPostedByEmployer(userId);

  //   Format the date to basic date only and replace it with the original created date
  const newPostedJobs = formatCreatedDate(data);

  return (
    <div className="min-h-[80vh]">
      {/* For mobile screens */}

      {!jobsPostedByEmployerLoading &&
        (newPostedJobs?.length === 0 ? (
          <NoPostedJobsMobile
            title="Haven't created any jobs!"
            href={`/createjob/${userId}`}
            buttonText="Create Now"
          />
        ) : (
          <PostedJobsContainerMobile newPostedJobs={newPostedJobs} />
        ))}

      {/* For laptop screens */}

      {!jobsPostedByEmployerLoading &&
        (newPostedJobs?.length === 0 ? (
          <NoPostedJobsLaptop
            title="Haven't created any jobs!"
            href={`/createjob/${userId}`}
            buttonText="Create Now"
          />
        ) : (
          <PostedJobsTableContainer newPostedJobs={newPostedJobs} />
        ))}
    </div>
  );
};

export default PostedJobs;
