import React from "react";

interface IHexagons {
    tohsa: string,
    title: string
}

const Hexagons: React.FC<IHexagons> = ({ tohsa, title }) => {
    return (
        <div className="space-y-5">
            <div className="flex justify-center items-center space-x-2 font-poppins font-bold py-10">
                {tohsa.split("").map((letter, index) => (
                    <div key={index} className="hexagon">
                        {letter}
                    </div>
                ))}
            </div>

            <div className="block text-center text-[#484848] font-semibold text-[18px] md:text-[24px] lg:text-[32px]">
                {title}
            </div>
        </div>
    )
};

export default Hexagons;
