import React from "react";
import Link from "next/link";

interface IReadMoreBtn {
    href: string,
    content: string,
    className?: string
}

const ReadMoreBtn: React.FC<IReadMoreBtn> = ({ href, content, className }) => {
    return (
        <Link href={href} className={`inline-flex items-center justify-center font-normal text-base gap-1 stroke-[#57369E] hover:stroke-[#00A7D3] text-[#57369E] hover:text-[#00A7D3] transition-colors duration-500 ${className}`}>
            <span>{content}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className=" rotate-180">
                <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.5019 12H3.67188" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    )
};

export default ReadMoreBtn;
