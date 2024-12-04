import React from "react";

// sections
import Footer from "@/global-components/Footer";
import ContactUsHero from "./sections/ContactHero";
import ContactUsDetails from "./sections/ContactUsDetails";

const Index: React.FC = () => {
    return (
        <main>
            <ContactUsHero />
            <ContactUsDetails />
            <Footer />
        </main>
    )
};

export default Index;
