import React from "react";
import { notFound } from "next/navigation";

// data
import projectsData from "@/DB/projects.json"

// sections
import ProjectHero from "./sections/ProjectHero";
import AboutProject from "./sections/AboutProject";
import Footer from "@/global-components/Footer";


interface IProjectsPage {
    id: string;
}

const Index: React.FC<IProjectsPage> = ({ id }) => {

    const data = projectsData.find((item) => {
        return item.id === id
    })

    if (!data) {
        notFound()
    }

    return (
        <main>
            <ProjectHero image={data?.image} title={data?.title} />
            <AboutProject data={data} />
            <Footer />
        </main>
    );
};

export default Index;