import Link from "next/link"

export default function Button({ text, link, color } : { link:string, text:string, color:string }) {
  return (
    <Link href={link} className={`text-center p-4 rounded-full font-press-start text-white max-w ${color} hover:bg-sky-700 uppercase`}> {text} </Link>
  )

}