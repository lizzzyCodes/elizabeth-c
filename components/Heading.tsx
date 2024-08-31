// Heading is used for the title of the pages
export default function Heading({ text } : { text:string }) {
  return (
    <h1 className="text-4xl lg:text-5xl font-press-start uppercase text-[#ED6DD3] pt-6 pb-10 text-center">{text}</h1>
  )

}
