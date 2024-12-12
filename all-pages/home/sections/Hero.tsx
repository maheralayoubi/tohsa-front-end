import Image from "next/image";
import React from "react";
import "@/app/styles/hexagon.css";
import Hexagons from "@/global-components/Hexagons";

const Hero = () => {
  return (
    <div className="relative w-full h-[280px] md:h-screen md:pt-0">
      <Hexagons title="Total Human Saccharide Atlas" tohsa="TOHSA" className=" z-40 pt-5 lg:pt-20" />

      {/* Background Image */}
      <div className=" absolute top-10 left-0 w-full h-full -z-20">
        <Image
          src="/images/background-hero-2.png"
          alt="hero photo"
          fill
          className="object-cover"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-b from-transparent to-white z-30"></div>

    </div>
  );
};

export default Hero;
