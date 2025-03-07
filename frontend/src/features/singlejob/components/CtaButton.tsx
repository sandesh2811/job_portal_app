import Button from "@/Components/UI/Button";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type CtaButtonProps = {
  jobId: string | undefined;
};

const CtaButton = ({ jobId }: CtaButtonProps) => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/jobs"
        className="flex cursor-pointer items-center gap-2 text-sm underline underline-offset-4 mid:text-lg"
      >
        <GoArrowLeft />
        Return to jobs
      </Link>
      <Link href={`/apply/${jobId}`}>
        <Button buttonType="Apply" className="flex items-center gap-2">
          Apply <GoArrowRight />
        </Button>
      </Link>
    </div>
  );
};

export default CtaButton;
