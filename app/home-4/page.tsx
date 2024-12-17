import type { Metadata } from "next";

// pages
import Home4 from "@/all-pages/home-4"

// metadata
export const metadata: Metadata = {
    title: "Home 4",
    description: "Home 4 description"
};

export default async function Home4Page() {
    return <Home4 />;
}