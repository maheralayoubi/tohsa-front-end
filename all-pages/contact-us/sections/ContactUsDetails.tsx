import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/styles/hexagon.css";

// data
import contactStaticData from "../data/contactStaticData.json"

// components
import Hexagons from "@/global-components/Hexagons";


const ContactUsDetails: React.FC = () => {
    return (
        <section className="py-10 lg:py-32 px-5 space-y-10 lg:space-y-10 text-[#111118] max-w-[920px] mx-auto text-xs lg:text-2xl font-normal">
            <p>
                {contactStaticData?.question?.q1}
                <Link href={`mailto:${contactStaticData?.question?.emailLink}`} className="text-[#00A7D3]">{contactStaticData?.question?.emailLabel}</Link>
                {contactStaticData?.question?.q2}
            </p>

            <div className="space-y-5">
                <h2 className="font-bold text-base lg:text-4xl">{contactStaticData?.address?.title}</h2>
                {contactStaticData?.address?.content?.split("\n").map((item, index) =>
                    <p key={index}>{item}</p>
                )}
                <div>
                    <p>{contactStaticData?.address?.addressNumber}</p>
                    <p>{contactStaticData?.address?.city}</p>
                    <p>{contactStaticData?.address?.phone}</p>
                </div>
            </div>

            <div className="space-y-5">
                <h2 className="font-bold text-base lg:text-4xl">{contactStaticData?.contactSns?.title}</h2>
                <p>
                    {contactStaticData?.contactSns?.media.text} :
                    <Link href={`mailto:${contactStaticData?.contactSns?.media?.link}`} className="text-[#00A7D3]">{contactStaticData?.contactSns?.media?.link}</Link>
                </p>
                <p>
                    {contactStaticData?.contactSns?.general?.text} :
                    <Link href={`mailto:${contactStaticData?.contactSns?.general?.link}`} className="text-[#00A7D3]">{contactStaticData?.contactSns?.general?.link}</Link>
                </p>
                <div className="flex items-center justify-start gap-5">
                    <Link href={contactStaticData?.contactSns?.twitter}>
                        <Image src="/images/x.svg" alt="x" width={24} height={24} />
                    </Link>
                    <Link href={contactStaticData?.contactSns?.youtube}>
                        <Image src="/images/youtube.svg" alt="youtube" width={24} height={24} />
                    </Link>
                </div>
            </div>

            <div className="py-10 w-full flex flex-col items-center space-y-5">
                <Hexagons title={contactStaticData.hexagon.title} tohsa={contactStaticData.hexagon.tohsa} />
                <div className="w-full text-base">
                    <label className="block text-[#878787] text-sm">{contactStaticData?.input?.label}</label>
                    <div className="flex items-center justify-start gap-5">
                        <input type="text" className="border border-[#878787] text-sm outline-none rounded-sm flex-1 p-3" placeholder={contactStaticData?.input?.plaseholder} />
                        <button className="bg-[#57369E] py-3 px-8 text-white hover:bg-[#00A7D3]">{contactStaticData?.input?.submitBtn}</button>
                    </div>
                </div>
                <p className="text-center">{contactStaticData?.input?.description}</p>
            </div>

        </section>
    )
};

export default ContactUsDetails;
