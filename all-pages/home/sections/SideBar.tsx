import data from "@/all-pages/home/data/sidebarData.json";
import Image from "next/image";

interface ISideBarProps {
  displaySidebar: boolean;
}

interface SidebarItem {
  title: string;
  items: { name: string }[];
}

const SideBar = ({ displaySidebar }: ISideBarProps) => {
  return displaySidebar ? (
    <div className="sidebar h-full max-w-[15%] p-5 font-poppins">
      <ul className="pl-5 space-y-5">
        {data.map((item: SidebarItem, index) => (
          <li key={index} className="font-bold text-lg">
            <span className="mb-5 block">{item.title}</span>
            <ul className="w-[151px] space-y-2">
              {item.items.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="font-normal text-sm flex items-center space-x-2 w-full cursor-pointer"
                  role="menuitem"
                >
                  <Image
                    src="/images/setting.svg"
                    alt="Setting icon"
                    width={32}
                    height={32}
                  />
                  <span>{subItem.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default SideBar;
