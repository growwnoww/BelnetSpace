import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { MovingBorderDemo } from "./MovingBorderDemo";
import { TextShimmerDemo } from "./TextShimmerDemo";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <TextShimmerDemo/>
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Belnet space<br />  Crafting Technology, Delivering Results.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Offering innovative IT solutions, including Web and mobile applications, API integration, SEO, and Blochain Development,Smart Contracts ,multimedia, tailored to meet your business needs.
        </p>
        <div className="w-full flex items-center justify-center mt-6">
        <MovingBorderDemo/>
        </div>
      </div>
    </div>
  );
}
