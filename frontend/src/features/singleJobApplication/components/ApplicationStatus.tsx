import { SingleJobApplicationReturnType } from "@/Validators/ReturnDataTypeValidators";

import SelectOption from "@/Components/UI/SelectOption";

import { Dispatch, SetStateAction } from "react";

type ApplicationStatusProps = {
  data: SingleJobApplicationReturnType | undefined;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
};

const ApplicationStatus = ({
  data,
  status,
  setStatus,
}: ApplicationStatusProps) => {
  const prefix = data?.singleJobApplication;

  return (
    <div>
      <select
        name="applicationStatus"
        className="bg-transparent  border-[1px] rounded-md p-[13px] w-full"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <SelectOption value={prefix?.status} title={prefix?.status} />
        {prefix?.status === "Pending" && (
          <>
            <SelectOption value="Accepted" title="Accepted" />
            <SelectOption value="Rejected" title="Rejected" />
          </>
        )}
        {prefix?.status === "Accepted" && (
          <>
            <SelectOption value="Pending" title="Pending" />
            <SelectOption value="Rejected" title="Rejected" />
          </>
        )}
        {prefix?.status === "Rejected" && (
          <>
            <SelectOption value="Pending" title="Pending" />
            <SelectOption value="Accepted" title="Accepted" />
          </>
        )}
      </select>
    </div>
  );
};

export default ApplicationStatus;
