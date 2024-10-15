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
      <div className="flex items-center justify-center gap-4 p-4 h-screen">
        <Card className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] min-h-[50vh] flex flex-col items-center bg-[#3E3E3E] gap-4 rounded-3xl ring-4 ring-[#449E10]">
          <CardHeader className="flex flex-col gap-4 items-center">
            <Image src="/learning.png" alt="learn" width={100} height={100} />
            <p className="text-2xl text-white">IN-PERSON Ticket</p>
            <p className="text-white">20 spots Available</p>
            <button className="px-6 py-2 bg-[#449E10] rounded-xl text-white">
              Buy A Ticket!
            </button>
          </CardHeader>
          <CardContent className="w-full">
            <hr className="w-full border-t border-[#449E10] my-4" />
            <div className="flex flex-col gap-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6">
                    <CheckCircle className="text-[#449E10]" />
                  </div>
                  <p className="md:text-xl text-lg text-white flex-grow">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="md:text-lg text-white text-md text-center">
              Event details and more information
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="flex items-center justify-center gap-4 p-4 h-screen bg-black">
  <Card className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] min-h-[50vh] flex flex-col items-center bg-gradient-to-br from-[#4CAF50] to-[#3E3E3E] gap-4 rounded-3xl ring-4 ring-[#449E10] shadow-lg transition-transform transform hover:scale-105 duration-300 shadow-white/50">
    <CardHeader className="flex flex-col gap-4 items-center">
      <Image src="/ticket.png" alt="learn" width={100} height={100} />
      <p className="text-2xl text-white">IN-PERSON Ticket</p>
      <p className="text-white">20 spots Available</p>
      <p className="text-3xl font-bold text-white">$3000</p> {/* Updated pricing */}
      <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300">
            BUY NOW
            <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black md:text-lg" />
          </button>
    </CardHeader>
    <CardContent className="w-full">
      <hr className="w-full border-t border-white my-4" />
      <div className="flex flex-col gap-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6">
              <CheckCircle className="text-white" />
            </div>
            <p className="md:text-xl text-lg text-white flex-grow">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
    <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300">
            MORE DETAILS
            <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black md:text-lg" />
          </button>
    </CardFooter>
  </Card>
</div>

      </main>
  );
};

export default TicketPage;
