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
          Forget rigid drills and stuffy classrooms. Around here, we believe
          learning music should feel like hanging out in your favorite record
          store. Whether you are picking up a guitar for the first time or
          figuring out a drum beat, we focus on real music, raw expression, and
          the songs you actually love.
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
