import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TicketPage = () => {
  const benefits = [
    " Speakers to grow your business",
    "Networking opportunities",
    "Exclusive workshops",
    "One-on-one mentoring sessions",
  ];

  return (
    <main className="bg-white ">
      {/* <section
        className="mt-[12vh] h-screen px-4 pt-8 items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/Event6.png')` }}
      >
        <h2 className="text-3xl md:text-6xl items-center justify-center font-bold text-white">
          Check Out
        </h2>
      </section> */}

      <div className="flex items-center justify-center p-4 min-h-screen bg-white   gap-6 flex-col md:flex-row py-[14vh]">
        <div className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] flex flex-col items-center gap-6">
          {/* Welcome Header */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Welcome to the Family
            </h1>
            <p className="text-md md:text-lg text-gray-500 mt-4">
              We’re excited to welcome you to the Gold Mining Workshop
              community! Stay tuned for some amazing updates—keep an eye on your
              inbox for important emails and news about the workshop. We’ve got
              some valuable insights and opportunities coming your way!
            </p>
          </div>

          <hr className="w-full my-6 border-[#63AB38]" />

          {/* Contact Information Section */}
          <div className="flex md:text-left flex-col md:w-full gap-4 text-black">
            <p className="text-xl font-bold text-black">Gold Mining Workshop</p>

            {/* Location */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#63AB38]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 9 21 12 21C15 21 19 13.25 19 9C19 5.13401 15.866 2 12 2Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.25C11.0335 11.25 10.25 10.4665 10.25 9.5C10.25 8.5335 11.0335 7.75 12 7.75C12.9665 7.75 13.75 8.5335 13.75 9.5C13.75 10.4665 12.9665 11.25 12 11.25Z"
                />
              </svg>
              <p className="text-base text-gray-700">Address coming soon!</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#63AB38]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.9999C3 5.44758 3.44772 4.99988 4 4.99988H8C8.55228 4.99988 9 5.44758 9 5.9999V8.9999C9 9.55222 8.55228 9.9999 8 9.9999H6C5.44772 9.9999 5 10.4476 5 10.9999V12.9999C5 13.5522 5.44772 13.9999 6 13.9999H7C7.55228 13.9999 8 14.4476 8 14.9999V18.9999C8 19.5522 7.55228 19.9999 7 19.9999H4C3.44772 19.9999 3 19.5522 3 18.9999V5.9999Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 3.9999C15.5523 3.9999 16 4.4476 16 4.9999V18.9999C16 19.5522 15.5523 19.9999 15 19.9999H10C9.44772 19.9999 9 19.5522 9 18.9999V5.9999C9 5.4476 9.44772 4.9999 10 4.9999H15Z"
                />
              </svg>
              <p className="text-base text-gray-700">+1-630-489-8779</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#63AB38]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7L12 11M8 7L12 11M21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6Z"
                />
              </svg>
              <p className="text-base text-gray-700">Nitapatel410@gmail.com</p>
            </div>
          </div>
        </div>

        <Card className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[30vw] flex flex-col items-center bg-gradient-to-br from-[#4CAF50] to-[#3E3E3E] gap-2 rounded-3xl ring-4 ring-[#449E10] shadow-lg transition-transform transform md:hover:scale-105 duration-300 shadow-white/50 overflow-y-auto  h-autop p-4 ">
          <CardHeader className="flex flex-col gap-4 items-center w-full p-4">
            <Image src="/ticket.png" alt="learn" width={80} height={80} />
            <p className="text-xl md:text-2xl text-white">IN-PERSON Ticket</p>
            <p className="text-sm md:text-base text-white">
              20 spots Available
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">$3000</p>
            <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-sm md:text-md lg:text-xl px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-center flex items-center gap-2 md:gap-3 lg:gap-4 group duration-300">
              BUY NOW
              <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black text-sm md:text-md lg:text-lg" />
            </button>
          </CardHeader>
          <CardContent className="w-full px-4 py-2">
            <hr className="w-full border-t border-white my-1 md:my-2" />
            <div className="flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 md:gap-4"
                >
                  <div className=" w-4 md:w-6 flex items-center justify-center">
                    <CheckCircle className="text-black w-full h-full" />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-white flex-grow">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          {/**/}
        </Card>
      </div>
    </main>
  );
};

export default TicketPage;
