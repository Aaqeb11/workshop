import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const Attend = ({
  heading,
  content,

}: {
  heading: string;
  content: string;

}) => {
  return (
    <Card className="lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] min-h-[50vh] flex flex-col items-center bg-[#3E3E3E] gap-4 rounded-3xl ring-4 ring-[#449E10]">
      <CardHeader>
        <div className="bg-[#449E10] rounded-full h-10 w-10 flex items-center justify-center">
          
        </div>
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
