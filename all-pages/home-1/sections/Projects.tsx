import Image from "next/image";
import projectsData from "@/DB/projects.json";
import Link from "next/link";
import ReadMoreBtn from "@/global-components/ReadMoreBtn";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap px-[20px] lg:px-[64px] py-[40px] lg:py-[128px] 2xl:space-x-[40px] gap-5">
      <div className="relative overflow-hidden max-w-[700px] w-full aspect-square lg:h-[570px] rounded-lg flex">
        <Image
          src="/images/media/nn5.png"
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
