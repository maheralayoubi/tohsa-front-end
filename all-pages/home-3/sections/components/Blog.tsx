import React from "react";
import Image from "next/image";
import Link from "next/link";


const Blog = ({
    image,
    title,
    content,
    id,
}: {
    image: string;
    title: string;
    content: string;
    id: string;
}) => {
    return (
        <div
            className="bg-white p-[8px] lg:p-[20px] rounded-[8px] z-10"
        >
            <div className="rounded-[2px] w-full h-[206px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="rounded-[2px] w-full h-full object-cover"
                />
            </div>
            <p className="font-poppins font-bold text-[16px] lg:text-[24px] text-[#484848] my-[8px] lg:my-[20px] lg:min-h-[72px]">
                {title}
            </p>
            <p className="font-poppins text-[#626262] text-[12px] lg:text-[16px] mb-[8px] lg:mb-[20px] line-clamp-2 ">
                {content}
            </p>
            <div className="font-poppins text-[16px] w-full flex justify-center">
                <Link
                    href={`/content/${id}`}
                    className="text-[#57369E] cursor-pointer hover:text-[#00A7D3] w-fit text-center"
                >
                    See More
                </Link>
            </div>
        </div>
    );
};

export default Blog;
