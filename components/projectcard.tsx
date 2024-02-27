
export default function ProjectCard({ title, text, img } : { title:string, text:string }) {
  return (
    <div about='card' className="max-w-sm overflow-hidden shadow-lg text-white p-10 transition duration-300 hover:scale-105">
        <div about='image and subheading' className='relative border-2 border-[#5760CC] rounded-[20px]'>

              <img className='w-full rounded-[20px]' src={img} alt='card image' />
              <p className='rounded-bl-[12px] rounded-br-[12px] px-2.5 pt-2 pb-2 bg-[#EEEEEE] bg-opacity-25 absolute inset-x-0 bottom-0 text-[20px] font-bold font-press-start uppercase'>{title}</p>

        </div>
        <div about='tech stack buttons' className='pt-4 pb-2 font-["montserrat"]'>
            <span className='inline-block bg-[#5760CC] rounded-full px-3 mr-2 mb-2'>typescript</span>
            <span className='inline-block bg-[#5760CC] rounded-full px-3 mr-2 mb-2'>javascript</span>
            <span className='inline-block bg-[#5760CC] rounded-full px-3 mr-2 mb-2'>react</span>
        </div>
        <p>{text}</p>
    </div>
  )

}