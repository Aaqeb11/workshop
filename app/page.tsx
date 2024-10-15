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
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          priority
        />
        <div className="relative flex flex-col items-center justify-center h-screen gap-24 md:gap-[18vh]">
          <p className="text-white text-center text-5xl md:text-7xl lg:text-9xl">
            GOLD MINING WORKSHOP
          </p>
          <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl px-6 py-4 flex items-center gap-3 md:gap-4 group transition duration-300">
            REGISTER NOW
            <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black md:text-lg" />
          </button>
        </div>
      </section>

      {/* Scrolling Sections */}
      <section className="relative z-20 bg-gray-200 min-h-screen p-2 md:p-8">
        <div className="flex flex-col items-center justify-center gap-12 my-12 px-4 md:flex-row lg:items-start">
          <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <p className="block text-4xl md:hidden lg:text-4xl md:text-5xl">
              A<span className="text-[#63AB38]">/</span>BOUT US
            </p>
            <Image
              src={About}
              alt="About us"
              className="h-[40vh] sm:h-auto w-full rounded-xl md:h-[60vh] lg:h-[75vh]"
            />
          </div>
          <AboutUs />
        </div>
      </section>

      {/* Speakers Section */}
      <section className="relative z-20 bg-black min-h-screen p-2 md:p-8">
        <div className="flex flex-col justify-center gap-4 px-4 mt-10 bg-black">
          <p className="text-white text-center text-4xl md:text-left lg:text-8xl md:text-6xl p-6">
            OUR <span className="text-[#63AB38]">SPEAKERS</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-8 my-10 md:flex-row flex-wrap">
            <Speakers image={speaker1} name="Oceana Hong" />
            <Speakers image={speaker2} name="Magdalena Szara" />
            <Speakers image={speaker3} name="Nita Patel" />
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="relative z-20 bg-[#63AB38] h-auto p-10">
        <EarlyAccess />
      </section>

      {/* Why Attend Section */}
      <section className="relative z-20 bg-white min-h-screen p-2 md:p-8">
        <div className="flex flex-col items-center justify-center gap-12 mt-10 md:gap-[10vh]">
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-4xl font-medium p-6 md:text-6xl lg:text-8xl">
              WHY ATTEND
            </p>
            <p className="text-md font-medium text-[#999999]">
              Creates And Ignites Spark Within
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row flex-wrap">
            <Attend
              heading="Reignite Your Inner Drive"
              content="If you feel disconnected from your sense of achievement or are struggling with setbacks, Magdalena will help you reignite your passion and confidence."
            />
            <Attend
              heading="Cultivate Resilience with Mindfulness"
              content="Oceana’s mindfulness techniques will help you cultivate resilience, focus, and perseverance."
            />
            <Attend
              heading="Boost Your Real Estate Success"
              content="Perfect for real estate professionals looking to improve lead generation and deal-closing techniques."
            />
          </div>
        </div>
      </section>

      {/* What You Will Learn Section */}
      <section className="relative z-20 bg-white min-h-screen p-2 md:p-8">
        <div className="flex flex-col items-center justify-center gap-12 mt-10 md:gap-[10vh]">
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-4xl font-medium p-6 md:text-6xl lg:text-8xl">
              WHAT YOU WILL LEARN
            </p>
            <p className="text-md font-medium text-[#999999]">
              Standing out & being more than ordinary
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row flex-wrap">
            <Learn
              heading="Reclaiming Success through Mindfulness"
              content="You'll learn how to realign your mindset with your goals."
            />
            <Learn
              heading="Mindfulness for Personal Transformation"
              content="Learn practical mindfulness techniques to improve focus."
            />
            <Learn
              heading="Pre-Foreclosure Mastery"
              content="Learn how to identify and target pre-foreclosure leads."
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative z-30 bg-white min-h-screen p-2 md:p-8">
        <div className="flex flex-col items-center justify-center gap-12 mt-10 md:gap-[10vh]">
          <div className="flex flex-col items-center gap-6">
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
      <section className="relative z-20 bg-black h-auto p-10">
        <p className="text-center text-4xl text-white p-6 md:text-6xl lg:text-8xl">
          CONTACT <span className="text-[#63AB38]">US</span>
        </p>
        <AppointmentForm />
      </section>
    </main>
  );
}
