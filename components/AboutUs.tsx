"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const AboutUs = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.from("#about_us2", {
      yPercent: -10,
      duration: 1.3,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
    gsap.from("#about_usContent", {
      yPercent: 10,
      duration: 1.3,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
  })
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `In this workshop, Nita will share proven strategies for cold calling and
    door knocking, focusing on building trust and empathy to close deals
    effectively. You'll also learn how to find preforeclosure leads using
    public records and real estate tools, ensuring a steady pipeline of
    opportunities. With expert training and practical tools, you'll gain the
    confidence to close successful deals. If you've been feeling
    disconnected from your drive or sense of achievement, this workshop will
    help you redefine success, centered on fulfillment, purpose, and
    confidence with the help of other speakers`;

  const shortText = fullText.slice(0, 311) + "...";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col md:items-start items-center justify-center md:gap-[6vh] w-full h-full gap-8">
      <p className="lg:text-7xl md:text-6xl text-2xl hidden md:block" id="about_us2">
        A<span className="text-[#63AB38]">\</span>BOUT US
      </p>
      <div className="md:h-auto max-h-[75vh] overflow-y-auto" id="about_usContent">
        <p
          style={{ lineHeight: "1.75" }}
          className="md:text-left text-left lg:text-2xl md:text-xl text-lg leading-loose md:pr-10  transition-all duration-300 lg:hidden"
        >
          {isExpanded ? fullText : shortText}
        </p>
        <p
          style={{ lineHeight: "1.75" }}
          className="lg:block hidden text-left text-2xl leading-loose pr-10"
        >
          {fullText}
        </p>
      </div>
      <button
        className="text-[#63AB38] cursor-pointer ml-2 font-semibold rounded-xl ring-2 px-4 ring-[#63AB38] hover:bg-black duration-300 lg:hidden"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};
