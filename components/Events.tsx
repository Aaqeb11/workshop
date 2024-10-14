import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Event1 from "../public/Event1.png";
import Event2 from "../public/Event2.png";
import Event3 from "../public/Event3.png";
import Event4 from "../public/Event4.png";
import Event5 from "../public/Event5.png";
import Event6 from "../public/Event6.png";

interface Brand {
  image: StaticImageData;
}

const brandsTop: Brand[] = [
  { image: Event1 },
  { image: Event2 },
  { image: Event3 },
];

const brandsBottom: Brand[] = [
  { image: Event4 },
  { image: Event5 },
  { image: Event6 },
];

export default function Events() {
  return (
    <div className="slider-container overflow-hidden mt-10">
      <div className="slider slider-top">
        {[...brandsTop, ...brandsTop, ...brandsTop].map((data, index) => (
          <div
            key={`top-${index}`}
            className="slide flex items-center justify-center h-[30vh] sm:h-[20vh] lg:h-[25vh] w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4"
          >
            <div className="relative w-full h-full">
              <Image
                src={data.image}
                alt={`Brand ${(index % brandsTop.length) + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="slider slider-bottom mt-4">
        {[...brandsBottom, ...brandsBottom, ...brandsBottom].map(
          (data, index) => (
            <div
              key={`bottom-${index}`}
              className="slide flex items-center justify-center h-[30vh] sm:h-[20vh] lg:h-[25vh] w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={data.image}
                  alt={`Brand ${(index % brandsBottom.length) + 4}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
