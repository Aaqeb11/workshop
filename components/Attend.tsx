import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faLeaf, faBuilding } from "@fortawesome/free-solid-svg-icons";

export const Attend = ({
  icon,
  heading,
  content,
}: {
  icon:any,
  heading: string;
  content: string;
}) => {
  // Function to render the appropriate icon based on the heading
  // const renderIcon = () => {
  //   if (heading.includes("Reignite")) {
  //     return <FontAwesomeIcon icon={faFire} className="text-white" />;
  //   } else if (heading.includes("Resilience")) {
  //     return <FontAwesomeIcon icon={faLeaf} className="text-white" />;
  //   } else if (heading.includes("Real Estate")) {
  //     return <FontAwesomeIcon icon={faBuilding} className="text-white" />;
  //   }
  //   return null; // default icon if no match
  // };

  return (
    <Card className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] md:min-h-[55vh] min-h-[50vh] flex flex-col items-center bg-[#3E3E3E] gap-4 rounded-3xl ring-4 ring-[#449E10]">
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
