// This is the Page for Data Science Alabama Project
// probably will add a link for people to look through my code.
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import About from "@/components/projectabout";
import DataCard from "@/components/Datacards";
import { alabamaVegetationData } from "@/lib/data";

export default function Project() {
  return (
    <section>
      <Navbar link="/pages/projects" />
      <Heading text="Plant growth in counties of Alabama" />
      <About
        subheading="About this project"
        text="This project analyzes existing vegetation data from various counties in Alabama by comparing 
        temperature and precipitation data over 10 years.
        Alabama was chosen due to having the most plant species in the United States.
        Research questions include:
        Do temperature and precipation change over the years in each country? Is the change significant?
        Do geographical locations affect plant diversity?"
      />
      <About
        subheading="Data Mining"
        text="Data sets used were a shapefile that contains all counties in alabama, temperature and precipitation csv files. Shape files 
        store the geometry of shapes like points, lines and polygons. They are commonly used in
        spatial analysis and mapping. (Click icons below to inspect the data).
        "
      />
      <DataCard data={alabamaVegetationData} />
      <About
        subheading="Data Cleaning and Coding"
        text="Temperature and Precipitation data are saved in a CSV format. To clean the data I used the pandas library. Data in the CSV file had the year, month and value as 200007,149, 3 rows to be deleted, the last row was
        dropped as it included a irrelevant data point. 8 functions were created
        1. remove_n_clean reads the CSV data and cleans the data set to get 
        value and the name of the county into two seperate columns.
        2. get_years modifies the date column to split the value of 200001 into year and months columns. 
        3. get_mean_per_year takes in the cleaned data set and grabs the average value.
        4. create_county gets the shape of the country requested
        5. get_max get_min  the max and min value of a data frame to be used during map creation
        "
      />
      <About
        subheading="Data Visualizations"
        text="To create the visualizations I used geopandas and matplotlib. create_row_merge
        takes in five parameters, the data set, the name of the county, type of data if temperature or precipitation, color and county shape(shapefile of the county). this function
        stores everything in a specified file path with a index number attached to the name for storing."
      />
      <About
        subheading="Improvements"
        text="A couple things I would improve on is breaking up the create_row_merge function reduce the amount of parameters name of county could be deleted as a
        parameter and grab the table name"
      />
    </section>
  );
}
