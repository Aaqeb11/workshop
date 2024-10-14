import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";

export const EarlyAccess = () => {
  return (
    <div className="relative flex justify-center">
      <Image
        src="/big_circle2.png"
        className="absolute -top-10 md:left-[100px] -left-[7px] w-[25px] h-[25px] md:w-[20px] md:h-[20px] lg:w-[148px] lg:h-[148px] "
        alt="big_circle"
        width={150}
        height={150}
      />
      <Image
        src="/semi_circle.png"
        className="absolute md:top-[110px] md:left-[40px] -left-[20px] lg:w-[160px] lg:h-[110px] md:w-[100px] md:h-[40px] w-[30px] h-[20px]"
        alt="big_circle"
        width={150}
        height={150}
      />
      <Image
        src="/square.png"
        className="absolute top-[50px] left-[225px] md:block hidden"
        alt="big_circle"
        width={100}
        height={100}
      />

      <div className="flex flex-col items-center flex-wrap lg:w-[30%] gap-6">
        <p className="text-sm font-bold">ARE YOU READY?</p>
        <p className="md:text-4xl text-2xl text-center font-bold">
          Get Early Access To Our 3 Day Workshop
        </p>
        <button className="text-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-black font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300 hover:outline-white">
          REGISTER NOW
          <FaCircleArrowRight className="md:text-4xl  text-black group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};
