import Image from "next/image";
import React from "react";
import HexagonWithLetter from "./HexagonWithLetter";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src="/images/hero_photo.png"
        alt="hero photo"
        width={1500}
        height={1500}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-b from-transparent to-white z-30"></div>

      {/* Hexagon Letters */}
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] z-30 h-[65%] lg:h-[45%] w-full flex flex-col items-center">
        <div className="flex justify-center items-center space-x-2">
          {"TOHSA".split("").map((letter, index) => (
            <HexagonWithLetter key={index} letter={letter} />
          ))}
        </div>

        {/* Title Below Hexagons */}
        <div className="text-center text-[#484848] font-semibold text-[18px] md:text-[24px] lg:text-[32px] mt-4">
          TOTAL HUMAN SACCHARIDE ATLAS
        </div>
      </div>
    </div>
  );
};

export default Hero;
