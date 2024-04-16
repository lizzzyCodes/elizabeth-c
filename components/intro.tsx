'use client'
import Button from './Buttons';
import Clouds from '@/app/src/img/clouds.png';
import SmallCloud from '@/app/src/img/smallcloud.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Heading from './heading';
import Head from 'next/head';
// relative allows us to place the png in the same line
export default function Intro() {
return (
<div about='overall container' className='p-6'>
<section about="IntroBox" className="border-2 border-[#71EC8B] rounded-[21px] w-fit table text-center p-2"> 
    <div about='heading' className=" text-[#ED6DD3] p-10 text-center font-press-start uppercase">
        <h1 className='text-2xl sm:text-8xl lg:text-7xl'>hi, im liz && welcome to my portfolio </h1>


{/*

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
            // flex flex-wrap justify-around 
        /> */}
        
       
    </div>
    <div className="p-2" about='Buttons'>
        <div className="flex-col text-xl space-y-8">
            <div className='space-x-4'>
            <Button link='/pages/about' color='bg-[#71EC8B]' text='about'/>
            <Button link='/pages/projects' color='bg-[#886ADF]' text='projects'/>
            </div>
            <div>
            <Button link='/pages/resume' color='bg-[#ED6DD3]' text='experience'/>
            </div>
        </div>
    </div>
</section>
</div>
    )
    
  }