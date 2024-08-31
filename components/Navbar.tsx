import Link from "next/link";

export default function Navbar({ link }: { link: string }) {
  return (
    <div className="flex">
      <div className="class=text-sm lg:flex-grow p-4">
        <Link
          href={link}
          className="block mt-4 lg:inline-block lg:mt-0 bg-[#ED6DD3] btn btn-primary font-press-start text-white text-center h-18 text-xl px-2"
        >
          BACK
        </Link>
      </div>
    </div>
  );
}
