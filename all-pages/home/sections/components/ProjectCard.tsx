import React from "react";
import Image from "next/image";

interface IProjectCard {
    image: string,
    title: string
}

const ProjectCard: React.FC<IProjectCard> = ({ image, title }) => {
    return (
        <div className="p-2 lg:p-5 space-y-5 shadow-2xl bg-white rounded">
            <div className="relative w-full h-[180px] lg:h-[274px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="rounded object-cover"
                />
            </div>
            <h2 className="font-poppins text-[14px] lg:text-[20px] font-bold text-left flex items-center flex-1 group-hover:text-white line-clamp-2 h-12">
                {title}
            </h2>

            <span className="text-[#57369E] hover:text-[#00A7D3] text-right block w-full ">
                See More
            </span>
        </div>
    )
}

export default ProjectCard;
