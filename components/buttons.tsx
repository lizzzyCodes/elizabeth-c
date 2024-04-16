// Page for Buttons
import Link from "next/link"

export default function Button({ text, link, color } : { link:string, text:string, color:string }) {
  return (
    <Link href={link} className={`text-center py-2 px-2 rounded-xl font-press-start text-white ${color} hover:bg-sky-700 uppercase`}> {text} </Link>
  )

}