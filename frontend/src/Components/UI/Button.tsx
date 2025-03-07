import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, buttonType, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(ButtonVariants({ buttonType, size, className }))}
      >
        {children}
      </button>
    );
  },
);

export default Button;

const ButtonVariants = cva("rounded-[2px] border-none", {
  variants: {
    buttonType: {
      AuthButtons: "bg-CTA_Buttons text-background font-medium",
      Apply: "bg-primaryText text-background",
    },
    size: {
      all: "text-sm px-4 py-2 mid:text-lg",
    },
  },
  defaultVariants: {
    buttonType: "AuthButtons",
    size: "all",
  },
});
