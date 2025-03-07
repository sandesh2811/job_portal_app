import { ReactNode } from "react";

type InputFieldContainerProps = {
  children: ReactNode;
};

const InputFieldContainer = ({ children }: InputFieldContainerProps) => {
  return (
    <div className="flex flex-col justify-evenly gap-6 md:flex-row">
      {children}
    </div>
  );
};

export default InputFieldContainer;
