/* File used to display an icon and a link  */
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  src: string;
  alt: string;
  link: string;
  label: string;
}

export default function ImageLink({ src, alt, link, label }: ImageProps) {
  return (
    <section className="pl-10 pb-4">
      <div about="image and label" className="">
        <div className="">
          <Link href={link}>
            <Image
              priority={true}
              className="hover:scale-125 pb-4"
              src={src}
              width={80}
              height={80}
              alt={alt}
            />
          </Link>
        </div>
        <p
          about="label"
          className="inline-block pr-10 pl-10 rounded-full bg-[#5760CC] text-white text-center font-['montserrat'] "
        >
          {" "}
          {label}{" "}
        </p>
      </div>
    </section>
  );
}
