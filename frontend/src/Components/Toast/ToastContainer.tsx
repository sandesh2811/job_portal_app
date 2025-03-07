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
          ? "absolute right-2 top-5 mid:right-10"
          : "absolute right-2 top-5 hidden mid:right-10"
      }
    >
      <Toast>
        <span>{value}</span>
        <GoX size={20} className="absolute right-2 top-2 cursor-pointer" />
      </Toast>
    </div>
  );
};

export default ToastContainer;
