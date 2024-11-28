import type { Metadata } from "next";

// pages
import ContactUs from "@/all-pages/contact-us"

// metadata
export const metadata: Metadata = {
    title: "Contact Us",
    description: "contact us description"
};

export default async function ContactUsPage() {
    return <ContactUs />;
}