import React from "react";

// data
import ontotologiesData from "./data/ontotologies.json"

// sections
import Footer from "@/global-components/Footer";
import OntotologiesHero from "./sections/OntotologiesHero";

// components
import ReadMoreBtn from "@/global-components/ReadMoreBtn";

const Index = () => {
    return (
        <main>
            <OntotologiesHero title="Ontologies" image="/images/OntotologiesHero.png" />
            <section className="py-10 lg:py-32 px-5 space-y-10 lg:space-y-20 text-[#111118] max-w-5xl mx-auto">
                {ontotologiesData?.map(item =>
                    <div key={item.id} className="space-y-5">
                        <h2 className="font-bold text-base lg:text-4xl">{item.title}</h2>
                        <p className="font-normal text-xs lg:text-2xl">{item.content}</p>
                        <div className="text-right">
                            <ReadMoreBtn href="/" content="See More" />
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </main>
    )
};

export default Index;
