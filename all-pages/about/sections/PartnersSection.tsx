import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

interface IPartnersSectionProps {
  partners: string;
}

const PartnersSection = ({ partners }: IPartnersSectionProps) => {
  return (
    <div id="partners-&-collaborators">
      <Paragraph title="Partners & Collaborators" content={partners} />
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
};

export default PartnersSection;
