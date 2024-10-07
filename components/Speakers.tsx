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
    <div className="bg-black rounded-xl p-8 relative md:h-[70vh] h-[50vh] border-4 border-[#63AB38]">
      <Image
        src={image}
        alt="speaker 1"
        className="md:h-[90%] h-[70%] w-[100%] rounded-full bg-gray-500 "
      />
      <p className="text-2xl absolute bottom-2 left-2 text-white">{name}</p>
    </div>
  );
};
