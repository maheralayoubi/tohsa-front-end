import type { Metadata } from "next";

// pages
import Content from "@/all-pages/content";

// metadata
export const metadata: Metadata = {
    title: "Content",
    description: "content description"
};

interface IContentPage {
    params: Promise<{
        id: string;
    }>;
}

export default async function ContentPage({ params }: IContentPage) {
    const { id } = await params
    return <Content id={id} />;
}