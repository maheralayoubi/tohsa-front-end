import Image from "next/image";
import React from "react";
import "@/app/styles/hexagon.css";
import Hexagons from "@/global-components/Hexagons";
import Link from "next/link";

import SidebarData from "../data/sidebarData.json"

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-screen md:pt-0">
      <Hexagons title="Total Human Saccharide Atlas" tohsa="TOHSA" className=" z-40 pt-5 " />
      <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full hidden lg:grid grid-cols-3 max-w-screen-xl">
        {SidebarData.map(item => (
          <div key={item.id} className="w-full relative font-semibold group text-2xl flex gap-5 flex-col items-center justify-center text-center text-white duration-500 transition-all hover:-translate-y-5">
            <ul className="group-hover:opacity-85 opacity-0 transition-all duration-500 flex bg-[#57369E] items-center justify-center p-5 gap-10 rounded  text-base">
              {item.items.map(item =>
                <li key={item.id}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )}
            </ul>
            <span className="cursor-pointer bg-[#57369E] rounded px-10 py-3">{item.title}</span>
            <div className="group-hover:opacity-85 opacity-0 transition-all duration-500  rounded w-[193px] h-[56px] bg-gradient-to-b from-[#af9cda] to-transparent"></div>
          </div>
        ))}

      </div>
      {/* Background Image */}
      <div className="absolute top-10 left-0 w-full h-[45%] bg-gradient-to-t from-transparent to-white -z-10"></div>
      <div className=" absolute top-10 lg:top-10 left-0 w-full h-full -z-20">
        <Image
          src="/images/background-hero-2.png"
          alt="hero photo"
          fill
          className="object-cover"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute -bottom-16 left-0 w-full h-[45%] bg-gradient-to-b from-transparent to-white -z-10"></div>

    </div>
  );
};

export default Hero;
