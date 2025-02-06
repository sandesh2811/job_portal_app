import PostedJobsMobile from "@/features/PostedJobs/components/MobileScreen/PostedJobsMobile";

type PostedJobsContainerMobileProps = {
  newPostedJobs: JobType[] | undefined;
};

const PostedJobsContainerMobile = ({
  newPostedJobs,
}: PostedJobsContainerMobileProps) => {
  return (
    <>
      {newPostedJobs?.map((job) => (
        <PostedJobsMobile job={job} key={job._id} />
      ))}
    </>
  );
};

export default PostedJobsContainerMobile;
