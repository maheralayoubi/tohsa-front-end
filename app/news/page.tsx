import type { Metadata } from "next";
import ALLNews from "@/all-pages/allNews"

export const metadata: Metadata = {
    title: "All News",
    description: "all news description"
};

export default async function NewsPage() {
    return <ALLNews />;
}