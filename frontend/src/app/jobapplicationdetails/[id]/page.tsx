import JobApplicationDetails from "@/Components/pages/JobApplicationDetails";
import axios from "axios";

// import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: MetadataParmasType): Promise<Metadata> {
//   // const res = await fetch(
//   //   `http://localhost:5000/api/jobApplication/details/${id}`,
//   //   {
//   //     method: "GET",
//   //     credentials: "include",
//   //   },
//   // );
//   // const resData = await res.json();

//   const { id } = await params;

//   const response = await axios.get(
//     `http://localhost:5000/api/jobApplication/details/${id}`,
//     {
//       withCredentials: true,
//       headers: {
//         "X-Build-Time-Request": true,
//       },
//     },
//   );

//   // return {
//   //   title: resData.singleJobApplication.jobId?.title,
//   //   description: resData.singleJobApplication.jobId?.description,
//   // };
//   return {
//     title: response.data.singleJobApplication.jobId?.title,
//     description: response.data.singleJobApplication.jobId?.description,
//   };
// }

const JobApplicationDetailsPage = () => {
  return <JobApplicationDetails />;
};

export default JobApplicationDetailsPage;
