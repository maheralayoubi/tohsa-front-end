"use client";
import React from "react";
import data from "@/DB/about.json";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

interface TextSectionProps {
  title: string;
  content: string;
}

interface ImageOverlayProps {
  src: string;
  alt: string;
  galleryText: string;
}

interface IData {
  data: {
    id: string;
    name: string;
    position: string;
    description: string;
    image: string;
  };
}

const MissionAbout = () => {
  const renderParagraphs = (text: string) =>
    text.split("\n").map((item, index) => <p key={index}>{item}</p>);

  const Sidebar = () => (
    <div className="sidebar hidden lg:block w-[30%] px-[20px] pt-[80px] sticky top-20 self-start">
      <h3 className="underline-offset-8 underline font-bold text-[20px]">
        Mission & Vision
      </h3>
      <ul className="space-y-5 mt-5">
        {data.links.map((link, index) => (
          <li key={index}>
            <Link href={`#${link.toLowerCase().split(" ").join("-")}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const VisionSection = () => (
    <div className="vision flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
      <Image
        src={data.visionImage}
        alt="Vision Image"
        width={400}
        height={400}
        className="rounded-lg"
      />
      <div>
        <h3 className="font-bold text-[32px] mb-5">Vision</h3>
        <p>{data.vision}</p>
      </div>
    </div>
  );

  const TextSection = ({ title, content }: TextSectionProps) => (
    <div className="space-y-5">
      <h3 className="font-bold text-[32px]">{title}</h3>
      {renderParagraphs(content)}
    </div>
  );

  const ImageOverlay = ({ src, alt, galleryText }: ImageOverlayProps) => (
    <div className="relative w-fit rounded-lg overflow-hidden">
      <div className="absolute z-10 w-full h-full top-0 left-0 flex justify-center items-center flex-col space-y-2">
        <Image
          src="/images/gallery.svg"
          alt="Gallery Icon"
          width={40}
          height={40}
        />
        <p className="text-white font-poppins text-[16px]">{galleryText}</p>
      </div>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <Image
        src={src}
        alt={alt}
        width={280}
        height={195}
        className="min-w-[200px] min-h-[195px]"
      />
    </div>
  );

  const HistorySection = () => (
    <div className="space-y-10" id="history">
      <h3 className="font-bold text-[32px] leading-[50px]">
        History
        <br />
        Our Journey: The Evolution of HGA-TOHSA
      </h3>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
        <Image
          src={data.historyImages.mainImages}
          alt="History Main Image"
          width={200}
          height={200}
          className="rounded-lg lg:min-w-[67%] lg:min-h-[400px]"
        />
        <div className="flex flex-col space-y-5">
          <Image
            src={data.historyImages.image2}
            alt="History Secondary Image"
            width={280}
            height={195}
            className="rounded-lg object-contain"
          />
          <ImageOverlay
            src={data.historyImages.lastImage}
            alt="History Last Image"
            galleryText="See all 12 images"
          />
        </div>
      </div>
      <TextSection title="Funding And Early Days" content={data.funding} />
      <TextSection title="Milestones" content={data.milestones} />
      <TextSection title="Current Status" content={data.current} />
    </div>
  );

  const TeamCard = ({ data }: IData) => (
    <div className="bg-[#F0F5FF] p-5 rounded-[20px] font-poppins">
      <Image src={data.image} width={352} height={240} alt={data.name} />
      <div className="mt-5 space-y-2 text-center">
        <h3 className="font-bold text-[24px]">{data.name}</h3>
        <p className="text-[16px]">{data.position}</p>
        <p className="text-[16px] text-[#484848]">{data.description}</p>
      </div>
    </div>
  );

  const TeamSection = () => (
    <div id="team">
      <TextSection title="Team" content={data.team.description} />
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          1500: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper mt-[40px]"
      >
        {data.team.teamMembers.map((item) => (
          <SwiperSlide key={item.id}>
            <TeamCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  const PartnersSection = () => (
    <div id="partners-&-collaborators">
      <TextSection title="Partners & Collaborators" content={data.partners} />
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          1500: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper mt-[40px]"
      >
        {data.partnersImages.map((item, index) => (
          <SwiperSlide key={index} className="h-20">
            <Image
              src={item}
              height={40}
              width={240}
              alt={`footer ${index + 1}`}
              className="h-[40px] w-[240px] mySwiper"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section className="flex font-poppins">
      <Sidebar />
      <div className="space-y-[128px] py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] mx-auto text-xs lg:text-2xl font-normal">
        <div className="space-y-10">
          <h2 className="font-bold text-[40px]">Mission & Vision</h2>
          <h3 className="font-bold text-[32px]">Mission</h3>
          {renderParagraphs(data.mission)}
          <VisionSection />
        </div>
        <HistorySection />
        <TeamSection />
        <PartnersSection />
      </div>
    </section>
  );
};

export default MissionAbout;
