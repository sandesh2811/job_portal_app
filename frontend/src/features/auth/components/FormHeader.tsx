type FormHeaderProps = {
  heading: string;
  subHeading: string;
};

const FormHeader = ({ heading, subHeading }: FormHeaderProps) => {
  return (
    <div className="flex flex-col gap-1 mid:gap-2">
      <h3 className="text-2xl font-semibold mid:text-4xl">{heading}</h3>
      <span className="text-xs tracking-wide text-secondaryText mid:text-base mid:leading-5">
        {subHeading}
      </span>
    </div>
  );
};

export default FormHeader;
