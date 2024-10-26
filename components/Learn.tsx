import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faSeedling, faHouseDamage } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Learn = ({
  heading,
  content,
  icon,
  index
}: {
  icon:any,
  heading: string;
    content: string;
  index:number
}) => {
  // Function to render the appropriate icon based on the content
  // const renderIcon = () => {
  //   if (content.includes("realign your mindset")) {
  //     return <FontAwesomeIcon icon={faBrain} className="text-[#449E10]" />;
  //   } else if (content.includes("mindfulness techniques")) {
  //     return <FontAwesomeIcon icon={faSeedling} className="text-[#449E10]" />;
  //   } else if (content.includes("pre-foreclosure leads")) {
  //     return <FontAwesomeIcon icon={faHouseDamage} className="text-[#449E10]" />;
  //   }
  //   return null; // default icon if no match
  // };
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.set(card, {
      clipPath: "inset(0 0 100% 0)",
      opacity: 0,
      y: 50
    });

    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(card, {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          y: 0,
          duration: 1.3,
          delay: index * 0.3, // Stagger delay based on card index
          ease: "power3.out"
        });
      },
      once: true
    });
  }, [index]);
  return (
    <Card ref={cardRef} className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] min-h-[52vh] flex flex-col items-center bg-[#D9D9D9] gap-4 rounded-3xl border-4 border-[#449E10]">
      <CardHeader>
        {/* <div className="h-10 w-10 flex items-center justify-center">
          {renderIcon()}
        </div> */}
        {icon}
      </CardHeader>
      <CardContent>
        <p className="md:text-3xl text-2xl text-black text-center">{heading}</p>
      </CardContent>
      <CardFooter>
        <p className="md:text-lg text-black text-md text-center">{content}</p>
      </CardFooter>
    </Card>
  );
};
