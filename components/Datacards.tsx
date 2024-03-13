/* File used for icon and its links, which will take in a data set loop through
display icon and redirect to appropriate URL if clicked*/
import { alabamaVegetationData } from "@/lib/data";
// This function loops through a data set the contains photos to render icons

export default function DataCard() {
  return (
    <section>
        <div about='icons and links'>
            { alabamaVegetationData.map(( { photo, text, id }) => (
               <li key={id}>
               <img src={photo.src} alt={text}/>
               </li>
            ))}
        </div>
    </section>
  )

}