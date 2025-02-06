// For fetching all jobs

type QueryParams = {
  pageNumber: number;
  jobLimit: number;
  searchQuery: string;
  title: string;
  salary: {
    from: string;
    to: string;
  };
  experience: string;
  position: string;
  location: string;
};

type ResponseDataType = {
  jobs: JobType[];
  totalPages: number;
};

// For jobs that are fetched

type JobType = {
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
  createdAt: Date | string;
  updatedAt: Date;
  expiresAt: Date;
};

type FormDataType = {
  title: string;
  description: string;
  salaryFrom: string;
  salaryTo: string;
  required: string;
  skills: string;
  position: string;
  experience: string;
  status: string;
  companyName: string;
  location: string;
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

// Bookmarked Job Type
type BookmarkedJobType = {
  [k: string]: boolean;
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

// Use query return types

type ReturnDataType<Key extends string, Value> = {
  success?: boolean;
  message: string;
  totalPages?: number;
} & { [key in Key]: Value };
