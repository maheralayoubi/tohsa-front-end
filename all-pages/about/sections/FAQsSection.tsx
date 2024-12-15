"use client";
import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";
import { useState } from "react";

interface IFAQsSectionProps {
  faqs: {
    id: string;
    content: string;
  }[];
}

const FAQsSection = ({ faqs }: IFAQsSectionProps) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-2 lg:space-y-10" id="faqs">
      <Paragraph title="FAQs" />
      <div className="space-y-2 lg:space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`p-2 md:p-3 lg:p-5 rounded-lg border-[1px] ${
              openFaq === faq.id
                ? "border-transparent bg-[#F0F5FF]"
                : "border-[#BBBBBB]"
            } font-bold text-[20px] lg:text-[24px]`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] lg:text-[24px]">Question {faq.id}</h3>
              <Image
                src={
                  openFaq === faq.id
                    ? "images/close.svg"
                    : "images/arrow-right.svg"
                }
                alt={openFaq === faq.id ? "close icon" : "arrow icon"}
                width={24}
                height={24}
                className="hover:cursor-pointer rotate-90 md:w-5 lg:w-[24px]"
                onClick={() => toggleFaq(faq.id)}
              />
            </div>
            {openFaq === faq.id && (
              <p className="mt-2 lg:mt-5 text-[12px] lg:text-[24px] font-normal">
                {faq.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsSection;
