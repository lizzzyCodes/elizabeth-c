import Heading from '@/components/heading'
import ProjectCard from '@/components/projectcard'
import SampleImage from '@/app/src/img/Icons/xaci.jpeg'
export default function Project() {
    return  (
      <div>
        <Heading text='currently ... '/>
        <ProjectCard title='Groove Snap' text='Lorem ipsum dolor sit amet. Eos deleniti rerum et saepe odit qui natus ipsum. Cum natus perspiciatis est voluptatem similique et tempora molestiae non voluptatem earum et illo Quis 33 quaerat repellendus qui sunt quis.' img={SampleImage.src}/>
      </div>

    )
  }
  