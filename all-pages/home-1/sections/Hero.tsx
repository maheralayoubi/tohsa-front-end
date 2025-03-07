import Image from "next/image";
import React from "react";
import Hexagons from "@/global-components/Hexagons";

const Hero = () => {
  return (
    <div className="relative md:pt-0 flex items-start justify-center h-[280px] md:h-[620px]">
      {/* Background Image */}
      <div className="relative md:pt-0 w-full h-full">
        <Image
          src="/images/hero/hero_photo.png"
          alt="hero photo"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-b from-transparent to-white z-30" />
      {/* hexagon */}
      <Hexagons tohsa="TOHSA" title="TOTAL HUMAN SACCHARIDE ATLAS" className={"absolute bottom-3 md:bottom-10 mx-auto z-40"} variant={"one-color"} />
    </div>
  );
};

export default Hero;
