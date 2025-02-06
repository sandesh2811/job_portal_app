import handleJobApplicationStatus from "@/features/singleJobApplication/utils/handleJobApplicationStatus";

import Button from "@/Components/UI/Button";
import { GoArrowLeft } from "react-icons/go";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type CtaButtonProps = {
  applicationId: string;
  setApplicationStatusRes: Dispatch<SetStateAction<string>>;
  status: string;
};

const CtaButton = ({
  applicationId,
  setApplicationStatusRes,
  status,
}: CtaButtonProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <span
        onClick={() => router.back()}
        className="flex gap-2 items-center underline underline-offset-4 text-sm mid:text-base cursor-pointer"
      >
        <GoArrowLeft />
        Return
      </span>
      <Button
        onClick={() =>
          handleJobApplicationStatus({
            applicationId,
            setApplicationStatusRes,
            status,
            router,
          })
        }
        size="large"
      >
        Update
      </Button>
    </div>
  );
};

export default CtaButton;
