import React from "react";
import Link from "next/link";

interface IReadMoreBtn {
    href: string,
    content: string,
    className?: string
}

const ReadMoreBtn: React.FC<IReadMoreBtn> = ({ href, content, className }) => {
    return (
        <Link href={href} className={`inline-flex items-center justify-center font-normal text-base gap-1 text-[#57369E] hover:text-[#00A7D3] transition-colors duration-500 ${className}`}>
            <span>{content}</span>
            <i className="text-3xl">🡒</i>
        </Link>
    )
};

export default ReadMoreBtn;
