import JobApplicationForm from "@/features/applyjob/components/JobApplicationForm";
import Heading from "@/features/applyjob/components/Heading";

const ApplyForJob = () => {
  return (
    <div className="min-h-[70vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col gap-6 bg-[#282828]/30">
      {/* Headings */}
      <Heading />

      {/* Form */}
      <div className="mid:flex justify-center">
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default ApplyForJob;
