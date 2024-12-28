import { Dispatch, SetStateAction } from "react";

export const IncreasePageNumber = (
  setPageNumber: Dispatch<SetStateAction<number>>
) => {
  setPageNumber((pageNumber) => pageNumber + 1);
};

export const DecreasePageNumber = (
  setPageNumber: Dispatch<SetStateAction<number>>
) => {
  setPageNumber((pageNumber) => pageNumber - 1);
};
