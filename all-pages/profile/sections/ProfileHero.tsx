
import React from "react";
import Image from "next/image";

interface IProfileHero {
    image: string,
    title: string
}

const ProfileHero: React.FC<IProfileHero> = ({ image, title }) => {
    return (
        <section className="relative flex items-center justify-center h-[140px] lg:h-[320px]">
            <div className=" absolute top-0 left-0 h-full w-full">
                <Image className="object-cover" src={image} alt={title} fill />
            </div>
            <h2 className="font-bold text-xl lg:text-[80px] z-10 text-white">{title}</h2>
        </section>
    )
};

export default ProfileHero;

