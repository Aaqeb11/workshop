import React from "react";

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:items-start items-center justify-center md:gap-[10vh]  w-full h-full gap-8">
      <p className="lg:text-8xl md:text-6xl text-2xl hidden md:block">
        A<span className="text-[#63AB38]">\</span>BOUT US
      </p>
      <p
        style={{ lineHeight: "1.75" }}
        className="md:text-left text-center md:text-2xl text-lg leading-loose md:pr-10"
      >
        Have you ever felt disconnected from your inner drive or lost your sense
        of achievement? Success isn’t just about external accomplishments—it's
        about cultivating an inner state of fulfillment, purpose, and
        confidence. In this workshop, we will help you reconnect with your
        personal definition of success .
      </p>
      <div>
        <button className="rounded-2xl px-6 py-2 border-[1px] border-black">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
