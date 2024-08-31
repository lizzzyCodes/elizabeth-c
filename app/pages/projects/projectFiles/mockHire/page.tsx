// This is the Page for MockHire, it will contain Figma Links etc
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import About from "@/components/projectabout";
import DataCard from "@/components/Datacards";
import ImageAndLink from "@/components/ImageAndLink";
import { mockHireDataLinks } from "@/lib/data";
import Image from "../../../../src/img/Icons/github.svg";
export default function Project() {
  return (
    <section>
      <Navbar link="/pages/projects" />
      <Heading text="MockHire" />
      <About
        subheading="About this project"
        text="This project aims to create a free platform for individuals to practice technical and behavioral interview skills through mock sessions with peers. Mock interviews are held at real time. The project uses Vite, React, React Router, and TypeScript for development, along with Material UI for user interface components. CSS and StoryBook are utilized to build pages in isolation, and Mocha and React Testing Library are used for testing."
      />
      <About
        subheading="Figma Designs"
        text="Designed the common design elements, typography, color scheme, sign in, landing, dashboard pages, and branding using Figma. (Click on the links below to see mockups on Figma)"
      />
      <DataCard data={mockHireDataLinks} />
      <About
        subheading="Github Repo"
        text="I completed the sign-in page using Material UI and TypeScript, and integrated Mocha for running tests via the command line interface. I also implemented authentication middleware to manage authentication states, which authenticates users through API calls to the backend and renders protected routes for authenticated users. Currently, I am working on unit tests using Mocha, but there is an issue with integrating Mocha with Vite and TypeScript that is being addressed."
      />
    </section>
  );
}
