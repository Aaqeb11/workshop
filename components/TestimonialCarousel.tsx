"use client";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  speaker: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Nita Patel's unmatched expertise and heartfelt dedication to helping families through foreclosure are truly inspiring. She embodies compassion, integrity, and a profound commitment to making a difference.",
    speaker: "Mary",
  },

];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getTestimonialStyle = (index: number): string => {
    if (index === currentIndex) {
      return "opacity-100 scale-100 translate-x-0 z-20";
    } else if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    ) {
      return "opacity-30 scale-75 -translate-x-full z-10";
    } else if (index === (currentIndex + 1) % testimonials.length) {
      return "opacity-30 scale-75 translate-x-full z-10";
    }
    return "opacity-0 scale-50 z-0";
  };

  return (
    <div className="bg-transparent pt-4 sm:pt-4 md:pt-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">


        {/* Carousel */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mb-10">
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full max-w-lg transform transition-all duration-700 ease-in-out ${getTestimonialStyle(
                  index
                )}`}
              >
                <div className="bg-[#3E3E3E] backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12">
                  <blockquote className="text-sm sm:text-md md:text-xl lg:text-2xl text-gray-200 italic">
                    <span className="text-[#63AB38] text-sm sm:text-md md:text-xl lg:text-2xl font-serif">
                      &quot;
                    </span>
                    {testimonial.quote}
                    <span className="text-[#63AB38] text-sm sm:text-md md:text-xl lg:text-2xl font-serif">
                      &quot;
                    </span>
                  </blockquote>
                  <p className="mt-6 text-gray-400">— {testimonial.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
