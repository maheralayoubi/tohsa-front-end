import React from "react";

import Image from "next/image";
import Link from "next/link";

interface INewsCard {
    data: News
}

const NewsCard: React.FC<INewsCard> = ({ data }) => {
    return (
        <Link href={`/news/${data?.id}`}>
            <div className="flex flex-col sm:flex-row items-start justify-between p-5 gap-5 bg-[#F0F5FF] rounded-lg">
                <div className="relative w-full sm:w-[160px] sm:h-[120px] 2xl:w-[262px] h-[180px] 2xl:h-[196px] bg-black">
                    <Image src={data?.image} alt={data?.title} fill className=" object-cover" sizes="100vw 100vh" />
                </div>
                <div className="flex-1 space-y-5 text-left relative h-full">
                    <h2 className="line-clamp-1 lg:line-clamp-2 font-bold 2xl:text-xl">{data.title}</h2>
                    <p className="line-clamp-1 text-base sm:text-xs 2xl:text-base 2xl:line-clamp-3">{data.content1}</p>
                    <div className="text-[#57369E] hover:text-[#00A7D3] transition-colors duration-500 text-right hidden lg:block" >See More</div>
                </div>
            </div>
        </Link>
    )
}
export default NewsCard;
