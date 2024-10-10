import React from "react";

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:items-start items-center justify-center md:gap-[6vh]  w-full h-full gap-8">
      <p className="lg:text-8xl md:text-6xl text-2xl hidden md:block">
        A<span className="text-[#63AB38]">\</span>BOUT US
      </p>
      <p
        style={{ lineHeight: "1.75" }}
        className="md:text-left text-center md:text-2xl text-lg leading-loose md:pr-10"
      >
        In this workshop, Nita will share proven strategies for cold calling and
        door knocking, focusing on building trust and empathy to close deals
        effectively. You’ll also learn how to find preforeclosure leads using
        public records and real estate tools, ensuring a steady pipeline of
        opportunities. With expert training and practical tools, you’ll gain the
        confidence to close successful deals. If you’ve been feeling
        disconnected from your drive or sense of achievement, this workshop will
        help you redefine success, centered on fulfillment, purpose, and
        confidence with the help of other speakers
      </p>
    </div>
  );
};
