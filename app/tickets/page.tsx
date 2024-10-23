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
import { FaCircleArrowLeft } from "react-icons/fa6";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const TicketPage = () => {
  const benefits = [
    " Speakers to grow your business",
    "Networking opportunities",
    "Exclusive workshops",
    "One-on-one mentoring sessions",
  ];

  return (
    <main className="bg-white ">
       <button className=" hover:bg-[#63AB38] text-black focus:ring-4 focus:outline-none focus:ring-green-300 ring-2 ring-[#63AB38] font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300 absolute top-0 left-0 m-4">
              <Link href="/">
                <div className="flex items-center gap-3 md:gap-4">
                  <FaCircleArrowLeft className="text-[#63AB38] group-hover:text-black md:text-lg" />
                  Back
                </div>
              </Link>
            </button>
     

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
              
              <FaMapMarkerAlt className="text-[#63AB38]"/>
              <p className="text-base text-gray-700">Address coming soon!</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              
              <FaPhoneAlt className="text-[#63AB38]" />
              <Link href="tel:+1-630-489-8779" className="text-base text-gray-700">
              +1-630-489-8779
              </Link>
             
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#63AB38]"/>
              <Link href="mailto:Nitapatel410@gmail.com" className="text-base text-gray-700">
              Nitapatel410@gmail.com
              </Link>
              
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
            <Link href="https://buy.stripe.com/7sI6socTh5M95BSfZ0">
            
            <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-sm md:text-md lg:text-xl px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-center flex items-center gap-2 md:gap-3 lg:gap-4 group duration-300">
              BUY NOW
              <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black text-sm md:text-md lg:text-lg" />
            </button>
            </Link>
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
