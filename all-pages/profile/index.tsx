import React from "react";
import { notFound } from "next/navigation";

// data
import profileData from "./data/profile.json"


// sections
import Footer from "@/global-components/Footer";
import ProfileHero from "./sections/ProfileHero";
import ProfileDetails from "./sections/ProfileDetails";

interface ProfielPage {
    id: string;
}

const Index: React.FC<ProfielPage> = ({ id }) => {

    const data = profileData.find((item) => {
        return item.id === id
    })

    if (!data) {
        notFound()
    }

    return (
        <main>
            <ProfileHero image="/images/profileHero.png" title="Profile" />
            <ProfileDetails data={data} />
            <Footer />
        </main>
    )
};

export default Index;
