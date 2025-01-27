import z from "zod";

// For  jobs

const JobSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  salaryFrom: z.string() || z.number(),
  salaryTo: z.string() || z.number(),
  required: z.string() || z.number(),
  skills: z.string(),
  position: z.string(),
  experience: z.string() || z.number(),
  status: z.string(),
  companyName: z.string(),
  location: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
});

export const LatestJobSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  latestJobs: z.array(JobSchema),
});

export type LatestJobReturnType = z.infer<typeof LatestJobSchema>;

export const JobReturnDataSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  jobs: z.array(JobSchema),
  totalPages: z.number(),
});

export type JobReturnType = z.infer<typeof JobReturnDataSchema>;

export const PostedJobReturnDataSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  jobs: z.array(JobSchema),
});

export type PostedJobReturnType = z.infer<typeof PostedJobReturnDataSchema>;

export const SingleJobReturnDataSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  job: JobSchema,
});

export type SingleJobReturnType = z.infer<typeof SingleJobReturnDataSchema>;

// For job applications to the job

const AppliedJobSchema = z.object({
  _id: z.string(),
  jobId: JobSchema,
  applierId: z.string(),
  fullname: z.string(),
  phonenumber: z.string(),
  experience: z.string(),
  email: z.string(),
  status: z.string(),
  fileName: z.string(),
});

export const AppliedJobReturnDataSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  jobApplicationsByApplier: z.array(AppliedJobSchema),
});

export type AppliedJobReturnType = z.infer<typeof AppliedJobReturnDataSchema>;

export const SingleJobApplicationSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  singleJobApplication: AppliedJobSchema,
});

export type SingleJobApplicationReturnType = z.infer<
  typeof SingleJobApplicationSchema
>;

export const JobApplicationToTheJobReturnDataSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  jobApplicationsToTheJob: z.array(AppliedJobSchema),
});
export type JobApplicationToTheJobType = z.infer<
  typeof JobApplicationToTheJobReturnDataSchema
>;

// For saved bookmarks

const BookmarkSchema = z.object({
  _id: z.string(),
  jobId: JobSchema,
  userId: z.string(),
});

export const BookmarkSchemaReturnDataSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  bookmarksOfUser: z.array(BookmarkSchema),
  jobIdOfBookmarks: z.array(z.string()),
});

export type BookmarkSchemaReturnType = z.infer<
  typeof BookmarkSchemaReturnDataSchema
>;
