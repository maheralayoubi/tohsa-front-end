import Image from "next/image";

// data
import blogsData from "@/DB/blogs.json";

// components
import Blog from "./components/Blog";


const Blogs = () => {
  return (
    <div className="bg-[#efebf6] bg-cover bg-center px-[20px] py-[40px] lg:py-[128px] lg:px-[64px] relative overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-[100%] gap-10">
        {blogsData.map((blog, index) => (
          <Blog
            key={index}
            image={blog?.image}
            title={blog?.title}
            content={blog?.content}
            id={blog?.id}
          />
        ))}
      </div>
      <div
        className="bg-fixed bg-[url('/images/genetics-1.png')] bg-no-repeat w-full h-full absolute top-0 left-0 z-0"
        style={{ backgroundPosition: "0% bottom, 0% bottom" }}
      ></div>
      <div
        className="bg-fixed bg-[url('/images/genetics-2.png')] bg-no-repeat bg-right w-full h-full absolute top-0 right-0 z-0"
        style={{ backgroundPosition: "88%, 10%" }}
      ></div>
      <Image
        src="/images/hex-vector.svg"
        alt="hex-vector"
        width={1385}
        height={1920}
        className="absolute left-0 top-0 z-0 opacity-5"
      />
    </div>
  );
};

export default Blogs;
