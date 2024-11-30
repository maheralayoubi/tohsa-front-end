import type { Metadata } from "next";

// page
import Profile from "@/all-pages/profile"

// metadata
export const metadata: Metadata = {
    title: "Profile",
    description: "profile description"
};

export default async function ProfilePage() {
    return <Profile />;
}