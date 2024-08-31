/* File used for icons and its link which is used in each project file. which will take in a data set map,
display icons and redirect to appropriate URL if clicked */
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface IconLinks {
  id: string;
  photo?: StaticImageData;
  text?: string;
  att?: string;
  link?: string;
}

export default function DataCard({ data }: { data: IconLinks[] }) {
  return (
    <section>
      <div
        about="icons and links"
        className="flex flex-wrap -mb-4 pb-10 pr-10 pl-10"
      >
        {data.map((item) => (
          <li className="pr-6" key={item.id}>
            <div className="p-4 pr-6">
              {/* Handle optional link */}
              <Link href={item.link || "#"}>
                <img
                  className="hover:scale-125 flex-1 h-28 p-4"
                  src={item.photo?.src}
                  alt={item.text}
                />
              </Link>
            </div>
            <p
              about="data set labels"
              className="rounded-full bg-[#5760CC] text-white text-center font-['montserrat'] px-3"
              key={item.id}
            >
              {" "}
              {item.text}{" "}
            </p>
          </li>
        ))}
      </div>
    </section>
  );
}
