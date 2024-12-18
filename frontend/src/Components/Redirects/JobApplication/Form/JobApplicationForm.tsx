"use client";

import postJobApplication from "@/Actions/postJobApplication";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

// Zod
const JobApplicationSchema = z.object({
  fullname: z
    .string({ message: "Fullname is required" })
    .min(3, { message: "Name must be atleast 3 characters long!" }),
  phonenumber: z
    .string({ message: "Phone number is required" })
    .min(10, { message: "Phone number must be atleast of 10 digits long!" })
    .max(10, { message: "Phone number cannot exceed 10 digits!" }),
  experience: z
    .string({ message: "Experience is required" })
    .max(2, { message: "Experience cannot be more than 2 digits!" }),
  email: z.string({ message: "Email is required" }).email(),
});

export type JobApplicationType = z.infer<typeof JobApplicationSchema>;

const JobApplicationForm = ({ params }: JobProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<JobApplicationType>({
    resolver: zodResolver(JobApplicationSchema),
    mode: "onChange",
  });

  const handleApplicationSubmit: SubmitHandler<JobApplicationType> = async (
    data
  ) => {
    const { id } = await params;
    const res = await postJobApplication(id, data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleApplicationSubmit)}
      action="#"
      className="flex flex-col gap-4 mid:w-[500px]"
    >
      <div className="flex flex-col gap-2">
        <span>Full Name</span>
        <Input {...register("fullname")} name="fullname" type="string" />
        {errors.fullname && (
          <span className="text-sm text-red-600">
            {errors.fullname.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span>Phone Number</span>
        <Input {...register("phonenumber")} name="phonenumber" type="string" />
        {errors.phonenumber && (
          <span className="text-sm text-red-600">
            {errors.phonenumber.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span>Experience</span>
        <Input {...register("experience")} name="experience" type="string" />
        {errors.experience && (
          <span className="text-sm text-red-600">
            {errors.experience.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span>Email</span>
        <Input {...register("email")} name="email" type="string" />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default JobApplicationForm;
