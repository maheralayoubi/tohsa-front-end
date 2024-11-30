import type { Metadata } from "next";

// page
import News from "@/all-pages/allNews/oneNews";

// metadata
export const metadata: Metadata = {
    title: "One News",
    description: "one news description"
};

interface IOneNewsPage {
    params: Promise<{
        id: string;
    }>;
}

export default async function UpdatesPage({ params }: IOneNewsPage) {
    const { id } = await params
    return <News id={id} />;
}