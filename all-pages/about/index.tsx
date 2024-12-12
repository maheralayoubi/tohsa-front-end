import React from "react";

// sections
import Footer from "@/global-components/Footer";
import HeroSection from "../../global-components/HeroSection";
import MissionAbout from "./sections/MissionAbout";

const Index: React.FC = () => {
  return (
    <main>
      <HeroSection title="ABOUT TOHSA" imageSource="/images/about-hero.png" />
      <MissionAbout />
      <Footer />
    </main>
  );
};

export default Index;
