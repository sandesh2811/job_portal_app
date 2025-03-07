"use client";

import MainContainer from "@/Components/MainContainer";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

import { AnimatePresence, motion as m } from "motion/react";

import { MouseEventHandler, useCallback, useState } from "react";

type FAQContentType = {
  question: string;
  answer: string;
};

const FAQContent: FAQContentType[] = [
  {
    question: "How do I apply for a job?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis explicabo ut quae voluptate soluta earum. Voluptatem minima ullam expedita consequuntur repellendus laudantium architecto ipsa perspiciatis, sit nam temporibus ea sed.",
  },
  {
    question: "How do I register as a employer or applier?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis explicabo ut quae voluptate soluta earum. Voluptatem minima ullam expedita consequuntur repellendus laudantium architecto ipsa perspiciatis, sit nam temporibus ea sed.",
  },
  {
    question: "How do I communicate with employer or applier?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis explicabo ut quae voluptate soluta earum. Voluptatem minima ullam expedita consequuntur repellendus laudantium architecto ipsa perspiciatis, sit nam temporibus ea sed.",
  },
  {
    question: "How do we know if we are selected for a job?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis explicabo ut quae voluptate soluta earum. Voluptatem minima ullam expedita consequuntur repellendus laudantium architecto ipsa perspiciatis, sit nam temporibus ea sed.",
  },
];

const FAQ = () => {
  return (
    <MainContainer className="mb-16 gap-4 mid:gap-6 md:mb-20 lg:mb-36 lg:gap-10">
      <h1 className="text-3xl font-semibold md:text-4xl midLg:text-5xl">
        Frequently Asked Questions
      </h1>
      {FAQContent.map((faq, idx) => {
        return <FAQElements key={idx} index={idx} faq={faq} />;
      })}
    </MainContainer>
  );
};

export default FAQ;

type FAQElementsProps = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};

const FAQElements = ({ faq, index }: FAQElementsProps) => {
  const [isOpen, setOpen] = useState<null | number>(null);

  const handleFAQVisibility = (idx: number) => {
    setOpen(isOpen === idx ? null : idx);
  };

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 border-b-2 border-primaryText py-6 md:py-8"
      onClick={() => handleFAQVisibility(index)}
    >
      <div className="flex justify-between">
        <span className="text-xl mid:text-2xl midLg:text-[2rem] lg:leading-8 xl:text-[2rem] xl:leading-[2rem]">
          {faq.question}
        </span>
        {isOpen !== null ? (
          <GoChevronUp className="text-xl midLg:text-[28px] xl:text-4xl" />
        ) : (
          <GoChevronDown className="text-xl midLg:text-[28px] xl:text-4xl" />
        )}
      </div>
      {isOpen !== null && (
        <AnimatePresence>
          <m.span
            key="faq_answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-secondaryText midLg:text-lg lg:text-xl lg:leading-6"
          >
            {faq.answer}
          </m.span>
        </AnimatePresence>
      )}
    </div>
  );
};
