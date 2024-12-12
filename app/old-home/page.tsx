import type { Metadata } from "next";

// pages
import OldHome from "@/all-pages/old-home"

// metadata
export const metadata: Metadata = {
    title: "OldHome",
    description: "OldHome description"
};

export default async function OldHomePage() {
    return <OldHome />;
}