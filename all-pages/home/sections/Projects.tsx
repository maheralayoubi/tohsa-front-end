import Link from "next/link";

// data
import projectsData from "@/DB/projects.json";

// copmponents
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";



const Projects = () => {
  return (
    <section className="relative text-base lg:text-base font-normal px-5 lg:px-32 py-10 lg:py-32 space-y-10">
      <div className="absolute -bottom-10 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-transparent to-white -z-10"></div>
      <Image src="/images/images_downloads_hex.png" alt="hexagon" fill className=" object-cover absolute -z-20" />
      <div className="absolute top-0 left-0 flex w-full h-full -z-20 overflow-hidden">
        <span className="blur1"></span>
        <span className="blur2"></span>
      </div>
      <h2 className="text-[#57369E] font-poppins font-bold text-[16px] lg:text-[32px] text-left z-30 mt-[20px] lg:mt-0">
        Glycan Profile Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-[100%] gap-10">
        {projectsData.map(item => (
          <Link href={`/projects/${item?.id}`} key={item.id}>
            <ProjectCard image={item?.image} title={item?.title} />
          </Link>
        ))}
      </div>

      <Link href="/projects" className="flex items-center">
        <span className="mx-auto py-3 px-8 text-[#57369E] border border-[#57369E] hover:bg-[#00A7D3] hover:text-white hover:border-[#00A7D3] transition-colors duration-500">
          View All Projects
        </span>
      </Link>
    </section>
  );
};

export default Projects;

