import type { Metadata } from "next";

// pages
import Home1 from "@/all-pages/home-1"

// metadata
export const metadata: Metadata = {
    title: "Home 1",
    description: "Home 1 description"
};

export default async function Home1Page() {
    return <Home1 />;
}