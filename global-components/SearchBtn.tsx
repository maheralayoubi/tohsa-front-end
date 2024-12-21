"use client"
import Link from "next/link";
import React, { useState } from "react";


const SearchBtn = () => {
    const [query, setQuery] = useState('')

    return (
        <div className="flex items-center justify-end lg:justify-start gap-2 flex-1 lg:mx-10  mr-1">
            <input type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder="Search" className="border h-10 border-[#BBBBBB] p-1 outline-none w-full max-w-[320px] hidden lg:block" />
            <Link
                href={`/search?q=${query}`}
                onClick={() => setQuery("")}
                className="p-2 lg:bg-[#57369E] lg:hover:bg-[#00A7D3] transition-colors duration-500"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" className=" stroke-black lg:stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 22L20 20" className=" stroke-black lg:stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    )
};

export default SearchBtn;

