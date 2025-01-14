"use client";
import { useState, useEffect } from "react";

interface ISidebarProps {
  links: string[];
}

const Sidebar = ({ links }: ISidebarProps) => {
  const [activeSection, setActiveSection] = useState<string>(
    links[0].toLowerCase().split(" ").join("-")
  );
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections with matching IDs
    links.forEach((link) => {
      const id = link.toLowerCase().split(" ").join("-");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      links.forEach((link) => {
        const id = link.toLowerCase().split(" ").join("-");
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [links]);

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
    <div className="sidebar hidden xl:block xl:w-[300px] px-5 xl:px-[20px] py-[80px] sticky top-20 self-start container text-nowrap">
      <ul className="space-y-5 mt-5">
        {links.map((link, index) => {
          const id = link.toLowerCase().split(" ").join("-");
          return (
            <li key={index}>
              <button
                onClick={() => handleScroll(id)}
                className={`${activeSection === id
                  ? "underline-offset-8 underline decoration-2 decoration-[#57369E] font-bold text-xl"
                  : "font-normal text-black text-xl"
                  }`}
              >
                {link}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
