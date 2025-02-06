import { PostedJobReturnType } from "@/Validators/ReturnDataTypeValidators";

const formatCreatedDate = (data: PostedJobReturnType | undefined) => {
  const updatedJobs = data?.jobs.map((job) => {
    const date = new Date(job.createdAt).toLocaleDateString();
    return { ...job, createdAt: date };
  });

  return updatedJobs;
};

export default formatCreatedDate;
