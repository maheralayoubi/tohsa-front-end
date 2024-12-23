import React from "react";
import Image from "next/image";
import Link from "next/link";


interface IFilterMobileNav {
    displayFilterNav: boolean
    setDisplayFilterNav: (prev: boolean) => void;
}

const FilterMobileNav: React.FC<IFilterMobileNav> = ({ displayFilterNav, setDisplayFilterNav }) => {

    const toggleFilterNav = () => setDisplayFilterNav(!displayFilterNav);

    return (
        <div className="w-full flex lg:hidden items-center justify-between h-14 border-b border-b-[#BBBBBB] px-4 sticky top-14 bg-white z-30">
            {displayFilterNav ?
                <Image onClick={toggleFilterNav} src='/images/icons/close.svg' className="cursor-pointer" alt="arrow-left" width={24} height={24} />
                :
                <Link href={"/"}>
                    <Image src='/images/icons/arrow-left.svg' alt="arrow-left" width={24} height={24} />
                </Link>
            }
            <span className="text-base font-bold">{!displayFilterNav ? "Search" : "Filter Your Search"}</span>
            <div className="w-6 h-6 relative">
                {!displayFilterNav && <Image onClick={toggleFilterNav} src='/images/icons/filter.svg' fill alt="filter" className="cursor-pointer" />}
            </div>
        </div>
    )
};

export default FilterMobileNav;
