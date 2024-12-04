import type { Metadata } from "next";
import NotFoundPage from "@/all-pages/404"

// metadata
export const metadata: Metadata = {
  title: "404",
  description: "404"
};

export default function NotFound() {
  return <NotFoundPage />
}
