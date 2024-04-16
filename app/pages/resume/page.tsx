import Experience from "@/components/experience"
import Navbar from "@/components/navbar"
import Skills from "@/components/skills"
import { ExperienceData, InternData, logos } from "@/lib/data"
import PayPalLogo from '@/app/src/img/PayPalLogo.png';
import Footer from "@/components/footer";
import Image from "next/image"

// overall page for resume
export default function Resume() {
  return  (
    
  /* <section>
  <Skills/>
  <Experience title='paypal' subheading='software engineer, checkout' date='sept 2022 - jan 2024' data={ExperienceData} image={logos[0].photo.src}/>
  <Experience title='paypal' subheading='software engineer, intern'  date='june 2021 - sept 2021' data={InternData} image={logos[0].photo.src}/>
  <Experience title='education' subheading='b.a geography && data science @ university of washington' date='june 2022' image={logos[1].photo.src}/>
  <Footer />
  </section> */
  // 
  // this it the experience component that will replace previous experience component
<section about="Experience Container Border" className="border-2 border-[#71EC8B] rounded-[21px] m-8 font-press-start text-white "> 
        <div about="Summary Bullet List" className="">
            {/* TODO: this will be a prop the logo 
            <Image className="" src={PayPalLogo}  width={50} height={50} alt='logo'/> 
            <strong className="uppercase text-[#ED6DD3] text-[50px]">PayPal</strong>
            <p className="uppercase">software engineer, checkout</p>
                <h2 about="Date Top Right Corner" className="uppercase hidden lg:block ">sept 2022 - jan 2024</h2>
            */}
            <div about='SubHeading with Logo, Date and Title' className="flex relative pl-4 pt-4">
              <Image className="pr-2 object-contain " src={PayPalLogo}  width={60} height={50} alt='logo'/>
              <strong className="uppercase text-[#ED6DD3] text-[50px]">PayPal</strong>
              <h2 about="Date Top Right Corner" className="uppercase hidden lg:block ">sept 2022 - jan 2024</h2>
            </div>

            <p className="pl-6 uppercase">software engineer, checkout</p>

            <div about="ExperienceHeading, Subheading and Text" className="p-6">
                <span about="list" className=" font-['montserrat']"> 
                 { ExperienceData?.map(( experience ) => (
                  <li key={experience.id}> {experience.item} </li>
                 ))}
                </span>
            </div>
        </div>
</section>
  )
}
