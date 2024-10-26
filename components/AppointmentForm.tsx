"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { FaCircleArrowRight } from "react-icons/fa6";

type FormFields = {
  name: string;
  number: string;
  email: string;
  description: string;
};

const AppointmentForm = () => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key = process.env.NEXT_PUBLIC_USER_ID;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    emailjs
      .send(service!, template!, data, key)
      .then((response) => {
        reset();
        console.log("Form data:", data);
        toast.success("Form Submitted Successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Form Submission Failed!");
      });
  };

  return (
    <>
      <div className="bg-black md:p-8 rounded-xl shadow-md">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-500 bg-gray-800 text-white rounded-md"
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            type="text"
            placeholder="Email"
            className="p-2 border border-gray-500 bg-gray-800 text-white rounded-md"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}

          <input
            {...register("number", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            })}
            type="text"
            placeholder="Phone Number"
            className="p-2 border border-gray-500 bg-gray-800 text-white rounded-md"
          />
          {errors.number && (
            <div className="text-red-500">{errors.number.message}</div>
          )}

          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 5,
                message: "Description must be at least 5 characters long",
              },
            })}
            placeholder="Message"
            className="p-2 border border-gray-500 bg-gray-800 text-white rounded-md"
            rows={4}
          />
          {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
          )}

          <button
            type="submit"
            className="item-center justify-center h-[50px]  text-white hover:bg-[#63AB38] hover:text-black focus:ring-4 focus:outline-none focus:ring-green-300 outline outline-white font-medium rounded-3xl text-md md:text-xl md:px-8 px-6 py-4 text-center flex items-center md:gap-4 gap-3 group duration-300"
          >
            Submit
            <FaCircleArrowRight className="md:text-lg text-[#63AB38] group-hover:text-black" />
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default AppointmentForm;
