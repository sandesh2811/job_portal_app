import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface CardProps
  extends VariantProps<typeof CardVariants>,
    ButtonHTMLAttributes<HTMLDivElement> {
  title: string;
  companyName: string;
  location: string;
  position: string;
}

const Card = ({
  title,
  companyName,
  location,
  position,
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
      {/* Top */}
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl">{title}</h3>
        <div className="flex flex-col justify-between">
          <span className="text-sm">{companyName}</span>
          <span className="text-sm">{location}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center ">
        <Link
          href="/"
          className="flex gap-2 items-center underline underline-offset-4 text-sm"
        >
          See more <GoArrowRight />
        </Link>
        <Button
          buttonType="Apply"
          size="small"
          className="text-primaryText flex gap-2 items-center "
        >
          Apply <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Card;

const CardVariants = cva("rounded-md", {
  variants: {
    CardStyle: {
      Primary:
        "bg-primaryText text-background p-3 tracking-wide flex flex-col justify-between",
    },
    CardSize: {
      PrimarySize: "h-[30vh] mid:w-[600px] md:w-[360px] xl:w-[450px]",
    },
  },
  defaultVariants: {
    CardStyle: "Primary",
    CardSize: "PrimarySize",
  },
});
