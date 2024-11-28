import type { Metadata } from "next";

// page
import Projects from "@/all-pages/projects"

// metadata
export const metadata: Metadata = {
    title: "All Projects",
    description: "All Projects description"
};

export default async function UpdatesPage() {
    return <Projects />;
}