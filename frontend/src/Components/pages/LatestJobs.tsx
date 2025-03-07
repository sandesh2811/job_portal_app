import LatestJobsContainer from "@/features/latestjobs/components/LatestJobs/LatestJobsContainer";
import MainContainer from "@/Components/MainContainer";

const LatestJobs = () => {
  return (
    <MainContainer className="mb-16 gap-4 mid:gap-6 md:mb-20 lg:mb-36 lg:gap-10">
      <h2 className="text-3xl font-semibold mid:text-4xl midLg:text-5xl">
        Latest Jobs
      </h2>

      {/* Card Section */}
      <LatestJobsContainer />
    </MainContainer>
  );
};

export default LatestJobs;
