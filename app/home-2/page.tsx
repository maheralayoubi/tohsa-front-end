import type { Metadata } from "next";

// pages
import Home2 from "@/all-pages/home-2"

// metadata
export const metadata: Metadata = {
    title: "Home 2",
    description: "Home 2 description"
};

export default async function Home2Page() {
    return <Home2 />;
}