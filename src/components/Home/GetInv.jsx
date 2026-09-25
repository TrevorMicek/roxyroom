import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { FadeIn } from "../FadeIn";

export default function Example() {
  const [schedule, setSchedule] = useState(false);
  return (
    <div
      className="bg-indigo-50"
      style={{
        gridColumn: "span 7",
        gridRowStart: "third",
        gridRowEnd: "span 7",
      }}
    >
      <div className="pt-4 pt-10 max-w-7xl mx-auto  px-4 sm:px-6 .5xl:py-24 .5xl:px-8 .5xl:flex .5xl:items-center .5xl:justify-between .5xl:w-[800px]">
        <FadeIn x={-24}>
          <h2 className="text-3xl font-mont font-medium tracking-tight text-gray-900 md:text-4xl .5xl:text-4xl">
            <span className="block">Ready to rock?</span>
            {schedule ? (
              <InlineWidget url="https://calendly.com/webdevtrevor/30min" />
            ) : (
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -50px" }}
                duration={0.75}
                x={-24}
              >
                <div className="mt-8  lg:mt-0 lg:flex-shrink-0">
                  <div className="mx-auto">
                    <button
                      className=" inline-flex items-center justify-center px-12 py-4 border-2 border-gold text-base font-medium rounded-md text-gold bg-[#1A1A1A] hover:bg-gray-800 .5xl:text-lg .5xl:px-7"
                      onClick={() => setSchedule(true)}
                    >
                      Schedule a free session
                    </button>
                  </div>
                </div>
              </FadeIn>
            )}
          </h2>
        </FadeIn>
      </div>
    </div>
  );
}
