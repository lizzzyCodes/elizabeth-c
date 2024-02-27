import Image from "next/image"

export default function Experience({ title, subheading, date, image, data}  : { title:string, subheading:string, date:string }) {
return (
<section about="ExperienceBox" className="box-border border-2 border-[#71EC8B] rounded-[21px] m-28 p-15 font-press-start text-white "> 
    <h2 about="date top right corner" className="uppercase text-right pl-8 pr-8 pt-8">{date}</h2>
        <div about="Experience Component" className="flex items-left pl-8 pr-8">
            {/* TODO: this will be a prop the logo */}
            <Image className="object-contain w-20 h-20" src={image}  width={500} height={500} alt='logo'/>
            <div about="ExperienceHeading, Subheading and Text"className="pl-8 pr-8 pb-10">
                <strong className="pb-2 text-[#ED6DD3] text-[50px] font-press-start uppercase">{title}</strong>
                <p className="pb-6 text-[20px] uppercase ">{subheading}</p>
                <span about="list" className="items-baseline text-[16px] space-y-4 font-['montserrat'] lowercase break-normal"> 
                 { data?.map(( experience ) => (
                  <li key={experience.id}> {experience.item} </li>
                 ))}
                </span>
            </div>
        </div>
</section>
  ) 
}
