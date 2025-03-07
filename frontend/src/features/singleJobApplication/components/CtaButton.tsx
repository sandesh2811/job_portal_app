import handleJobApplicationStatus from "@/features/singleJobApplication/utils/handleJobApplicationStatus";

import Button from "@/Components/UI/Button";
import { GoArrowLeft } from "react-icons/go";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

type CtaButtonProps = {
  applicationId: string;
  status: string;
};

const CtaButton = ({ applicationId, status }: CtaButtonProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return (
    <div className="flex items-center justify-between">
      <span
        onClick={() => router.back()}
        className="flex cursor-pointer items-center gap-2 text-sm underline underline-offset-4 mid:text-lg"
      >
        <GoArrowLeft className="text-xl" />
        Return
      </span>
      <Button
        onClick={() =>
          handleJobApplicationStatus({
            applicationId,
            status,
            router,
            queryClient,
          })
        }
        className="bg-primaryText text-background"
      >
        Update
      </Button>
    </div>
  );
};

export default CtaButton;
