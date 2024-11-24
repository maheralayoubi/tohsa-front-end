import type { Metadata } from "next";
import Content from "@/all-pages/content";

export const metadata: Metadata = {
    title: "Tohsa",
};

interface IContentPage {
    params: Promise<{
        id: string;
    }>;
}


export default async function ContentPage({ params }: IContentPage) {

    const { id } = await params

    return (
        <>
            <Content id={id} />
        </>
    );
}