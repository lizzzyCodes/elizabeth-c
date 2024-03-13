// This is the Page for Data Science Alabama Project
import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import About from "@/components/projectabout";
import DataCard from "@/components/Datacards";
import { alabamaVegetationData } from "@/lib/data";


export default function Project() {
    return  (
        <section>
        <Navbar link="/pages/projects"/> 
        <Heading text='Plant growth in counties of Alabama' />
        <About subheading='About this project' text='This project analyzes existing vegetation data from various counties in Alabama by comparing 
        temperature and precipitation data over 10 years.
        Alabama was chosen due to having the most plant species in the United States.
        Research questions include:
        Do temperature and precipation change over the years in each country? Is the change significant?
        Do geographical locations affect plant diversity?'/>
        <About subheading="Data Mining" text='Data sets used were shapefiles, temperature and precipitation csv files. Shape files 
        store the geometry of shapes like points, lines and polygons. They are commonly used in
        spatial analysis and mapping.
        '/>
        <DataCard data={ alabamaVegetationData }/>
        <About subheading="Data Cleaning" text='here are the links'/>
        <About subheading="Data Visualizations" text='here are the links'/>
        </section>

    )
  }
  