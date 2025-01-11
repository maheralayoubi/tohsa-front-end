import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Link from "next/link";

interface Contact {
  email: string;
  twitter: string;
  facebook: string;
  linkedin: string;
}

interface User {
  id: string;
  userName: string;
  image: string;
  work: string;
  shortDiscription: string;
  biography: string;
  contact: Contact;
}

interface ITeam {
  description: string;
  team: User[];
}

const TeamSection = ({ team, description }: ITeam) => {
  return (
    <div id="team">
      {/* Title and Description */}
      <Paragraph title="Team" content={description} />

      {/* Swiper Section */}
      <Swiper
        spaceBetween={8}
        slidesPerView={1.2} // Default for small screens
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1500: { slidesPerView: 2, spaceBetween: 40 },
        }}
        navigation
        mousewheel
        keyboard
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper3 mt-8 lg:mt-16"
      >
        {/* Left Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-white z-10 hidden left-overlay"></div>
        {team.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#F0F5FF] p-2 md:p-5 rounded-lg lg:rounded-2xl font-poppins flex flex-col items-center w-auto">
              {/* Team Member Image */}
              <div className="w-fit h-[200px] rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.userName}
                  width={352}
                  height={280}
                  className="object-cover h-full"
                />
              </div>

              {/* Team Member Details */}
              <Link href={`profile/${item.id}`}>
                <div className="mt-4 lg:mt-6 text-center space-y-2 lg:space-y-3">
                  <h3 className="font-semibold lg:font-bold text-sm md:text-lg lg:text-2xl text-[#111118]">
                    {item.userName}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-[#111118]">
                    {item.work}
                  </p>
                  <p className="text-xs md:text-sm lg:text-base text-[#484848]">
                    {item.shortDiscription}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
        {/* Right Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-white z-10 hidden left-overlay"></div>
      </Swiper>
    </div>
  );
};

export default TeamSection;
