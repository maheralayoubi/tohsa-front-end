
"use client"

import React from "react";
import { useSearchParams } from 'next/navigation'

// sections
import Footer from "@/global-components/Footer";


const Index: React.FC = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')


    return (
        <main>
            <section className="flex items-center justify-center h-[calc(100vh-80px)] text-5xl">
                search : {query}
            </section>
            <Footer />
        </main>
    )
};

export default Index;
