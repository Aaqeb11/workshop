import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const Learn = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <Card className=" lg:max-w-[30vw] md:max-w-[50vw] max-w-[85vw] min-h-[50vh] flex flex-col items-center bg-[#D9D9D9] gap-4 rounded-3xl ring-4 ring-[#449E10]">
      <CardHeader>
        <div className="bg-[#449E10] rounded-full h-10 w-10 flex items-center justify-center">
          <div className="bg-white h-5 w-5"></div>
        </div>
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
