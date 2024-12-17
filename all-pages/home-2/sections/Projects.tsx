"use client"

import Link from "next/link";

// data
import projectsData from "@/DB/projects.json";

// copmponents
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";
import ReadMoreBtn from "@/global-components/ReadMoreBtn";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";


const Projects = () => {
  return (
    <section className="relative text-base lg:text-base font-normal px-5 lg:px-32 py-10 lg:py-32 space-y-10">
      <Image src="/images/hexagonBg.png" unoptimized alt="hexagon" fill className=" object-cover absolute -z-20" />
      <div className="absolute top-0 left-0 flex w-full h-full -z-20 overflow-hidden">
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[#57369E] font-poppins font-bold text-[16px] lg:text-[32px] text-left z-30 ">
          Glycan Profile Project
        </h2>
        <div className="block lg:hidden">
          <ReadMoreBtn href="/projects" content="View All" />
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper2"
      >
        {projectsData.slice(-3).reverse().map(item => (
          <SwiperSlide key={item.id}>
            <Link href={`/projects/${item?.id}`}>
              <ProjectCard image={item?.image} title={item?.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className=" hidden lg:flex items-center">
        <Link href="/projects" className="mx-auto py-3 px-8 text-[#57369E] border border-[#57369E] hover:bg-[#00A7D3] hover:text-white hover:border-[#00A7D3] transition-colors duration-500">
          View All Projects
        </Link>
      </span>
    </section>
  );
};

export default Projects;

