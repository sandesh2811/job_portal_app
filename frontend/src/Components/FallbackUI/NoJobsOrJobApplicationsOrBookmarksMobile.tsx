import Button from "@/Components/UI/Button";
import Link from "next/link";
import { forwardRef } from "react";

type NoJobsOrJobApplicationsOrBookmarksProps = {
  href: string;
  buttonText: string;
  title: string;
};

const NoJobsOrJobApplicationsOrBookmarksMobile = forwardRef<
  HTMLDivElement,
  NoJobsOrJobApplicationsOrBookmarksProps
>(
  (
    { href, buttonText, title }: NoJobsOrJobApplicationsOrBookmarksProps,
    ref,
  ) => {
    return (
      <div ref={ref} className="flex flex-col items-center gap-4 mid:hidden">
        <span>{title}</span>
        <Link href={href}>
          <Button buttonType="Apply">{buttonText}</Button>
        </Link>
      </div>
    );
  },
);

export default NoJobsOrJobApplicationsOrBookmarksMobile;
