import Image from "next/image";

// title is company, subheading is title, date, image data
export default function Experience({
  title,
  subheading,
  date,
  image,
  data,
  text,
  isMobile,
}: {
  title: string;
  subheading?: string;
  date: string;
  text?: string;
  image?: string;
  isMobile?: boolean;
}) {
  return (
    <div className="flex-shrink-0 w-full min-w-[404px]">
      <section
        about="Experience Container Border"
        className=" flex-shrink-0 border-2 border-[#71EC8B] rounded-[21px] m-6 font-press-start text-white "
      >
        <div about="Summary Bullet List" className="p-4">
          <div
            about="SubHeading with Logo, Date and Title"
            className="flex relative pl-2 pt-4"
          >
            {image ? (
              <Image
                className="pr-2 object-contain"
                src={image}
                width={70}
                height={50}
                alt="logo"
                priority={true}
              />
            ) : null}
            <h1 className="text-4xl lg:text-5xl uppercase text-[#ED6DD3] pt-2 ">
              {title}
            </h1>
            <h2
              about="Date Top Right Corner"
              className="uppercase hidden md:block absolute top-0 right-0 pt-10 pr-10"
            >
              {date}
            </h2>
          </div>
          <p className="pt-5 pl-2 uppercase">{subheading}</p>
          <div about="Experience Heading, Subheading and Text" className="p-2">
            <span about="list" className=" font-['montserrat']">
              <h1>{text}</h1>
              {data?.map((experience) => (
                <li key={experience.id}> {experience.item} </li>
              ))}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
