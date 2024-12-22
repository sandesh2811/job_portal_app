import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

interface ToastType extends VariantProps<typeof ToastVariants> {
  children: ReactNode;
}

const Toast = ({ children, toastSize, toastType, ...props }: ToastType) => {
  return (
    <div {...props} className={cn(ToastVariants({ toastSize, toastType }))}>
      {children}
    </div>
  );
};

export default Toast;

const ToastVariants = cva("rounded-md flex items-center relative p-4", {
  variants: {
    toastType: {
      Simple: "bg-primaryText text-background",
      Danger: "bg-red-500 text-background",
    },
    toastSize: {
      primary: "w-[300px] md:w-[400px] h-[60px]",
    },
  },
  defaultVariants: {
    toastType: "Simple",
    toastSize: "primary",
  },
});
