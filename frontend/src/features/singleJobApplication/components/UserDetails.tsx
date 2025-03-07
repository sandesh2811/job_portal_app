import GetCV from "@/features/singleJobApplication/api/GetCvOfApplier";

import { SingleJobApplicationReturnType } from "@/Validators/ReturnDataTypeValidators";

import { useState } from "react";

type UserDetailsProps = {
  data: SingleJobApplicationReturnType | undefined;
};

const UserDetails = ({ data }: UserDetailsProps) => {
  const [filename, setFileName] = useState<string>("");
  const prefix = data?.singleJobApplication;

  const fileName = prefix?.fileName;

  return (
    <div className="flex flex-col gap-3">
      <span>Name: {prefix?.fullname}</span>
      <span>Experience: {prefix?.experience} year</span>
      <span>Phone Number: {prefix?.phonenumber}</span>
      <span>Email: {prefix?.email}</span>
      <div className="flex items-center gap-2">
        <span>CV:</span>
        <span
          className="cursor-pointer underline underline-offset-4"
          onClick={() => GetCV({ fileName, setFileName })}
        >
          {prefix?.fileName}
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
