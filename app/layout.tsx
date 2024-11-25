import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Home/ScrollToTop";

const dmSans = DM_Sans({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

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
        <link rel="icon" href="/CPAA_LOGO.png" sizes="any" />
      </head>
      <body
        className={`${(dmSans.className, poppins.className, roboto.className)}`}
      >
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
