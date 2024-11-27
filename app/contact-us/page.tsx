import type { Metadata } from "next";
import ContactUs from "@/all-pages/contact-us"

export const metadata: Metadata = {
    title: "Tohsa",
};


export default async function ContactUsPage() {

    return (
        <>
            <ContactUs />
        </>
    );
}