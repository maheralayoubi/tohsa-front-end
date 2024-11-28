import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import projectsData from "@/DB/projects.json"


interface IProjectsPage {
    id: string;
}

const Index: React.FC<IProjectsPage> = ({ id }) => {

    const data = projectsData.find((item) => {
        return item.id === id
    })

    if (!data) {
        notFound()
    }

    return (
        <>
            <section className="relative flex items-end justify-center h-[280px] lg:h-[620px]">
                <div className=" absolute top-0 left-0 h-full w-full">
                    <Image className=" object-cover" src={data?.image} alt={data?.title} fill />
                </div>
                <div className="p-6 lg:p-20 rounded-lg bg-[#FFFFFFE5] opacity-95 w-[920px] max-w-[920px] space-y-5 lg:space-y-10 text-[#111118] text-center m-5 lg:m-10">
                    <h1 className="font-bold text-[16px] lg:text-[40px]">{data?.title}</h1>
                </div>
            </section>

            <section className="py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] space-y-10 lg:space-y-20 mx-auto text-xs lg:text-2xl font-normal">
                <h2 className="text-base lg:text-3xl font-bold">About The Project</h2>
                {data?.about.split("\n").map((item, index) =>
                    <p key={index}>{item}</p>
                )}
                <div className="flex items-start justify-between gap-10 flex-col lg:flex-row">
                    <div className="relative lg:h-[400px] w-full lg:w-[400px] aspect-square">
                        <Image className="object-cover rounded" src={data?.subImage} alt={data?.subTitle} fill />
                    </div>
                    <div className="flex-1 space-y-5">
                        <h2 className="text-base lg:text-3xl font-bold">Subtitle</h2>
                        {data?.subTitle.split("\n").map((item, index) =>
                            <p key={index}>{item}</p>
                        )}
                    </div>
                </div>
                <p>{data?.contentEnd}</p>
            </section>
        </>
    );
};

export default Index;