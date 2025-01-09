import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Footer } from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://workshop-eight-opal.vercel.app/"),
  title: "PREFORECLOSURE WORKSHOP ",
  description: "A workshop  by Nita Patel",
  openGraph: {
    title: "Creative Funding | Flexible & Reliable Loan Solutions",
    description:
      "Experience hassle-free lending with Creative Funding. We offer various types of loans with an easy process, trustworthy service, and round-the-clock availability. Your reliable partner in financial solutions.",
    images: [
      {
        url: "/logo_black_background.png",
        width: 800,
        height: 430,
        alt: "Creative Funding Logo",
      },
    ],
    type: "website",
    url: "/logo_black_background.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Funding | Simple & Trusted Loan Solutions",
    description:
      "Looking for flexible loan options? Creative Funding offers various types of loans with an easy process, trustworthy service, and 24/7 support. Your path to reliable financial solutions starts here.",
    images: ["/logo_black_background.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="relative z-50">
          <NavbarWrapper /> {/* Use the client-side wrapper component */}
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
