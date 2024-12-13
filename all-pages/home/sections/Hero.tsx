import Image from "next/image";
import React from "react";
import "@/app/styles/hexagon.css";
import Hexagons from "@/global-components/Hexagons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-screen md:pt-0">
      <Hexagons title="Total Human Saccharide Atlas" tohsa="TOHSA" className=" z-40 pt-5 lg:pt-20" />
      <div className=" absolute bottom-[100px] left-0 w-full items-center justify-evenly hidden lg:flex">
        <div className="relative bg-[#57369E] group text-white rounded px-10 py-3 font-semibold text-2xl text-center duration-500 transition-all hover:-translate-y-5">
          <span className="cursor-pointer">Resources</span>
          <ul className="group-hover:opacity-85 opacity-0 transition-all duration-500 flex absolute -top-20 -left-72 bg-[#57369E] items-center justify-center p-5 gap-10 rounded  text-base">
            <li>
              <Link href="/">Glycogens</Link>
            </li>
            <li>
              <Link href="/">Glycoproteins</Link>
            </li>
            <li>
              <Link href="/">Lectins</Link>
            </li>
            <li>
              <Link href="/">Glycolipids</Link>
            </li>
            <li>
              <Link href="/">Glycans</Link>
            </li>
            <li>
              <Link href="/">Pathways</Link>
            </li>
            <li>
              <Link href="/">Diseases</Link>
            </li>
          </ul>
          <div className="group-hover:opacity-85 opacity-0 transition-all duration-500 absolute -bottom-[70px] rounded left-0 w-full h-full bg-gradient-to-b from-[#af9cda] to-transparent"></div>
        </div>

        <div className="relative bg-[#57369E] group text-white rounded px-10 py-3 font-semibold text-2xl text-center duration-500 transition-all hover:-translate-y-5">
          <span className="cursor-pointer">Tools</span>
          <ul className="group-hover:opacity-85 opacity-0 transition-all duration-500 flex absolute -top-20 -left-28 bg-[#57369E] items-center justify-center p-5 gap-10 rounded  text-base">
            <li>
              <Link href="/">ToolsA</Link>
            </li>
            <li>
              <Link href="/">ToolsB</Link>
            </li>
            <li>
              <Link href="/">ToolsC</Link>
            </li>
            <li>
              <Link href="/">ToolsD</Link>
            </li>
          </ul>
          <div className="group-hover:opacity-85 opacity-0 transition-all duration-500 absolute -bottom-[70px] rounded left-0 w-full h-full bg-gradient-to-b from-[#af9cda] to-transparent"></div>
        </div>

        <div className="relative bg-[#57369E] group text-white rounded px-10 py-3 font-semibold text-2xl text-center duration-500 transition-all hover:-translate-y-5">
          <span className="cursor-pointer">Standards</span>
          <ul className="group-hover:opacity-85 opacity-0 transition-all duration-500 flex absolute -top-20 -left-6 bg-[#57369E] items-center justify-center p-5 gap-10 rounded  text-base">
            <li>
              <Link href="/ontologies">Ontologies</Link>
            </li>
            <li>
              <Link href="/">Notations</Link>
            </li>
          </ul>
          <div className="group-hover:opacity-85 opacity-0 transition-all duration-500 absolute -bottom-[70px] rounded left-0 w-full h-full bg-gradient-to-b from-[#af9cda] to-transparent"></div>
        </div>

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
