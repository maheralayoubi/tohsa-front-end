import React from "react";
import Image from "next/image";

interface IContentHero {
    data: Blog
}

const ContentHero: React.FC<IContentHero> = ({ data }) => {
    return (
        <section className="relative flex items-end justify-center h-[600px] lg:h-[920px]">
            <div className=" absolute top-0 left-0 h-full w-full">
                <Image className=" object-cover" src={data?.image} alt={data?.title} fill />
            </div>
            <div className="p-5 lg:p-20 rounded-lg bg-[#FFFFFFE5] opacity-95 max-w-[920px] space-y-5 lg:space-y-10 text-[#111118] text-center m-5 lg:m-10">
                <h1 className="font-bold text-[16px] lg:text-[40px]">{data.title}</h1>
                {
                    data?.content.split('\n').map((item, index) =>
                        <p className="font-normal text-xs lg:text-base" key={index}>{item}</p>
                    )
                }
                <span className="font-bold text-[14px] lg:text-[32px] block">More Details Coming Soon ...</span>
            </div>
        </section>
    )
};

export default ContentHero;
