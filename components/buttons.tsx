import Link from "next/link"

export default function Button({ text, link, color } : { text:string, color:string }) {
  return (
    <Link href={link} className={`pl-2 pr-2 rounded-lg font-press-start text-white text-center ${color} hover:bg-sky-700 uppercase`}> {text} </Link>
  )

}