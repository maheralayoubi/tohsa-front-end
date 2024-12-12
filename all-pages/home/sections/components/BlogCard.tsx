import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IBlogCard {
    data: Blog
}

const BlogCard: React.FC<IBlogCard> = ({ data }) => {
    return (
        <div className="p-[8px] lg:p-[40px] rounded-[8px] group z-10 flex items-center flex-col text-center">
            <div className="relative rounded-[2px] hexagonImage  group-hover:scale-105 transition-all">
                <Image
                    src={data?.image}
                    alt={data?.title}
                    fill
                    className="rounded-[2px] w-full h-full object-cover"
                />
            </div>
            <h3 className="font-poppins font-bold text-[16px] lg:text-[32px] my-[8px] lg:my-[20px] lg:min-h-[100px]">
                {data?.title}
            </h3>
            <p className="font-poppins text-[12px] lg:text-[16px] mb-[8px] text-center lg:mb-[20px] line-clamp-2 ">
                {data?.content}
            </p>
            <Link href={`/content/${data?.id}`} className="flex items-center opacity-0 transition-all group-hover:opacity-100">
                <span className="mx-auto py-3 px-8 text-[#57369E] border border-[#57369E] hover:bg-[#00A7D3] hover:text-white hover:border-[#00A7D3] transition-colors duration-500">
                    More News
                </span>
            </Link>
        </div>
    );
};

export default BlogCard;
