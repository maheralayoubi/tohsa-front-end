import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { useState } from "react";

interface IPartnersSectionProps {
  partners: string;
  partnerLocations: {
    id: number;
    name: string;
    iframeSrc: string;
    imageSrc: string;
  }[];
}

const PartnersSection = ({
  partners,
  partnerLocations,
}: IPartnersSectionProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    partnerLocations[0].iframeSrc
  );

  return (
    <div id="partners-&-collaborators">
      {/* Section Title */}
      <Paragraph title="Partners & Collaborators" content={partners} />

      {/* Swiper Wrapper with Overlays */}
      <div className="relative mt-2 lg:mt-[40px]">
        {/* Swiper Component */}
        <Swiper
          spaceBetween={5}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          navigation
          mousewheel
          keyboard
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper2 mt-2 lg:mt-[40px]" // Changed to mySwiper2
        >
          {/* Left Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-white z-10 hidden left-overlay"></div>
          {partnerLocations.map((partner) => (
            <SwiperSlide
              key={partner.id}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => setSelectedLocation(partner.iframeSrc)} // Update iframe on click
            >
              <Image
                src={partner.imageSrc}
                alt={partner.name}
                height={60}
                width={240}
                className="object-contain max-h-[60px] lg:max-h-[120px] w-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
          {/* Right Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-white z-10 hidden left-overlay"></div>
        </Swiper>
      </div>

      {/* Google Map Iframe */}
      <div className="w-[100%] h-[300px] lg:h-[460px] mt-2 lg:mt-[40px]">
        <iframe
          src={selectedLocation}
          width="100%"
          height="100%"
          loading="lazy"
          title="Partner Location Map"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PartnersSection;
