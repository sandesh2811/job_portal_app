import { searchQuery } from "@/features/alljobs/utils/SetSearchQuery";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";

import { Dispatch, SetStateAction } from "react";

type FilterAndSearchContainerProps = {
  userInput: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setUserInput: Dispatch<SetStateAction<string>>;
};

const SearchBox = ({
  setSearchQuery,
  userInput,
  setUserInput,
}: FilterAndSearchContainerProps) => {
  return (
    <div className="flex justify-center mid:justify-start">
      <Input
        type="string"
        name="search"
        placeholder="Search..."
        className="rounded-none"
        autoComplete="off"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        className="rounded-none"
        onClick={() => searchQuery(userInput, setSearchQuery)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBox;
