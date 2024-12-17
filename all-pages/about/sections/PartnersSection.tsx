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
  partnerLocations: { id: number; name: string; iframeSrc: string }[];
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

      {/* Swiper Component */}
      <Swiper
        spaceBetween={20} // Default spacing
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Medium screens
          1280: { slidesPerView: 4, spaceBetween: 40 }, // Large screens
        }}
        navigation
        mousewheel
        keyboard
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper mt-2 lg:mt-[40px]"
      >
        {partnerLocations.map((partner, index) => (
          <SwiperSlide
            key={partner.id}
            className="flex justify-center items-center cursor-pointer"
            onClick={() => setSelectedLocation(partner.iframeSrc)} // Update iframe on click
          >
            <Image
              src={`/images/footer${index + 1}.png`}
              alt={partner.name}
              height={60}
              width={240}
              className="object-contain max-h-[60px] lg:max-h-[120px] w-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
