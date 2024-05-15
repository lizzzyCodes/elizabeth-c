import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import { ExperienceData, InternData, logos } from "@/lib/data";

// overall page for resume
export default function Resume() {
  return (
    <section className="w-full">
      <Navbar link="/" />
      <Skills />
      <Experience
        title="paypal"
        subheading="software engineer, checkout"
        date="sept 2022 - jan 2024"
        data={ExperienceData}
        image={logos[0].photo.src}
      />
      <Experience
        title="paypal"
        subheading="software engineer, intern"
        date="june 2021 - sept 2021"
        data={InternData}
        image={logos[0].photo.src}
      />
      <Experience
        title="education"
        subheading="b.a geographic information systems && data science @ university of washington"
        date="june 2022"
        image={logos[1].photo.src}
      />
    </section>
  );
}
