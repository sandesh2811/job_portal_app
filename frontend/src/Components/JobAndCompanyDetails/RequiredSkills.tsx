type RequiredSkillsProps = {
  skills: string | undefined;
};

const RequiredSkills = ({ skills }: RequiredSkillsProps) => {
  return (
    <div>
      <span className="text-sm mid:text-base">Required Skills: {skills}</span>
    </div>
  );
};

export default RequiredSkills;
