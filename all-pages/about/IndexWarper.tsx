"use client";
import React from "react";
import data from "@/DB/about.json";
import Sidebar from "@/global-components/Sidebar";
import MissionSection from "./sections/MissionSection";
import HistorySection from "./sections/HistorySection";
import TeamSection from "./sections/TeamSection";
import PartnersSection from "./sections/PartnersSection";
import FAQsSection from "./sections/FAQsSection";

interface IIndexWarperProps {}

const IndexWarper = ({}: IIndexWarperProps) => {
  return (
    <section className="flex flex-col lg:flex-row container">
      <Sidebar title="Mission & Vision" links={data.links} />
      <div className="space-y-10 lg:space-y-[128px] py-10 px-5 lg:py-20 lg:px-10 max-w-[920px] text-[#111118] mx-auto text-sm lg:text-2xl font-normal container">
        <MissionSection
          mission={data.mission}
          vision={data.vision}
          visionImage={data.visionImage}
        />
        <HistorySection
          historyImages={data.historyImages}
          current={data.current}
          funding={data.funding}
          milestones={data.milestones}
        />
        <TeamSection team={data.team} />
        <PartnersSection partners={data.partners} />
        <FAQsSection faqs={data.faqs} />
      </div>
    </section>
  );
};

export default IndexWarper;
