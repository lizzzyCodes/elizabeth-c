import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { ExperienceData, InternData, logos, OracleData } from "@/lib/data";

// overall page for resume
export default function Resume() {
  return (
    <section className="w-full">
      <Navbar link="/" />
      <Skills />
      <h1 className="text-center text-4xl lg:text-5xl font-press-start uppercase text-[#ED6DD3] pt-6 pb-10">
        experience{" "}
      </h1>
      <Experience
        title="oracle"
        subheading="software developer, OCI"
        date="jan 2025 - present"
        data={OracleData}
        image={logos[0].photo.src}
      />
      <Experience
        title="paypal"
        subheading="software engineer, checkout"
        date="sept 2022 - jan 2024"
        data={ExperienceData}
        image={logos[1].photo.src}
      />
      <Experience
        title="paypal"
        subheading="software engineer, intern"
        date="june 2021 - sept 2021"
        data={InternData}
        image={logos[1].photo.src}
      />
      <Experience
        title="School"
        subheading="B.A geographic information systems && data science" // subheading I only want to display it on laptop
        text="@ The University of Washington" // on mobile
        date="june 2022"
        image={logos[2].photo.src}
      />
    </section>
  );
}
