import Button from './buttons';
export default function Intro() {
return (
<section about="IntroBox" className="border-2 border-[#71EC8B] rounded-[21px] h-screen flex items-center justify-center m-28 flex-wrap p-15"> 
    <div className="flex items-center justify-center border-4 border-indigo-500/100">

    <h1 className="text-center text-[#ED6DD3] text-[50px] font-press-start uppercase">hi, im elizabeth && welcome to my portfolio</h1>
    </div>
    <div className="flex space-x-10 font-press-start text-white text-center h-18 text-xl px-4">
        <Button link='/pages/about' color='bg-[#71EC8B]' text='about'/>
        <Button link='/pages/projects' color='bg-[#886ADF]' text='projects'/>
        <Button link='/pages/resume' color='bg-[#ED6DD3]' text='resume'/>
    </div>
</section>
    )
  }
