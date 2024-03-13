// skills icons
import { images } from '../lib/data'

export default function Skills() {
  return  (
  <section about="skills container" className="p-8 m-28 p-15">
    <div about="" className="flex items-center">
      <div about="Skills Heading and Logos container">
      <strong className="text-[#ED6DD3] text-[50px] font-press-start uppercase">my techstack</strong>
      <div about="render icon skills component">
      <div className="flex flex-wrap -mb-4">
        {/** make a function for the mapping below */}
      {images.map(({ photo, text }) => (

          // TODO: if odd or even change the border color accordingly
         // {/* odd:border-[#5760CC] even:border-[#ED6DD3] border-2 rounded-3xl */}
         // 
          <li className="p-4" key={photo.src}>
              <img className="flex-1 h-24 border-2 border-[#5760CC] rounded-3xl p-4" src={photo.src} alt={text.src} />
          </li>
      ))}
      </div>
      </div>
      </div>
    </div>
  </section>
  )
}
