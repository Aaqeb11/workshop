'use client'
import Navbar from "@/components/NavBar";
import Image from "next/image";
import bg from "../public/bg.jpeg";
import Link from 'next/link';
import { FaCircleArrowRight } from "react-icons/fa6";
import About from "../public/About.jpeg";
import { AboutUs } from "@/components/AboutUs";
import { Speakers } from "@/components/Speakers";
import speaker1 from "../public/speaker1.png";
import speaker2 from "../public/speaker2.png";
import speaker3 from "../public/speaker3.png";
import speaker4 from "../public/Gabriela.png";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Attend } from "@/components/Attend";
import { Learn } from "@/components/Learn";
import Events from "@/components/Events";
import { Footer } from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import { FaDollarSign, FaLeaf, FaStar } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaHouseDamage } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Reviews from "@/components/Reviews";
import TestimonialCarousel from "@/components/TestimonialCarousel";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
 
  const scope = useRef(null)
  const slashRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    
    tl.from("#intro_heading", {
      yPercent: -50,
      duration: 0.8,
      opacity: 0,
      delay: 0.05
    })
    .from("#intro_text", {
      yPercent: -50,
      duration: 0.8,
      opacity: 0,
    }, "+=0.1")  // Wait 0.2s after heading completes
    .from("#intro_button1", {
      y: 30,     // Using absolute pixels for button animation
      duration: 0.8,
      opacity: 0,
    }, "+=0.1")   // Wait 0.3s after text completes
    .from("#intro_button2", {
      y: 30,     // Using absolute pixels for button animation
      duration: 0.8,
      opacity: 0,
    }, "+=0.1"); // Slightly more overlap for smoother sequence

    gsap.from("#about_us", {
      yPercent: -10,
      duration: 0.8,
      opacity: 0,
      delay: 0.15,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
   })
    gsap.from("#speakers_title", {
      yPercent: -10,
      duration: 0.8,
      opacity: 0,
      delay: 0.15,
      scrollTrigger: {
        trigger: "#speakers",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
    gsap.from("#attend_title", {
      yPercent: -10,
      duration: 0.8,
      opacity: 0,
      delay: 0.15,
      scrollTrigger: {
        trigger: "#attend",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
    gsap.from("#learn_title", {
      yPercent: -10,
      duration: 0.8,
      opacity: 0,
      delay: 0.15,
      scrollTrigger: {
        trigger: "#learn",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
    gsap.from("#events_title", {
      yPercent: -10,
      duration: 0.8,
      opacity: 0,
      delay: 0.15,
      scrollTrigger: {
        trigger: "#events",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
    gsap.from("#contact_title", {
      yPercent: -10,
      duration: 0.8,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true
      }
    })
    

  }, { scope });

  
  return (
    <main className="overflow-hidden" ref={scope}>
      <section className="sticky top-0 z-10 h-screen overflow-hidden bg-black"
      id="home">
          {/* Single video for both mobile and desktop */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 hidden md:block"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./Website.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 md:hidden"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./Website_mobile_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative flex flex-col items-center justify-center h-screen md:gap-[8vh] gap-[8vh]">
          <p className="text-white md:text-7xl lg:text-7xl text-4xl text-center px-12 md:px-6" id="intro_heading">
            <span className="text-[#63AB38]">PREFORECLOSURE</span> WORKSHOP
          </p>
            <p className="text-md md:text-lg lg:text-2xl font-semibold text-center text-white md:max-w-[80vw] max-w-[90vw]" id="intro_text">
            Stack leads with multiple pain points alongside me and make 50k in a month .
          </p>
          <div id="intro_button1">

            <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300" >
             
                <div className="flex items-center gap-3 md:gap-4">
                  February 15 and 16
                  
                </div>
              
            </button>
          </div>
          <div id="intro_button2">

            <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300" >
              <Link href="/tickets">
                <div className="flex items-center gap-3 md:gap-4">
                  REGISTER NOW
                  <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black md:text-lg" />
                </div>
              </Link>
            </button>
          </div>
          </div>
        </section>



      {/* Scrolling Sections */}
      <section className="relative z-20 bg-gray-200 min-h-screen p-2 md:p-8"
      id="about">
        <div className="flex flex-col items-center justify-center gap-12 my-12 px-4 md:flex-row lg:items-start">
          <div className="flex flex-col items-center justify-center w-full h-full gap-4" id="about_us">
            <p className="block text-4xl md:hidden lg:text-4xl md:text-5xl">
              A<span ref={slashRef} className="text-[#63AB38] inline-block" id="about_slash">/</span>BOUT US
            </p>
            <Image
              src={About}
              alt="About us"
              className="h-[40vh] sm:h-auto w-full rounded-xl md:h-[60vh] lg:h-[80vh]"
            />
          </div>
          <div className="flex w-full" id="about_content">
            
          <AboutUs />
         </div>
        </div>
      </section>

      

      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2 pb-12" 
      id="attend">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6" id="attend_title">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium">
              WHY ATTEND
            </p>
            <p className="text-md font-medium text-[#999999]">
              Creates And Ignites Spark Within
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-wrap">
          <Attend
              icon={<FaBuilding className="text-white text-4xl"/>}
              heading="Boost Your Real Estate Success"
              content="Perfect for real estate professionals looking to improve lead generation and deal-closing techniques."
              index={0}
            />
           <Attend
              icon={<FaStar className="text-white text-4xl"/>}
              heading="Building Wealth Through Real Estate"
              content="Gain guidance to find prime properties, secure financing, and manage tenants, ensuring steady cash flow while increasing your asset value."
              index={1}
            />
            <Attend
              icon={<FaLeaf className="text-white text-4xl"/>}
              heading="Cultivate Resilience with Mindfulness"
              content="Our speaker's mindfulness techniques will help you cultivate resilience, focus, and perseverance."
              index={2}
            />

          </div>
        </div>
      </section>
      <section className="h-auto relative z-20 bg-[#63AB38] p-10 ">
        <EarlyAccess />
      </section>
      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2"
      id="learn">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6" id="learn_title">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium">
              WHAT YOU WILL LEARN
            </p>
            <p className="text-md font-medium text-[#999999]">
              Standing out & being more than ordinary
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row flex-wrap">

            <Learn
            icon={<FaDollarSign className="text-[#449E10] text-4xl"/>}
              heading="Real Estate Investment Success"
              content="Identify high-potential properties, secure financing, and manage tenants to create steady cash flow and grow your assets, expertly guided."
              index={0}
            />
            <Learn
            icon={<FaHouseDamage className="text-[#449E10] text-4xl"/>}
              heading="Mastering Pre-Foreclosure Strategies"
              content="Learn to identify and target multiple pain points , leads, equipping yourself with strategies to find opportunities and connect with homeowners before foreclosure occurs."
              index={1}
            />
                        <Learn
            icon={<FaBrain className="text-[#449E10] text-4xl"/>}
              heading="Mindful Focus and Strategic Opportunities"
              content="Boost focus and clarity with mindfulness techniques while learning to identify and connect with pre-foreclosure leads effectively."
              index={2}
            />
          </div>
        </div>
      </section>


      <section className="relative z-30 bg-white min-h-screen p-2 md:p-8" id="testimonials">
        <div className="flex flex-col items-center justify-center gap-12 mt-10 md:gap-[10vh]">
          <div className="flex flex-col items-center gap-6" id="reviews_title">
            <p className="text-center text-4xl font-medium p-6 md:text-6xl lg:text-8xl">
              <span className="text-[#63AB38]">STORIES</span> IN ACTION
            </p>
            <p className="text-md font-medium text-center text-[#999999] md:max-w-[70vw]">
            Captivating testimonials showcasing authentic experiences
            </p>
          </div>
        </div>
        <Reviews />
      </section>

      <section className="relative z-30 bg-white min-h-screen p-2 md:p-8" id="reviews">
        <div className="flex flex-col items-center justify-center gap-12 mt-10 md:gap-[10vh]">
          <div className="flex flex-col items-center gap-6" id="reviews_title">
            <p className="text-center text-4xl font-medium p-6 md:text-6xl lg:text-8xl">
              <span className="text-[#63AB38]">WORDS</span> OF GRATITUDE
            </p>
            <p className="text-md font-medium text-center text-[#999999] md:max-w-[70vw]">
            Heartfelt reflections from those we've impacted
            </p>
          </div>
        </div>
        <TestimonialCarousel />
      </section>


      {/* Events Section */}
      <section className="relative z-30 bg-white min-h-screen p-2 md:p-8" id="events">
        <div className="flex flex-col items-center justify-center gap-12 mt-10 md:gap-[10vh]">
          <div className="flex flex-col items-center gap-6" id="events_title">
            <p className="text-center text-4xl font-medium p-6 md:text-6xl lg:text-8xl">
              <span className="text-[#63AB38]">MOMENTS</span> FROM OUR EVENTS
            </p>
            <p className="text-md font-medium text-center text-[#999999] md:max-w-[70vw]">
              This was a wonderful introduction to creative finance for our
              guest.
            </p>
          </div>
        </div>
        <Events />
      </section>


      {/* Contact Us Section */}
      <section className="relative z-20 bg-black h-auto p-10"
      id="contact">
        <p className="text-center text-4xl text-white p-6 md:text-6xl lg:text-8xl" id="contact_title">
          CONTACT <span className="text-[#63AB38]">US</span>
        </p>
        <AppointmentForm />
      </section>
    </main>
  );
}