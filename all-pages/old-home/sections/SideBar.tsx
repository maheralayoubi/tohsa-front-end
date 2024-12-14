

// components
import SideBarSubItem from "./components/SideBarSubItem";

// data
import sidebarData from "@/all-pages/home/data/sidebarData.json";

interface ISideBarProps {
  displaySidebar: boolean;
}

const SideBar = ({ displaySidebar }: ISideBarProps) => {
  return displaySidebar ? (
    <div className="sidebar h-full hidden lg:block w-[15%] max-w-[15%] p-[1%] font-poppins sticky top-20">
      <ul className="pl-[1%] space-y-5">
        {sidebarData.map(item => (
          <li key={item.id} className="font-bold text-lg">
            <span className="mb-5 block">{item.title}</span>
            <ul className="w-[151px] space-y-2">
              {item.items.map(item =>
                <SideBarSubItem key={item.id} href={item.href} label={item.label} />
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default SideBar;

