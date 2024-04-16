import Image from "next/image"

// title is company, subheading is title, date, image data
export default function Experience({ title, subheading, date, image, data}  : { title:string, subheading:string, date:string }) {
return (

<section about="Experience Container Border" className=" flex-shrink-0 border-2 border-[#71EC8B] rounded-[21px] m-8 font-press-start text-white "> 
    <div about="Summary Bullet List">
        <div about='SubHeading with Logo, Date and Title' className="flex relative pl-4 pt-4">
        <Image className="pr-4 object-contain " src={image}  width={80} height={50} alt='logo'/>
        <h1 className="text-4xl lg:text-5xl uppercase text-[#ED6DD3] pt-2 ">{title}</h1>
        <h2 about="Date Top Right Corner" className="uppercase hidden lg:block absolute top-0 right-0 pt-10 pr-10">{date}</h2>
        </div>
        <p className="pl-6 pt-3 uppercase">{subheading}</p>
        <div about="Experience Heading, Subheading and Text" className="p-6">
        <span about="list" className=" font-['montserrat']"> 
            { data?.map(( experience ) => (
            <li key={experience.id}> {experience.item} </li>
            ))}
        </span>
        </div>
    </div>
</section>
  ) 
}
