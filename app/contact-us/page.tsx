import type { Metadata } from "next";
import ContactUs from "@/all-pages/contact-us"
import Footer from "@/global-components/Footer";

export const metadata: Metadata = {
    title: "Tohsa",
};


export default async function ContactUsPage() {

    return (
        <>
            <ContactUs />
            <Footer />
        </>
    );
}