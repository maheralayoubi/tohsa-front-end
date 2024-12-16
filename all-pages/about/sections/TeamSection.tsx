import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

interface ITeamSectionProps {
  team: {
    description: string;
    teamMembers: {
      id: string;
      name: string;
      position: string;
      description: string;
      image: string;
    }[];
  };
}

const TeamSection = ({ team }: ITeamSectionProps) => {
  return (
    <div id="team">
      {/* Title and Description */}
      <Paragraph title="Team" content={team.description} />

      {/* Swiper Section */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2} // Default for small screens
        breakpoints={{
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 1.95 },
          1500: { slidesPerView: 2, spaceBetween: 40 },
        }}
        navigation
        mousewheel
        keyboard
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper mt-8 lg:mt-16"
      >
        {team.teamMembers.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#F0F5FF] p-4 md:p-6 lg:p-8 rounded-lg lg:rounded-2xl font-poppins flex flex-col items-center">
              {/* Team Member Image */}
              <div className="w-full h-[200px] md:h-[240px] lg:h-[280px] rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={352}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Team Member Details */}
              <div className="mt-4 lg:mt-6 text-center space-y-2 lg:space-y-3">
                <h3 className="font-semibold lg:font-bold text-sm md:text-lg lg:text-2xl text-[#111118]">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-[#111118]">
                  {item.position}
                </p>
                <p className="text-xs md:text-sm lg:text-base text-[#484848]">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
