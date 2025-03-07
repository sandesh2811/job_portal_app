import JobFilters from "@/features/alljobs/components/FilterAndSearch/JobFilters";
import SearchBox from "@/features/alljobs/components/FilterAndSearch/SearchBox";

import { Dispatch, SetStateAction } from "react";

type FilterAndSearchContainerProps = {
  userInput: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setUserInput: Dispatch<SetStateAction<string>>;
};

const FilterAndSearchContainer = ({
  setSearchQuery,
  userInput,
  setUserInput,
}: FilterAndSearchContainerProps) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 mid:flex-row mid:items-center">
      {/* Search Box */}
      <SearchBox
        setSearchQuery={setSearchQuery}
        userInput={userInput}
        setUserInput={setUserInput}
      />

      {/* Filters for job */}
      <JobFilters />
    </div>
  );
};

export default FilterAndSearchContainer;
