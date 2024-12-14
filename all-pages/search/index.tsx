
"use client"

import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

// data
import searchData from "./data/search.json"

// sections
import Footer from "@/global-components/Footer";
import ReadMoreBtn from "@/global-components/ReadMoreBtn";
import Image from "next/image";
import { SearchInput } from "@/global-components/SearchBtn";
import Link from "next/link";

interface CheckType {
    allTypes: boolean;
    article: boolean;
    studyMaterial: boolean;
    research: boolean;
    dataRecourses: boolean;
}

interface CheckTime {
    allTimes: boolean;
    pastHour: boolean;
    pastDay: boolean;
    pastWeek: boolean;
    pastMonth: boolean;
    pastYear: boolean;
}

interface FilteredData {
    article?: typeof searchData.article;
    studyMaterial?: typeof searchData.studyMaterial;
    research?: typeof searchData.research;
    dataRecourses?: typeof searchData.dataRecourses;
}

const Index: React.FC = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const [displayFilterNav, setDisplayFilterNav] = useState<boolean>(false);
    const [searchLengthData, setSearchLengthData] = useState<number>(0);
    const [filteredData, setFilteredData] = useState<FilteredData>({})

    const toggleFilterNav = () => setDisplayFilterNav(prev => !prev)

    const [checkedTypes, setCheckedTypes] = useState<CheckType>({
        allTypes: true,
        article: true,
        studyMaterial: true,
        research: true,
        dataRecourses: true
    });

    const [checkedTimes, setCheckedTimes] = useState<CheckTime>({
        allTimes: true,
        pastHour: true,
        pastDay: true,
        pastWeek: true,
        pastMonth: true,
        pastYear: true,
    });


    const handleCheckTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setCheckedTypes(prevState => {
            const newState = { ...prevState };

            if (name === 'allTypes') {
                Object.keys(newState).forEach(key => {
                    newState[key as keyof CheckType] = checked;
                });
            } else {
                newState[name as keyof CheckType] = checked;

                // If any individual checkbox is unchecked, uncheck 'All'
                newState.allTypes = Object.values(newState).every(value => value === true);

                newState.allTypes = Object.values(newState).slice(1).every((value) =>
                    value === true
                );

            }

            return newState;
        });
    };

    const handleCheckTimes = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setCheckedTimes(prevState => {
            const newState = { ...prevState };

            if (name === 'allTimes') {
                Object.keys(newState).forEach(key => {
                    newState[key as keyof CheckTime] = checked;
                });
            } else {
                newState[name as keyof CheckTime] = checked;

                // If any individual checkbox is unchecked, uncheck 'All'
                newState.allTimes = Object.values(newState).every(value => value === true);

                newState.allTimes = Object.values(newState).slice(1).every((value) =>
                    value === true
                );

            }

            return newState;
        });
    };

    useEffect(() => {
        const filteredData: FilteredData = {};
        let count = 0

        if (checkedTypes.article) {
            filteredData.article = searchData.article;
            count += searchData.article.length
        }
        if (checkedTypes.studyMaterial) {
            filteredData.studyMaterial = searchData.studyMaterial
            count += searchData.studyMaterial.length

        }
        if (checkedTypes.research) {
            filteredData.research = searchData.research
            count += searchData.research.length

        }
        if (checkedTypes.dataRecourses) {
            filteredData.dataRecourses = searchData.dataRecourses
            count += searchData.dataRecourses.length

        }

        setFilteredData(filteredData);
        setSearchLengthData(count)
    }, [checkedTypes]);


    return (
        <main>

            <div className="w-full flex lg:hidden items-center justify-between h-14 border-b border-b-[#BBBBBB] px-4 sticky top-14 bg-white z-30">
                {displayFilterNav ?
                    <Image onClick={toggleFilterNav} src='/images/close.svg' className="cursor-pointer" alt="arrow-left" width={24} height={24} />
                    :
                    <Link href={"/"}>
                        <Image src='/images/arrow-left.svg' alt="arrow-left" width={24} height={24} />
                    </Link>
                }
                <span className="text-base font-bold">{!displayFilterNav ? "Search" : "Filter Your Search"}</span>
                <div className="w-6 h-6 relative">
                    {!displayFilterNav && <Image onClick={toggleFilterNav} src='/images/filter.svg' fill alt="filter" className="cursor-pointer" />}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center text-[#111118]">

                <section className={`${!displayFilterNav && "hidden"} lg:block h-screen  lg:h-full fixed lg:sticky top-28 lg:top-20 w-full z-30 lg:w-[300px] p-5 space-y-5 text-sm font-normal bg-white`}>
                    {/* By Type */}
                    <div className="space-y-5 p-5">
                        <h3 className="text-xl font-bold">By Type</h3>
                        <div className="space-y-2">
                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="allTypes" id="allTypes" checked={checkedTypes.allTypes} onChange={handleCheckTypes} />
                                <label className="cursor-pointer" htmlFor="allTypes">All</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="article" id="article" checked={checkedTypes.article} onChange={handleCheckTypes} />
                                <label className="cursor-pointer" htmlFor="article">Article</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="studyMaterial" id="studyMaterial" checked={checkedTypes.studyMaterial} onChange={handleCheckTypes} />
                                <label className="cursor-pointer" htmlFor="studyMaterial">Study Material</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="research" id="research" checked={checkedTypes.research} onChange={handleCheckTypes} />
                                <label className="cursor-pointer" htmlFor="research">Research</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="dataRecourses" id="dataRecourses" checked={checkedTypes.dataRecourses} onChange={handleCheckTypes} />
                                <label className="cursor-pointer" htmlFor="dataRecourses">Data Recourses</label>
                            </div>
                        </div>
                    </div>

                    {/* By Author */}
                    <div className="space-y-5 p-5">
                        <h3 className="text-xl font-bold">By Author</h3>
                        <input type="text" className="border border-[#BBBBBB] w-full rounded-sm p-2 outline-none" placeholder="Search Author" />
                    </div>

                    {/* By Time */}
                    <div className="space-y-5 p-5">
                        <h3 className="text-xl font-bold">By Time</h3>
                        <div className="space-y-2">
                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="allTimes" id="allTimes" checked={checkedTimes.allTimes} onChange={handleCheckTimes} />
                                <label className="cursor-pointer" htmlFor="allTimes">All</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="pastHour" id="pastHour" checked={checkedTimes.pastHour} onChange={handleCheckTimes} />
                                <label className="cursor-pointer" htmlFor="pastHour">Past Hour</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="pastDay" id="pastDay" checked={checkedTimes.pastDay} onChange={handleCheckTimes} />
                                <label className="cursor-pointer" htmlFor="pastDay">Past Day</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="pastWeek" id="pastWeek" checked={checkedTimes.pastWeek} onChange={handleCheckTimes} />
                                <label className="cursor-pointer" htmlFor="pastWeek">Past Week</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="pastMonth" id="pastMonth" checked={checkedTimes.pastMonth} onChange={handleCheckTimes} />
                                <label className="cursor-pointer" htmlFor="pastMonth">Past Month</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" className="cursor-pointer accent-[#57369E]" name="pastYear" id="pastYear" checked={checkedTimes.pastYear} onChange={handleCheckTimes} />
                                <label className="cursor-pointer" htmlFor="pastYear">Past Year</label>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex-1 w-full flex items-start justify-center text-xs lg:text-2xl font-normal px-5">
                    <div className=" w-full max-w-[920px] space-y-5 my-5 lg:space-y-10 lg:my-10">
                        <SearchInput />

                        <p>{searchLengthData} results found for <q className="font-bold">{query}</q> </p>

                        {/* studyMaterial */}
                        {filteredData?.studyMaterial &&
                            <div className="space-y-5 lg:space-y-10">
                                <h2 className="text-base lg:text-[40px] font-bold">Study Materials</h2>
                                {
                                    filteredData?.studyMaterial?.map(item =>
                                        <div key={item?.id} className="space-y-2 lg:space-y-5">
                                            <h3 className="text-base lg:text-[32px] font-bold">{item?.question}</h3>
                                            <p>{item?.content}</p>
                                            <span className="block text-right">
                                                <ReadMoreBtn content="See More" href={item?.href} />
                                            </span>
                                        </div>
                                    )
                                }

                            </div>
                        }

                        <hr className="border-[#484848]" />

                        {/* research */}
                        {filteredData?.research &&
                            <div className="space-y-5 lg:space-y-10">
                                <h2 className="text-base lg:text-[40px] font-bold">Researches</h2>

                                {
                                    filteredData?.research?.map(item =>
                                        <div key={item?.id} className="flex flex-col lg:flex-row items-start justify-center gap-2 lg:gap-5">
                                            <div className="relative w-full aspect-video lg:w-[330px] lg:h-[220px] ">
                                                <Image src={item?.image} alt={item.title} fill className="rounded-lg object-cover" />
                                            </div>

                                            <div className="flex-1 w-full space-y-2 lg:space-y-5">
                                                <h3 className="text-base lg:text-[32px] font-bold">{item?.title}</h3>
                                                <p className=" line-clamp-3">{item?.content}</p>
                                                <span className="block text-right">
                                                    <ReadMoreBtn content="See More" href={item?.href} />
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        }

                        <hr className="border-[#484848]" />

                        {/* dataRecourses */}
                        {filteredData?.dataRecourses &&
                            <div className="space-y-5 lg:space-y-10">
                                <h2 className="text-base lg:text-[40px] font-bold">Data Resources</h2>
                                {
                                    filteredData?.dataRecourses?.map(item =>
                                        <div key={item?.id} className="space-y-2 lg:space-y-5">
                                            <h3 className="text-base lg:text-[32px] font-bold">{item?.title}</h3>
                                            <p>{item?.content}</p>
                                            <span className="block text-right">
                                                <ReadMoreBtn content="See More" href={item?.href} />
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                        }

                    </div>
                </section>

            </div>

            <Footer />
        </main>
    )
};

export default Index;
