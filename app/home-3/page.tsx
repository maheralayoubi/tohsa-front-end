import type { Metadata } from "next";

// pages
import Home3 from "@/all-pages/home-3"

// metadata
export const metadata: Metadata = {
    title: "Home 3",
    description: "Home 3 description"
};

export default async function Home3Page() {
    return <Home3 />;
}