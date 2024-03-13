'use client'
import Button from './Buttons';
import Clouds from '@/app/src/img/clouds.png';
import SmallCloud from '@/app/src/img/smallcloud.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
// relative allows us to place the png in the same line
export default function Intro() {
return (
<div about='overall container'>
<section about="IntroBox" className="border-2 border-[#71EC8B] text-center rounded-[21px] h-screen flex items-center justify-center m-28 flex-wrap p-15"> 
    <div className="border-4 border-indigo-500/100 text-[#ED6DD3] font-press-start uppercase">

            <div about='small cloud' className='absolute -left-3 -top-3'>
            <Image className='' src={SmallCloud} width={500} height={100} alt='clouds png'/>
            </div>

            <div  about='top right cloud' className='absolute -right-3 -top-3'>
            <Image className='' src={Clouds} width={400} height={400} alt='clouds png'/>
            </div>

            <div about='middle cloud' className='absolute'>
            <Image className='' src={Clouds} width={500} height={500} alt='clouds png'/>
            </div>
          
       {/*  <TypeAnimation
            sequence={[
                'hi, im elizabeth && welcome to my portfolio'
            ]}
            wrapper='span'
            speed={1}
            style={{ fontSize: '50px', display: 'relative'}}
            repeat={0}
        /> */}
       
    </div>
    <div className=" flex space-x-10 font-press-start text-white text-center h-18 text-xl px-4">
        <Button link='/pages/about' color='bg-[#71EC8B]' text='about'/>
        <Button link='/pages/projects' color='bg-[#886ADF]' text='projects'/>
        <Button link='/pages/resume' color='bg-[#ED6DD3]' text='experience'/>
    </div>
</section>
</div>
    )
    
  }