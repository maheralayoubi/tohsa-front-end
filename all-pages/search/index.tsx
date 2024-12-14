
"use client"

import React, { useState } from "react";

// data
import searchData from "./data/search.json"

// sections
import Footer from "@/global-components/Footer";
import FilterSideBar from "./sections/FilterSideBar";
import FilterMobileNav from "./sections/FilterMobileNav";
import FilteredData from "./sections/FilteredData";

interface FilteredDataType {
    article?: typeof searchData.article;
    studyMaterial?: typeof searchData.studyMaterial;
    research?: typeof searchData.research;
    dataRecourses?: typeof searchData.dataRecourses;
}

const Index: React.FC = () => {

    const [displayFilterNav, setDisplayFilterNav] = useState<boolean>(false);
    const [searchLengthData, setSearchLengthData] = useState<number>(0);
    const [filteredData, setFilteredData] = useState<FilteredDataType>({})

    return (
        <main>

            <FilterMobileNav setDisplayFilterNav={setDisplayFilterNav} displayFilterNav={displayFilterNav} />
            <div className="flex flex-col lg:flex-row items-start justify-center text-[#111118]">
                <FilterSideBar displayFilterNav={displayFilterNav} setFilteredData={setFilteredData} setSearchLengthData={setSearchLengthData} />
                <FilteredData searchLengthData={searchLengthData} filteredData={filteredData} />
            </div>
            <Footer />
        </main>
    )
};

export default Index;
