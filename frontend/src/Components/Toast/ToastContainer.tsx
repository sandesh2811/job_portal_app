import Toast from "@/Components/UI/Toast";

import { GoX } from "react-icons/go";

type ToastContainerProps = {
  value: string;
};

const ToastContainer = ({ value }: ToastContainerProps) => {
  return (
    <div
      className={
        value !== ""
          ? "absolute top-5 mid:right-10 right-2"
          : "hidden absolute top-5 mid:right-10 right-2"
      }
    >
      <Toast>
        <span>{value}</span>
        <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
      </Toast>
    </div>
  );
};

export default ToastContainer;
