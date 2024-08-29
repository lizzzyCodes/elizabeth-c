// This Page contains all the project cards
import Heading from "@/components/heading";
import ProjectCard from "@/components/ProjectCard";
import AlabamaImage from "@/app/src/img/Icons/alabama.jpg";
import MockHireImage from "@/app/src/img/Icons/mockHire.jpg";
import { alabamaStack, mockHireStack } from "@/lib/data";
import Navbar from "@/components/navbar";

export default function Project() {
  return (
    <div>
      <Navbar link="/" />
      <Heading text="currently ... " />
      <div className="flex flex-wrap -mb-4">
        <ProjectCard
          title="Plant Growth in Alabama"
          text="This project analyzes existing plant data in several counties of Alabama, and see if they are similar with earlier expectations of what should grow in that region. Why Alabama? Based on google search, Alabama has more plant species than any other state in the United States."
          img={AlabamaImage.src}
          data={alabamaStack}
          link="/pages/projects/projectFiles/alabama"
        />
        <ProjectCard
          title="Mock Hire"
          text="Developed initial stages of a free platform for individuals to practice technical and behavioral interview skills through mock sessions with peers."
          img={MockHireImage.src}
          data={mockHireStack}
          link="/pages/projects/projectFiles/mockHire"
        />
      </div>
    </div>
  );
}
