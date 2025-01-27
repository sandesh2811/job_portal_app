import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

const Button = ({
  children,
  className,
  buttonType,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(ButtonVariants({ buttonType, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;

const ButtonVariants = cva("rounded-md border-none", {
  variants: {
    buttonType: {
      AuthButtons: "bg-CTA_Buttons text-background font-medium",
      Apply: "bg-CTA_Buttons text-background",
    },
    size: {
      small: "text-sm px-2 py-1",
      medium: "text-md px-3 py-2",
      large: "px-10 py-2",
    },
  },
  defaultVariants: {
    buttonType: "AuthButtons",
    size: "medium",
  },
});
