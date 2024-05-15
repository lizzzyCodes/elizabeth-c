"use client";
import Button from "./Buttons";
import Clouds from "@/app/src/img/clouds.png";
import SmallCloud from "@/app/src/img/smallcloud.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Heading from "./heading";
import Head from "next/head";
// relative allows us to place the png in the same line
export default function Intro() {
  return (
    <div about="overall container" className="p-10 lg:pt-44 lg:pl-20 lg:pr-20 ">
      <section
        about="IntroBox"
        className="border-2 border-[#71EC8B] rounded-[21px] w-fit table text-center p-2"
      >
        <div
          about="heading"
          className=" text-[#ED6DD3] p-10 text-center font-press-start uppercase"
        >

    <div className="text-2xl sm:text-8xl lg:text-7xl">
            <TypeAnimation
            sequence={["hi, im liz && welcome to my portfolio"]}
            speed={1}
            repeat={0}
          />
</div>
          <div
            about="small cloud"
            className="hidden lg:block absolute top-0 left-0 z-40"
          >
            {/* -left-3 -top-3 */}
            <Image
              className=""
              src={SmallCloud}
              width={400}
              height={400}
              alt="clouds png"
            />
          </div>

          <div about="top right cloud" className="hidden lg:block absolute">
            {/* -right-3 -top-3*/}
            <Image
              className=""
              src={Clouds}
              width={445}
              height={204}
              alt="clouds png"
            />
          </div>

          <div about="middle cloud" className=" hidden lg:block absolute">
            <Image
              className=""
              src={Clouds}
              width={500}
              height={200}
              alt="clouds png"
            />
          </div>

        </div>
        <div className="p-2" about="Buttons">
          <div className="flex-col text-xl space-y-8">
            <div className="space-x-4">
              <Button link="/pages/about" color="bg-[#71EC8B]" text="about" />
              <Button
                link="/pages/projects"
                color="bg-[#886ADF]"
                text="projects"
              />
            </div>
            <div>
              <Button
                link="/pages/resume"
                color="bg-[#ED6DD3]"
                text="experience"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
