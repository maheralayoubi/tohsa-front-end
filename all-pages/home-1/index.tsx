"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// sections
import Hero from "./sections/Hero";
import SideBar from "./sections/SideBar";
import News from "./sections/News";
import Blogs from "./sections/Blogs";
import Projects from "./sections/Projects";
import LatestUpdates from "./sections/LatestUpdates";
import Footer from "@/global-components/Footer";

const Index: React.FC = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  // Mark component as client-side only
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setDisplaySidebar(true);
      else setDisplaySidebar(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    // Avoid rendering until client-side rendering is confirmed
    return null;
  }

  return (
    <div className="flex items-start justify-between w-full">
      <SideBar displaySidebar={displaySidebar} />
      <div className="flex-1 text-center w-full lg:w-[65%] lg:max-w-[65%]">
        <Hero />
        <Blogs />
        <Projects />
        <LatestUpdates />
        <Footer />
      </div>
      <News />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
