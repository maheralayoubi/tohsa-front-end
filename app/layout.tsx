import type { Metadata } from "next";
import "./globals.css";

// sections
import Header from "@/global-components/Header";

// metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Tohsa",
    default: "Tohsa",
  },
  description: "Tohsa description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Use the CSS variable for font-family */}
      <body style={{ fontFamily: "var(--font-poppins)" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
