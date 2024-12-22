"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import "../app/styles/header.css";
import SearchBtn from "./SearchBtn";
import Link from "next/link";

// components
import { MobileNavItem, MobileSubNavItem } from "./MobileNavItem";

// data
import headerData from "./data/header.json";
import sidebarData from "@/DB/sidebarData.json";

const Header = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(false);
  const [openSections, setOpenSections] = useState<number | null>(null);

  // Reference for the scrollable container
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const handleSectionToggle = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  const toggleNav = () => setDisplayNav((prev) => !prev);

  return (
    <header className="px-[16px] py-[8px] lg:px-[40px] lg:py-[20px] overflow-auto font-poppins sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-10">
          {/* Menu Icon for Mobile */}
          <div className="flex items-center space-x-5">
            <Image
              src="/images/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer lg:hidden"
              onClick={toggleNav}
            />
            <Link href="/">
              <Image
                src="/images/universities/Logo.svg"
                alt="logo"
                width={220}
                height={64}
                priority
                className="w-[139px] h-[40px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-5 font-poppins text-[16px]">
              {headerData.navLinks.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SearchBtn />

        {/* Action Links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-5 font-poppins text-[16px]">
            {headerData.actionLinks.map((item) => (
              <li key={item.id} className="cursor-pointer">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overlay w-[100%] h-[100%] fixed top-0 left-0 bg-black opacity-[50%] z-40 ${displayNav ? "block" : "hidden"
          }`}
        onClick={toggleNav}
      />

      <div
        className={`z-50 lg:hidden fixed top-0 left-0 w-[85%] h-full bg-white text-black px-[16px] pt-[20px] transition-transform rounded-r-[4px] ${displayNav ? "translate-x-0" : "translate-x-[-100%]"
          }`}
      >
        <div className="block w-100 relative h-[24px]">
          <Image
            src="/images/icons/close.svg"
            alt="close"
            width={24}
            height={24}
            className="absolute right-0 cursor-pointer"
            onClick={toggleNav}
          />
        </div>

        <div className="flex justify-between items-center mb-8">
          <Image
            src="/images/universities/Logo.svg"
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
            {/* navLinks */}
            {headerData.navLinks.map((item) => (
              <MobileNavItem
                key={item.id}
                href={item.href}
                label={item.label}
                toggle={toggleNav}
              />
            ))}

            {/* Sidebar with scrollable submenu */}
            {sidebarData.map((item, index) => (
              <li key={index} className="text-[14px] font-poppins">
                <div
                  className="cursor-pointer flex justify-between pb-[17px] border-b-[1px] border-[#BBBBBB]"
                  onClick={() => handleSectionToggle(index)}
                >
                  <span>{item.title}</span>
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt="toggle arrow"
                    width={16}
                    height={16}
                    loading={"lazy"}
                    className={`w-[16px] h-[16px] transition-transform ${openSections === index ? "-rotate-90" : "rotate-90"
                      }`}
                  />
                </div>
                {/* Collapsible Content */}
                <ul
                  className={`overflow-hidden transition-all duration-300 mb-[16px] ${openSections === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                >
                  {item.items.map((item) => (
                    <MobileSubNavItem
                      key={item.id}
                      href={item.href}
                      label={item.label}
                      toggle={toggleNav}
                    />
                  ))}
                </ul>
              </li>
            ))}

            {/* Additional Action Links */}
            {headerData.actionLinks.map((item) => (
              <MobileNavItem
                key={item.id}
                href={item.href}
                label={item.label}
                toggle={toggleNav}
              />
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

export default Header;
