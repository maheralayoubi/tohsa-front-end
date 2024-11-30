"use client"

import Link from "next/link";
import React from "react";
import newsData from "@/DB/news.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

// components
import NewsCard from "./components/NewsCard";

const LatestUpdates = () => {
  return (
    <section className="text-base lg:text-base font-normal px-5 py-10 lg:py-32 space-y-10">

      <div className="w-full flex items-center justify-between lg:px-16">
        <h2 className="text-[#484848] font-bold lg:text-3xl">Latest Updates</h2>
        <Link href="/news" className="flex items-center justify-center gap-1 text-[#57369E] hover:text-[#00A7D3] transition-colors duration-500">
          <span>View All News</span>
          <span className="text-3xl">&#129106;</span>
        </Link>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
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
        className="mySwiper"
      >
        {newsData.map(item =>
          <SwiperSlide key={item.id}>
            <NewsCard data={item} />
          </SwiperSlide>
        )}
      </Swiper>

    </section>
  )
};

export default LatestUpdates;


