import Navbar from "@/components/NavBar";
import Image from "next/image";
import bg from "../public/bg.jpeg";
import { FaCircleArrowRight } from "react-icons/fa6";
import About from "../public/About.jpeg";
import { AboutUs } from "@/components/AboutUs";
import { Speakers } from "@/components/Speakers";
import speaker1 from "../public/speaker1.png";
import speaker2 from "../public/speaker2.png";
import speaker3 from "../public/speaker3.png";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Attend } from "@/components/Attend";
import { Learn } from "@/components/Learn";
import Events from "@/components/Events";
import AppointmentForm from "@/components/AppointmentForm";

export default function Home() {
  return (
    <main className="">
      <section className="sticky top-0 z-10 h-screen overflow-hidden bg-black">
        <Image
          src={bg}
          alt="bg_image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[50%]"
          priority
        />
        <div className="relative flex flex-col items-center justify-center h-screen md:gap-[18vh] gap-[24vh]">
          <p className="text-white md:text-7xl lg:text-9xl text-5xl text-center ">
            GOLD MINING WORKSHOP
          </p>
          <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300">
            REGISTER NOW
            <FaCircleArrowRight className="md:text-lg text-[#63AB38] group-hover:text-black" />
          </button>
        </div>
      </section>

      {/* Scrolling Sections */}
      <section className="relative z-20 bg-gray-200 min-h-screen md:p-8 p-2">
        <div className="flex flex-col md:flex-row lg:items-start lg:justify-start items-center justify-center px-4 gap-12 my-12">
          <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
            <p className=" lg:text-4xl md:text-5xl text-4xl md:hidden block">
              A<span className="text-[#63AB38]">/</span>BOUT US
            </p>
            <Image
              src={About}
              alt="About us"
              className="md:h-[65vh] lg:h-[75vh]  lg:max-h-[75vh] h-[40vh] w-[100%] rounded-xl"
            />
          </div>
          <AboutUs />
        </div>
      </section>

      <section className="relative z-20 bg-black min-h-screen md:p-8 p-2">
        <div className="mt-10 bg-black flex flex-col justify-center px-4 gap-4">
          <p className="lg:text-8xl md:text-6xl text-4xl text-white p-6 text-center md:text-left">
            OUR <span className="text-[#63AB38]">SPEAKERS</span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-10 flex-wrap">
            <Speakers image={speaker1} name="Oceana Hong" />
            <Speakers image={speaker2} name="Magdalena Szara" />
            <Speakers image={speaker3} name="Nita Patel" />
          </div>
        </div>
      </section>
      <section className="h-auto relative z-20 bg-[#63AB38] p-10">
        <EarlyAccess />
      </section>
      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium">
              WHY ATTEND
            </p>
            <p className="text-md font-medium text-[#999999]">
              Creates And Ignites Spark Within
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 ">
            <Attend
              heading="Reignite Your
                      Inner Drive"
              content="If you feel disconnected from your sense of achievement or are struggling with setbacks, Magdalena will help you reignite your passion and confidence. Through mindfulness, you’ll learn to rebuild a positive mindset and restore your drive to succeed."
            />
            <Attend
              heading="Cultivate Resilience with Mindfulness"
              content="those facing a personal or professional plateau, Oceana’s mindfulness techniques will help you cultivate resilience, focus, and perseverance. You’ll leave the workshop with a stronger inner drive and the tools to stay motivated in the face of adversity"
            />
            <Attend
              heading="Boost Your Real 
              Estate Success"
              content="perfect for real estate professionals looking to improve lead generation and deal-closing techniques. Learn how to find pre-foreclosure opportunities, negotiate better, and close more off-market deals by enhancing your communication and sales skills.
              "
            />
          </div>
        </div>
      </section>
      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium">
              WHAT YOU WILL LEARN
            </p>
            <p className="text-md font-medium text-[#999999]">
              standing out & being more than ordinary
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 ">
            <Learn
              heading="Reclaiming Success
              through Mindfulness"
              content=" help you rediscover your personal definition of success. You’ll learn how to realign your mindset with your goals, use mindfulness to regain clarity, and overcome mental clutter. With her guidance, you’ll be equipped to face setbacks with resilience and confidence.
              "
            />
            <Learn
              heading="Mindfulness for Personal 
              Transformation"
              content="teach you practical mindfulness techniques to improve focus, restore inner strength, and overcome challenges. You’ll develop morning rituals and habits that promote sustained success, helping you navigate life’s obstacles while maintaining balance and momentum.

              "
            />
            <Learn
              heading="Pre-Foreclosure 
              Mastery"
              content="Learn how to identify and target pre-foreclosure leads, scrub and narrow down lists, and effectively communicate with homeowners and their families during cold calls or door knocking. You’ll also acquire negotiation and sales techniques to close more off-market deals successfully.

              "
            />
          </div>
        </div>
      </section>
      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6 ">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium tracking-wide">
              <span className="text-[#63AB38]">MOMENTS</span> FROM OUR EVENTS
            </p>
            <p className="text-md font-medium text-[#999999] text-center md:max-w-[70vw] md:px-0 px-2">
              This was a wonderful introduction to creative finance for our
              guest, and we heard from several amazing speakers. Each of them
              are experts in their respective fields and commented on current
              strategies and best practices.
            </p>
          </div>
        </div>
        <Events />
      </section>
      <section className="h-auto relative z-20 bg-black p-10">
        <p className="lg:text-8xl md:text-6xl text-4xl text-white p-6 text-center ">
          CONTACT <span className="text-[#63AB38]">US</span>
        </p>
        <AppointmentForm />
      </section>
    </main>
  );
}
