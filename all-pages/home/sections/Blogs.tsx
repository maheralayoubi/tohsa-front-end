import blogsData from "@/DB/blogs.json";
import BlogCard from "./components/BlogCard";

const Blogs = () => {
  return (
    <section className="bg-white px-5 lg:px-32 py-[40px] lg:py-[128px] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-[100%] gap-10">
        {blogsData.map(item => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
