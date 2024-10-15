import React from "react";
import Image, { StaticImageData } from "next/image";
import speaker1 from "../public/speaker1.png";
import speaker2 from "../public/speaker2.png";

interface SpeakerData {
  image: StaticImageData;
  name: string;
}

export const Speakers: React.FC<SpeakerData> = ({ image, name }) => {
  return (
    <div className="bg-[#323232] rounded-xl border border-4 border-black hover:border-[#63AB38] duration-600 ease-in-out  relative md:h-[70vh] h-[50vh] sm:h-[80vh] sm:w-[45vw] md:w-[38vw] w-full overflow-hidden">
      <Image
        src={image}
        alt="speaker 1"
        className="md:h-[90%] h-[90%] w-auto absolute md:-right-16 -right-16 md:-bottom-14 -bottom-9"
      />
      <p className="lg:text-2xl text-xl absolute bottom-10 left-2 text-white font-semibold flex flex-wrap p-2 w-[40vw]">
        {name}
      </p>
    </div>
  );
};
