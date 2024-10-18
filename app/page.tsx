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
import speaker3 from "../public/speaker3.2.png";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Attend } from "@/components/Attend";
import { Learn } from "@/components/Learn";
import Events from "@/components/Events";
import { Footer } from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";

export default function Home() {
  return (
    <main className="">
      <section className="sticky top-0 z-10 h-screen overflow-hidden bg-black"
      id="home">
          {/* Single video for both mobile and desktop */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./desktop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative flex flex-col items-center justify-center h-screen md:gap-[8vh] gap-[14vh]">
            <p className="text-white md:text-7xl lg:text-7xl text-5xl text-center px-12 md:px-6">
              PREFORECLOSURE AND MINDSET WORKSHOP
            </p>
            <p className="text-md md:text-lg lg:text-2xl font-semibold text-center text-white">
              Learn how to make $50K a month by mastering preforeclosures and
              unlocking the power of your mindset.
            </p>
            <button className="text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300">
              <Link href="/tickets">
                <div className="flex items-center gap-3 md:gap-4">
                  REGISTER NOW
                  <FaCircleArrowRight className="text-[#63AB38] group-hover:text-black md:text-lg" />
                </div>
              </Link>
            </button>
          </div>
        </section>



      {/* Scrolling Sections */}
      <section className="relative z-20 bg-gray-200 min-h-screen p-2 md:p-8"
      id="about">
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
      <section className="relative z-20 bg-black min-h-screen p-2 md:p-8"
      id="speakers">
        <div className="flex flex-col justify-center gap-4 px-4 mt-10 bg-black">
          <p className="text-white text-center text-4xl md:text-left lg:text-8xl md:text-6xl p-6">
            OUR <span className="text-[#63AB38]">SPEAKERS</span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-10 flex-wrap">
            <Speakers image={speaker3} name=" Nita Patel" />
            <Speakers image={speaker2} name="Magdalena Szara" />
            <Speakers image={speaker1} name="Oceana Hong" />
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2"
      id="attend">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium">
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
      <section className="h-auto relative z-20 bg-[#63AB38] p-10">
        <EarlyAccess />
      </section>
      <section className="relative z-20 bg-white min-h-screen md:p-8 p-2"
      id="learn">
        <div className="flex flex-col md:gap-[10vh] gap-12 items-center justify-center mt-10">
          <div className="flex items-center flex-col gap-6">
            <p className="lg:text-8xl md:text-6xl text-4xl text-center p-6 font-medium">
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
      <section className="relative z-20 bg-black h-auto p-10"
      id="contact">
        <p className="text-center text-4xl text-white p-6 md:text-6xl lg:text-8xl">
          CONTACT <span className="text-[#63AB38]">US</span>
        </p>
        <AppointmentForm />
      </section>
    </main>
  );
}
