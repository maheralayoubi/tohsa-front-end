import React from "react";
import Image from "next/image";

interface IProjectHero {
    image: string,
    title: string
}

const ProjectHero: React.FC<IProjectHero> = ({ image, title }) => {
    return (
        <section className="relative flex items-end justify-center h-[280px] lg:h-[620px]">
            <div className=" absolute top-0 left-0 h-full w-full">
                <Image className=" object-cover" src={image} alt={title} fill />
            </div>
            <div className="p-6 lg:p-20 rounded-lg bg-[#FFFFFFE5] opacity-95 w-[920px] max-w-[920px] space-y-5 lg:space-y-10 text-[#111118] text-center m-5 lg:m-10">
                <h1 className="font-bold text-[16px] lg:text-[40px]">{title}</h1>
            </div>
        </section>
    )
};

export default ProjectHero;
