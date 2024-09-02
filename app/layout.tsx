import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Center for Pan African Affairs",
  description:
    "A peaceful, united, and integrated Africa and its global diaspora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.jpg" sizes="any" />
      </head>
      <body className={`${dmSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
