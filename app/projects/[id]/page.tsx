import type { Metadata } from "next";
import Project from '@/all-pages/projects/project'
import Footer from "@/global-components/Footer";


export const metadata: Metadata = {
    title: "Tohsa",
};

interface IProjectsPage {
    params: Promise<{
        id: string;
    }>;
}


export default async function UpdatesPage({ params }: IProjectsPage) {

    const { id } = await params

    return (
        <>
            <Project id={id} />
            <Footer />
        </>
    );
}