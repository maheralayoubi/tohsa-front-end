import type { Metadata } from "next";

// page
import ALLNews from "@/all-pages/allNews"

// metadata
export const metadata: Metadata = {
    title: "All News",
    description: "all news description"
};

export default async function NewsPage() {
    return <ALLNews />;
}