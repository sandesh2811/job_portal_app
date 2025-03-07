import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  type: string;
  name: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, name, placeholder, className, inputVars, inputBoxSize, ...props },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(InputVariants({ inputVars, inputBoxSize, className }))}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
  },
);

export default Input;

const InputVariants = cva("rounded-[2px] bg-transparent focus:outline-none", {
  variants: {
    inputVars: {
      primary: "border-[1px] border-secondaryText",
    },
    inputBoxSize: {
      all: "text-sm md:text-md p-2",
    },
  },
  defaultVariants: {
    inputVars: "primary",
    inputBoxSize: "all",
  },
});
