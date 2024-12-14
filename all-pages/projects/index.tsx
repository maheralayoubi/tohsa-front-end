import React from "react";
import Link from "next/link";
// data
import projectsData from "@/DB/projects.json";

// copmponents
import ProjectCard from "../home/sections/components/ProjectCard";

//sections 
import Footer from "@/global-components/Footer";
import Image from "next/image";


const Index: React.FC = () => {
    return (
        <main>
            <section className="relative py-10 mx-auto px-5 lg:px-32 space-y-5 lg:space-y-10">
                <Image src="/images/hexagonBg.png" fill alt="hexagon" unoptimized className="-z-10 object-cover" />
                <h1 className="text-[#57369E] font-poppins font-bold text-[20px] lg:text-[32px] text-left z-30 mt-[20px] lg:mt-0">
                    Glycan Profile Project
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-[100%] gap-10">
                    {projectsData.map(item => (
                        <Link href={`/projects/${item?.id}`} key={item.id}>
                            <ProjectCard image={item?.image} title={item?.title} />
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Index;

