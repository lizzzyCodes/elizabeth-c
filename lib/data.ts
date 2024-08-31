import BrowserStack from "../app/src/img/Icons/browserstack.png";
import Webdriver from "../app/src/img/Icons/Webdriver.png";
import Mocha from "../app/src/img/Icons/Mocha.svg.png";
import Jenkins from "../app/src/img/Icons/Jenkins.svg.png";
import Figma from "../app/src/img/Icons/Figma.png";
import Git from "../app/src/img/Icons/Git.svg.png";
import HTMLCSS from "../app/src/img/Icons/HTMLCSS.svg.png";
import Java from "../app/src/img/Icons/java.svg";
import Jest from "../app/src/img/Icons/Jest.png";
import JavaScript from "../app/src/img/Icons/JAVASCRIPT.svg";
import React from "../app/src/img/Icons/REAC.png";
import NodeJS from "../app/src/img/Icons/NODE.png";
import Python from "../app/src/img/Icons/PYTHON.svg.png";
// import TailWind from '../app/src/img/Icons/Tailwind.png';
import SQL from "../app/src/img/Icons/SQL.svg";
import PayPal from "../app/src/img/PayPalLogo.png";
import UW from "../app/src/img/Icons/UW.png";
import Temperature from "../app/src/img/Icons/Temperature.png";
import Precipitation from "../app/src/img/Icons/Water.png";
import Shapefile from "../app/src/img/Icons/Shapefile.png";
import Typeography from "../app/src/img/Icons/typography.png";
import DesignElements from "../app/src/img/Icons/designElements.png";
import ColorPalette from "../app/src/img/Icons/colorPalette.png";
import Terraform from "../app/src/img/Icons/terraform.svg";
import MaterialUI from "../app/src/img/Icons/materialUI.svg";
import { IconLinks } from "@/components/Datacards"; // USE it?
import { SkillLabels } from "@/components/ProjectCard";
import { ResumeData } from "@/components/Experience";
// Logos for University and Work Experience in Resume Page
export const logos = [
  {
    photo: PayPal,
    text: PayPal,
  },
  {
    photo: UW,
    text: UW,
  },
] as const;

// Logos for tech stack in Resume Page
export const images = [
  {
    photo: JavaScript,
    text: JavaScript,
    label: "JavaScript",
  },
  {
    photo: Python,
    text: Python,
    label: "Python",
  },
  {
    photo: Java,
    text: Java,
    label: "Java",
  },
  {
    photo: HTMLCSS,
    text: HTMLCSS,
    label: "HTML / CSS",
  },
  {
    photo: React,
    text: React,
    label: "React",
  },
  {
    photo: NodeJS,
    text: NodeJS,
    label: "NodeJS",
  },
  {
    photo: Jest,
    text: Jest,
    label: "Jest",
  },
  {
    photo: Mocha,
    text: Mocha,
    label: "Mocha",
  },
  {
    photo: BrowserStack,
    text: BrowserStack,
    label: "Browserstack",
  },
  {
    photo: Git,
    text: Git,
    label: "Git",
  },
  {
    photo: Jenkins,
    text: Jenkins,
    label: "Jenkins",
  },
  {
    photo: Figma,
    text: Figma,
    label: "Figma",
  },
  {
    photo: Webdriver,
    text: Webdriver,
    label: "WebdriverIO",
  },
  {
    photo: Terraform,
    text: Terraform,
    label: "Terraform",
  },
  {
    photo: MaterialUI,
    text: MaterialUI,
    label: "MaterialUI",
  },
  {
    photo: SQL,
    text: SQL,
    label: "SQL",
  },
] as const;

// Bullet Points for Resume Page for Work Experience
export const ExperienceData: ResumeData[] = [
  {
    id: "1",
    item: "Implemented eligibility and redirection logic in the router layer using JavaScript, reducing checkout latency by ~3 seconds for ~45% of users, leading to improved conversion rates",
  },
  {
    id: "2",
    item: "Collaborate with external BrowserStack team to develop the first Apple Pay functional tests, in order to kickstart apple pay testing ensuring seamless functionality on mobile platforms.",
  },
  {
    id: "3",
    item: "Designed, developed and implemented  a test suite of over 12 functional tests for a new checkout route using BrowserStack and webdriverIO. Ensuring functionality across control and experiment flows. Leading to a reduction in manual testing for developers. ",
  },
  {
    id: "4",
    item: "Developed a test suite with over 10 unit tests that adheres to industry best practices using Mocha and Chai achieving a robust 90% coverage.",
  },
  {
    id: "5",
    item: "Excellent communicator, and able to thrive on an agile team, contributing to: daily standups, sprints, quarterly project planning, and code reviews.",
  },
  {
    id: "6",
    item: "Built over 10 dashboards using splunk in order to triage and resolve production bugs during A/B experiment ramps to boost conversion rate and improve performance.",
  },
] as const;

// Bullet Points for Resume Page for Intern Experience
export const InternData: ResumeData[] = [
  {
    id: "1",
    item: "Conducted comprehensive research on SharpR, analyzing click rates and benchmarking against industry competitors in order increase click rates",
  },
  {
    id: "2",
    item: "Designed UX/UI prototypes to enhance button click rates based on research data using Figma.",
  },
  {
    id: "3",
    item: "Collaborate with the UX/UI team and product to understand design intent and ensure the best user experience is delivered through front-end functionalities.",
  },
  {
    id: "4",
    item: "Developed button designs using React and documented code changes on Confluence in order to use in upcoming A/B experiments.",
  },
] as const;

// Tech Stack Data for Project Cards for Alabama Project
export const alabamaStack: SkillLabels[] = [
  {
    id: "1",
    skill: "python",
  },
  {
    id: "2",
    skill: "shapefile",
  },
  {
    id: "3",
    skill: "csv",
  },
] as const;

// Tech Stack Data for Project Cards for MockHire
export const mockHireStack: SkillLabels[] = [
  {
    id: "1",
    skill: "figma",
  },
  {
    id: "2",
    skill: "material ui",
  },
  {
    id: "3",
    skill: "typescript",
  },
  {
    id: "4",
    skill: "react",
  },
] as const;

// Icons and Links Data for Alabama Project
export const alabamaVegetationData: IconLinks[] = [
  {
    id: "1",
    photo: Shapefile,
    text: "Shapefile",
    att: "icons created by Freepik - Flaticon",
    link: "https://hub.arcgis.com/datasets/ALGeoHub::alabama-counties/explore?location=32.541353%2C-86.673606%2C7.68&showTable=true",
  },
  {
    id: "2",
    photo: Temperature,
    text: "Temperature Data",
    att: "icons created by Freepik - Flaticon",
    link: "https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022",
  },
  {
    id: "3",
    photo: Precipitation,
    text: "Precipitation Data",
    att: "icons created by Freepik - Flaticon",
    link: "https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022",
  },
] as const;

export const mockHireDataLinks: IconLinks[] = [
  {
    id: "1",
    photo: Typeography,
    text: "Typeography", // typography fle
    att: "icons created by Freepik - Flaticon",
    link: "https://www.figma.com/file/uNAihqMjveW7qjVhP5tlZS/Fonts?type=design&node-id=0%3A1&mode=design&t=IOBJi0yHiGReflLl-1",
  },
  {
    id: "2",
    photo: DesignElements,
    text: "Design Elements", // like the buttons active etc file
    att: "icons created by Freepik - Flaticon",
    link: "https://www.figma.com/file/GKtgTOUeLxLO6gLaGJDLr0/Common-Design-Elements?type=design&node-id=0%3A1&mode=design&t=epWLalAm2tZav9gJ-1",
  },
  {
    id: "3",
    photo: ColorPalette,
    text: "Color Palette", // color palette figma file
    att: "icons created by Freepik - Flaticon",
    link: "https://www.figma.com/design/IhLMTmC2spzFx6FWLQjJYJ/Color-Palette---Candid-Cafe?node-id=0%3A1&t=IsBvwL64jYjHzrBo-1",
  },
] as const;
