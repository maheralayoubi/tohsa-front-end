import Image from "next/image";
import projectsData from "@/DB/projects.json";
import Link from "next/link";
import ReadMoreBtn from "@/global-components/ReadMoreBtn";

const ProjectCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="flex space-x-[20px] justify-between group hover:bg-[#00A7D3] pr-[20px] rounded-lg transition">
      <Image
        src={image}
        alt={title}
        width={210}
        height={140}
        className="w-[120px] h-[80px] lg:h-[140px] lg:w-[210px] rounded-lg"
      />
      <h2 className="font-poppins text-[14px] lg:text-[20px] font-bold text-left flex items-center flex-1 group-hover:text-white">
        <span className=" line-clamp-3">
          {title}
        </span>
      </h2>
      <Image
        src="/images/Buttons.png"
        alt="arrow-right"
        width={24}
        height={24}
        className="max-w-[24px] max-h-[24px] self-center opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap px-[20px] lg:px-[64px] py-[40px] lg:py-[128px] 2xl:space-x-[40px] gap-5">
      <div className="relative overflow-hidden w-full h-[210px] lg:h-[570px] rounded-lg flex">
        <Image
          src="/images/nn5.png"
          alt="nn5"
          fill
          className=" w-full h-[265px] lg:h-full object-cover"
        />
      </div>
      <div className="w-full">
        <h2 className="text-[#484848] font-poppins font-bold text-[16px] lg:text-[32px] text-left mt-[20px] lg:mt-0">
          Glycan Profile Project
        </h2>
        <div className="flex flex-col space-y-[20px] my-[20px]">
          {projectsData.slice(-3).reverse().map((project, index) => (
            <Link href={`/projects/${project?.id}`} key={index}>
              <ProjectCard image={project?.image} title={project?.title} />
            </Link>
          ))}
        </div>
        <div className="text-right">
          <ReadMoreBtn href="/projects" content="View All Projects" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
