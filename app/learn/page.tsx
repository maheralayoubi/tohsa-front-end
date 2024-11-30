import type { Metadata } from "next";

// pages
import Learn from "@/all-pages/learn"

// metadata
export const metadata: Metadata = {
    title: "Learn",
    description: "learn description"
};

export default async function LearnPage() {
    return <Learn />;
}