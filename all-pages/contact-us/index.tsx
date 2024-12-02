import React from "react";

// data
import contactPageData from "./data/contactPageData.json"

// sections
import Footer from "@/global-components/Footer";
import ContactUsHero from "./sections/ContactHero";
import ContactUsDetails from "./sections/ContactUsDetails";

const Index: React.FC = () => {
    return (
        <main>
            <ContactUsHero image="/images/contactHero.png" title="CONTACT US" />
            <ContactUsDetails data={contactPageData} />
            <Footer />
        </main>
    )
};

export default Index;
