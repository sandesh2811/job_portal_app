import { cva, VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CardProps
  extends VariantProps<typeof CardVariants>,
    ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({
  children,
  className,
  CardSize,
  CardStyle,
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={cn(CardVariants({ CardSize, CardStyle, className }))}
    >
      {children}
    </div>
  );
};

export default Card;

const CardVariants = cva(
  "rounded-md p-4 lg:p-6 xl:p-8 tracking-wide shadow-md",
  {
    variants: {
      CardStyle: {
        Jobs: "bg-primaryText text-background  flex flex-col justify-between",
        Services:
          "bg-primaryText text-background flex flex-col items-center gap-3 text-center",
      },
      CardSize: {
        PrimarySize:
          "min-h-[35vh] w-[100vw] lg:w-[440px] xl:w-[520px] md:w-[45vw] ",
      },
    },
    defaultVariants: {
      CardStyle: "Jobs",
      CardSize: "PrimarySize",
    },
  },
);
