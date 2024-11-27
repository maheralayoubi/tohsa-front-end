import Link from "next/link";
import React from "react";
import Image from "next/image";


const Footer = () => {
    return (
        <section className="border-t border-[#484848] text-[#111118] font-normal text-xs lg:text-base p-4 lg:px-5 lg:py-10 space-y-10 flex items-center justify-center flex-col">

            {/* linsk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-5xl lg:justify-items-center ">
                <div className="space-y-5 flex flex-col items-start justify-start">
                    <Link href="mailto:info@tohsa.com">CONTACT: info@tohsa.com</Link>
                    <div className="flex justify-between items-center space-x-[16px]">
                        <Link href="/">
                            <Image src="/images/x.svg" alt="x logo" width={24} height={24} />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/youtube.svg"
                                alt="youtube logo"
                                width={24}
                                height={24}
                            />
                        </Link>


                    </div>
                </div>
                <div className="space-y-5 flex flex-col items-start justify-start">
                    <Link href="/">ABOUT TOHSA</Link>
                    <Link href="/">DISCOVERY</Link>
                    <Link href="/">ACCESS</Link>
                    <Link href="/">LEARN</Link>
                </div>
                <div className=" space-y-5 flex flex-col items-start justify-start">
                    <Link href="/">RESOURSES</Link>
                    <Link href="/">TOOLS</Link>
                    <Link href="/">STANDARDS</Link>
                </div>
                <button className=" rounded-sm text-white px-8 py-4 bg-[#57369E] flex items-center justify-center gap-1 sm:max-w-[187px] sm:max-h-[48px]">
                    <span className="font-semibold"> Back to Top</span>
                    <Image className="text-white" width={24} height={24} src="/images/arrow-up.svg" alt="Back to Top" />
                </button>
            </div>

            {/* companies */}
            <div className="flex flex-wrap items-center justify-center max-w-5xl gap-x-5 gap-y-10 lg:gap-x-10 lg:gap-y-20">
                <Link href="/" className="relative lg:scale-100 w-[120px] h-[20px] lg:w-[270px] lg:h-[45px]">
                    <Image src="/images/footer1.png" alt="footer1" fill />
                </Link>
                <Link href="/" className="relative lg:scale-100 w-[110px] h-[40px] lg:w-[220px] lg:h-[80px]">
                    <Image src="/images/footer2.png" alt="footer2" fill />
                </Link>
                <Link href="/" className="relative lg:scale-100 w-[65px] h-[40px] lg:w-[130px] lg:h-[80px]">
                    <Image src="/images/footer5.png" alt="footer5" fill />
                </Link>
                <Link href="/" className="relative lg:scale-100 w-[120px] h-[18px]  lg:w-[373px] lg:h-[58px]">
                    <Image src="/images/footer3.png" alt="footer3" fill />
                </Link>
                <Link href="/" className="relative lg:scale-100 w-[120px] h-[18px] lg:w-[300px] lg:h-[44px]">
                    <Image src="/images/footer4.png" alt="footer4" fill />
                </Link>

                <Link href="/" className="relative lg:scale-100 w-[44px] h-[40px] lg:w-[88px] lg:h-[80px]">
                    <Image src="/images/footer6.png" alt="footer6" fill />
                </Link>
            </div>

            {/* version */}
            <div className="flex items-center justify-center gap-1 max-w-5xl">
                <p>Version 1.2 - </p>
                <Link className="text-[#57369E]" href={'/'} target="_blanck"> View Version History</Link>
            </div>

            {/* Copyright */}
            <p className="max-w-5xl">Copyright &copy; {new Date().getFullYear()} TOHSA.COM - All rights received</p>

        </section>
    )
};

export default Footer;
