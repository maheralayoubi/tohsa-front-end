"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

//sections
import Hero from "./sections/Hero";
import SideBar from "./sections/SideBar";
import News from "./sections/News";

const Index: React.FC = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setDisplaySidebar(true);
      else setDisplaySidebar(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-start justify-between">
      <SideBar displaySidebar={displaySidebar} />
      <div className="container text-center">
        <Hero />
      </div>
      <News />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
