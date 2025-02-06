import Button from "@/Components/UI/Button";
import Link from "next/link";

type NoJobsOrJobApplicationsOrBookmarksProps = {
  href: string;
  buttonText: string;
  title: string;
};

const NoJobsOrJobApplicationsOrBookmarksMobile = ({
  href,
  buttonText,
  title,
}: NoJobsOrJobApplicationsOrBookmarksProps) => {
  return (
    <div className="mid:hidden flex flex-col items-center gap-4">
      <span>{title}</span>
      <Link href={href}>
        <Button buttonType="Apply">{buttonText}</Button>
      </Link>
    </div>
  );
};

export default NoJobsOrJobApplicationsOrBookmarksMobile;
