import { AppDispatch } from "@/Store/store";
import { getSelectedFilters } from "@/Store/Features/selectedFilters";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import { GoX } from "react-icons/go";
import SelectOption from "@/Components/UI/SelectOption";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion as m } from "motion/react";

const JobTitles = [
  "Frontend",
  "Backend",
  "Devops",
  "Designing",
  "Quality Assurance",
];

const experienceInYears = ["None", "1", "2", "3", "4", "5"];
const positions = [
  "None",
  "Junior Level",
  "Mid Level",
  "Senior Level",
  "Intern",
];
const locations = ["None", "Pokhara", "Butwal", "Kathmandu"];

const FilterModal = ({ setToggleFilters, setClearFilter }: ModalTypeProps) => {
  const [jobFilters, setJobFilters] = useState({
    title: "",
    salary: {
      from: "",
      to: "",
    },
    experience: "",
    position: "",
    location: "",
  });

  const dispatch: AppDispatch = useDispatch();

  const handleNoChange = (): boolean => {
    if (
      jobFilters.title === "" &&
      jobFilters.salary.from === "" &&
      jobFilters.salary.to === "" &&
      jobFilters.experience === "" &&
      jobFilters.position === "" &&
      jobFilters.location === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AnimatePresence>
      <m.div
        key={"filter_modal"}
        initial={{ left: "50%", top: "-50%" }}
        animate={{ left: "50%", top: "15%" }}
        exit={{ left: 0, top: "-50%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute flex min-h-[40vh] w-[90vw] translate-x-[-50%] flex-col justify-between gap-4 rounded-sm border-[1.28px] border-primaryText bg-background p-4 shadow-lg md:gap-6 md:p-8 lg:w-[800px]"
      >
        {/* Top/CTA Button */}

        <div className="flex items-center justify-end">
          <GoX
            size={30}
            className="cursor-pointer"
            onClick={() => setToggleFilters(false)}
          />
        </div>

        {/* Filter Contents */}

        <div className="flex flex-col gap-4 md:gap-6">
          {/* Based on job title */}

          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium md:text-2xl">Job Title</span>
            <div className="flex flex-row flex-wrap justify-between gap-2">
              {JobTitles.map((title, idx) => {
                return (
                  <div key={idx} className="flex gap-3">
                    <span
                      className="cursor-pointer hover:bg-secondaryText hover:text-background"
                      onClick={() =>
                        setJobFilters((prev) => ({ ...prev, title: title }))
                      }
                    >
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/*Based on Salary */}

          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium md:text-2xl">Salary</span>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-6">
              <Input
                name="lowest"
                type="string"
                placeholder="From"
                className="flex-1"
                onChange={(e) =>
                  setJobFilters((prev) => ({
                    ...prev,
                    salary: {
                      ...prev.salary,
                      from: e.target.value,
                    },
                  }))
                }
              />
              <Input
                name="highest"
                type="string"
                placeholder="To"
                className="flex-1"
                onChange={(e) =>
                  setJobFilters((prev) => ({
                    ...prev,
                    salary: {
                      ...prev.salary,
                      to: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>

          {/*Based on Experience & Position */}

          <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <span className="flex flex-col gap-1 text-lg font-medium md:flex-row md:items-center md:text-2xl">
                Experience <span className="text-xs">(in years or above)</span>
              </span>
              <select
                className="rounded-sm border-[1px] border-primaryText bg-transparent px-2 py-1 md:px-4 md:py-2"
                onChange={(e) =>
                  setJobFilters((prev) => ({
                    ...prev,
                    experience: e.target.value,
                  }))
                }
              >
                {experienceInYears.map((year) => {
                  return <SelectOption key={year} title={year} value={year} />;
                })}
              </select>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-lg font-medium md:text-2xl">Position </span>
              <select
                className="rounded-sm border-[1px] border-primaryText bg-transparent px-2 py-1 md:px-4 md:py-2"
                onChange={(e) =>
                  setJobFilters((prev) => ({
                    ...prev,
                    position: e.target.value,
                  }))
                }
              >
                {positions.map((position) => {
                  return (
                    <SelectOption
                      key={position}
                      title={position}
                      value={position}
                    />
                  );
                })}
              </select>
            </div>
          </div>

          {/*Based on Location */}

          <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-lg font-medium md:text-2xl">Location </span>
              <select
                className="rounded-sm border-[1px] border-primaryText bg-transparent px-2 py-1 md:px-4 md:py-2"
                onChange={(e) =>
                  setJobFilters((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
              >
                {locations.map((location) => {
                  return (
                    <SelectOption
                      key={location}
                      title={location}
                      value={location}
                    />
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        {/* Footer & CTA Button */}

        <div className="flex items-center justify-end">
          <Button
            className={
              handleNoChange()
                ? "cursor-not-allowed bg-primaryText text-background"
                : "cursor-pointer bg-primaryText text-background"
            }
            disabled={handleNoChange()}
            onClick={() => {
              dispatch(getSelectedFilters(jobFilters)), setClearFilter(true);
            }}
          >
            Apply
          </Button>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default FilterModal;
