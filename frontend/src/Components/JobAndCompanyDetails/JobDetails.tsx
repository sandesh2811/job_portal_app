type JobDetailsProps = {
  title: string | undefined;
  description: string | undefined;
  experience: string | undefined;
  position: string | undefined;
  required: string | undefined;
  salaryFrom: string | undefined;
  salaryTo: string | undefined;
};

const JobDetails = ({
  title,
  description,
  experience,
  position,
  required,
  salaryFrom,
  salaryTo,
}: JobDetailsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl mid:text-3xl">{title}</h2>

      <div className="text-sm mid:text-base mb-3 flex flex-col gap-1">
        <span>Job Description:</span>
        <p>{description}</p>
      </div>
      <span className="text-sm mid:text-base">
        Salary: Rs {salaryFrom} - {salaryTo}
      </span>
      <span className="text-sm mid:text-base">Type: {position} Remote</span>
      <span className="text-sm mid:text-base">
        Required Candidates: {required}
      </span>
      <span className="text-sm mid:text-base">
        Experience: {experience} years
      </span>
    </div>
  );
};

export default JobDetails;
