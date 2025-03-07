"use client";

import Button from "@/Components/UI/Button";
import { GoArrowRight } from "react-icons/go";
import MainContainer from "@/Components/MainContainer";

import Link from "next/link";

const Hero = () => {
  return (
    <MainContainer className="min-h-[50vh] justify-center py-10 mid:items-center mid:gap-[24px] mid:text-center md:py-20 xl:py-36">
      {/* Title Section */}

      <div className="flex flex-col gap-1 xl:gap-2">
        <h1 className="text-4xl font-semibold -tracking-[2px] mid:text-5xl mid:leading-[56px] midLg:text-6xl xl:text-7xl xl:leading-[75px]">
          Find jobs in companies that you want to work in.
        </h1>
        <span className="text-based font-light leading-[1.1rem] text-secondaryText mid:text-2xl">
          Hire or apply for a job in a much easier way.
        </span>
      </div>

      {/* CTA Button */}
      <Link href="/jobs">
        <Button
          buttonType="Apply"
          className="flex items-center justify-center gap-2 mid:gap-4 midLg:py-4"
        >
          Apply Now <GoArrowRight className="text-2xl xl:text-3xl" />
        </Button>
      </Link>
    </MainContainer>
  );
};

export default Hero;
