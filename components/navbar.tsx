import Link from "next/link"
import Heart from '../app/src/img/Icons/pixelHeart.png';

// TODO: need to add the pixel hearts on the top right corner (5)
export default function Navbar({ link }: { link:string }) {
  //       <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto border-4 border-indigo-500/100 fixed top-0 w-full">
  return (

      <div className="flex">
        <div className="class=text-sm lg:flex-grow p-4">
          <Link href={link} className="block mt-4 lg:inline-block lg:mt-0 bg-[#ED6DD3] btn btn-primary font-press-start text-white text-center h-18 text-xl px-2">BACK</Link>
        </div>
      </div>
      
    ) 
}
