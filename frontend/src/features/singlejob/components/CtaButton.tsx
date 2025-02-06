import Button from "@/Components/UI/Button";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type CtaButtonProps = {
  jobId: string | undefined;
};

const CtaButton = ({ jobId }: CtaButtonProps) => {
  return (
    <div className="flex justify-between items-center ">
      <Link
        href="/jobs"
        className="flex gap-2 items-center underline underline-offset-4 text-sm mid:text-base"
      >
        <GoArrowLeft />
        Return to jobs
      </Link>
      <Link href={`/apply/${jobId}`}>
        <Button
          buttonType="Apply"
          size="small"
          className="flex gap-2 items-center "
        >
          Apply <GoArrowRight />
        </Button>
      </Link>
    </div>
  );
};

export default CtaButton;
