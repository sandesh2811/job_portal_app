import { AppDispatch } from "@/Store/store";
import { getSelectedFilters } from "@/Store/Features/selectedFilters";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import { GoX } from "react-icons/go";

import { useState } from "react";
import { useDispatch } from "react-redux";

// Make dynamic

const JobTitles = [
  "Frontend",
  "Backend",
  "Devops",
  "Designing",
  "Quality Assurance",
];

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

  return (
    <div className="bg-teal-700 rounded-sm w-[80%] min-h-[50vh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md flex justify-between flex-col p-6">
      {/* Top/CTA Button */}

      <div className="flex justify-end items-center">
        <GoX
          size={30}
          className="cursor-pointer"
          onClick={() => setToggleFilters(false)}
        />
      </div>

      {/* Filter Contents */}

      <div className="h-full flex flex-col gap-3">
        {/* Based on job title */}

        <div className="flex flex-col gap-2 mid:items-center mid:flex-row min-h-[10vh]">
          <span>Title: </span>
          {JobTitles.map((title, idx) => {
            return (
              <div key={idx} className="flex gap-3">
                <span
                  className="cursor-pointer hover:bg-red-400"
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

        {/* Salary */}

        <div className="flex flex-col mid:flex-row mid:items-center gap-2 min-h-[10vh]">
          <span>Salary:</span>

          <Input
            name="lowest"
            type="string"
            placeholder="From"
            inputBoxSize="sm"
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
            inputBoxSize="sm"
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

        {/* Experience */}

        <div className="flex gap-4 items-center min-h-[10vh]">
          <span className="flex flex-col">
            Experience <span className="text-xs">(in years or above)</span>
          </span>
          <select
            className="bg-transparent border-[1px] rounded-md px-4 py-2 w-[150px]"
            onChange={(e) =>
              setJobFilters((prev) => ({ ...prev, experience: e.target.value }))
            }
          >
            <option value="None" className="text-background">
              None
            </option>
            <option value="1" className="text-background">
              1
            </option>
            <option value="2" className="text-background">
              2
            </option>
            <option value="3" className="text-background">
              3
            </option>
            <option value="4" className="text-background">
              4
            </option>
            <option value="5" className="text-background">
              5
            </option>
          </select>
        </div>

        {/* Job type */}

        <div className="flex flex-col justify-between  min-h-[10vh]">
          {/* Position */}

          <div className="flex gap-4 items-center">
            <span>Position: </span>
            <select
              className="bg-transparent border-[1px] rounded-md px-4 py-2 w-[150px]"
              onChange={(e) =>
                setJobFilters((prev) => ({ ...prev, position: e.target.value }))
              }
            >
              <option value="None" className="text-background">
                None
              </option>
              <option value="SeniorLevel" className="text-background">
                Senior Level
              </option>
              <option value="MidLevel" className="text-background">
                Mid Level
              </option>
              <option value="JuniorLevel" className="text-background">
                Junior Level
              </option>
            </select>
          </div>

          {/* Location */}

          <div className="flex gap-4 items-center">
            <span>Location: </span>
            <select
              className="bg-transparent border-[1px] rounded-md px-4 py-2 w-[150px]"
              onChange={(e) =>
                setJobFilters((prev) => ({ ...prev, location: e.target.value }))
              }
            >
              <option value="None" className="text-background">
                None
              </option>
              <option value="Kathmandu" className="text-background">
                Kathmandu
              </option>
              <option value="Pokhara" className="text-background">
                Pokhara
              </option>
              <option value="Butwal" className="text-background">
                Butwal
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Footer & CTA Button */}

      <div className="flex justify-end items-center">
        <Button
          size="large"
          onClick={() => {
            dispatch(getSelectedFilters(jobFilters)), setClearFilter(true);
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default FilterModal;
