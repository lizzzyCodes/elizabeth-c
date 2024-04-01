'use client'
import Button from './Buttons';
import Clouds from '@/app/src/img/clouds.png';
import SmallCloud from '@/app/src/img/smallcloud.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Heading from './heading';
// relative allows us to place the png in the same line
export default function Intro() {
return (
<div about='overall container' className='p-6'>
<section about="IntroBox" className="border-2 border-[#71EC8B] rounded-[21px] h-screen w-fit table p-2 text-center"> 
    <div about='heading' className=" text-[#ED6DD3] p-10 text-center font-press-start uppercase p-2 ml-2">
        <h1 className='text-2xl sm:text-8xl lg:text-7xl'>hi, im elizabeth && welcome to my portfolio </h1>

{/*
        <Heading text='hi, im elizabeth && welcome to my portfolio'/>
            <div about='small cloud' className='absolute -left-3 -top-3'>
            <Image className='' src={SmallCloud} width={500} height={100} alt='clouds png'/>
            </div>

            <div  about='top right cloud' className='absolute -right-3 -top-3'>
            <Image className='' src={Clouds} width={400} height={400} alt='clouds png'/>
            </div>

            <div about='middle cloud' className='absolute'>
            <Image className='' src={Clouds} width={500} height={500} alt='clouds png'/>
            </div>
          */}
       
       {/*  <TypeAnimation
            sequence={[
                'hi, im elizabeth && welcome to my portfolio'
            ]}
4            speed={1}
            style={{ fontSize: '50px', display: 'relative'}}
            repeat={0}
        /> */}
       
    </div>
    <div className='p-2 ml-2' about='Buttons'>
        <div className="lg:space-x-20 text-xl px-4 py-10">
            <Button link='/pages/about' color='bg-[#71EC8B]' text='about'/>
            <Button link='/pages/projects' color='bg-[#886ADF]' text='projects'/>
            <Button link='/pages/resume' color='bg-[#ED6DD3]' text='experience'/>
        </div>
    </div>
</section>
</div>
    )
    
  }