import React from "react";

// sections
import Footer from "@/global-components/Footer";

const Index: React.FC = () => {
    return (
        <main>
            <section className="flex items-center justify-center h-[calc(100vh-80px)] text-5xl">
                All News
            </section>
            <Footer />
        </main>
    );
};

export default Index;

