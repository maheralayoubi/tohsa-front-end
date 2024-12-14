import React from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

// data
import searchStaticData from "../data/searschStaticData.json"
import searchData from "../data/search.json"

// components
import { SearchInput } from "@/global-components/SearchBtn";
import CardData from "./components/CardData";

interface FilteredDataP {
    article?: typeof searchData.article;
    studyMaterial?: typeof searchData.studyMaterial;
    research?: typeof searchData.research;
    dataRecourses?: typeof searchData.dataRecourses;
}

interface IFilteredData {
    searchLengthData: number
    filteredData: FilteredDataP
}

const FilteredData: React.FC<IFilteredData> = ({ searchLengthData, filteredData }) => {

    const searchParams = useSearchParams()
    const query = searchParams.get('q')

    return (
        <section className="flex-1 w-full flex items-start justify-center text-xs lg:text-2xl font-normal px-5">
            <div className=" w-full max-w-[920px] space-y-5 my-5 lg:space-y-10 lg:my-10">
                <SearchInput />

                <p>{searchLengthData} results found for <q className="font-bold">{query}</q> </p>

                {/* studyMaterial */}
                {filteredData?.studyMaterial &&
                    <div className="space-y-5 lg:space-y-10">
                        <h2 className="text-base lg:text-[40px] font-bold">{searchStaticData.studyMaterials}</h2>
                        {
                            filteredData?.studyMaterial?.map(item =>
                                <CardData key={item.id} content={item.content} href={item.href} title={item.question} />
                            )
                        }

                    </div>
                }

                <hr className="border-[#484848]" />

                {/* research */}
                {filteredData?.research &&
                    <div className="space-y-5 lg:space-y-10">
                        <h2 className="text-base lg:text-[40px] font-bold">{searchStaticData.researches}</h2>

                        {
                            filteredData?.research?.map(item =>
                                <div key={item?.id} className="flex flex-col lg:flex-row items-start justify-center gap-2 lg:gap-5">
                                    <div className="relative w-full aspect-video lg:w-[330px] lg:h-[220px] ">
                                        <Image src={item?.image} alt={item.title} fill className="rounded-lg object-cover" />
                                    </div>
                                    <CardData content={item.content} href={item.href} title={item.title} />
                                </div>
                            )
                        }

                    </div>
                }

                <hr className="border-[#484848]" />

                {/* dataRecourses */}
                {filteredData?.dataRecourses &&
                    <div className="space-y-5 lg:space-y-10">
                        <h2 className="text-base lg:text-[40px] font-bold">{searchStaticData.dataResources}</h2>
                        {
                            filteredData?.dataRecourses?.map(item =>
                                <CardData key={item.id} content={item.content} href={item.href} title={item.title} />
                            )
                        }
                    </div>
                }

            </div>
        </section>
    )
};

export default FilteredData;
