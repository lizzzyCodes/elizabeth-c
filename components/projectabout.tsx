// This is component for the projects page which is reausable through out project layouts
import Subheading from "./subheading"

export default function About( { subheading, text } : { subheading:string, text:string }) {
  return (

      <div className="p-10">
        <Subheading text={ subheading }/>
        <p className="font-['montserrat'] text-[20px] text-white">{text}</p>
      </div>

    ) 
    
}
