"use client";
import Button from "./Buttons";
import Clouds from "@/app/src/img/clouds.png";
import SmallCloud from "@/app/src/img/smallcloud.png";
import Image from "next/image";
import { useState } from "react";
import TypeAnimationComponent from "./utils";
import Typewriter from "./utils";
import Heading from "./heading";

export default function Intro() {
  return (
    <div about="overall container" className="min-w-[411px]">
      <div className="pt-20 pr-[22px] pl-[22px] place-content-center">
        <section className="rounded-[55px] border border-6 border-[#71EC8B] flex flex-col items-center justify-center  ">
          <div
            about="heading"
            className=" text-[#ED6DD3] text-[32px] lg:text-[55px] p-10 text-center font-press-start uppercase mb-4"
          >
            <h1> hi im liz && welcome to my portfolio!</h1>
          </div>
          <div about="button section" className="">
            <div
              about="side by side button"
              className="p-10 flex justify-center space-x-4"
            >
              <Button link="/pages/about" color="bg-[#71EC8B]" text="about" />
              <Button
                link="/pages/projects"
                color="bg-[#886ADF]"
                text="projects"
              />
            </div>
            <div
              about="centered button"
              className="p-10 flex justify-center "
            >
              <Button
                link="/pages/resume"
                color="bg-[#ED6DD3]"
                text="experience"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
