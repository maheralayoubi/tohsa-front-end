import React from "react";
import { notFound } from "next/navigation";

// data
import newsData from "@/DB/news.json"

// sections
import NewsHero from "./sections/NewsHero";
import Footer from "@/global-components/Footer";
import Overview from "./sections/Overview";

interface NewsPage {
    id: string;
}

const Index: React.FC<NewsPage> = ({ id }) => {

    const data = newsData.find((item) => {
        return item.id === id
    })

    if (!data) {
        notFound()
    }

    return (
        <main>
            <NewsHero image={data?.image} title={data?.title} />
            <Overview data={data} />
            <Footer />
        </main>
    );
};

export default Index; 