import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import newsData from "@/DB/news.json"

interface NewsPage {
    id: string;
}

const Index: React.FC<NewsPage> = ({ id }) => {

    const data = newsData.find((item) => {
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
                <div className="p-6 lg:p-20 rounded-lg bg-[#FFFFFFE5] opacity-95 max-w-[920px] space-y-5 lg:space-y-10 text-[#111118] text-center m-5 lg:m-10">
                    <h1 className="font-bold text-[16px] lg:text-[40px]">{data?.title}</h1>
                </div>
            </section>

            <section className="py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] space-y-10 lg:space-y-20 mx-auto text-xs lg:text-2xl font-normal">
                <h2 className="text-base lg:text-3xl font-bold">Overview</h2>
                <p>{data?.content1}</p>
                <p>{data?.content2}</p>

                <table className="border-collapse border border-[#878787]">
                    <tbody>
                        <tr className="flex flex-col lg:table-row">
                            <td className="border-b-0 border border-[#878787] p-4 lg:p-5 text-sm lg:text-2xl font-bold w-full lg:w-52 ">Date & Time</td>
                            <td className="border-t-0 border border-[#878787] p-4 lg:p-5">{data?.dateTime}</td>
                        </tr>
                        <tr className="flex flex-col lg:table-row">
                            <td className="border-b-0 border border-[#878787] p-4 lg:p-5 text-sm lg:text-2xl font-bold w-full lg:w-52 ">Place</td>
                            <td className="border-t-0 border border-[#878787] p-4 lg:p-5">{data?.place}</td>
                        </tr>
                        <tr className="flex flex-col lg:table-row">
                            <td className="border-b-0 border border-[#878787] p-4 lg:p-5 text-sm lg:text-2xl font-bold w-full lg:w-52 ">Rigester For</td>
                            <td className="border-t-0 border border-[#878787] p-4 lg:p-5">{data?.rigesterFor}</td>
                        </tr>
                        <tr className="flex flex-col lg:table-row">
                            <td className="border-b-0 border border-[#878787] p-4 lg:p-5 text-sm lg:text-2xl font-bold w-full lg:w-52">Program</td>
                            <td className="border-t-0 border border-[#878787] p-4 lg:p-5">
                                <ul className="list-disc px-5">
                                    {
                                        data?.program.map((item1, index) =>
                                            <div key={index}>
                                                <li key={index}>{item1.content}</li>
                                                <ul className="list-disc px-5">
                                                    {
                                                        item1.list.map((item2, index) =>
                                                            <div key={index}>
                                                                <li>{item2.content}</li>
                                                                <ul className="list-disc px-5">
                                                                    {
                                                                        item2.list.map((item3, index) =>
                                                                            <li key={index}>{item3.content}</li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </div>
                                                        )}
                                                </ul>
                                            </div>
                                        )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>{data?.content3}</p>
            </section>
        </>
    );
};

export default Index; 