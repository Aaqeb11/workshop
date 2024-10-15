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

const TicketPage = () => {
  const benefits = [
    "Amazing Speakers to Grow your business",
    "Networking opportunities",
    "Exclusive workshops",
    "One-on-one mentoring sessions",
    "Access to recorded sessions",
    "Certificate of participation",
  ];

  return (
    <main className="bg-black relative z-30">
      <div className="flex items-center justify-center p-4 min-h-screen bg-black pt-20 md:pt-20 gap-6 flex-col md:flex-row">
        <Card className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[30vw] flex flex-col items-center bg-gradient-to-br from-[#4CAF50] to-[#3E3E3E] gap-2 rounded-3xl ring-4 ring-[#449E10] shadow-lg transition-transform transform md:hover:scale-105 duration-300 shadow-white/50 overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
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
            <div className="flex flex-col gap-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-4">
                  <div className="flex-shrink-0 w-4 md:w-6">
                    <CheckCircle className="text-white w-full h-full" />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-white flex-grow">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[30vw] flex flex-col items-center bg-gradient-to-br from-[#4CAF50] to-[#3E3E3E] gap-4 rounded-3xl ring-4 ring-[#449E10] shadow-lg transition-transform transform md:hover:scale-105 duration-300 shadow-white/50 overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
          <CardHeader className="flex flex-col gap-4 items-center w-full p-4">
            {/* <Image src="/ticket.png" alt="learn" width={80} height={80} /> */}
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
            <hr className="w-full border-t border-white my-2 md:my-4" />
          </CardContent>
          <CardFooter className="p-4"></CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default TicketPage;
