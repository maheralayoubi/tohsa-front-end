"use client"

import Image from 'next/image'

// page data
import pageData from "./data/pageStaticData.json"

const Index: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center w-full min-h-[400px] h-[calc(100vh-80px)] gap-5 space-y-5'>
            <div className='relative w-[311px] h-[126px] lg:w-[374.48px] lg:h-[151px]'>
                <Image src={pageData.imageSrc} alt={pageData.imageAlt} fill />
            </div>
            <h2 className=' text-[16px] lg:text-[32px] font-bold'>{pageData.message1}</h2>
            <p className='text-[12px] lg:text-[20px] font-normal text-[#484848]'>{pageData.message2}</p>
        </section>
    )
};

export default Index;
