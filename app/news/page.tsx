import type { Metadata } from "next";
import ALLNews from "@/all-pages/allNews"

export const metadata: Metadata = {
    title: "Tohsa",
};


export default async function NewsPage() {

    return (
        <>
            <ALLNews />
        </>
    );
}