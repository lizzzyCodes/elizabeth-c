// This Page contains all the project cards
import Heading from '@/components/heading'
import ProjectCard from '@/components/projectcard'
import SampleImage from '@/app/src/img/Icons/xaci.jpeg'
import { alabamaStack, mockHireStack } from '@/lib/data'
import Navbar from '@/components/navbar'

export default function Project() {
    return  (
      <div>
        <Navbar link='/' />
        <Heading text='currently ... '/>
        <div className='flex flex-wrap -mb-4 justify-center'>
          <ProjectCard title='Plant Growth in Alabama' text='This project analyzes existing plant data in several counties of Alabama, and see if they are similar with earlier expectations of what should grow in that region. Why Alabama? Based on google search, Alabama has more plant species than any other state in the United States.' img={SampleImage.src} data={alabamaStack} link='/pages/projects/projectFiles/alabama' />
        </div>
        <div className='flex flex-wrap -mb-4 justify-center'>
          <ProjectCard title='Mock Hire' text=' this oneLorem ipsum dolor sit amet. Eos deleniti rerum et saepe odit qui natus ipsum. Cum natus perspiciatis est voluptatem similique et tempora molestiae non voluptatem earum et illo Quis 33 quaerat repellendus qui sunt quis.' img={SampleImage.src} data={mockHireStack} link='/pages/projects/projectFiles/mockHire' />
        </div>
        <div className='flex flex-wrap -mb-4 justify-center'>
          <ProjectCard title='GrooveSnap' text='COMING SOON' img={SampleImage.src} data={alabamaStack} link='/pages/projects/projectFiles/alabama' />
        </div>
      </div>

    )
  }
  