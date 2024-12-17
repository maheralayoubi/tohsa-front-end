"use client";

// data
import newsData from "@/DB/news.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

// components
import NewsCard from "./components/NewsCard";
import Link from "next/link";
import ReadMoreBtn from "@/global-components/ReadMoreBtn";

const LatestUpdates = () => {
  return (
    <section className="text-base lg:text-base font-normal px-5 lg:px-32 py-10 lg:py-32 space-y-10">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[#57369E] font-bold lg:text-3xl">Latest Updates</h2>
        <div className="block lg:hidden">
          <ReadMoreBtn href="/projects" content="View All" />
        </div>
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
        {newsData.map((item) => (
          <SwiperSlide key={item.id}>
            <NewsCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <span className=" hidden lg:flex items-center">
        <Link href="/news" className="mx-auto py-3 px-8 text-[#57369E] border border-[#57369E] hover:bg-[#00A7D3] hover:text-white hover:border-[#00A7D3] transition-colors duration-500">
          More News
        </Link>
      </span>

    </section>
  );
};

export default LatestUpdates;
