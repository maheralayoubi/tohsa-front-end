import Link from "next/link";
import React from "react";
import Image from "next/image";

import footerData from "./data/footer.json"

// components
import ToTopButton from "./ToTopButton";

const Footer = () => {
  return (
    <section className="border-t border-[#484848] text-[#111118] font-normal text-xs lg:text-base p-4 lg:px-5 lg:py-10 space-y-10 flex items-center justify-center flex-col w-full">

      {/* linsk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-full justify-items-start xl:justify-items-center text-left ">

        <div className="space-y-5 flex flex-col items-start justify-start">
          {/* email */}
          <Link href={`mailto:${footerData.email.href}`}>{footerData.email.label}</Link>
          <div className="flex justify-between items-center space-x-[16px]">
            {/* twitter */}
            <Link href={footerData.twitter.href}>
              <Image src="/images/x.svg" alt="x logo" width={24} height={24} />
            </Link>
            {/* youtube */}
            <Link href={footerData.youtube.href}>
              <Image
                src="/images/youtube.svg"
                alt="youtube logo"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* links Group_1 */}
        <div className="space-y-5 flex flex-col items-start justify-start">
          {footerData.linksGroup_1.map(item =>
            <Link key={item.id} href={item.href}>{item.label}</Link>
          )}
        </div>

        {/* links Group_2 */}
        <div className=" space-y-5 flex flex-col items-start justify-start">
          {footerData.linksGroup_2.map(item =>
            <Link key={item.id} href={item.href}>{item.label}</Link>
          )}
        </div>
        <ToTopButton />
      </div>

      {/* companies */}
      <div className="flex flex-wrap items-center justify-center max-w-full gap-x-5 gap-y-10 lg:gap-x-10 lg:gap-y-20">
        <Link href="https://www.soka.ac.jp/" target="_blanck" className="relative lg:scale-100 w-[120px] h-[20px] lg:w-[270px] lg:h-[45px]">
          <Image src="/images/soka.png" alt="soka" fill />
        </Link>
        <Link href="https://igcore.thers.ac.jp/" target="_blanck" className="relative lg:scale-100 w-[110px] h-[40px] lg:w-[220px] lg:h-[80px]">
          <Image src="/images/igcore.png" alt="igcore" fill />
        </Link>
        <Link href="https://www.excells.orion.ac.jp/" target="_blanck" className="relative lg:scale-100 w-[65px] h-[40px] lg:w-[130px] lg:h-[80px]">
          <Image src="/images/excells.png" alt="excells" fill />
        </Link>
        <Link href="https://www.thers.ac.jp/" target="_blanck" className="relative lg:scale-100 w-[120px] h-[18px]  lg:w-[373px] lg:h-[58px]">
          <Image src="/images/thers.png" alt="thers" fill />
        </Link>
        <Link href="https://www.nins.jp/" target="_blanck" className="relative lg:scale-100 w-[120px] h-[18px] lg:w-[300px] lg:h-[44px]">
          <Image src="/images/nins.png" alt="nins" fill />
        </Link>
        <Link href="https://www.soka.ac.jp/glycan/" target="_blanck" className="relative lg:scale-100 w-[44px] h-[40px] lg:w-[88px] lg:h-[80px]">
          <Image src="/images/glycan.png" alt="glycan" fill />
        </Link>
      </div>

      {/* version */}
      <div className="flex items-center justify-center gap-1 max-w-full">
        <p>Version {footerData.version.number} - </p>
        <Link className="text-[#57369E] hover:text-[#00A7D3]" href={footerData.version.historyHref} target="_blanck"> View Version History</Link>
      </div>

      {/* Copyright */}
      <p className="max-w-full">Copyright &copy; {new Date().getFullYear()} TOHSA.COM - All rights received</p>

    </section>
  )
};

export default Footer;
