import Hero from "@/Components/HomePage/Hero";
import LatestJobs from "@/Components/pages/LatestJobs";
import Services from "@/Components/HomePage/Services";
import Banner from "@/Components/Banner/Banner";
import FAQ from "@/Components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestJobs />
      <FAQ />
      <Banner />
      {/* <Services /> */}
    </>
  );
}
