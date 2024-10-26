// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFire, faLeaf, faBuilding } from "@fortawesome/free-solid-svg-icons";

// export const Attend = ({
//   icon,
//   heading,
//   content,
// }: {
//   icon:any,
//   heading: string;
//   content: string;
// }) => {
//   // Function to render the appropriate icon based on the heading
//   // const renderIcon = () => {
//   //   if (heading.includes("Reignite")) {
//   //     return <FontAwesomeIcon icon={faFire} className="text-white" />;
//   //   } else if (heading.includes("Resilience")) {
//   //     return <FontAwesomeIcon icon={faLeaf} className="text-white" />;
//   //   } else if (heading.includes("Real Estate")) {
//   //     return <FontAwesomeIcon icon={faBuilding} className="text-white" />;
//   //   }
//   //   return null; // default icon if no match
//   // };

//   return (
//     <Card id="attend_cards" className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] md:min-h-[55vh] min-h-[50vh] flex flex-col items-center bg-[#3E3E3E] gap-4 rounded-3xl ring-4 ring-[#449E10]">
//       <CardHeader>
//         {icon}
//       </CardHeader>
//       <CardContent>
//         <p className="md:text-3xl text-2xl text-white text-center">{heading}</p>
//       </CardContent>
//       <CardFooter>
//         <p className="md:text-lg text-white text-md text-center">{content}</p>
//       </CardFooter>
//     </Card>
//   );
// };
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Attend = ({
  icon,
  heading,
  content,
  index, // Add index prop to determine delay
}: {
  icon: any;
  heading: string;
  content: string;
  index: number;
}) => {
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
    <Card 
      ref={cardRef}
      className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] md:min-h-[55vh] min-h-[50vh] flex flex-col items-center bg-[#3E3E3E] gap-4 rounded-3xl border-4 border-[#449E10]"
    >
      <CardHeader>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="md:text-3xl text-2xl text-white text-center">{heading}</p>
      </CardContent>
      <CardFooter>
        <p className="md:text-lg text-white text-md text-center">{content}</p>
      </CardFooter>
    </Card>
  );
};

export default Attend;