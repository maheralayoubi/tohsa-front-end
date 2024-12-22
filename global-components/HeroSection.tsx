import Image from "next/image";

interface IHeroSectionProps {
  title: string;
  imageSource: string;
}

const HeroSection = ({ title, imageSource }: IHeroSectionProps) => {
  return (
    <section className="relative h-[280px] lg:h-[620px]">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src={imageSource}
          alt={`${title} Hero`}
          fill
          priority
          className="object-cover"
        />
        <div className="w-[84px] max-w-[400px] absolute left-[10%] top-[30%]">
          <h1 className="text-[24px] md:text-[40px] lg:text-[80px] text-white font-poppins font-bold text-wrap">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
