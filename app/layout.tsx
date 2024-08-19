import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Center for Pan Africam Affairs",
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
        <link rel="icon" href="/assets/logo.svg" sizes="any" />
      </head>

      <body className={`${dmSans.className}`}>{children}</body>
    </html>
  );
}
