import type { Metadata } from "next";

// pages
import Ontologies from "@/all-pages/ontologies"

// metadata
export const metadata: Metadata = {
    title: "ontologies",
    description: "ontologies description"
};

export default async function OntologiesPage() {
    return <Ontologies />;
}