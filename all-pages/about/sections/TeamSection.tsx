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
      <Paragraph title="Team" content={team.description} />
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
        {team.teamMembers.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#F0F5FF] p-2 lg:p-5 rounded-lg lg:rounded-[20px] font-poppins">
              <Image
                src={item.image}
                width={352}
                height={240}
                alt={item.name}
              />
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
};

export default TeamSection;
