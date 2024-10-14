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

export default function Home() {
  return (
    <main className="">
      {/* Sticky Section */}
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
    </main>
  );
}
