// For jobs that are fetched

type JobType = {
  createdAt: ReactNode;
  _id: string;
  title: string;
  description: string;
  salary: string | number;
  required: string | number;
  position: string;
  experience: string | number;
  status: string;
  companyName: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
};

// For job that is dynamically fetched

type JobProps = {
  params: {
    id: string;
  };
};

// For the job applications of a particular job

type JobApplicationType = {
  _id: string;
  jobId: string;
  applierId: string;
  fullname: string;
  phonenumber: string;
  experience: string;
  email: string;
  status: string;
};
