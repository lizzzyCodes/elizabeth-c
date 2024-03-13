import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import About from "@/components/projectabout";

export default function Project() {
    return  (
        <section>
        <Navbar link="/pages/projects"/> 
        <Heading text='Plant growth in counties of Alabama' />
        <About />
        </section>
    )
  }
  