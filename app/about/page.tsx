import type { Metadata } from "next";

// pages
import About from "@/all-pages/about"

// metadata
export const metadata: Metadata = {
    title: "About",
    description: "about description"
};

export default async function AboutPage() {
    return <About />;
}