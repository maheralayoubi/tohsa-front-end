import React from "react";
import "@/app/styles/hexagon.css";

interface IHexagons {
    tohsa: string,
    title: string,
    className?: string
}

const Hexagons: React.FC<IHexagons> = ({ tohsa, title, className }) => {
    return (
        <div className={`space-y-[10px] ${className}`}>
            <div className="flex justify-center items-center space-x-2 font-poppins font-bold py-3 md:py-8">
                {tohsa.split("").map((letter, index) => (
                    <div key={index} className={`variant${index + 2} hexagon `}>
                        {letter}
                    </div>
                ))}
            </div>

            <div className="block text-center text-[#484848] font-semibold text-[18px] md:text-[24px] xl:text-[40px]">
                {title}
            </div>
        </div>
    )
};

export default Hexagons;
