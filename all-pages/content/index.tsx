import React from "react";
import { notFound } from "next/navigation";

// data
import blogsData from '@/DB/blogs.json'

// sections
import Footer from "@/global-components/Footer";
import ContentHero from "./sections/ContentHero";

interface IContentPage {
    id: string;
}

const Index: React.FC<IContentPage> = ({ id }) => {

    const data = blogsData.find((item) => {
        return item.id === id
    })

    if (!data) {
        notFound()
    }

    return (
        <main>
            <ContentHero data={data} />
            <Footer />
        </main>
    );
};

export default Index;

