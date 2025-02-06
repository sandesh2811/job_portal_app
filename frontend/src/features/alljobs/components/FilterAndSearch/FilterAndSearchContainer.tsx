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
    <div className="flex justify-between items-center">
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
