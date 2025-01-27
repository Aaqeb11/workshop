"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { FaCircleArrowRight } from "react-icons/fa6";

// Define the type for the props
interface NavbarProps {
  isTicketPage: boolean;
}

export default function Navbar({ isTicketPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const initializeFlowbite = async () => {
      const flowbite = await import("flowbite");
      flowbite.initFlowbite();
    };
    initializeFlowbite();
  }, []);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled && !isTicketPage
          ? "bg-black"
          : isTicketPage || scrolled
          ? "bg-black"
          : "bg-transparent"
      } w-full z-20 top-0 start-0 fixed transition-colors duration-300 ease-in-out`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse md:w-[200px] h-12 md:h-[50px]"
        >
          <img
            src="/logo.png"
            className="object-contain h-20 md:h-100 w-20 md:w-100"
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isTicketPage && (
            <Link href="/tickets"> {/* Use Link to navigate to the tickets page */}
              <button
                type="button"
                className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-2xl text-sm md:px-4 px-2 py-2 text-center flex items-center md:gap-4 gap-1 group duration-300"
              >
                Register Now
                <div className="flex items-center justify-center">
                  <FaCircleArrowRight className="md:text-lg text-[#63AB38] group-hover:text-black" />
                </div>
              </button>
            </Link>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#63AB38] rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#63AB38]"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-black md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white bg-[#63AB38] rounded md:bg-transparent md:text-[#63AB38] md:p-0"
                aria-current="page"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block py-2 px-3 text-white rounded hover:bg-[#63AB38] md:hover:bg-transparent md:hover:text-[#63AB38] md:p-0"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#learn"
                className="block py-2 px-3 text-white rounded hover:bg-[#63AB38] md:hover:bg-transparent md:hover:text-[#63AB38] md:p-0"
              >
                What You Will Learn
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-white rounded hover:bg-[#63AB38] md:hover:bg-transparent md:hover:text-[#63AB38] md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
