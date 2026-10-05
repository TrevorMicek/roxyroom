import React, { useState } from "react";

import { InlineWidget } from "react-calendly";
import { FadeIn } from "./FadeIn";

import band from "../images/The Roxy Room Panaorama.jpg";
export default function Example() {
  const [schedule, setSchedule] = useState(false);
  return (
    <div
      className="bg-cream"
      style={{
        gridColumn: "span 7",
        gridRowStart: "third",
        gridRowEnd: "span 7",
      }}
    >
      <div className="pt-4 max-w-7xl mx-auto py-12 px-4 sm:px-6 .5xl:py-24 .5xl:px-8 .5xl:flex .5xl:items-center .5xl:justify-between .5xl:w-[800px]">
        <FadeIn x={-24}>
          <h2 className="mt-2 relative z-10 max-w-3xl text-3.5xl font-default font-[400] tracking-tight text-gold .5xl:text-4xl">
            Scott & His Music
          </h2>
        </FadeIn>
        <p className="mt-4 relative z-10 max-w-2xl text-lg text-gray-600 .5xl:text-1.5xl">
          Scott is the driving force behind The Roxy Room Music Company,
          bringing a deeply authentic, community-first approach to music
          education. Ditching rigid, stuffy classroom drills for a vibe that
          feels more like hanging out in your favorite local record store, he
          focuses on real music, raw expression, and the songs you actually
          love.
        </p>
        <p className="mt-4 relative z-10 max-w-2xl text-lg text-gray-500 .5xl:text-1.5xl">
          With a passion for expanding musical horizons, Scott specializes in
          world music styles and deep-dive musicianship, helping students
          connect with global sounds while building their own creative voice.
        </p>
        <FadeIn
          viewport={{ once: true, margin: "0px 0px -50px" }}
          duration={0.75}
          x={-24}
        >
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                className="font-default inline-flex items-center justify-center px-10 py-3 text-lg font-medium rounded-md text-gray-700 bg-gradient-to-tr from-gold via-[#FFECA0] to-gold hover:bg-gray-800 hover:scale-[1.04] .5xl:text-lg .5xl:px-7"
                onClick={() => setSchedule(true)}
              >
                Learn More
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
