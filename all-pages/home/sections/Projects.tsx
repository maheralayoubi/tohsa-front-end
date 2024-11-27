import Image from "next/image";
import data from "../data/projectsData.json";

interface IProjectsProps {}

const Projects = ({}: IProjectsProps) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap px-[20px] lg:px-[64px] py-[40px] lg:py-[128px] lg:space-x-[40px]">
      <div className="overflow-hidden w-full lg:w-[546px] h-[210px] lg:h-[570px] rounded-lg flex">
        <Image
          src="/images/nn5.png"
          width={1000}
          height={1000}
          alt="nn5"
          className=" w-full h-[265px] lg:h-full"
        />
      </div>
      <div>
        <h2 className="text-[#484848] font-poppins font-bold text-[16px] lg:text-[32px] text-left mt-[20px] lg:mt-0">
          Glycan Profile Project
        </h2>
        <div className="flex flex-col space-y-[20px] my-[20px]">
          {data.map((project, index) => (
            <div key={index} className="flex space-x-[20px] justify-between">
              <Image
                src={`/images/${project.image}.png`}
                alt={project.title}
                width={210}
                height={140}
                className="w-[120px] h-[80px] lg:h-[140px] lg:w-[210px]"
              />
              <h2 className="font-poppins text-[14px] lg:text-[20px] font-bold text-left flex items-center flex-1">
                {project.title}
              </h2>
              <Image
                src="/images/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
                className="min-w-[24px] min-h-[24px]"
              />
            </div>
          ))}
        </div>
        <div className="flex text-[#57369E] font-poppins text-[16px] items-center justify-end cursor-pointer space-x-1 hover:text-blue-500 transition-all">
          <p>View All Projects</p>
          <Image
            src="/images/arrow-right-see-more.svg"
            alt="see more"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
