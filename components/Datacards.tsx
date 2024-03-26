/* File used for icon and its links, which will take in a data set map,
display icons and redirect to appropriate URL if clicked */

export default function DataCard({ data }) {
  return (
    <section>
        <div about='icons and links' className='flex flex-wrap -mb-4 pb-10 pr-10 pl-10'>
            { data.map(( { photo, text, id } : { text:string, id:string }) => (
            <li className='pr-6' key={id}>
            <div className='p-4 pr-6'>
               <img className=' hover:scale-125 flex-1 h-28 p-4' src={photo.src} alt={text}/>
            </div>
            <p about="data set labels" className="rounded-full bg-[#5760CC] text-white text-center font-['montserrat'] px-3" key={id}> {text} </p>
            </li>
            ))}
        </div>
    </section>
  )

}