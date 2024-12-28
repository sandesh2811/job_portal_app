import { Dispatch, SetStateAction } from "react";

export const searchQuery = (
  userInput: string,
  setSearchQuery: Dispatch<SetStateAction<string>>
) => {
  setSearchQuery(userInput);
};
