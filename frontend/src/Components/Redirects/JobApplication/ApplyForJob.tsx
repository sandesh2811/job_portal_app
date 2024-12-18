import JobApplicationForm from "./Form/JobApplicationForm";

const ApplyForJob = ({ params }: JobProps) => {
  return (
    <div className="min-h-[70vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/30">
      {/* Headings */}
      <div className="flex flex-col gap-2">
        <p className="text-lg leading-6 md:text-xl">
          Please fill out the form inorder to apply for the job.
        </p>
        <span className="text-xs text-secondaryText md:text-sm">
          NOTE: All the fields are required.
        </span>
      </div>
      {/* Form */}
      <div className="mid:flex justify-center">
        <JobApplicationForm params={params} />
      </div>
    </div>
  );
};

export default ApplyForJob;
