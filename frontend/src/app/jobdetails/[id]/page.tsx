import JobDetails from "@/Components/pages/JobDetails";

import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: MetadataParmasType): Promise<Metadata> {
  const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
  const resData = await res.json();

  return {
    title: resData.job.title,
    description: resData.job.description,
  };
}

const JobDetailsPage = () => {
  return <JobDetails />;
};

export default JobDetailsPage;
