import type { Metadata } from "next";

// pages
import Ontotologies from "@/all-pages/ontotologies"

// metadata
export const metadata: Metadata = {
    title: "Ontotologies",
    description: "ontotologies description"
};

export default async function OntotologiesPage() {
    return <Ontotologies />;
}