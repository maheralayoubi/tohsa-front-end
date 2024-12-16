import React from "react";

// components
import ReadMoreBtn from "@/global-components/ReadMoreBtn";

interface ICardData {
    title: string
    content: string
    href: string

}

const CardData: React.FC<ICardData> = ({ title, content, href }) => {
    return (
        <div className="flex-1 w-full space-y-2 lg:space-y-5">
            <h3 className="text-base lg:text-[32px] font-bold">{title}</h3>
            <p className=" line-clamp-3">{content}</p>
            <span className="block text-right">
                <ReadMoreBtn content="See More" href={href} />
            </span>
        </div>
    )
};

export default CardData;
