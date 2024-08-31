// skills icons
import { images } from '../lib/data'

export default function Skills() {
  return  (
  <section about="skills container" className="flex-shrink-0 rounded-[21px] m-8 ">
    <div about="" className="text-center">
      <div about="Skills Heading and Logos container">
        <h1 className="text-4xl lg:text-5xl font-press-start uppercase text-[#ED6DD3] pt-6 pb-10">my techstack</h1>
        <div about="Render Skill Logos">
          <div className="flex flex-wrap ">
          {images.map(({ photo, text, label }) => (
              <li className="p-4 space-y-4 items-center flex flex-col" key={photo.src}>
                  <img className=" h-20 lg:h-24 border-2 border-[#5760CC] rounded-3xl p-4 " src={photo.src} alt={text.src} />
                  <p className="bg-[#5760CC] rounded-full text-white font-['montserrat'] pr-2 pl-2 lowercase">{label}</p>
              </li>
          ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
