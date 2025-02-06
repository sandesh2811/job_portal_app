type JobFiltersType = {
  title: string;
  salary: {
    from: string;
    to: string;
  };
  experience: string;
  location: string;
  position: string;
};

const handleNoChange = (jobFilters: JobFiltersType): boolean => {
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

export default handleNoChange;
