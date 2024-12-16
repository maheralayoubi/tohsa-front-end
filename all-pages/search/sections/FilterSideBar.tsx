
import React, { useState, useEffect } from "react";

// data
import searchData from "../data/search.json"
import searchStaticData from "../data/searschStaticData.json"

// components
import CheckBoxItem from "./components/CheckBoxItem";


interface CheckType {
    all: boolean;
    article: boolean;
    studyMaterial: boolean;
    research: boolean;
    dataRecourses: boolean;
    [key: string]: boolean;
}

interface CheckTime {
    all: boolean;
    pastHour: boolean;
    pastDay: boolean;
    pastWeek: boolean;
    pastMonth: boolean;
    pastYear: boolean;
    [key: string]: boolean;
}

interface FilteredData {
    article?: typeof searchData.article;
    studyMaterial?: typeof searchData.studyMaterial;
    research?: typeof searchData.research;
    dataRecourses?: typeof searchData.dataRecourses;
}

interface IFilterSideBar {
    displayFilterNav: boolean
    setFilteredData(x: FilteredData): void
    setSearchLengthData(x: number): void

}


const FilterSideBar: React.FC<IFilterSideBar> = ({ displayFilterNav, setFilteredData, setSearchLengthData }) => {

    const [checkedTypes, setCheckedTypes] = useState<CheckType>({
        all: true,
        article: true,
        studyMaterial: true,
        research: true,
        dataRecourses: true
    });

    const [checkedTimes, setCheckedTimes] = useState<CheckTime>({
        all: true,
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

            if (name === 'all') {
                Object.keys(newState).forEach(key => {
                    newState[key as keyof CheckType] = checked;
                });
            } else {
                newState[name as keyof CheckType] = checked;

                // If any individual checkbox is unchecked, uncheck 'All'
                newState.all = Object.values(newState).every(value => value === true);

                newState.all = Object.values(newState).slice(1).every((value) =>
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

            if (name === 'all') {
                Object.keys(newState).forEach(key => {
                    newState[key as keyof CheckTime] = checked;
                });
            } else {
                newState[name as keyof CheckTime] = checked;

                // If any individual checkbox is unchecked, uncheck 'All'
                newState.all = Object.values(newState).every(value => value === true);

                newState.all = Object.values(newState).slice(1).every((value) =>
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
        console.log("sss")
    }, [checkedTypes, setFilteredData, setSearchLengthData]);

    return (
        <section className={`${!displayFilterNav && "hidden"} lg:block h-screen  lg:h-full fixed lg:sticky top-28 lg:top-20 w-full z-30 lg:w-[300px] p-5 space-y-5 text-sm font-normal bg-white`}>
            {/* By Type */}
            <div className="space-y-5 p-5">
                <h3 className="text-xl font-bold">{searchStaticData.byType}</h3>
                <div className="space-y-2">
                    {searchStaticData.filterByTypeList.map(item =>
                        <CheckBoxItem key={item.id} name={item.name} label={item.label} onChange={handleCheckTypes} checked={checkedTypes[item.name]} />
                    )}
                </div>
            </div>

            {/* By Author */}
            <div className="space-y-5 p-5">
                <h3 className="text-xl font-bold">{searchStaticData.byAuth}</h3>
                <input type="text" className="border border-[#BBBBBB] w-full rounded-sm p-2 outline-none" placeholder={searchStaticData.placeholderByAuth} />
            </div>

            {/* By Time */}
            <div className="space-y-5 p-5">
                <h3 className="text-xl font-bold">{searchStaticData.byTime}</h3>
                <div className="space-y-2">
                    {searchStaticData.filterByTimeList.map(item =>
                        <CheckBoxItem key={item.id} name={item.name} label={item.label} onChange={handleCheckTimes} checked={checkedTimes[item.name]} />
                    )}
                </div>
            </div>
        </section>
    )
};

export default FilterSideBar;
