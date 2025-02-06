type FormHeaderProps = {
  heading: string;
  subHeading: string;
};

const FormHeader = ({ heading, subHeading }: FormHeaderProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold leading-5 mid:text-2xl">
        {heading}
      </h3>
      <span className="text-sm leading-5 text-secondaryText">{subHeading}</span>
    </div>
  );
};

export default FormHeader;
