import React from "react";
import Image from "next/image";

interface IProjectCard {
    image: string,
    title: string
}

const ProjectCard: React.FC<IProjectCard> = ({ image, title }) => {
    return (
        <div className="p-2 lg:p-5 space-y-5 shadow-xl bg-white rounded">
            <div className="relative w-full h-[180px] lg:h-[274px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="100vw 100vh"
                    className="rounded object-cover"
                />
            </div>
            <h2 className="font-poppins text-[14px] lg:text-[20px] font-bold text-left flex items-start flex-1 group-hover:text-white h-12">
                <span className="line-clamp-2">{title}</span>
            </h2>

            <span className="text-[#57369E] hover:text-[#00A7D3] text-right block w-full ">
                See More
            </span>
        </div>
    )
}

export default ProjectCard;
