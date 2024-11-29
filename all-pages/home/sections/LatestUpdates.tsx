"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import newsData from "@/all-pages/allNews/oneNews/data/news.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const NewsCard = ({ data }: { data: News }) => {
  return (
    <Link href={`/news/${data?.id}`}>
      <div className="flex flex-col lg:flex-row items-start justify-between p-5 gap-5 bg-[#F0F5FF] rounded-lg h-[300px] lg:h-[246px]">
        <div className="relative w-full lg:w-[262px] h-[196px]">
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className=" object-cover"
          />
        </div>
        <div className="flex-1 space-y-5 text-left relative h-full">
          <h2 className="line-clamp-1 lg:line-clamp-2 font-bold lg:text-xl">
            {data.title}
          </h2>
          <p className="line-clamp-1 lg:line-clamp-3">{data.content1}</p>
          <span className="text-[#57369E] absolute right-5 bottom-0 hidden lg:block hover:text-[#00A7D3]">
            See More
          </span>
        </div>
      </div>
    </Link>
  );
};

const LatestUpdates = () => {
  const [imgSrc, setImgSrc] = useState("/images/arrow-right-colored.svg");
  return (
    <section className="text-xs lg:text-base font-normal px-5 py-10 lg:py-32 space-y-10">
      <div className="w-full flex items-center justify-between lg:px-16">
        <h2 className="text-[#484848] font-bold text-3xl">Latest Updates</h2>
        <Link
          href="/news"
          className="flex items-center justify-center gap-1 text-[#57369E]"
          onMouseEnter={() => setImgSrc("/images/arrow-right-hover.svg")}
          onMouseLeave={() => setImgSrc("/images/arrow-right-colored.svg")}
        >
          <span className="hover:text-[#00A7D3]">View All News</span>
          <Image src={imgSrc} alt="arrow" width={24} height={24} />
        </Link>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1400: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {newsData.map((item) => (
          <SwiperSlide key={item.id}>
            <NewsCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestUpdates;
