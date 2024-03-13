/* File used for icon and its links, which will take in a data set loop through
display icon and redirect to appropriate URL if clicked*/
// import { alabamaVegetationData } from "@/lib/data";
// This function loops through a data set the contains photos to render icons
// Icons?
export default function DataCard({ data }) {
  return (
    <section>
        <div about='icons and links' className='flex flex-wrap -mb-4 p-10'>
            { data.map(( { photo, text, id } : { text:string, id:string }) => (
               <li className='' key={id}>
               <img className='flex-1 h-24 p-4' src={photo.src} alt={text}/>
               </li>
            ))}
        </div>
    </section>
  )

}