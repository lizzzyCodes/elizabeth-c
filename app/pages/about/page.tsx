import Star from '@/app/src/img/Icons/star.png';
import Mail from '@/app/src/img/Icons/mail.png';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Headshot from '@/app/src/img/Icons/ProfilePic.png';
export default function About() {
  return  (
    
  <section about="about me container">
    <Navbar/>
    <div className='flex justify-center relative'>
      <header className="flex items center pt-20 text-[#ED6DD3] text-[50px] font-press-start uppercase p-10 ">nice to meet you!
        <img about='profile pic' className='h-20 w-20 border-2 border-[#5760CC] rounded-full'src={Headshot.src} alt='headshot'/>
      </header>
    </div>
    <div about='about me text section'>
      <p className="pl-48 pr-48 pb-20 text-[#E1D6FC] text-center font-['montserrat'] leading-loose flex justify-center text-sm md:text-lg mb-2">
      <img className=" animate-bounce h-20 w-20 p-4" src={Star.src} alt='star image'/>
        I’m a software engineer and a advocate for diversity in tech.
        I have over a year of full-time software engineering experience. my background is in data science and I love front end development. I was born and raised in Des Moines, Washington. (40 min from Seattle) and I am based in Chicago.
        Outside work, I spend most of my time mentoring students in various aspects of their student journey, including mock interviews for selective programs, college applications and reinforcing computer science topics.
        Coming from a background that had capacity constrained majors (academic programs that have limited enrollment capacity) my university journey began with the disheartening advice from advisors who discouraged me from even applying to computer science.
        My personal journey has inspired a deep commitment to helping and uplifting the community that faces similar struggles. By sharing my story and offering support, I aim to empower others to navigate the challenges of being a first-generation college student (like myself) fostering a sense of belonging and resilience within the community.
            {/**animate-bounce */}
      <img className=" animate-bounce h-20 w-20 p-4" src={Star.src} alt='star image'/>
      </p>
    </div>
    <div about='button container' className="flex justify-center relative">
        <Link href='https://www.linkedin.com/in/elizabeth-castillo-' className="flex items-center space-x-2 px-4 py-2 pl-2 pr-2 rounded-full font-press-start text-white bg-[#886ADF] hover:bg-sky-700 uppercase">
          <img src={Mail.src} alt="mail logo" className="w-10 h-10" />
          <span>connect on linked in</span>
        </Link>
    </div>
  </section>
  )
}
