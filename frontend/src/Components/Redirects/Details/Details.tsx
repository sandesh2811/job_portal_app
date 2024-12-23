import PostedJobs from "./PostedJobs";

const Details = () => {
  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/70">
      This is for filters
      <PostedJobs />
    </div>
  );
};

export default Details;
