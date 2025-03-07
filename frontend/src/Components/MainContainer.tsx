import cn from "@/utils/cn";
import { HTMLAttributes, ReactNode } from "react";

interface MainContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainContainer = ({
  children,
  className,
  ...props
}: MainContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col justify-evenly gap-4 px-6 tracking-wide midLg:max-w-[1050px] lg:px-14 xl:max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default MainContainer;
