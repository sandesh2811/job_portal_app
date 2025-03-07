import api from "@/axios/axios";
import { Dispatch, SetStateAction } from "react";

type GetCVProps = {
  fileName: string | undefined;
  setFileName: Dispatch<SetStateAction<string>>;
};

const GetCV = async ({ fileName, setFileName }: GetCVProps) => {
  const res = await api.get(`/uploads/files/${fileName}`);

  if (res.data.success) {
    setFileName(res.data.fileName);
    window.open(`/api/${fileName}`);
  }
};

export default GetCV;
