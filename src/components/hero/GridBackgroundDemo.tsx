import React from "react";
import { AnimatedListDemo } from "./AnimatedListDemo";

export function GridBackgroundDemo() {
  return (
    <div className="h-[30rem] w-full bg-black   bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="mt-44 z-30">
        <p className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">What We Do?</p>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <AnimatedListDemo/>
     
    </div>
  );
}
