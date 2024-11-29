import Image from "next/image";
import blogsData from "@/DB/blogs.json";
import Link from "next/link";

const Blog = ({
  image,
  title,
  content,
  id,
}: {
  image: string;
  title: string;
  content: string;
  id: string;
}) => {
  return (
    <div
      className="bg-white p-[8px] lg:p-[20px] rounded-[8px] z-10"
    >
      <div className="rounded-[2px] w-full h-[206px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-[2px] w-full h-full object-cover"
        />
      </div>
      <p className="font-poppins font-bold text-[16px] lg:text-[24px] text-[#484848] my-[8px] lg:my-[20px] lg:min-h-[72px]">
        {title}
      </p>
      <p className="font-poppins text-[#626262] text-[12px] lg:text-[16px] mb-[8px] lg:mb-[20px] line-clamp-2 ">
        {content}
      </p>
      <div className="font-poppins text-[16px] w-full flex justify-center">
        <Link
          href={`/content/${id}`}
          className="text-[#57369E] cursor-pointer hover:text-[#00A7D3] w-fit text-center"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div className="bg-[#efebf6] bg-cover bg-center px-[20px] py-[40px] lg:py-[128px] lg:px-[64px] relative overflow-hidden">
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
