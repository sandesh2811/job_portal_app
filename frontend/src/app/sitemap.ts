import { JobReturnType } from "@/Validators/ReturnDataTypeValidators";

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Yeha fetch request garera map gare huncha

  const res = await fetch(`http://localhost:5000/api/jobs`);
  const resData: JobReturnType = await res.json();

  const jobEntries: MetadataRoute.Sitemap = resData.jobs.map((job) => ({
    url: `http://localhost:3000/jobs/${job._id}`,
    lastModified: new Date(job.updatedAt),
    // How often do we change this
    // changeFrequency :,
    // priority:
  }));

  return [
    // {
    //   // Full url dinu paryo aafno page ko.(actual url huncha)
    //   url: `http://localhost:3000/jobs`,
    // },
    ...jobEntries,
  ];
}
