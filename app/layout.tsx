import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Footer } from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  title: "PREFORECLOSURE WORKSHOP ",
  description: "A workshop  by Nita Patel",
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
