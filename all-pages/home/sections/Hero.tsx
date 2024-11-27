import Image from "next/image";
import React from "react";
import "@/app/styles/hexagon.css";

const Hero = () => {
  return (
    <div className="relative pt-[40px] md:pt-0">
      {/* Background Image */}
      <Image
        src="/images/hero_photo.png"
        alt="hero photo"
        width={1500}
        height={1500}
        className="w-full object-cover h-[280px] md:h-full"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-b from-transparent to-white z-30"></div>

      {/* Hexagon Letters */}
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] z-30 h-[38%] md:h-[50%] lg:h-[42%] w-full flex flex-col items-center">
        <div className="flex justify-center items-center space-x-2 font-poppins font-bold">
          {"TOHSA".split("").map((letter, index) => (
            // <HexagonWithLetter key={index} letter={letter} />
            <div key={index} className="hexagon">
              {letter}
            </div>
          ))}
        </div>

        {/* Title Below Hexagons */}
        <div className="absolute block bottom-[20px] md:bottom-[30px] lg:bottom-[40px] text-center text-[#484848] font-semibold text-[18px] md:text-[24px] lg:text-[32px]">
          TOTAL HUMAN SACCHARIDE ATLAS
        </div>
      </div>
    </div>
  );
};

export default Hero;
