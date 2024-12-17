import React from "react";

import Image from "next/image";
import Link from "next/link";

interface INewsCard {
    data: News
}

const NewsCard: React.FC<INewsCard> = ({ data }) => {
    return (
        <Link href={`/news/${data?.id}`}>
            <div className="flex flex-col lg:flex-row items-start justify-between p-5 gap-5 bg-[#F0F5FF] rounded-lg h-[300px] lg:h-[246px]">
                <div className="relative w-full lg:w-[262px] h-[196px]">
                    <Image src={data?.image} alt={data?.title} fill className=" object-cover" />
                </div>
                <div className="flex-1 space-y-5 text-left relative h-full">
                    <h2 className="line-clamp-1 lg:line-clamp-2 font-bold lg:text-xl">{data.title}</h2>
                    <p className="line-clamp-1 lg:line-clamp-3">{data.content1}</p>
                    <span className="text-[#57369E] hover:text-[#00A7D3] transition-colors duration-500 absolute right-5 bottom-0 hidden lg:block" >See More</span>
                </div>
            </div>
        </Link>
    )
}
export default NewsCard;
