import type { Metadata } from "next";

import Content from "@/all-pages/content"


export const metadata: Metadata = {
    title: "Tohsa",
};

export default function Page() {
    return (
        <>
            <Content />
        </>
    )
}
