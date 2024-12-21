import Link from "next/link";
import Image from "next/image";

interface ISideBarSubItem {
    href: string,
    label: string,
}

const SideBarSubItem: React.FC<ISideBarSubItem> = ({ href, label }) => {
    return (
        <li className="font-normal text-sm flex items-center space-x-2 w-full cursor-pointer">
            <Link href={href} className="flex space-x-2 items-center w-full">
                <Image
                    src="/images/icons/setting.svg"
                    alt="Setting icon"
                    width={32}
                    height={32}
                />
                <span>{label}</span>
            </Link>
        </li>
    )
};

export default SideBarSubItem
