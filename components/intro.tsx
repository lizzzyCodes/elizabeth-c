"use client";
import Button from "./Buttons";
import TypingAnimation from "./TypingAnimation";
import SmallCloud from "../app/src/img/smallcloud.png";
import LargeCloud from "../app/src/img/clouds.png";
import Image from "next/image";

export default function Intro() {
  return (
    <div about="overall container" className="min-w-[411px]">
      <div className="pt-20 pr-[22px] pl-[22px] place-content-center">
        <section className="rounded-[55px] border border-8 border-[#71EC8B] flex flex-col items-center justify-center  ">
          <Image
            className="absolute -left-16 -top-10 m-4"
            src={SmallCloud}
            width={300}
            height={0}
            alt="picture of clouds"
          />
          <Image
            className="absolute -top-16 right-0 m-4 "
            src={LargeCloud}
            width={350}
            height={200}
            alt="picture of clouds"
          />
          <div
            about="heading"
            className="relative text-[#ED6DD3] text-[32px] lg:text-[55px] pl-10 pr-10 pt-28 text-center font-press-start uppercase mb-4"
          >
            <TypingAnimation
              text="hi, im elizabeth && welcome to my portfolio"
              defaultText="hi, im elizabeth && welcome to my portfolio"
            />
          </div>
          <div about="button section" className="">
            <div
              about="side by side button"
              className="pl-10 pr-10 pb-10 flex justify-center space-x-4"
            >
              <Button link="/pages/about" color="bg-[#71EC8B]" text="about" />
              <Button
                link="/pages/projects"
                color="bg-[#886ADF]"
                text="projects"
              />
            </div>
            <div about="centered button" className="pb-10 flex justify-center ">
              <Button
                link="/pages/resume"
                color="bg-[#ED6DD3]"
                text="experience"
              />
            </div>
          </div>
           <Image
            className="absolute bottom-0 m-4 -bottom-20"
            src={LargeCloud}
            width={310}
            height={200}
            alt="picture of clouds"
          /> 
        </section>
      </div>
    </div>
  );
}
