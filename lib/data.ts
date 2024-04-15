
import BrowserStack  from '../app/src/img/Icons/browserstack.png';
import Webdriver from '../app/src/img/Icons/Webdriver.png';
import Mocha from '../app/src/img/Icons/Mocha.svg.png';
import Jenkins from '../app/src/img/Icons/Jenkins.svg.png';
import Figma from '../app/src/img/Icons/Figma.png';
import Git from '../app/src/img/Icons/Git.svg.png';
import HTMLCSS from '../app/src/img/Icons/HTMLCSS.svg.png';
import Java from '../app/src/img/Icons/JAVA.png';
import Jest from '../app/src/img/Icons/Jest.png';
import JavaScript from '../app/src/img/Icons/JAVASCRIPT.svg';
import React from '../app/src/img/Icons/REAC.png';
import NodeJS from '../app/src/img/Icons/NODE.png';
import Python from '../app/src/img/Icons/PYTHON.svg.png'
import TailWind from '../app/src/img/Icons/Tailwind.png';
import PayPal from '../app/src/img/PayPalLogo.png';
import UW from '../app/src/img/Icons/UW.png';
import Temperature from '../app/src/img/Icons/Temperature.png';
import Precipitation from '../app/src/img/Icons/Water.png';
import Shapefile from '../app/src/img/Icons/Shapefile.png';

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
    text: JavaScript
  },
  {
    photo: Python,
    text: Python
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
    photo: TailWind,
    text: TailWind,
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
] as const;

// Bullet Points for Resume Page for Work Experience
export const ExperienceData = [
  {
    id: '1',
    item: 'Implemented eligibility logic in the router layer using JavaScript, reducing checkout latency by ~3 seconds for ~45% of users, leading to improved conversion rates'
  },
  {
    id: '2',
    item: 'Spearheaded collaboration with external BrowserStack team to develop the first Apple Pay functional test using BrowserStack, in order to ensure seamless functionality on mobile platforms'
  },
  {
    id: '3',
    item: 'Orchestrated rigorous accessibility testing in dedicated environments, using WAVE, LightHouse and Screen readers to enhance visibility and improve conversion rates across checkout'
  },
  {
    id: '4',
    item: 'Integrated unit tests into every pull requests using Jest or Mocha in order to improve test coverage across checkout'
  },
  {
    id: '5',
    item: 'Captured payload sizes and corresponding data points using internal tracking and analytics systems in order to reduce latency and identify bugs in ramped experiments'
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