import Link from "next/link"

export default function Button({ text, link, color } : { link:string, text:string, color:string }) {
  return (
    <Link href={link} className={`  py-2 px-2 text-center rounded-xl font-press-start text-white ${color} hover:bg-sky-700 uppercase`}> {text} </Link>
  )

}