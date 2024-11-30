import type { Metadata } from "next";
import "./globals.css";

// sections
import Header from "@/global-components/Header";

// fonts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Tohsa',
    default: 'Tohsa',
  },
  description: "Tohsa description"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
