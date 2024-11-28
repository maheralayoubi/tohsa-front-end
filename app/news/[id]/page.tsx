import type { Metadata } from "next";
import News from "@/all-pages/allNews/oneNews";
import Footer from "@/global-components/Footer";

export const metadata: Metadata = {
    title: "Tohsa",
};

interface IOneNewsPage {
    params: Promise<{
        id: string;
    }>;
}


export default async function UpdatesPage({ params }: IOneNewsPage) {

    const { id } = await params

    return (
        <>
            <News id={id} />
            <Footer />
        </>
    );
}