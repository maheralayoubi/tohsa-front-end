"use client"

export const LoadingPage: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] gap-10">
            <span className="loaderPage"></span>
            <h2 className='text-2xl font-bold text-gray-500'>Loading ...</h2>
        </section>
    )
};

