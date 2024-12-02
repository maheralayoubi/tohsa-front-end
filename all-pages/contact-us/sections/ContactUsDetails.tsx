import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/styles/hexagon.css";

// data
import contactPageData from "../data/contactPageData.json"

interface IContactUsDetails {
    data: typeof contactPageData
}

const ContactUsDetails: React.FC<IContactUsDetails> = ({ data }) => {
    return (
        <section className="py-10 lg:py-32 px-5 space-y-10 lg:space-y-10 text-[#111118] max-w-[920px] mx-auto text-xs lg:text-2xl font-normal">
            <p>
                {data?.question?.q1}
                <Link href={data?.question?.emailLink} className="text-[#00A7D3]">{data?.question?.emailLabel}</Link>
                {data?.question?.q2}
            </p>

            <div className="space-y-5">
                <h2 className="font-bold text-base lg:text-4xl">{data?.address?.title}</h2>
                {data?.address?.content?.split("\n").map((item, index) =>
                    <p key={index}>{item}</p>
                )}
            </div>

            <div className="space-y-5">
                <h2 className="font-bold text-base lg:text-4xl">{data?.contactSns?.title}</h2>
                <p>
                    {data?.contactSns?.media.text} :
                    <Link href={`mailto:${data?.contactSns?.media?.link}`} className="text-[#00A7D3]">{data?.contactSns?.media?.link}</Link>
                </p>
                <p>
                    {data?.contactSns?.general?.text} :
                    <Link href={`mailto:${data?.contactSns?.general?.link}`} className="text-[#00A7D3]">{data?.contactSns?.general?.link}</Link>
                </p>
                <div className="flex items-center justify-start gap-5">
                    <Link href={data?.contactSns?.twitter}>
                        <Image src="/images/x.svg" alt="x" width={24} height={24} />
                    </Link>
                    <Link href={data?.contactSns?.youtube}>
                        <Image src="/images/youtube.svg" alt="youtube" width={24} height={24} />
                    </Link>
                </div>
            </div>

            <div className="py-10 w-full flex flex-col items-center space-y-5">

                <div className="flex justify-center items-center space-x-2 font-poppins font-bold py-10">
                    {"TOHSA".split("").map((letter, index) => (
                        <div key={index} className="hexagon">
                            {letter}
                        </div>
                    ))}
                </div>

                <div className="block text-center text-[#484848] font-semibold text-[18px] md:text-[24px] lg:text-[32px]">
                    TOTAL HUMAN SACCHARIDE ATLAS
                </div>

                <div className="w-full text-base">
                    <label className="block text-[#878787] text-sm">{data?.input?.label}</label>
                    <div className="flex items-center justify-start gap-5">
                        <input type="text" className="border border-[#878787] text-sm outline-none rounded-sm flex-1 p-3" placeholder={data?.input?.plaseholder} />
                        <button className="bg-[#57369E] py-3 px-8 text-white hover:bg-[#00A7D3]">{data?.input?.submitBtn}</button>
                    </div>
                </div>
                <p className="text-center">{data?.input?.description}</p>
            </div>

        </section>
    )
};

export default ContactUsDetails;
