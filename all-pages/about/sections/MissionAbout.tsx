"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import data from "@/DB/about.json";
import Sidebar from "@/global-components/Sidebar";
import Paragraph from "@/global-components/Paragraph";

const MissionSection = () => (
  <div className="space-y-5 lg:space-y-10">
    <h2 className="font-bold text-[16px] lg:text-[40px]">Mission & Vision</h2>
    <Paragraph title="Mission" content={data.mission} />
    <VisionSection />
  </div>
);

const VisionSection = () => (
  <div className="vision flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
    <Image
      src={data.visionImage}
      alt="Vision Image"
      width={400}
      height={400}
      className="rounded-lg w-full lg:w-[50%] object-cover"
    />
    <div>
      <Paragraph title="Vision" content={data.vision} />
    </div>
  </div>
);

const HistorySection = () => (
  <div className="space-y-2 lg:space-y-10" id="history">
    <Paragraph title={`History \n Our Journey: The Evolution of HGA-TOHSA`} />
    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5">
      {/* Main Image */}
      <Image
        src={data.historyImages.mainImages}
        alt="History Main Image"
        width={200}
        height={200}
        className="rounded-lg w-full lg:min-w-[67%] object-cover"
      />

      {/* Side Images */}
      <div className="flex flex-row lg:flex-col w-full space-x-2 lg:space-x-0 lg:space-y-2">
        {/* Secondary Image */}
        <Image
          src={data.historyImages.image2}
          alt="History Secondary Image"
          width={280}
          height={195}
          className="rounded-lg object-cover w-[50%] lg:w-[280px] lg:max-h-[50%]"
        />

        {/* "See All" Image with Overlay */}
        <div className="relative rounded-lg overflow-hidden w-[50%] lg:w-[280px] lg:max-h-[50%]">
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 space-y-2">
            <Image
              src="/images/gallery.svg"
              alt="Gallery Icon"
              width={40}
              height={40}
            />
            <p className="text-white text-[16px]">See all 12 images</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <Image
            src={data.historyImages.lastImage}
            alt="History Last Image"
            width={280}
            height={195}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>

    <Paragraph title="Funding And Early Days" content={data.funding} />
    <Paragraph title="Milestones" content={data.milestones} />
    <Paragraph title="Current Status" content={data.current} />
  </div>
);

const TeamSection = () => (
  <div id="team">
    <Paragraph title="Team" content={data.team.description} />
    <Swiper
      spaceBetween={20}
      slidesPerView={1.2}
      breakpoints={{
        768: { slidesPerView: 1.5 },
        1024: { slidesPerView: 1.95 },
        1500: { slidesPerView: 2, spaceBetween: 40 },
      }}
      navigation
      mousewheel
      keyboard
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper mt-[8px] lg:mt-[40px]"
    >
      {data.team.teamMembers.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-[#F0F5FF] p-2 lg:p-5 rounded-lg lg:rounded-[20px] font-poppins">
            <Image src={item.image} width={352} height={240} alt={item.name} />
            <div className="mt-2 lg:mt-5 space-y-1 lg:space-y-2 text-center">
              <h3 className="font-semibold lg:font-bold text-[12px] lg:text-[24px]">
                {item.name}
              </h3>
              <p className="text-[12px] lg:text-[16px]">{item.position}</p>
              <p className="text-[12px] lg:text-[16px] text-[#484848]">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const PartnersSection = () => (
  <div id="partners-&-collaborators">
    <Paragraph title="Partners & Collaborators" content={data.partners} />
    <Swiper
      spaceBetween={10}
      slidesPerView={1.5}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.9 },
        1500: { slidesPerView: 2, spaceBetween: 40 },
      }}
      navigation
      mousewheel
      keyboard
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper mt-2 lg:mt-[40px]"
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index} className="h-20 relative">
          <Image
            src={`/images/footer${index + 1}.png`}
            alt={`footer ${index + 1}`}
            height={40}
            width={240}
            className="object-contain self-center max-h-[60px] lg:max-h-[120px] "
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="w-[100%] h-[300px] lg:h-[460px] mt-2 lg:mt-[40px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6014443.780071412!2d142.8754536704671!3d35.45247405148201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191e54e1f331d7%3A0x1e7ff0811c66662d!2z2KzYp9mF2LnYqSDYs9mI2YPYpw!5e0!3m2!1sar!2s!4v1733423808349!5m2!1sar!2s"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

const FAQsSection = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-2 lg:space-y-10" id="faqs">
      <Paragraph title="FAQs" />
      <div className="space-y-2 lg:space-y-5">
        {data.faqs.map((faq) => (
          <div
            key={faq.id}
            className={`p-2 lg:p-5 rounded-lg border-[1px] ${
              openFaq === faq.id
                ? "border-transparent bg-[#F0F5FF]"
                : "border-[#BBBBBB]"
            } font-bold text-[20px] lg:text-[24px]`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] lg:text-[24px]">Question {faq.id}</h3>
              <Image
                src={
                  openFaq === faq.id
                    ? "images/close.svg"
                    : "images/arrow-right.svg"
                }
                alt={openFaq === faq.id ? "close icon" : "arrow icon"}
                width={24}
                height={24}
                className="hover:cursor-pointer rotate-90"
                onClick={() => toggleFaq(faq.id)}
              />
            </div>
            {openFaq === faq.id && (
              <p className="mt-2 lg:mt-5 text-[12px] lg:text-[24px] font-normal">
                {faq.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MissionAbout = () => (
  <section className="flex flex-col lg:flex-row container">
    <Sidebar title="Mission & Vision" links={data.links} />
    <div className="space-y-10 lg:space-y-[128px] py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] mx-auto text-sm lg:text-2xl font-normal container">
      <MissionSection />
      <HistorySection />
      <TeamSection />
      <PartnersSection />
      <FAQsSection />
    </div>
  </section>
);

export default MissionAbout;
