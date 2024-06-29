"use client"
import React from "react";
import { Meteors } from "../../../components/ui/meteor";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

export default function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <p className="font-bold text-white text-5xl text-center">
            Hello Sujal
        </p>
      <MeteorsDemo></MeteorsDemo>
        
      </div>
      <div className=" w-96 text-white">
      <CardHoverEffect />
      </div>
    </div>
  );
}


export function MeteorsDemo() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Your Information
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Height: 169 cm 
            Age: 19
            Weight: 71 kg
          </p>
          <p className="font-normal text-center text-slate-500 mb-4 relative z-50">
            bmi: 24.9
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Update
          </button>
        
          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>

      </div>
    </div>
  );
}

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Wedgie Smoothie",
    description:
      "Spinach, Banana, Almond milk",
    link: "/",
  },
  {
    title: "Quinoa salad",
    description:
      "Quinoa, tomatoes, avocado, olive oil",
    link: "/",
  },
  {
    title: "Stir fried vegetables",
    description:
      "Broculli, carrots, tofu, coconut.",
    link: "/",
  },
  
];

