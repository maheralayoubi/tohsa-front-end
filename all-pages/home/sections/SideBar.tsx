import data from "@/all-pages/home/data/sidebarData.json";
import Image from "next/image";

interface ISideBarProps {
  displaySidebar: boolean;
}

const SideBar = ({ displaySidebar }: ISideBarProps) => {
  // Only render the sidebar when displayNav is false
  return displaySidebar === true ? (
    <div className="sidebar pt-[20px] px-[20px] font-poppins h-[100%]">
      <ul className="pt-[20px] pl-[20px] space-y-5">
        {data.map((item, index) => (
          <li key={index} className="font-bold text-[20px]">
            <span className="mb-5 block">{item.title}</span>
            <ul className="w-[151px] space-y-2">
              {item.items.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="font-normal text-[16px] flex items-center space-x-2 w-[100%] cursor-pointer"
                >
                  <Image
                    src="/images/setting.svg"
                    alt="setting"
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
