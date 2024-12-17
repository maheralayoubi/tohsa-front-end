import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IBlogCard {
    data: Blog
}

const BlogCard: React.FC<IBlogCard> = ({ data }) => {
    return (
        <div className="p-[8px] lg:p-[40px] rounded-[8px] group z-10 flex items-center flex-col text-center space-y-2 lg:space-y-5 lg:hover:bg-[#F0F5FF]">
            <div className="hexagonImageBorder h-[280px] w-[324px] lg:group-hover:scale-105 transition-all">
                <div className="relative rounded-[2px] hexagonImage">
                    <Image
                        src={data?.image}
                        alt={data?.title}
                        fill
                        className="rounded-[2px] w-full h-full object-cover"
                    />
                </div>
            </div>

            <h3 className="font-poppins font-bold text-[16px] lg:text-[32px] lg:min-h-[100px]">
                {data?.title}
            </h3>
            <p className="font-poppins text-[#484848] text-[12px] lg:text-[16px] text-center line-clamp-2 ">
                {data?.content}
            </p>
            <Link href={`/content/${data?.id}`} className="flex items-center lg:opacity-0 transition-all lg:group-hover:opacity-100">
                <span className="mx-auto py-3 px-8 lg:font-bold text-[#57369E] hover:text-[#00A7D3] lg:border-2 lg:border-[#57369E] lg:hover:bg-[#00A7D3] lg:hover:text-white lg:hover:border-[#00A7D3] transition-colors duration-500">
                    See More
                </span>
            </Link>

        </div>
    );
};

export default BlogCard;
