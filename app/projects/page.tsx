import type { Metadata } from "next";
import Projects from "@/all-pages/projects"

export const metadata: Metadata = {
    title: "Tohsa",
};


export default async function UpdatesPage() {

    return (
        <>
            <Projects />
        </>
    );
}