import type { Metadata } from "next";

// pages
import Search from "@/all-pages/search"

// metadata
export const metadata: Metadata = {
    title: "search",
    description: "search description"
};

export default async function SearchPage() {
    return <Search />;
}