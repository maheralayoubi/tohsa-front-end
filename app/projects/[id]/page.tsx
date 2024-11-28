import type { Metadata } from "next";

// page
import Project from '@/all-pages/projects/project'

// metadata
export const metadata: Metadata = {
    title: "project",
    description: "project description"
};

interface IProjectsPage {
    params: Promise<{
        id: string;
    }>;
}

export default async function UpdatesPage({ params }: IProjectsPage) {
    const { id } = await params
    return <Project id={id} />;
}