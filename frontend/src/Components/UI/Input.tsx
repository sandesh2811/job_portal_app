import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  type: string;
  name: string;
  placeholder?: string;
}

const Input = ({
  type,
  name,
  placeholder,
  className,
  inputVars,
  inputBoxSize,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={cn(InputVariants({ inputVars, inputBoxSize, className }))}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;

const InputVariants = cva("rounded-sm bg-transparent", {
  variants: {
    inputVars: {
      primary: "border-[1px] border-secondaryText",
    },
    inputBoxSize: {
      sm: "text-sm px-2 py-1",
      md: "text-md px-3 py-2",
    },
  },
  defaultVariants: {
    inputVars: "primary",
    inputBoxSize: "md",
  },
});
