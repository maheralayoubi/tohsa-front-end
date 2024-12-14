import type { Metadata } from "next";

// pages
import PrivacyPolicy from "@/all-pages/privacy-policy";

// metadata
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "privacy policy description",
};

export default async function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
