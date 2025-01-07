import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("http://goldminingforpreforeclosures.com/"),
  title: "Preforeclosure Workshop",
  description: "A Workshop By Nita Patel",
  openGraph: {
    title: "Preforeclosure Workshop",
    description: "A Workshop By Nita Patel",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "A Workshop By Nita Patel",
      },
    ],
    type: "website",
    url: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preforeclosure Workshop",
    description: "A Workshop By Nita Patel",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico", // Add this line to link to your favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Link to the favicon */}
      </head>
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
