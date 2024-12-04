import Image from "next/image";

interface IAboutHeroProps {}

const AboutHero = ({}: IAboutHeroProps) => {
  return (
    <section className="relative h-[280px] lg:h-[620px]">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/images/about-hero.png"
          alt="About Hero"
          fill
          className="object-cover"
        />
        <div className="max-w-[400px] absolute left-[10%] top-[30%]">
          <h1 className="text-[80px] text-white font-poppins font-bold text-wrap">
            ABOUT TOHSA
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
