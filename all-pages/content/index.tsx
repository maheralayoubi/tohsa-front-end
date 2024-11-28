import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface IContentData {
    id: string,
    image: string,
    title: string,
    content: string,
}

const contentData: IContentData[] = [
    {
        id: "1",
        title: "Precise Human Glycan Catalogue",
        image: "/images_db/content1.png",
        content: "Reveals information on sugar chains in the human body.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis Vulputate odio. Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.\n Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.",
    },
    {
        id: "2",
        title: "Human Disease-related Glycan Data",
        image: "/images_db/content2.png",
        content: "Displays the relationship between diseases and sugar chains. \n Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. \n Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.",
    },
    {
        id: "3",
        title: "Glycan Biosynthesis Atlas",
        image: "/images_db/content3.png",
        content: "Explains how sugar chains are synthesized in the body.\n Estie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. \n Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.Vulputate odio. Cras molestie quis ante et vestibulum. Nullam viverra leo quis libero vulputate ultricies sit amet et lorem.",
    }
]


interface IContentPage {
    id: string;
}

const Index: React.FC<IContentPage> = ({ id }) => {

    const data = contentData.find((item) => {
        return item.id === id
    })

    if (!data) {
        notFound()
    }

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
    );
};

export default Index;

