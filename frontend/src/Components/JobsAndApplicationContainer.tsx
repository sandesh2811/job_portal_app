import Link from "next/link";
import { ReactNode } from "react";

type JobsAndApplicationContainerProps = {
  children: ReactNode;
  href: string;
};

const JobsAndApplicationContainer = ({
  href,
  children,
}: JobsAndApplicationContainerProps) => {
  return (
    <Link href={href} className="mid:hidden">
      <div className="flex flex-col gap-2 border-b-[1.2px] cursor-pointer py-4 mid:flex-row mid:justify-between">
        {children}
      </div>
    </Link>
  );
};

export default JobsAndApplicationContainer;
