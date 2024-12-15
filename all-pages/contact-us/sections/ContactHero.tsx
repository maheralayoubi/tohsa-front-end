
import React from "react";
import Image from "next/image";

// data
import contactStaticData from "../data/contactStaticData.json"

const ContactUsHero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center h-[140px] lg:h-[320px]">
            <div className=" absolute top-0 left-0 h-full w-full">
                <Image className="object-cover" src={contactStaticData.imagePageSrc} alt={contactStaticData.pageTitle} fill />
            </div>
            <h2 className="font-bold text-xl lg:text-[80px] z-10 text-white">{contactStaticData.pageTitle}</h2>
        </section>
    )
};

export default ContactUsHero;
