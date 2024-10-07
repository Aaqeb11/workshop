"use client"; // Ensure this is at the top

import React, { useEffect } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { initFlowbite } from "flowbite";

export default function Navbar() {
  useEffect(() => {
    // Check if window is defined to ensure we're in the browser
    if (typeof window !== "undefined") {
      initFlowbite();
    }
  }, []);
  return (
    <nav className="bg-transparent w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-2xl text-sm md:px-4 px-2 py-2 text-center flex items-center md:gap-4 gap-1 group duration-300"
          >
            Register Now
            <div className="flex items-center justify-center">
              <FaCircleArrowRight className="md:text-lg text-[#63AB38] group-hover:text-black" />
            </div>
          </button>
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-black md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-[#63AB38] rounded md:bg-transparent md:text-[#63AB38] md:p-0"
                aria-current="page"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#63AB38] md:p-0"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#63AB38] md:p-0"
              >
                What You Will Learn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#63AB38] md:p-0"
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
