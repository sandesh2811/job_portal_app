import {
  DecreasePageNumber,
  IncreasePageNumber,
} from "@/features/alljobs/utils/SetPageNumber";

import Button from "@/Components/UI/Button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Dispatch, SetStateAction } from "react";

type PaginationButtonsProps = {
  jobsLoading: boolean;
  data:
    | {
        success: boolean;
        message: string;
        jobs: JobType[];
      }
    | undefined;
  userInput: string;
  checkedTotalPageNumber: number;
  jobLimit: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const PaginationButtons = ({
  jobsLoading,
  data,
  userInput,
  checkedTotalPageNumber,
  jobLimit,
  pageNumber,
  setPageNumber,
}: PaginationButtonsProps) => {
  return (
    <>
      {!jobsLoading && (
        <div className="flex justify-between items-center">
          <Button
            size="medium"
            className={
              pageNumber === 1 || pageNumber <= 0
                ? "flex gap-1 items-center cursor-not-allowed"
                : "flex gap-1 items-center"
            }
            disabled={pageNumber === 1 || pageNumber <= 0}
            onClick={() => DecreasePageNumber(setPageNumber)}
          >
            <GoArrowLeft /> Prev
          </Button>
          <Button
            size="medium"
            className={
              pageNumber === checkedTotalPageNumber ||
              pageNumber > checkedTotalPageNumber ||
              (userInput !== "" && (data?.jobs.length ?? 0) < jobLimit)
                ? "flex gap-1 items-center cursor-not-allowed"
                : "flex gap-1 items-center"
            }
            disabled={
              (pageNumber === checkedTotalPageNumber ||
                pageNumber > checkedTotalPageNumber ||
                (userInput !== "" && (data?.jobs.length ?? 0) < jobLimit)) &&
              true
            }
            onClick={() => IncreasePageNumber(setPageNumber)}
          >
            Next <GoArrowRight />
          </Button>
        </div>
      )}
    </>
  );
};

export default PaginationButtons;
