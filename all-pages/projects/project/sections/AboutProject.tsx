import React from "react";
import Image from "next/image";

import pageStaticData from "../data/pageStaticData.json"

interface IAboutProject {
  data: Project
}

const AboutProject: React.FC<IAboutProject> = ({ data }) => {
  return (
    <section className="py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] space-y-10 lg:space-y-20 mx-auto text-xs lg:text-2xl font-normal">
      <h2 className="text-base lg:text-3xl font-bold">{pageStaticData.about}</h2>
      {data?.about?.split("\n").map((item, index) =>
        <p key={index}>{item}</p>
      )}
      <div className="flex items-start justify-between gap-10 flex-col lg:flex-row">
        <div className="relative lg:h-[400px] w-full lg:w-[400px] aspect-square">
          <Image className="object-cover rounded" src={data?.subImage} alt={data?.subTitle} fill sizes="100vw 100vh" />
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-base lg:text-3xl font-bold">{pageStaticData.subtitle}</h2>
          {data?.subTitle.split("\n").map((item, index) =>
            <p key={index}>{item}</p>
          )}
        </div>
      </div>
      <p>{data?.contentEnd}</p>
    </section>
  )
};

export default AboutProject;
