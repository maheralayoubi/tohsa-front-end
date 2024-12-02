import type { Metadata } from "next";

// page
import Profile from "@/all-pages/profile"

// metadata
export const metadata: Metadata = {
    title: "Profile",
    description: "profile description"
};

interface IProfilePage {
    params: Promise<{
        id: string;
    }>;
}
export default async function ProfilePage({ params }: IProfilePage) {
    const { id } = await params
    return <Profile id={id} />;
}