import SingleJob from "@/Components/pages/SingleJob";
import { JobReturnType } from "@/Validators/ReturnDataTypeValidators";

import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: MetadataParmasType): Promise<Metadata> {
  const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
  const resData = await res.json();

  return {
    title: resData.job.title,
    description: resData.job.description,

    // robots: {
    //   index: false,
    //   follow: true,
    // },
  };
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/api/jobs");
  const resData: JobReturnType = await res.json();

  const jobs = resData.jobs.map((job) => ({
    id: job._id,
  }));

  return jobs;
}

const SingleJobPage = () => {
  return <SingleJob />;
};

export default SingleJobPage;
