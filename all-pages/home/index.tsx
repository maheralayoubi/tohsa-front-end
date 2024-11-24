import React from "react";

//sections
import Hero from "./sections/Hero";
import SideBar from "./sections/SideBar";
import News from "./sections/News";

const Index: React.FC = () => {
    return (
        <div className="flex items-center justify-between">
            <SideBar />
            <div className="container text-center">
                <Hero />
            </div>
            <News />
        </div>
    );
};

export default Index;