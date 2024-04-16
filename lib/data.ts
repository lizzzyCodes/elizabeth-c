
import BrowserStack  from '../app/src/img/Icons/browserstack.png';
import Webdriver from '../app/src/img/Icons/Webdriver.png';
import Mocha from '../app/src/img/Icons/Mocha.svg.png';
import Jenkins from '../app/src/img/Icons/Jenkins.svg.png';
import Figma from '../app/src/img/Icons/Figma.png';
import Git from '../app/src/img/Icons/Git.svg.png';
import HTMLCSS from '../app/src/img/Icons/HTMLCSS.svg.png';
import Java from '../app/src/img/Icons/java.svg';
import Jest from '../app/src/img/Icons/Jest.png';
import JavaScript from '../app/src/img/Icons/JAVASCRIPT.svg';
import React from '../app/src/img/Icons/REAC.png';
import NodeJS from '../app/src/img/Icons/NODE.png';
import Python from '../app/src/img/Icons/PYTHON.svg.png'
// import TailWind from '../app/src/img/Icons/Tailwind.png';
import SQL from '../app/src/img/Icons/SQL.svg';
import PayPal from '../app/src/img/PayPalLogo.png';
import UW from '../app/src/img/Icons/UW.png';
import Temperature from '../app/src/img/Icons/Temperature.png';
import Precipitation from '../app/src/img/Icons/Water.png';
import Shapefile from '../app/src/img/Icons/Shapefile.png';
import Typeography from '../app/src/img/Icons/typography.png';
import DesignElements from '../app/src/img/Icons/designElements.png';
import ColorPalette from '../app/src/img/Icons/colorPalette.png';
import Terraform from '../app/src/img/Icons/terraform.svg';
import MaterialUI from '../app/src/img/Icons/materialUI.svg';
import MongoDB from '../app/src/img/Icons/mongodb.svg';


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
    label: JavaScript
  },
  {
    photo: Python,
    text: Python,
    label: Python,
  },
  {
    photo: Java,
    text: Java
  },
  {
    photo: HTMLCSS,
    text: HTMLCSS
  },
  {
    photo: React,
    text: React,
  },
  {
    photo: NodeJS,
    text: NodeJS,
  },
  {
    photo: Jest,
    text: Jest,
  },
  {
    photo: Mocha,
    text: Mocha,
  },
  {
    photo: BrowserStack,
    text: BrowserStack,
  },
  {
    photo: Git,
    text: Git,
  },
  {
    photo: Jenkins,
    text: Jenkins,
  },
  {
    photo: Figma,
    text: Figma,
  },
  {
    photo: Webdriver,
    text: Webdriver,
  },
  {
    photo: Terraform,
    text: Terraform,
  },
  {
    photo: MaterialUI,
    text: MaterialUI,
  },
  {
    photo: MongoDB,
    text: MongoDB,
  },
  {
    photo: SQL,
    text: SQL,
  },
] as const;

// Bullet Points for Resume Page for Work Experience
export const ExperienceData = [
  {
    id: '1',
    item: 'Implemented eligibility and redirection logic in the router layer using JavaScript, reducing checkout latency by ~3 seconds for ~45% of users, leading to improved conversion rates'
  },
  {
    id: '2',
    item: 'Collaborate with external BrowserStack team to develop the first Apple Pay functional tests, in order to kickstart apple pay testing ensuring seamless functionality on mobile platforms.'
  },
  {
    id: '3',
    item: 'Designed, developed and implemented  a test suite of over 12 functional tests for a new checkout route using BrowserStack and webdriverIO. Ensuring functionality across control and experiment flows. Leading to a reduction in manual testing for developers. '
  },
  {
    id:'4',
    item: 'Developed a test suite with over 10 unit tests that adheres to industry best practices using Mocha and Chai achieving a robust 90% coverage.'
  }, 
] as const;

// Bullet Points for Resume Page for Intern Experience
export const InternData = [
  {
    id: '1',
    item: 'Conducted comprehensive research on SharpR, analyzing click rates and benchmarking against industry competitors in order increase click rates'
  },
  {
    id: '2',
    item: 'Developed UI/UX prototypes to enhance button click rates using Figma and collaborated with UX/UI teams for feedback.',
  },
  {
    id: '3',
    item: 'Developed button designs using React and documented code changes on Confluence in order to use in upcoming A/B experiments',
  },
  {
    id: '4',
    item: 'Built dynamic pivot charts and cleaned data using Excel in order to assist analytics team and combat money laundering',
  },
] as const;

// Tech Stack Data for Project Cards for Alabama Project
export const alabamaStack = [
  {
    id: '1',
    skill: 'python'
  },
  {
    id: '2',
    skill: 'shapefile'
  },
  {
    id: '3',
    skill: 'csv'
  },
] as const;

// Tech Stack Data for GrooveSnap
export const grooveSnapStack = [
  {
    id: '1',
    skill: 'typescript'
  },
  {
    id: '2',
    skill: 'react'
  },
  {
    id: '3',
    skill: 'tailwind CSS'
  },
] as const;


// Tech Stack Data for Project Cards for MockHire
export const mockHireStack = [
  {
    id: '1',
    skill: 'figma'
  },
  {
    id: '2',
    skill: 'material ui'
  },
  {
    id: '3',
    skill: 'typescript'
  },
  {
    id: '4',
    skill: 'react'
  },
] as const;

// Icons and Links Data for Alabama Project
export const alabamaVegetationData = [
  {
    id: '1',
    photo: Shapefile,
    text: 'Shapefile',
    att: 'icons created by Freepik - Flaticon',
    link: 'https://hub.arcgis.com/datasets/ALGeoHub::alabama-counties/about',
  },
  {
    id: '2',
    photo: Temperature,
    text: 'Temperature Data',
    att: 'icons created by Freepik - Flaticon',
    link: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022'
  },
  {
    id: '3',
    photo: Precipitation,
    text: 'Precipitation Data',
    att: 'icons created by Freepik - Flaticon',
    link: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022'
  },
] as const;

export const mockHireDataLinks = [
  {
    id: '1',
    photo: Typeography,
    text: 'Typeography', // typography fle
    att: 'icons created by Freepik - Flaticon',
    // <a href="https://www.flaticon.com/free-icons/font" title="font icons">Font icons created by Freepik - Flaticon</a>
    link: 'https://hub.arcgis.com/datasets/ALGeoHub::alabama-counties/about',
  },
  {
    id: '2',
    photo: DesignElements,
    text: 'Design Elements', // like the buttons active etc file
    att: 'icons created by Freepik - Flaticon',
    // <a href="https://www.flaticon.com/free-icons/art-and-design" title="art and design icons">Art and design icons created by Freepik - Flaticon</a>
    link: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022'
  },
  {
    id: '3',
    photo: ColorPalette,
    text: 'Color Palette', // color palette figma file
    att: 'icons created by Freepik - Flaticon',
    // <a href="https://www.flaticon.com/free-icons/shapes" title="shapes icons">Shapes icons created by Freepik - Flaticon</a>
    link: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022'
  },
  {
    id: '3',
    photo: Precipitation,
    text: 'Pages', // pges file like the dashboard etc... 
    att: 'icons created by Freepik - Flaticon', // figma logo?
    link: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/county/time-series/AL-117/tavg/1/1/1895-2022'
  },
] as const;