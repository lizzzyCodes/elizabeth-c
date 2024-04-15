// This is the Page for MockHire, it will contain Figma Links etc
import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import About from "@/components/projectabout";
import DataCard from "@/components/Datacards";
import { mockHireDataLinks } from "@/lib/data";


export default function Project() {
    return  (
        <section>
        <Navbar link="/pages/projects"/> 
        <Heading text='MockHire' />
        <About subheading='About this project' text='This project aims to create a free platform for individuals to practice technical and behavioral interview skills through mock sessions with peers. Mock interviews are held at real time'/>
        <About subheading="Figma Designs" text='Designed the common design elements, typography, color scheme, sign in, landing, dashboard pages, and branding using Figma. Click on the links below to see mockups on Figma'/>
        <DataCard data={ mockHireDataLinks }/>
        <About subheading="Github Repo" text='Currently developing the sign in page with material ui, adding error handling and connecting on submit to back end. Link to Repo' />
        <DataCard data={ mockHireDataLinks }/> 
        </section>

    )
  }
  