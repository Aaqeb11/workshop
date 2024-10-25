"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

const Page = () => {
  const router = useRouter();

  // Redirect to the homepage after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // Redirect to the home page after 5 seconds
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#63AB38] via-white to-[#63AB38]">
      <div className="relative bg-white p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-glow">
        <div className="flex justify-center mb-6">
          {/* Updated icon size and padding */}
          <FaCheckCircle className="text-[#63AB38] text-6xl  p-2" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#63AB38] mb-4 text-center">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Your ticket will be sent to your email shortly.
        </p>
        <p className="text-sm mt-4 text-gray-500 text-center">
          Redirecting to the homepage in 5 seconds...
        </p>

        {/* Glowing animation circles */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#63AB38] opacity-20 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default Page;
