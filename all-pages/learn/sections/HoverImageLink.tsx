"use client";
import Image from "next/image";
import Link from "next/link";

interface HoverImageLinkProps {
  title: string;
  link: string;
  defaultImage: string;
  hoverImage: string;
}

function HoverImageLink({
  title,
  link,
  defaultImage,
  hoverImage,
}: HoverImageLinkProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.src = hoverImage;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.src = defaultImage;
  };

  return (
    <div
      className="flex justify-between items-center cursor-pointer p-1 rounded-lg hover:bg-[#00A7D3] hover:text-white transition"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <li className="font-bold text-[14px] lg:text-[20px] font-poppins">
        <Link href={link}>{title}</Link>
      </li>
      <Image
        src={defaultImage}
        alt="arrow"
        width={24}
        height={24}
        loading={"eager"}
        className="w-[24px] h-[24px]"
        // style={{ width: "24px", height: "24" }}
      />
    </div>
  );
}

export default HoverImageLink;
