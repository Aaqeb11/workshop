import React, { useEffect, useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export const EarlyAccess = () => {
  const bigCircleRef = useRef(null);
  const smallCircleRef = useRef(null);
  const semiCircleRef = useRef(null);
  const squareRef = useRef(null);
  const rectangleRef = useRef(null);
  const quarterRef = useRef(null);

  useEffect(() => {
    // Continuous 360-degree rotation for circles
    gsap.to(bigCircleRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });

    gsap.to(smallCircleRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      yoyo:true,
      ease: "power1.inOut"
      
    });

    // Alternating rotations for other shapes
    gsap.to(semiCircleRef.current, {
      rotation: 360,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    gsap.to(squareRef.current, {
      rotation: -360,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    gsap.to(rectangleRef.current, {
      rotation: 360,
      duration: 3.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    gsap.to(quarterRef.current, {
      rotation: -360,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="relative flex justify-center">
      <div ref={bigCircleRef} className="absolute -top-10 md:left-[100px] -left-[7px]">
        <Image
          src="/big_circle2.png"
          className="w-[25px] h-[25px] md:w-[20px] md:h-[20px] lg:w-[148px] lg:h-[148px]"
          alt="big_circle"
          width={150}
          height={150}
        />
      </div>

      <div ref={semiCircleRef} className="absolute md:top-[110px] md:left-[40px] -left-[20px] -top-[10px]">
        <Image
          src="/semi_circle.png"
          className="lg:w-[160px] lg:h-[110px] md:w-[100px] md:h-[40px] w-[30px] h-[20px]"
          alt="semi_circle"
          width={150}
          height={150}
        />
      </div>

      <div ref={squareRef} className="absolute md:top-[50px] md:left-[225px] left-[20px] -top-[20px]">
        <Image
          src="/square.png"
          className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[40px] w-[30px] h-[30px]"
          alt="square"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center flex-wrap lg:w-[30%] gap-6">
        <p className="text-sm font-bold">ARE YOU READY?</p>
        <p className="md:text-4xl text-2xl text-center font-bold">
          Get Early Access To Our 2 Day Workshop
        </p>
        <Link href="/tickets">
          <button className="text-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-black font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300 hover:outline-white">
            REGISTER NOW
            <FaCircleArrowRight className="md:text-4xl text-black group-hover:text-white" />
          </button>
        </Link>
      </div>

      <div ref={quarterRef} className="absolute bottom-[10px] md:right-[100px] right-[1px]">
        <Image
          src="/quarter.png"
          className="w-[25px] h-[25px] md:w-[20px] md:h-[20px] lg:w-[130px] lg:h-[130px]"
          alt="quarter_circle"
          width={150}
          height={150}
        />
      </div>

      <div ref={rectangleRef} className="absolute md:top-[110px] md:right-[250px] -bottom-[30px] right-[10px]">
        <Image
          src="/rectangle.png"
          className="lg:w-[100px] lg:h-[120px] md:w-[100px] md:h-[40px] w-[30px] h-[30px]"
          alt="rectangle"
          width={150}
          height={150}
        />
      </div>

      <div ref={smallCircleRef} className="absolute -right-[32px] -bottom-[20px]">
        <Image
          src="/small_circle.png"
          className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[40px] w-[30px] h-[30px]"
          alt="small_circle"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default EarlyAccess;