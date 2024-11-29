"use client";
import Image from "next/image";
import data from "../all-pages/home/data/sidebarData.json";
import { useState, useRef } from "react";
import "../app/styles/header.css";
import dynamic from "next/dynamic";

const Header = () => {
  const [navLinks] = useState<string[]>([
    "About",
    "Discovery",
    "Access",
    "Learn",
  ]);
  const [actionLinks] = useState<string[]>(["Contact Us", "Help"]);
  const [displayNav, setDisplayNav] = useState<boolean>(false);
  const [openSections, setOpenSections] = useState<number | null>(null);

  // Reference for the scrollable container
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const handleSectionToggle = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  // // Scroll up/down functions
  // const scrollUp = () => {
  //   if (scrollableContainerRef.current) {
  //     scrollableContainerRef.current.scrollBy({
  //       top: -100,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollDown = () => {
  //   if (scrollableContainerRef.current) {
  //     scrollableContainerRef.current.scrollBy({ top: 100, behavior: "smooth" });
  //   }
  // };

  return (
    <header className="px-[16px] py-[8px] md:px-[40px] md:py-[20px] overflow-auto font-poppins sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-10">
          {/* Menu Icon for Mobile */}
          <div className="flex items-center space-x-5">
            <Image
              src="/images/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer md:hidden"
              onClick={() => setDisplayNav(!displayNav)}
            />
            <Image
              src="/images/Logo.svg"
              alt="logo"
              width={220}
              height={64}
              className="w-[139px] h-[40px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-5 font-poppins text-[16px]">
              {navLinks.map((link, index) => (
                <li key={index} className="cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Action Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-5 font-poppins text-[16px]">
            {actionLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overlay w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[50%] z-40 ${displayNav ? "block" : "hidden"
          }`}
      ></div>
      <div
        className={`z-50 md:hidden fixed top-0 left-0 w-[85%] h-full bg-white text-black px-[16px] pt-[20px] transition-transform rounded-r-[4px] ${displayNav ? "translate-x-0" : "translate-x-[-100%]"
          }`}
      >
        <div className="block w-100 relative h-[24px]">
          <Image
            src="/images/close.svg"
            alt="close"
            width={24}
            height={24}
            className="absolute right-0 cursor-pointer"
            onClick={() => setDisplayNav(!displayNav)}
          />
        </div>
        <div className="flex justify-between items-center mb-8">
          <Image
            src="/images/Logo.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-[139px] h-[40px]"
          />
        </div>

        {/* Scrollable Wrapper */}
        <div
          ref={scrollableContainerRef}
          className="overflow-y-scroll max-h-[calc(100vh-200px)] no-scrollbar"
        >
          <ul className="space-y-[16px]">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer flex justify-between pb-[17px] border-b-[1px] border-[#BBBBBB] text-[14px] font-poppins"
              >
                {link}
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow right"
                  width={16}
                  height={16}
                />
              </li>
            ))}

            {/* Sidebar with scrollable submenu */}
            {data.map((item, index) => (
              <li key={index} className="text-[14px] font-poppins">
                <div
                  className="cursor-pointer flex justify-between pb-[17px] border-b-[1px] border-[#BBBBBB]"
                  onClick={() => handleSectionToggle(index)}
                >
                  <span>{item.title}</span>
                  <Image
                    src="/images/arrow-right.svg"
                    alt="toggle arrow"
                    width={16}
                    height={16}
                    className={`transition-transform ${openSections === index ? "rotate-90" : "rotate-0"
                      }`}
                  />
                </div>
                {/* Collapsible Content */}
                <ul
                  className={`overflow-hidden transition-all duration-300 mb-[16px] ${openSections === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                >
                  {item.items.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="cursor-pointer flex space-x-2 py-[17px] border-b-[1px] border-[#BBBBBB] text-[14px] font-poppins pl-[8px]"
                    >
                      <Image
                        src="/images/setting.svg"
                        alt="setting"
                        width={24}
                        height={24}
                      />
                      <span>{subItem.name}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Additional Action Links */}
            {actionLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer flex justify-between pb-[17px] border-b-[1px] border-[#BBBBBB] text-[14px] font-poppins"
              >
                {link}
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow right"
                  width={16}
                  height={16}
                />
              </li>
            ))}
          </ul>
          <p className="mt-[16px] text-[12px] opacity-[70%] font-poppins">
            Version 1.2
          </p>
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
