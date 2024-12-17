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
