import Button from "@/Components/UI/Button";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="h-[50vh] bg-orange-400 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 flex flex-col justify-center gap-2 mid:text-center mid:items-center">
      {/* Title Section */}

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold mid:text-[45px]">
          Find jobs in companies that you want to work in.
        </h1>
        <span className="text-sm font-light text-secondaryText mid:text-base">
          Hire or apply for a job in a much easier way.
        </span>
      </div>

      {/* CTA Button */}
      <Link href="/jobs">
        <Button
          buttonType="Apply"
          size="medium"
          className="flex items-center justify-center gap-2"
        >
          Apply Now <GoArrowRight size={25} />
        </Button>
      </Link>
    </div>
  );
}
