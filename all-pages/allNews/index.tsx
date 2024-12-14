import React from "react";

// sections
import Footer from "@/global-components/Footer";

import NewsCard from "../home/sections/components/NewsCard";

// data
import newsData from "@/DB/news.json";

const Index: React.FC = () => {
    return (
        <main>
            <section className="py-10 mx-auto px-5 lg:px-32 space-y-5 lg:space-y-10">
                <h1 className="text-[#57369E] font-poppins font-bold text-[20px] lg:text-[32px] text-left z-30 mt-[20px] lg:mt-0">
                    Latest Updates
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-10">
                    {newsData.map(item => (
                        <NewsCard key={item.id} data={item} />
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Index;

