import { Dispatch, SetStateAction } from "react";

type GetCVProps = {
  fileName: string | undefined;
  setFileName: Dispatch<SetStateAction<string>>;
};

const GetCV = async ({ fileName, setFileName }: GetCVProps) => {
  const res = await fetch(`/api/uploads/files/${fileName}`, {
    method: "GET",
    credentials: "include",
  });
  const resData = await res.json();
  if (resData.success) {
    setFileName(resData.fileName);
    window.open(`http://localhost:5000/${fileName}`);
  }
};

export default GetCV;
