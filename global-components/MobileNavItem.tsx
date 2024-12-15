import Link from "next/link";
import Image from "next/image";

interface IMobileNavItem {
  href: string;
  label: string;
  toggle: () => void;
}

export const MobileNavItem: React.FC<IMobileNavItem> = ({
  href,
  label,
  toggle,
}) => {
  return (
    <li
      className="cursor-pointer flex justify-between pb-[17px] border-b-[1px] border-[#BBBBBB] text-[14px] font-poppins"
      onClick={toggle}
    >
      <Link href={href} className="flex justify-between w-full">
        <span>{label}</span>
        <Image
          src="/images/arrow-right.svg"
          alt="arrow right"
          width={16}
          height={16}
        />
      </Link>
    </li>
  );
};

interface IMobileSubNavItem {
  href: string;
  label: string;
  toggle: () => void;
}

export const MobileSubNavItem: React.FC<IMobileSubNavItem> = ({
  href,
  label,
  toggle,
}) => {
  return (
    <li
      className="cursor-pointer flex space-x-2 py-[17px] border-b-[1px] border-[#BBBBBB] text-[14px] font-poppins pl-[8px]"
      onClick={toggle}
    >
      <Link href={href} className="flex space-x-2">
        <Image src="/images/setting.svg" alt="setting" width={24} height={24} />
        <span>{label}</span>
      </Link>
    </li>
  );
};
