import Mail from "@/app/src/img/Icons/mail.png";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Headshot from "@/app/src/img/Icons/ProfilePic.png";

export default function About() {
  return (
    <section about="about me container">
      <Navbar link="/" />
      <div className="flex justify-center relative">
        <header className="flex items center pt-20 text-[#ED6DD3] text-[50px] font-press-start uppercase p-10 ">
          nice to meet you!
          <img
            about="profile pic"
            className="h-20 w-20 border-2 border-[#5760CC] rounded-full"
            src={Headshot.src}
            alt="headshot"
          />
        </header>
      </div>
      <div about="text" className='font-["montserrat"] text-[20px] text-white'>
        <p className="p-10">
          I’m a software engineer and a advocate for diversity in tech.
          <br /> I have over 2 years of full-time software engineering
          experience, with a background in Data Science, and a passion for front
          end development. I was born and raised in Des Moines, Washington. (40
          min from Seattle).
          <br /> Outside work, I spend most of my time mentoring students on
          various aspects of their academic journeys, including mock interviews
          for selective programs, college applications and reinforcing computer
          science topics.
          <br /> As the first in my family to graduate from college and having
          attended a school with capacity-constrained majors my university
          journey began with the disheartening advice from advisors who
          discouraged me from applying to computer science.
          <br /> My personal journey has inspired a deep commitment to helping
          and uplifting the community that finds itself in similar situations.
          By sharing my story and offering support, I aim to empower others to
          navigate the challenges of being a first-generation college student
          like myself.
        </p>
      </div>
      <div
        about="button container"
        className="flex justify-center relative p-8"
      >
        <Link
          href="https://www.linkedin.com/in/elizabeth-castillo-"
          className="text-center flex items-center space-x-2 px-4 py-2 pl-2 pr-2 rounded-full font-press-start text-white bg-[#886ADF] hover:bg-sky-700 uppercase"
        >
          <img src={Mail.src} alt="mail logo" className="w-10 h-10" />
          <span>connect on linked in</span>
        </Link>
      </div>
    </section>
  );
}
