// For jobs that are fetched

type JobType = {
  createdAt: ReactNode;
  _id: string;
  title: string;
  description: string;
  salaryFrom: string | number;
  salaryTo: string | number;
  required: string | number;
  skills: string;
  position: string;
  experience: string | number;
  status: string;
  companyName: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
};

// For job that is dynamically fetched

type JobProps = {
  params: {
    id: string;
  };
};

// For the job applications of a particular job

type JobApplicationType<T> = {
  _id: string;
  jobId: T;
  applierId: string;
  fullname: string;
  phonenumber: string;
  experience: string;
  email: string;
  status: string;
  fileName: string;
};

// Bookmark type

type BookmarkType<T> = {
  _id: string;
  jobId: T;
  userId: string;
};

// Filter modal type

type ModalTypeProps = {
  setToggleFilters: Dispatch<SetStateAction<boolean>>;
  setClearFilter: Dispatch<SetStateAction<boolean>>;
};

// Redux toolkit

// User login data

type LoginDataType = {
  userName: string;
  userId: string;
  role: string;
};

type LoginState = {
  loginData: LoginDataType;
};

// Selected filters by user

type SelectedFiltersType = {
  title: string;
  salary: {
    from: string;
    to: string;
  };
  experience: string;
  position: string;
  location: string;
};

type SelectedFiltersState = {
  selectedFilters: SelectedFiltersType;
};
