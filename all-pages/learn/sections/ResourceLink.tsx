"use client";
import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import Link from "next/link";

interface ResourceLinkProps {
  title: string;
  description: string;
  link: string;
  defaultImage: string;
  hoverImage: string;
}

function ResourceLink({
  title,
  description,
  link,
  defaultImage,
  hoverImage,
}: ResourceLinkProps) {
  return (
    <Paragraph title={title} content={description}>
      <Link href={link}>
        <div className="w-full flex justify-end">
          <div
            className="flex w-fit text-[#57369E] font-poppins text-[16px] items-center justify-end cursor-pointer space-x-1 hover:text-[#00A7D3] transition-all"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.src = hoverImage;
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.src = defaultImage;
            }}
          >
            <p>See More</p>
            <Image src={defaultImage} alt="see more" width={24} height={24} />
          </div>
        </div>
      </Link>
    </Paragraph>
  );
}

export default ResourceLink;
