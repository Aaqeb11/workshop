"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Event1 from "../public/Event1.png";
import Event2 from "../public/Event2.png";
import Event3 from "../public/Event3.png";
import Event4 from "../public/Event4.png";
import Event5 from "../public/Event5.2.jpeg";
import Event6 from "../public/Event6.png";

interface Brand {
  image: StaticImageData;
}

interface ModalProps {
  image: StaticImageData;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
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

const allBrands = [...brandsTop, ...brandsBottom];

const Modal: React.FC<ModalProps> = ({ image, onClose, onPrev, onNext }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 h-[100%] w-[100%] "
    onClick={onClose}
  >
    <div
      className="relative w-screen h-screen z-50 p-4 md:p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-[90px] right-4 text-white z-10 hover:text-gray-300 transition-colors"
      >
        <X size={32} />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 hover:text-gray-300 transition-colors"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 hover:text-gray-300 transition-colors"
      >
        <ChevronRight size={48} />
      </button>
      <div className="relative flex items-center justify-center w-full h-full">
        <Image
          src={image}
          alt="Expanded view"
          layout="intrinsic" // Use 'intrinsic' to keep image aspect ratio
          className="max-h-[90vh] max-w-[90vw] object-contain" // Set max dimensions to prevent cropping
        />
      </div>
    </div>
  </div>
);

export default function Events() {
  let [isBodyLocked, setIsBodyLocked] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
    setIsBodyLocked(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsBodyLocked(false);
  };

  const handlePrev = () => {
    const currentIndex = allBrands.findIndex(
      (brand) => brand.image === selectedImage
    );
    const prevIndex = (currentIndex - 1 + allBrands.length) % allBrands.length;
    setSelectedImage(allBrands[prevIndex].image);
  };

  const handleNext = () => {
    const currentIndex = allBrands.findIndex(
      (brand) => brand.image === selectedImage
    );
    const nextIndex = (currentIndex + 1) % allBrands.length;
    setSelectedImage(allBrands[nextIndex].image);
  };

  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);

  const renderSlider = (brands: Brand[], key: string) => (
    <div className={`slider slider-${key}`}>
      {[...brands, ...brands, ...brands].map((data, index) => (
        <div
          key={`${key}-${index}`}
          className="slide flex items-center justify-center h-[30vh] sm:h-[50vh] lg:h-[25vh] w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4"
          onClick={() => handleImageClick(data.image)}
        >
          <div className="relative w-full h-full cursor-pointer">
            <Image
              src={data.image}
              alt={`Brand ${(index % brands.length) + 1}`}
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="slider-container overflow-hidden mt-10">
      {renderSlider(brandsTop, "top")}
      <div className="mt-4">{renderSlider(brandsBottom, "bottom")}</div>
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
