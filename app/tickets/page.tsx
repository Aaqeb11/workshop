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
      {/* make another div here same as the above div inside this change the color and all the content and give info about the event...use the same card structure above. Edit as you like and also give a button. Edit the info and also change the fonts to make it more cachy and also change the image which I used. */}
    </main>
  );
};

export default TicketPage;
