interface ISidebarProps {
  title: string;
  links: string[];
}

const Sidebar = ({ links, title }: ISidebarProps) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar hidden lg:block lg:w-[30%] px-5 lg:px-[20px] py-[80px] sticky top-20 self-start container text-nowrap">
      <h3 className="underline-offset-8 underline decoration-2 decoration-[#57369E] font-bold text-[20px]">
        {title}
      </h3>
      <ul className="space-y-5 mt-5">
        {links.map((link, index) => {
          const id = link.toLowerCase().split(" ").join("-");
          return (
            <li key={index}>
              <button onClick={() => handleScroll(id)}>{link}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
