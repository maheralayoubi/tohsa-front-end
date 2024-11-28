import Image from "next/image";
import data from "../data/blogsData.json";
interface IBlogsProps {}

const Blogs = ({}: IBlogsProps) => {
  return (
    <div className="bg-[#efebf6] bg-cover bg-center px-[20px] py-[40px] lg:py-[128px] lg:px-[32px] relative overflow-hidden">
      <div className="flex flex-wrap lg:flex-nowrap space-y-[20px] lg:space-y-0 lg:space-x-[20px] w-[100%]">
        {data.map((blog, index) => (
          <div
            key={index}
            className="w-[100%] lg:w-[35%] bg-white p-[8px] lg:p-[20px] rounded-[8px] z-10"
          >
            <div className="rounded-[2px] w-full h-[206px] overflow-hidden">
              <Image
                src={`/images/${blog.image}.png`}
                alt={blog.title}
                width={500}
                height={500}
                className="rounded-[2px] w-full h-full"
              />
            </div>
            <p className="font-poppins font-bold text-[16px] lg:text-[24px] text-[#484848] my-[8px] lg:my-[20px] lg:min-h-[112px]">
              {blog.title}
            </p>
            <p className="font-poppins text-[#626262] text-[12px] lg:text-[16px] mb-[8px] lg:mb-[20px]">
              {blog.paragraph}
            </p>
            <div className="font-poppins text-[16px] w-full flex justify-center">
              <p className=" text-[#57369E] cursor-pointer hover:text-blue-500 w-fit text-center">
                See More
              </p>
            </div>
          </div>
        ))}
      </div>
      <Image
        src="/images/genetics-1.png"
        alt="genetics-1"
        width={630}
        height={570}
        className="absolute left-[-60px] bottom-[-30px] z-0"
      />
      <Image
        src="/images/genetics-2.png"
        alt="genetics-1"
        width={395}
        height={525}
        className="absolute right-[-134px] top-[10px] z-0"
      />
      <Image
        src="/images/hex-vector.svg"
        alt="genetics-1"
        width={1385}
        height={1920}
        className="absolute left-0 top-0 z-0 opacity-5"
      />
    </div>
  );
};

export default Blogs;
