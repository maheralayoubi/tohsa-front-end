import React from "react";
import Image from "next/image"

const ProjectCard = ({ image, title }: { image: string; title: string }) => {
    return (
        <div className="flex space-x-[20px] justify-between group hover:bg-[#00A7D3] pr-[20px] rounded-lg transition">
            <Image
                src={image}
                alt={title}
                width={210}
                height={140}
                className="w-[120px] h-[80px] lg:h-[140px] lg:w-[210px] rounded-lg"
            />
            <h2 className="font-poppins text-[14px] lg:text-[20px] font-bold text-left flex items-center flex-1 group-hover:text-white">
                <span className=" line-clamp-3">
                    {title}
                </span>
            </h2>
            <Image
                src="/images/Buttons.png"
                alt="arrow-right"
                width={24}
                height={24}
                className="max-w-[24px] max-h-[24px] self-center opacity-0 group-hover:opacity-100"
            />
        </div>
    );
};
export default ProjectCard;
