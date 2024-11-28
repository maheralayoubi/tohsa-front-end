import Image from "next/image";
import projectsData from "@/DB/projects.json"
import Link from "next/link";


const Projects = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap px-[20px] lg:px-[64px] py-[40px] lg:py-[128px] xl:space-x-[40px] gap-5">
      <div className="relative overflow-hidden w-full xl:w-[546px] h-[210px] lg:h-[570px] rounded-lg flex">
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
          {projectsData.map((project, index) => (
            <Link href={`/projects/${project?.id}`} key={index}>
              <div className="flex space-x-[20px] justify-between">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  width={210}
                  height={140}
                  className="w-[120px] h-[80px] lg:h-[140px] lg:w-[210px]"
                />
                <h2 className="font-poppins text-[14px] lg:text-[20px] font-bold text-left flex items-center flex-1">
                  {project?.title}
                </h2>
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px]"
                />
              </div>
            </Link>
          ))}
        </div>

        <Link href="/projects">
          <div className="flex text-[#57369E] font-poppins text-[16px] items-center justify-end cursor-pointer space-x-1 hover:text-blue-500 transition-all">
            <p>View All Projects</p>
            <Image
              src="/images/arrow-right-see-more.svg"
              alt="see more"
              width={24}
              height={24}
            />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Projects;
