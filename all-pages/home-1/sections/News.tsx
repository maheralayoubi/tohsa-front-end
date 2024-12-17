import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <div className="hidden lg:block pt-[20px] w-[20%] max-w-[20%] px-[20px] font-poppins font-bold text-[20px] sticky top-20">
      <div className="flex justify-between">
        <p>News</p>
        <div className="flex justify-between items-center space-x-[16px]">
          <Image src="/images/x.svg" alt="x logo" width={24} height={24} />
          <Image
            src="/images/youtube.svg"
            alt="youtube logo"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
