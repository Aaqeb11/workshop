import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Footer } from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("http://goldminingforpreforeclosures.com/"),
  title: "PREFORECLOSURE WORKSHOP ",
  description: "A workshop  by Nita Patel",
  openGraph: {
    title: "PREFORECLOSURE WORKSHOP",
    description:
      "A workshop  by Nita Patel",
    images: [
      {
        url: "/logof-removebg-preview.png",
        width: 800,
        height: 430,
        alt: "Creative Funding Logo",
      },
    ],
    type: "website",
    url: "/logof-removebg-preview.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "PREFORECLOSURE WORKSHOP",
    description:
      "Workshop By Nita Patel",
    images: ["/logof-removebg-preview.png"],
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
