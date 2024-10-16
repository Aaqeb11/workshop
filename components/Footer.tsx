import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-[#63AB38] pt-0 relative z-20">
      <div className="w-full mx-auto p-4 md:py-6">
        <div className="flex items-center justify-between flex-row gap-4 md:gap-0">
          <Link href="/" passHref>
            <div className="inline-block">
              <Image
                src={logo}
                alt="logo"
                className="h-10 w-auto hover:cursor-pointer "
                priority
              />
            </div>
          </Link>
          <div className="flex justify-end w-full">
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/nita-patel-sharma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-black text-2xl" />
              </Link>
              <Link
                href="https://www.instagram.com/sharma_nitapatel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-black text-2xl" />
              </Link>
              <Link
                href="https://www.facebook.com/nita.patel.7509836?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-black text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-sm text-black text-center justify-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Goldmining For Preforclosures™
          </a>
          . All Rights Reserved.
        </span>
        <span className="block text-sm text-black text-center justify-center dark:text-gray-400">
          Address
        </span>
      </div>
    </footer>
  );
};
