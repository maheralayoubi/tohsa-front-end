"use client";
import React from "react";
import data from "@/DB/learn.json";
import Sidebar from "@/global-components/Sidebar";
import Footer from "@/global-components/Footer";
import HeroSection from "@/global-components/HeroSection";
import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import HoverImageLink from "./sections/HoverImageLink";
import ResourceLink from "./sections/ResourceLink";

function Index() {
  return (
    <main>
      <HeroSection
        title="GLYCO LEARNING"
        imageSource="/images/learn-hero.png"
      />
      <section className="flex flex-col lg:flex-row container">
        <Sidebar title="Study Material" links={data.links} />
        <div className="space-y-10 lg:space-y-[128px] py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] mx-auto text-sm lg:text-2xl font-normal container">
          <Paragraph content={data.intro} />

          {/* Study Material */}
          <div className="space-y-5 lg:space-y-10">
            <Paragraph title="Study Material" />
            <ul className="space-y-5">
              {data.questions.map((question, index) => (
                <HoverImageLink
                  key={index}
                  title={question.title}
                  link={question.link}
                  defaultImage="/images/arrow-right-purple.svg"
                  hoverImage="/images/arrow-right-white.svg"
                />
              ))}
            </ul>
          </div>

          {/* Data Resources */}
          <div className="space-y-5 lg:space-y-10" id="data-resources">
            <Paragraph title="Data Resources" />
            {data.resources.map((resource, index) => (
              <ResourceLink
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                defaultImage="/images/arrow-right-colored.svg"
                hoverImage="/images/arrow-right-hover.svg"
              />
            ))}
          </div>

          {/* Video Tutorial */}
          <div className="space-y-5 lg:space-y-10" id="video-tutorial">
            <Paragraph
              title="Video Tutorial"
              content="Checkout our tutorial video"
            />
            <div className="relative flex justify-center items-center">
              <Image
                src={data.video}
                alt="video"
                width={300}
                height={300}
                className="w-full h-full"
              />
              <Image
                src="/images/play-circle.svg"
                alt="play Icon"
                width={80}
                height={80}
                className="z-10 absolute w-[40px] lg:w-[80px]"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Index;
