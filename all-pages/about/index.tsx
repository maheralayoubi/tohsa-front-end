import React from "react";

// sections
import Footer from "@/global-components/Footer";
import AboutHero from "./sections/AboutHero";
import MissionAbout from "./sections/MissionAbout";

const Index: React.FC = () => {
  return (
    <main>
      <AboutHero />
      <MissionAbout />
      <Footer />
    </main>
  );
};

export default Index;
