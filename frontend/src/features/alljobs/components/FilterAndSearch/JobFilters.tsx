import { AppDispatch } from "@/Store/store";
import { getSelectedFilters } from "@/Store/Features/selectedFilters";

import Button from "@/Components/UI/Button";
import FilterModal from "@/features/alljobs/components/FilterAndSearch/FilterModal";

import { useState } from "react";
import { useDispatch } from "react-redux";

const JobFilters = () => {
  const [toggleFilters, setToggleFilters] = useState<boolean>(false);
  const [clearFilter, setClearFilter] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  const resetFilters: SelectedFiltersType = {
    title: "",
    salary: {
      from: "",
      to: "",
    },
    experience: "",
    position: "",
    location: "",
  };

  return (
    <>
      <div
        className={
          clearFilter
            ? "flex w-full flex-row-reverse items-center justify-between gap-2 whitespace-nowrap mid:w-auto mid:flex-row"
            : "flex items-center gap-2 whitespace-nowrap mid:flex-row"
        }
      >
        {clearFilter && (
          <Button
            onClick={() => {
              dispatch(getSelectedFilters(resetFilters)), setClearFilter(false);
            }}
            className="bg-transparent p-0 font-light text-primaryText underline underline-offset-4"
          >
            Clear Filters
          </Button>
        )}
        <Button
          onClick={() => setToggleFilters(true)}
          className="bg-transparent p-0 font-light text-primaryText underline underline-offset-4"
        >
          Filters
        </Button>
      </div>
      {toggleFilters && (
        <FilterModal
          setToggleFilters={setToggleFilters}
          setClearFilter={setClearFilter}
        />
      )}
    </>
  );
};

export default JobFilters;
