"use client"
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  // Redirect to the homepage after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to the home page after 5 seconds
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg">You will receive your ticket via email shortly.</p>
        <p className="text-md mt-4 text-gray-500">Redirecting you to the homepage in 5 seconds...</p>
      </div>
    </div>
  );
};

export default page;
