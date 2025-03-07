import JobApplicationForm from "@/features/applyjob/components/JobApplicationForm";
import Heading from "@/features/applyjob/components/Heading";

const ApplyForJob = () => {
  return (
    <div className="mx-auto flex min-h-[70vh] flex-col gap-6 bg-[#282828]/30 p-4 tracking-wide midLg:max-w-[850px] xl:max-w-[1050px]">
      {/* Headings */}
      <Heading />

      {/* Form */}
      <div className="justify-center mid:flex">
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default ApplyForJob;
