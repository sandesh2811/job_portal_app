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
      {!toggleFilters ? (
        <div className="flex gap-2 items-center">
          {clearFilter && (
            <Button
              onClick={() => {
                dispatch(getSelectedFilters(resetFilters)),
                  setClearFilter(false);
              }}
              className="bg-transparent text-primaryText underline underline-offset-4 font-light"
            >
              Clear Filters
            </Button>
          )}
          <Button
            onClick={() => setToggleFilters(true)}
            className="bg-transparent text-primaryText underline underline-offset-4 font-light"
          >
            Filters
          </Button>
        </div>
      ) : (
        <FilterModal
          setToggleFilters={setToggleFilters}
          setClearFilter={setClearFilter}
        />
      )}
    </>
  );
};

export default JobFilters;
