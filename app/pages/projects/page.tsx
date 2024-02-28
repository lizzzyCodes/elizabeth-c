import Heading from '@/components/heading'
import ProjectCard from '@/components/projectcard'
import SampleImage from '@/app/src/img/Icons/xaci.jpeg'
import { portfolioStack } from '@/lib/data'
import Navbar from '@/components/navbar'

export default function Project() {
    return  (
      <div>
        <Navbar />
        <Heading text='currently ... '/>
        <div className='flex flex-wrap -mb-4 justify-center'>
          <ProjectCard title='Groove Snap' text=' this oneLorem ipsum dolor sit amet. Eos deleniti rerum et saepe odit qui natus ipsum. Cum natus perspiciatis est voluptatem similique et tempora molestiae non voluptatem earum et illo Quis 33 quaerat repellendus qui sunt quis.' img={SampleImage.src} data={portfolioStack} link='/pages/projectFiles/alabama' />
        </div>
      </div>

    )
  }
  