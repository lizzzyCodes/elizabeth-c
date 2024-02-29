'use client'
import Button from './buttons';
import Moon from '@/app/src/img/Icons/starry-night.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
return (
<section about="IntroBox" className="border-2 border-[#71EC8B] text-center rounded-[21px] h-screen flex items-center justify-center m-28 flex-wrap p-15"> 
    <div className="border-4 border-indigo-500/100 text-[#ED6DD3] font-press-start uppercase">
        <TypeAnimation
        sequence={[
            'hi, im elizabeth && welcome to my portfolio'
        ]}
        wrapper='span'
        speed={1}
        style={{ fontSize: '50px', display: 'relative'}}
        repeat={0}
        />
    </div>
    <div className=" flex space-x-10 font-press-start text-white text-center h-18 text-xl px-4">
        <Button link='/pages/about' color='bg-[#71EC8B]' text='about'/>
        <Button link='/pages/projects' color='bg-[#886ADF]' text='projects'/>
        <Button link='/pages/resume' color='bg-[#ED6DD3]' text='resume'/>
    </div>
</section>
    )
  }