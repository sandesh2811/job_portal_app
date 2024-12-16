import Card from "@/Components/UI/Card";

const LatestJobs = () => {
  return (
    <div className="min-h-[50vh] bg-blue-600 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col tracking-wide">
      <h2 className="text-2xl font-semibold">Latest Job Postings</h2>
      <div className="flex flex-col gap-6 mid:items-center md:flex-row flex-wrap md:justify-center">
        <Card
          title="Frontend Developer"
          companyName="A and B IT Solutions"
          location="Kumaripati, Lalitpur"
          position="Intern"
        />
        <Card
          title="UI/UX Designer"
          companyName="A and B IT Solutions"
          location="Kumaripati, Lalitpur"
          position="Intern"
        />
        <Card
          title="Devops Engineer"
          companyName="A and B IT Solutions"
          location="Kumaripati, Lalitpur"
          position="Intern"
        />
        <Card
          title="UI/UX Designer"
          companyName="A and B IT Solutions"
          location="Kumaripati, Lalitpur"
          position="Intern"
        />
      </div>
    </div>
  );
};

export default LatestJobs;
