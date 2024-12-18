// For jobs that are fetched

type JobType = {
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
  createdBy: Schema.Types.ObjectId;
};

// For job that is dynamically fetched

type JobProps = {
  params: {
    id: string;
  };
};
